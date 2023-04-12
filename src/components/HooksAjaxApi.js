import React, {useEffect, useState} from 'react';

function Pokemon({avatar, name}) {
    return(
        <figure>
            <img src={avatar} alt={name}/>
            <figcaption>{name}</figcaption>
        </figure>
    )
}

export default function HooksAjaxApi (){

    const [pokemons, setPokemons] = useState([])

    // useEffect(() => {
    //     let url = 'https://pokeapi.co/api/v2/pokemon/'
    //     fetch(url)
    //     .then(res => res.json())
    //     .then(json => {

    //         json.results.forEach(pokemon => {
    //             fetch(pokemon.url)
    //             .then(res => res.json())
    //             .then(json => {

    //                 let pokemon = {
    //                     id: json.id,
    //                     name: json.name,
    //                     avatar: json.sprites.front_default,
    //                 }
    //                 setPokemons((pokemons) => [...pokemons, pokemon])
    //             })
    //         });

    //     })
    // }, [])

    useEffect(() => {
        const getPokemons = async (url) => {
            let res = await fetch(url),
            json = await res.json()

            json.results.forEach(async(poke) => {
                let res = await fetch(poke.url),
                json = await res.json()
                
                let pokemon = {
                    id: json.id,
                    name: json.name,
                    avatar: json.sprites.front_default,
                }
                setPokemons((pokemons) => [...pokemons, pokemon])
            })
        

        }

        getPokemons('https://pokeapi.co/api/v2/pokemon/')
    }, [])

    return(
        <>
            <h2>Hooks Peticiones Ajax Apis</h2>
            { pokemons.length === 0 ? (<h3>Cargando...</h3>)
            : (pokemons.map(pokemon => (
                <Pokemon key={pokemon.id} name={pokemon.name} avatar={pokemon.avatar}/>
            )))}
        </>
    )
}