import React, {Component} from "react";

function Pokemon(props) {
    return(
        <figure>
            <img src={props.avatar} alt={props.name}/>
            <figcaption>{props.name}</figcaption>
        </figure>
    )
}

export default class AjaxApis extends Component {

    // constructor(props) {
    //     super(props)
    // }

    state = {
        pokemons: []
    }
    // En el componentDidMount es donde se realizan las peticiones fetch o axios 
    componentDidMount() {
        let url = 'https://pokeapi.co/api/v2/pokemon/'
        fetch(url)
        .then(res => res.json())
        .then(json => {

            json.results.forEach(pokemon => {
                fetch(pokemon.url)
                .then(res => res.json())
                .then(json => {
                    
                    let pokemon = {
                        id: json.id,
                        name: json.name,
                        avatar: json.sprites.front_default,
                    }
                    // console.log(pokemon);

                    let pokemons = [...this.state.pokemons, pokemon]

                    this.setState({pokemons})
                })
            });

        })
    }

    render() {
        return(
            <>
                <h2>Ajax Apis</h2>
                { this.state.pokemons.length === 0 ? (<h3>Cargando...</h3>)
                : (this.state.pokemons.map(pokemon => (
                    <Pokemon key={pokemon.id} name={pokemon.name} avatar={pokemon.avatar}/>
                )))}
            </>
        )
    }
    
}

