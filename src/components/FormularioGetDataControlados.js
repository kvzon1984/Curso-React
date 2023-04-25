import { useState } from "react"
import BasicAlertsError from "../helpers/AlertError"

const ComponentesControladosFrom = () => {

    //* UN SOLO CAMPO EN EL FORMULARIO
    // const [ value, setValue ] = useState('')

    // const handleChange = (e) => {
    //     setValue(e.target.value)
    // }

    //* MAS DE UN CAMPO EN EL FORMULARIO

    const [ valor, setValor ] = useState({ 
        nombre: 'Ingrese Nombre',
        edad: '',
        select: '',
        check: false,
        estadoRadio: 'feliz'
    })

    const handleChange = ({ target }) => {
        // console.log('*******',target.type, target.checked);
        // setValor({
        //     ...valor,
        //     [e.target.name]: e.target.value
        // })
        setValor((state) =>(
            {
                ...state,
                [target.name]: target.type === 'checkbox' ? target.checked : target.value
            }
        ))
    }

    console.log(valor);

    return (
        <>
            <h1>Componentes controlados formularios</h1>

            <div>
                {/* UN SOLO CAMPO EN EL FORMULARIO */}
                {/* { value.length < 5 ? <BasicAlertsError/> : null}
                <label>Usuario:
                    <input
                        type="text"
                        name="nombre"
                        value={value}
                        onChange={handleChange}
                    />
                </label>

                <input type="submit" value='Enviar' /> */}

                {/* MAS DE UN CAMPO EN EL FORMULARIO */}

                { valor.length < 5 ? <BasicAlertsError/> : null}
                <label>Usuario:
                    <input
                        type="text"
                        name="nombre"
                        value={valor.nombre}
                        onChange={handleChange}
                    />
                </label>
                <label>Edad:
                    <input
                        type="text"
                        name="edad"
                        value={valor.edad}
                        onChange={handleChange}
                    />
                </label>
                <label>Selector:
                    <select value={valor.select} name="select" onChange={handleChange}>
                        <option value=''>--Seleccione--</option>
                        <option value='Santiago'>Santiago</option>
                        <option value='Valdivia'>Valdivia</option>
                        <option value='Puerto Montt'>Puerto Montt</option>
                        <option value='Arica'>Arica</option>
                    </select>
                </label>
                <label>CheckBox:
                    <input type="checkbox" checked={valor.check} name="check" onChange={handleChange}>
                    </input>
                </label>
                {/* Opcion 1 de radio button */}
                {/* <div onChange={handleChange}>
                    <label>RadioButton:
                        <input type="radio" value='feliz' name="estadoRadio"/> Feliz
                        <input type="radio" value='triste' name="estadoRadio"/> Triste
                        <input type="radio" value='enojado' name="estadoRadio"/> Enojado
                    </label>
                </div> */}
                {/*Opcion 2 de radio button */}
                <div>
                    <label>RadioButton:
                        <input
                            onChange={handleChange}
                            checked = {valor.estadoRadio === 'feliz'}
                            type="radio"
                            value='feliz'
                            name="estadoRadio"
                            /> Feliz
                        <input
                            onChange={handleChange}
                            checked = {valor.estadoRadio === 'triste'}
                            type="radio"
                            value='triste'
                            name="estadoRadio"
                            /> Triste
                        <input
                            onChange={handleChange}
                            checked = {valor.estadoRadio === 'enojado'}
                            type="radio"
                            value='enojado'
                            name="estadoRadio"
                            /> Enojado
                    </label>
                </div>
                <input type="submit" value='Enviar' />
            </div>

        </>
    )
}

export default ComponentesControladosFrom