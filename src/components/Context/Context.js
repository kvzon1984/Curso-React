import { createContext, useContext } from "react"

const Context = createContext('Valor por defecto')

const Content = () => {
    return(
        <>
            <h1>Trabajando con Content</h1>
            <p>Context es una forma de pasar propiedades en un arbol de componentes de arriba hacia abajo,
                sin tener que pasar las propiedades por cada uno de los componentes</p>
        </>
    )
}

export default Content