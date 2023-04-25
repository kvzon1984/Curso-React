import { useField } from "formik"

const InputSelect = ({ label, ...props}) => {
    const [ field, meta ] = useField(props)

    // console.log({field, meta});
    return(
        <div>
            <label>{label}</label>
            <select {...field} {...props}/>
            {meta.touched && meta.error ? <p>{meta.error}</p> : null}
        </div>
    )
}

export default InputSelect