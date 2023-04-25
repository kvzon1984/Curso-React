import { useFormik } from 'formik'

const validate = (values) => {
    const errors = {}

    if(!values.name) {
        errors.name = 'Requerido'
    } else if (values.name.length < 3) {
        errors.name = 'El nombre es muy corto'
    }

    if(!values.lastname) {
        errors.lastname = 'Requerido'
    } else if (values.lastname.length < 3) {
        errors.lastname = 'El apellido es muy corto'
    }

    if(!values.email) {
        errors.email = 'Requerido'
    } else if (values.email.length < 3) {
        errors.email = 'El email es muy corto'
    }

    return errors
}

const FormikUsandoHooks = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            lastname: '',
            email: ''
        },
        validate,
        onSubmit: values => console.log(values)
    })

    return(
        <>
            <h1>Formik Usando Hooks</h1>
            <form onSubmit={formik.handleSubmit}>
                <label>Nombre</label>
                <input
                    type='text'
                    //! onBlur es para validar si el foco esta o no en la propiedad asi validamos el validate
                    //! formik.getFieldProps nos entrega un objeto que contiene la propiedad de name, onChange, onBlur, value
                    { ... formik.getFieldProps('name')}
                />
                {formik.touched.name && formik.errors.name ? <p>{formik.errors.name}</p> : null}
                <br/>
                <label>Apellido</label>
                <input
                    { ... formik.getFieldProps('lastname')}
                    type='text'
                />
                {formik.touched.lastname && formik.errors.lastname ? <p>{formik.errors.lastname}</p> : null}
                <br/>
                <label>email</label>
                <input
                    type='email'
                    { ... formik.getFieldProps('email')}
                />
                {formik.touched.email && formik.errors.email ? <p>{formik.errors.email}</p> : null}
                <br/>
                <button type='submit'>Enviar</button>
            </form>
        </>
    )
}

export default FormikUsandoHooks