import { createStore } from 'redux'

const store = createStore((state = 0, action) => { //? esta funcion es conocida como reducer ya que se parece al metodo de reducer (acc, elemento)
    //! action = { type: 'tipo de accion', playload: any} payload es opcional ACTION ES UN OBJETO QUE TIENE ESTOS ELEMENTOS

    switch (action.type) {
        case 'accion':
            return action.payload
    }

    // console.log( { state, action })

    //! esta funcion siempre debe retornar un state
    return state

})

console.log({ store })
console.log('getState', store.getState())

store.dispatch({ type: 'accion', payload: 2 })
console.log(store.getState());
store.dispatch({ type: 'accionIndefinida', payload: 15 })
console.log(store.getState())

const Redux = () => {
    return (
        <>
            <h1> Trabajando con Redux </h1>
        </>
    )
}

export default Redux