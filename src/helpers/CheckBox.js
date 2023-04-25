import { useField } from "formik"

const CheckBox = ({ label, ...props}) => {

    const [ field, meta ] = useField({...props, type:'checkbox'})

    // console.log({field, meta});
    return(
        <div>
            <label>{label}</label>
            <input type="checkbox" {...field} {...props}/>
            {/* {children} */}
            {meta.touched && meta.error ? <p>{meta.error}</p> : null}
        </div>
    )
}

export default CheckBox