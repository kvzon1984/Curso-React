import { Routes, Route, useParams, Outlet, Link, Navigate, useNavigate, useLocation } from 'react-router-dom'
import { NavLink } from './NavLink'
import { useAuth } from './UseAuth'
import Button from '../../helpers/Button'

const SearchSucursal = () => {
    const sucursales = [
        'Arica',
        'Santiago',
        'Valdivia',
        'Puerto Montt'
    ]

    return (
        <div>
            <h1>
                Buscando Sucursales
            </h1>
            <ul>
                {sucursales.map(sucursal => (
                    <li key={sucursal}><NavLink to={`/sucursales/${sucursal}`}>{ sucursal }</NavLink></li>
                ))}
            </ul>
            <Logout />
        </div>
    )
}

const Sucursal = () => {
    const {sucursal} = useParams()
    return (
        <div>
            {sucursal}
            <br/>
            <Link to={'detalle-sucursal'}>Ir al detalle de la sucursal</Link>
            <Outlet />
        </div>
    )
}

const SucursalIndex = () => {
    return (
        <div>
            <h1>Index sucursal</h1>
        </div>
    )
}

const DetalleSucursal = () => {
    const { sucursal } = useParams()
    console.log(2 + 2);

    return (
        <div>
            <h1>
                Detalle Sucursal de {sucursal}
            </h1>
        </div>
    )
}

const Menu = () => {
    return (
        <nav>
            <ul>
                <li >
                    <NavLink to="/" > Inicio </NavLink>
                </li>
                <li >
                    <NavLink to="/portafolio" > Portafolio </NavLink>
                </li>
                <li>
                    <Link to="/sucursales" > Sucursales </Link>
                </li>
            </ul>
        </nav>
    );
}

const Inicio = () => {
    return (
        <h1 > Inicio </h1>
    )
}

const Proyecto1 = () => {
    return (
        <h2> Proyecto 1 </h2>
    )
}

const Proyecto2 = () => {
    return (
        <h2> Proyecto 2 </h2>
    )
}

const Portafolio = () => {
    return (
        <div>
            <h1> Portafolio </h1>
            <ul>
                <li>
                    <Link to = { '/portafolio/proyecto1' } > Proyecto 1 </Link>
                </li>
                <li>
                    <Link to = { '/portafolio/proyecto2' } > Proyecto 2 </Link>
                </li>
            </ul>
            <div>
            <section>
                <Routes>
                    {/* Route es a la cual le decimos cual es el path en que tiene que renderizar un elemento */}
                    <Route exact path = "/proyecto1" element = { < Proyecto1 / > }/>
                    <Route exact path = "/proyecto2" element = { < Proyecto2 / > }/>
                </Routes>
            </section>
            </div>
        </div>
    )
}

const ProtectedRoute = ({ children }) => {
    const { isAuthenticated } = useAuth()
    const location = useLocation()

    if (!isAuthenticated) {
        return <Navigate to='/login' state={{ location }} />
    }
    return children
}

const Login = () => {
    const { login } = useAuth()
    const navigate = useNavigate()
    const { state } = useLocation()

    console.log(state.location.pathname);

    const handleClick = () => {
        login()
        // navigate('/sucursales')
        navigate(state?.location?.pathname ?? '/')
    }

    return (
        <Button onClick= {handleClick}>
            Login
        </Button>
    )
}

const Logout = () => {
    const { logout } = useAuth()
    const navigate = useNavigate()

    const handleClick = () => {
        logout()
        navigate('/')
    }

    return (
        <Button onClick= {handleClick}>
            Logout
        </Button>
    )
}

const Error = () => {
    return (
        <div>
            <h1> Error 404: Ruta no existe </h1>
        </div>
    )
}

const ReactRouter = () => {
    return (
        <div>
            <h1>Trabajando con React Router</h1>
            <Menu />
            <section>
                <Routes>
                    <Route path="/" element={<Inicio />} />
                    <Route path="/portafolio/*" element={<Portafolio />} />
                    <Route path='/login' element={<Login/>} />
                    <Route path="/sucursales" element={<ProtectedRoute><SearchSucursal /></ProtectedRoute>} />
                    <Route path="/sucursales/:sucursal" element={<ProtectedRoute><Sucursal /></ProtectedRoute>}>
                        <Route index element={<SucursalIndex />} />
                        <Route path="detalle-sucursal" element={<DetalleSucursal />}/>
                    </Route>
                    <Route path="*" element={< Error />} />
                </Routes>
            </section>
        </div>
    )
};

export default ReactRouter;