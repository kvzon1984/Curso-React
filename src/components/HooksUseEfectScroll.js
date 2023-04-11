import React, {useState, useEffect} from 'react';

export default function HooksScroll(){
    const [scrollY, setScrollY] = useState(0)

    useEffect(() => {
        console.log("Moviendo el scroll");
        const detectarScroll = ()=> setScrollY(window.pageYOffset)
        window.addEventListener("scroll", detectarScroll)
        
    },[scrollY])

    useEffect(() => {
        console.log("Fase de Montaje");
        
    },[])

    useEffect(() => {
        console.log("Fase de Actualizacion");
        
    })
    useEffect(() => {
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