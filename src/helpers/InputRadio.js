import { useField } from "formik"

const InputRadio = ({ label, ...props}) => {

    const [ field ] = useField({...props, type:'radio'})

    // console.log({field, meta});
    return(
        <div>
            <label>{label}</label>
            <input type="radio" {...field} {...props}/>
            {/* {children} */}
        </div>
    )
}

export default InputRadio