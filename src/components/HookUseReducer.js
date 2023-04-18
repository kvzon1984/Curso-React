import { useReducer, useState } from "react";

// const state = { contador : 0 }

// Debemos ocupar una funcion similar al metodo de reduce que recibe un acomulador y el elemento
// const reducer = (acc, el) => {return newAcc}

//Action siempre va a ser una propiedad string y otro parametro opcional payload que puede recibir lo que sea
// action = { type: string, payload: any } *

const inicialState = { contador: 0 }

const reducer = (state, action) => {
    switch (action.type) {
        case 'incrementar':
            return { contador: state.contador + 1 }
        case 'decrementar':
            return { contador: state.contador - 1 }
        case 'set':
            return { contador: action.payload}
        default:
            return state
    }
}

const HookUseReducer = () => {
    const [ state, dispatch ] = useReducer(reducer, inicialState)
    const [ valor, setValor ] = useState(0)
    return (
        <>
            <h1> Hook Reducer</h1>
            <p>Contador : {state.contador}</p>
            <div>
                <input valor={valor} onChange={e => setValor(e.target.value) }/>
            </div>
            <button onClick={() => {dispatch({ type: 'incrementar' })}}>Más</button>
            <button onClick={() => {dispatch({ type: 'decrementar' })}}>Menos</button>
            <button onClick={() => {dispatch({ type: 'set', payload: valor })}}>Set</button>
        </>
    )
}

export default HookUseReducer