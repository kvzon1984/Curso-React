import { createContext, useContext, useState } from "react";


const Context = createContext({ value: false, toggle: () => {} })

const Provider = ({children}) => {

    const [ valor, setValor ] = useState(false)

    const value = {
        valor,
        toggle: () => setValor(!valor)
    }
    return(
        <Context.Provider value={value}>
            {children}
        </Context.Provider>
    )
}

const Contenido = () => {
    const { valor, toggle } = useContext(Context)
    return(
        <>
            <div>{valor.toString()}</div>
            <button onClick={toggle}>Cambiar estado de valor</button>
        </>
    )
}


const ActualizandoContext = () => {
    return(
        <>
            <Provider>
                <h1>Actualizando Context</h1>
                <Contenido/>
            </Provider>
        </>
    )
}

export default ActualizandoContext