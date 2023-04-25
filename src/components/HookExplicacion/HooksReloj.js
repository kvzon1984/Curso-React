import React, {useEffect, useState} from 'react';

function Reloj({h}) {
    return <h3>{h}</h3>
}

export default function RelojHooks(){
    const [ hora, setHora ] = useState(new Date().toLocaleTimeString())
    const [ visible, setVisible ] = useState(false)

    useEffect(() => {
        let temporizador
        if (visible){
            temporizador = setInterval(()=>{
                setHora(new Date().toLocaleTimeString())
            },1000)
        } else{
            clearInterval(temporizador)
        } 

        return() => {
            console.log("Desmontaje");
            clearInterval(temporizador)
        }

    }, [visible])

    return (
        <>
            <h2>Reloj Hooks</h2>
            {visible && <Reloj h={hora}/>}
            <button onClick={() => setVisible(true)}>Iniciar</button>
            <button onClick={() => setVisible(false)}>Detener</button>
        </>
    )
}