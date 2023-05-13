import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//! para inplementar redux con react ver el archivo index.js creamos es estado con createState y 
//! le pasamos este reducer que exportamos de este archivo luego instalamos la libreria de react-redux 
//! para importar Provider y es ahi donde pasamos el estado a APP

export const reducer = (state = 0, action) => {
    switch (action.type){
        case 'incrementar':
            return state + 1
        case 'decrementar':
            return state - 1
        case 'set':
            return action.payload
        default:
            return state
    }

}

const IntegrandoReduxReact = () => {
    const [ valor, setValor ] = useState('')
    const dispatch = useDispatch()
    const state = useSelector(state => state)
    const set = () => {
        dispatch( {type: 'set', payload: valor} )
        setValor('')

    }
    return(
        <>
            <h1>Integrando Redux a React</h1>
            <h1>Contador = {state} </h1>
            <button onClick={() => dispatch( {type: 'incrementar'} )}>Incrementar</button>
            <button onClick={() => dispatch( {type: 'decrementar'} )}>Decrementar</button>
            <button onClick={set}>Set</button>
            <input value={valor} onChange={e => setValor(Number(e.target.value))}/>
        </>
    )
}

export default IntegrandoReduxReact