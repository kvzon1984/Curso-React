import React from 'react';
import '../helpers/miCss.css'

//* Inline Style

const estilo2 = {
    boxShadow: '0 5px 3px rgba(0,0,0,0.5)' 
}

const estilo = ({bg = '#255', color = '#fff'}) => ({
    backgroundColor : bg,
    color: color,
    padding: '15px 15px',
    margin: '15px 15px',
})

export default function Style() {


return (
    <>
        <h2 style={estilo({color: '#000'})}>Style</h2>
        <p style={estilo({bg: '#765'})}>Parrafo 1</p>
        <p style={estilo({bg: '#258'})}>parrafo 2</p>
        <p style={{...estilo2, ...estilo({bg: '#951'})}}>parrafo 3</p>
        <p className='mi-estilo'>parrafo 4</p>
    </>
)
}