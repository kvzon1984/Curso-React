import React, {Component} from "react";
import data from '../helpers/data.json'

function ElementoLista(props){
    return (
        <li>
            {/* rel="noreferrer" Evita que aparezca un WARNING de eslint*/}
            <a href={props.propiedad.web} target="_blank" rel="noreferrer"> 
                {props.propiedad.name}
            </a>
        </li>
    )
}
export default class RenderizadoElementos extends Component {
    constructor(props){
        super(props)
        this.state={
            seasons: ['Primavera', 'Verano', 'Otoño', 'Invierno']
        }
    }
    render(){
        console.log(data);
        return(
            <div>
                <h2>Renderizado de Elementos</h2>
                <h3>Estacionesd de Año</h3>
                <ul>
                    {this.state.seasons.map((el, index) => <li key={index}>{el}</li>)}
                </ul>
                <h3>Frameworks Frontend JS</h3>
                <ul>
                    {data.freameworks.map((el) => (
                        <ElementoLista key={el.id} propiedad={el} />
                    ))}
                </ul>
            </div>
        )
    }
}