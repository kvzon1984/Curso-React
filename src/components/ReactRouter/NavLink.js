import { NavLink as NavLinkReactRouter} from "react-router-dom"


export const NavLink = ({ to, children, ...props }) => {
    return (
        <NavLinkReactRouter
            className={({ isActive }) => isActive ? 'is-active' : undefined }
            to={to}> {children}
        </NavLinkReactRouter>
    )
}