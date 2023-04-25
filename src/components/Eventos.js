import React, {Component} from "react";

export class EventosES6 extends Component {
    constructor(props){
        super(props)
        this.state={
            contador:0
        }

        //* Realizo el bindeo o la union del this con las funciones sumar y restar de la clase.
        this.sumar = this.sumar.bind(this)
        this.restar = this.restar.bind(this)
    }

    sumar(e){
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar(e){
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en Compnente de Clases ES6</h2>
                <nav>
                    <button onClick={this.sumar} type="">+</button>
                    <button onClick={this.restar} type="">-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

//* Properties Initializer
export class EventosES7 extends Component {
    //* Estado
    state={
        contador:0
    } 
    
    //* Arrow functions para definir los eventos
    sumar = (e) => {
        this.setState({
            contador: this.state.contador + 1
        })
    }
    restar = (e) => {
        this.setState({
            contador: this.state.contador - 1
        })
    }

    render() {
        return (
            <div>
                <h2>Eventos en Compnente de Clases ES7</h2>
                <nav>
                    <button onClick={this.sumar} type="">+</button>
                    <button onClick={this.restar} type="">-</button>
                </nav>
                <h3>{this.state.contador}</h3>
            </div>
        )
    }
}

function Boton(props) {
    return(
        <button onClick={props.myOnClick}>
            Boton hecho Componente
        </button>
    )
}

//! https://es.reactjs.org/docs/events.html
export class MasSobreEventos extends Component {
    handleClick = (e, mensaje) => {
        console.log(e);
        console.log(e.target);
        console.log(e.nativeEvent);
        console.log(e.nativeEvent.target);
        console.log(mensaje);
    }
    render() {
        return(
            <div>
                <h2>Mas Sobre Eventos</h2>
                {/* <button onClick={this.handleClick}>Saludar</button> */}

                {/* Paso de Propiedades en el evento */}
                <button onClick={(e) => {
                                    this.handleClick(e, "Pasando parametros en un evento")
                                }
                        }
                >
                    Saludar
                </button>
                {/* Evento Personalizado */}
                {/* <Boton onClick={(e) => {
                                    this.handleClick(e, "Pasando parametros en un evento")
                                }
                        }
                /> */}
                <Boton myOnClick={(e) => {
                                    this.handleClick(e, "Pasando parametros en un evento personalizado")
                                }
                        }
                />
            </div>
        )
    }
}