import { useField } from "formik"

const TextInput = ({ label, ...props}) => {
    const [ field, meta ] = useField(props)

    // console.log({field, meta});
    return(
        <div>
            <label>{label}</label>
            <input {...field}/>
            {meta.touched && meta.error ? <p>{meta.error}</p> : null}
        </div>
    )
}

export default TextInput