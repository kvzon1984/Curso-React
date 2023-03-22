import React, { Component } from "react";

function EstadoAHijo(props){
    return(
        <div>
            <h3>{props.contadorHijo}</h3>
        </div>
    )
}

//Necesita el metodo render 
//y lo que renderice debe estar en un elemento

//El estado puede ir definido en el contructor

export default class Estado extends Component {
    constructor(props){
        super(props)
        this.state={
            contador:0
        }
        // setInterval(() => {
        //     this.setState({
        //         contador: this.state.contador + 1
        //     })
        // }, 1000)

    }

    render() {
        return (
            <div>
                <h2>El estado</h2>
                <p>{ this.state.contador}</p>
                <EstadoAHijo contadorHijo={this.state.contador}/>
            </div>
        )
    }
}