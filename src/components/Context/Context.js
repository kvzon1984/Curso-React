import { createContext, useContext } from "react"

//! El createContext puede recibir cualquier parametro desde un arreglo, objeto un numero
const ContextDefault = createContext('Valor por defecto')
const Context2 = createContext('Valor por defecto 2')


//! El provider es el encargado de pasar el context hacia abajo a los componentes hijos
const DefaultProvider = ({ children }) => {
    return(
        <ContextDefault.Provider value={"mi valor"}>
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
            <DefaultProvider>
                <Contenido/>
                <Contenido2/>
            </DefaultProvider>
        </>
    )
}

export default Content