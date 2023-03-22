import React from "react";
import PropType from "prop-types";

//Al no ser una Clase 'class' no es nesesario el this.props

export default function Propiedades (props){
    return(
        <div>
            <h2>
                {props.porDefecto}
            </h2>
            <ul>
                <li>{props.cadena}</li>
                <li>{props.numero}</li>
                <li>{props.boolean ? 'viene true' : 'viene falso'}</li>
                <li>{props.arreglo.join(', ')}</li>
                <li>{props.objeto.nombre} - {props.objeto.edad} - {props.objeto.nacionalidad}</li>
                <li>{props.elementoReact}</li>
                <li>{props.arreglo.map(props.funcion).join(', ')}</li>
                <li>{props.componenteReact}</li>
            </ul>
        </div>
    )
}
// Propiedades tiene un metodo llamando defaultProps y puedo crear propiedades
// para pasar dentro del componente, no desde afuera
Propiedades.defaultProps = {
    porDefecto: 'Propiedad default'
}

Propiedades.propTypes = {
    numero: PropType.number.isRequired
}