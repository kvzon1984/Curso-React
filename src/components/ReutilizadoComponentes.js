import React from 'react';
import Button from '../helpers/Button';

export default function ReutilizandoComponentes () {
    return (
        <>
            <h1>Reutilizandio Componentes</h1>
            <Button onClick= {() => console.log('Clickeado')}>
                enviar
            </Button>
        </>
    )
}