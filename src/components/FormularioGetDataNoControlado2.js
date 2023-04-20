import { useRef } from "react"
const ComponenteNoControladosFrom2 = () => {

    const inputUsername = useRef()
    const inputAge = useRef()
    const inputFile = useRef()

    const submit = (e) => {
        console.log(inputUsername.current.value);
        console.log(inputAge.current.value);
        console.log(inputFile.current.files[0]);
        const form = new FormData()

        form.append('archivo', inputFile.current.files[0])
        form.append('username', inputUsername.current.value)
        form.append('age', inputAge.current.value)

        fetch('/prueba', {
            method: 'POST',
            body: form
        })

    }

    return (
        <>
            <h1>Componente no controlados formularios 2</h1>

            <div>
                <label>Usuario:
                    <input
                        ref={inputUsername}
                        type="text"
                        name="username"
                    />
                </label>
                <label>Edad:
                    <input
                        ref={inputAge}
                        type="number"
                        name="age"
                    />
                </label>
                <input
                    ref={inputFile}
                    type="file"
                    name="file"
                />
                <input type="submit"  value='Enviar' onClick={submit} />
            </div>

        </>
    )
}

export default ComponenteNoControladosFrom2