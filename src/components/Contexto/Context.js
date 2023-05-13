import { createContext, useContext } from "react"

const ContextDefault = createContext('Valor por defecto')
const Context2 = createContext('Valor por defecto sin Provider')

// un provider es el encargado de pasar el contexto a los componentes hijos

const DefaultProvider = ({ children}) => {
    return(
        <ContextDefault.Provider value="Mi valor">
            {children}
        </ContextDefault.Provider>
    )
}

const Contenido = () => {
    const ctx = useContext(ContextDefault)
    return(
        <div>
            {ctx}
        </div>
    )
}

const Contenido2 = () => {
    const ctx = useContext(Context2)
    return(
        <div>
            {ctx}
        </div>
    )
}

const Content = () => {
    return(
        <>
            <h1>Trabajando con Content</h1>
            <p>Context es una forma de pasar propiedades en un arbol de componentes de arriba hacia abajo,
                sin tener que pasar las propiedades por cada uno de los componentes</p>

            <DefaultProvider>
                <Contenido/>
                <Contenido2/>
            </DefaultProvider>
        </>
    )
}

export default Content