import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'

//! para inplementar redux con react ver el archivo index.js creamos es estado con createState y 
//! le pasamos este reducer que exportamos de este archivo luego instalamos la libreria de react-redux 
//! para importar Provider y es ahi donde pasamos el estado a APP

export const reducer2 = (state = 0, action) => {
    return state
}

const ListaTareasReduxReact = () => {

    return(
        <>
            <h1>Lista Tareas</h1>
        </>
    )
}

export default ListaTareasReduxReact