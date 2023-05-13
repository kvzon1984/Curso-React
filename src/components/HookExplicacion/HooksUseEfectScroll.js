import React, {useState, useEffect} from 'react';

export default function HooksScroll(){
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        //! Al pasarle el parametro .[scrollY] hacemos que cada vez que esa variable tenga un cambio
        //! se ejecute el codigo dentro de la funcion

        // console.log("Moviendo el scroll");
        const detectarScroll = ()=> setScrollY(window.pageYOffset)
        window.addEventListener("scroll", detectarScroll)

        return () => window.removeEventListener("scroll", setScrollY)

    },[scrollY])

    useEffect(() => {
        //! Al dejarlo vacio o no incuir el .[] useEffect solo se ejecuta en la etapa de montaje 
        console.log("Fase de Montaje");
    },[])

    useEffect(() => {
        //! al no tener el segundo parametro .[] el useEffect se va a comoportar como un 
        //! moutedDidUpdate cada vez que se renderiza ejecutara el codigo dentro de la funcion

        // console.log("Fase de Actualizacion");
    })

    useEffect(() => {
        //! Al hacer que el useEffect retorne una funcion ( return () => {} ) le digo a React que lo que
        //! quiero es que se comporte com fase de desmontaje
        return () => {
            console.log("Fase de Desmontaje");
        }
    })

    return (
        <>
            <h2> Hooks useEffect Ciclo de Vida </h2>
            <p> Scroll del navegador en {scrollY} px</p>
        </>
    )
}