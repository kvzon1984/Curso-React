const ComponenteNoControladosFrom = () => {

    const submit = (e) => {
        e.preventDefault()
        const data = Array.from(new FormData(e.target))// Array.from toma los campor del formulario y crea un array
        console.log(Object.fromEntries(data)); // Object.fromEntries crea un objeto a partir de un Array
        const { username, age } = Object.fromEntries(data)
        console.log(username);
        console.log(age);
    }

    return (
        <>
            <h1>Componente no controlados formularios</h1>

            <form onSubmit={submit}>
                <label>Usuario:
                    <input
                        type="text"
                        name="username"
                    />
                </label>
                <label>Edad:
                    <input
                        type="number"
                        name="age"
                    />
                </label>
                    <input type="submit" value='Enviar' />
            </form>

        </>
    )
}

export default ComponenteNoControladosFrom