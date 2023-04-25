import { useRef } from "react";


const HookUseRef = () => {
    //* en primera instancia este ref entrega un objeto que tendra la propiedad
    //* de current pero esta va a tener un valor nulo pero luego que le asignemos
    //* esta conta de referencia a nuestro elemento JSX podremos acceder a ese elemnto
    //* prodemos acceder las dimenciones acceder a focus etc.
    const ref = useRef()
    const inputRef = useRef()

    const click = () => {
        //* a travez del useRef podemos accecer a los elemntos del DOM a su altura, a la posision de lo elementos, al foco
        console.log(ref.current.clientHeight);
        ref.current.innerHTML = 'Puedo cambiar el texto con la ref.current'
    }

    const focus = () => {
        inputRef.current.focus()
    }

    return (
        <>
            <h1 ref={ref}> Hook Ref</h1>

            <div>
                <input ref={inputRef}/>
            </div>
            <div>
                <button onClick={focus}>Focus</button>
            </div>
            <div>
                <button onClick={click}>Presionepara cambiar texto</button>
            </div>

        </>
    )
}

export default HookUseRef
