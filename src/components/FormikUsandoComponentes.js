import { Formik, Form, Field, ErrorMessage } from 'formik'
import TextInput from '../helpers/TextInput'
import CheckBox from '../helpers/CheckBox'
import InputSelect from '../helpers/InputSelect'
import InputRadio from '../helpers/InputRadio'

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

    if(!values.ciudad) {
        errors.ciudad = 'Requerido'
    }

    return errors
}

const FormikUsandoComponentes = () => {
    return(
        <>
            <h1>Formik Usando Componmentes</h1>

            <Formik
                initialValues= {{name: '', lastname: '', email: '', ciudad: '', estadoCivil: false, sexo: ''}}
                validate={validate}
                onSubmit= {values => console.log(values)}
            >

                <Form>
                    <TextInput name='name' label='Nombre' />
                    {/* <label>Nombre</label>
                    <Field name='name' type='text'/>
                    <ErrorMessage name='name'/> */}
                    <br/>
                    <TextInput name='lastname' label='Apellido' />
                    <br/>
                    <InputSelect name='ciudad' label='Ciudad'>
                        <option value=''>Elija una opcion</option>
                        <option value='valdivia'>Valdivia</option>
                        <option value='santiago'>Santiago</option>
                        <option value='rancagua'>Rancagua</option>
                    </InputSelect>
                    {/* <Field name='ciudad' as='select' className='inputSelet'>
                        <option value=''>Elija una opcion</option>
                        <option value='valdivia'>Valdivia</option>
                        <option value='santiago'>Santiago</option>
                        <option value='rancagua'>Rancagua</option>
                    </Field>
                    <ErrorMessage name='ciudad'/> */}
                    <br/>
                    <TextInput name='email' label='Correo Electronico' />
                    <br/>
                    <CheckBox name='estadoCivil' label='Estado Civil' />
                    <br/>
                    <InputRadio name='sexo' value='masculino' label='Masculino' />
                    <InputRadio name='sexo' value='femenino' label='Femenino' />
                    <br/>
                    <button type='submit'>Enviar</button>
                </Form>
                {/* {formik =>
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
                } */}
            </Formik>
        </>
    )
}

export default FormikUsandoComponentes