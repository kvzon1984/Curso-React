import React, {Component} from "react";

//* Sin la destruccturacion de Components para utilizarlo seria  React.Component
//* Necesita el metodo render y un return
//* y lo que renderice debe estar en un elemento

class ComponenteClass extends Component{
    render() {
        return <h2>{this.props.msg}</h2>
    }
}

export default ComponenteClass
