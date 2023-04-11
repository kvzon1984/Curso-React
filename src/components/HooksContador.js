import React, { useState } from 'react';

export default function HooksContador(props) {
    // console.log(useState());

    const [contador, setContador] = useState(25);

    const sumar = () => setContador(contador + 1)
    const restar = () => setContador(contador - 1)

    return (
        <>
        <h2>Hooks - useState</h2>
        <nav>
            <button onClick={sumar}>+</button>
            <button onClick={restar}>-</button>
        </nav>
        <p>Contador de {props.titulo}</p>
        <h3>{contador}</h3>
        </>
    )
}

HooksContador.defaultProps = {
    titulo: "Cliks",
}
