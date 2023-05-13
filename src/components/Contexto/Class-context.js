import { Component, createContext } from 'react'

const Context = createContext('mi valor')

const Provider = ({ children }) => {
  return (
    <Context.Provider value='otro valor'>
      {children}
    </Context.Provider>
  )
}

class Componente extends Component {
  //static contextType = Context // alternativa 1
  render() {
    console.log(this.context)
    return (
      <div>Hola mundo</div>
    )
  }
}

Componente.contextType = Context // alternativa 2

const UsarContextComponenteClase = () => {
  return (
    <Provider>
      <h1>Usar Context en componentes de clase</h1>
      <Componente />
      <Context.Consumer>
        {valor => <div>{valor}</div>}
      </Context.Consumer>
    </Provider>
  )
}

export default UsarContextComponenteClase
