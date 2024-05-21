import { Formik, Form } from 'formik'
import formJson from '../data/custom-form.json'
import { MyTextInput } from '../components'

{/* console-log(formJson)   ver en consola lo que muestra el json*/}

const initialValues: {[key: string]:  any } = {};
for (const input of formJson) {
    initialValues[ input.name ] = input.value
}


export const DynamicForm = () => {
    return (
        <div>
            <h1>Comentario</h1>

            <Formik
                initialValues={ initialValues }
                onSubmit={ (values) => {
                    console.log(values)
                }}
            >
                { (formik) => (
                    <Form noValidate>
                        { formJson.map(({ type, name, placeholder, label }) => {
                            return <MyTextInput 
                                        key={ name }
                                        type={(type as any)} 
                                        name={name} 
                                        label={label} 
                                        placeholder={placeholder}/>
                        })}

                    <button type="submit"> Enviar </button>
                     </Form>
                )}


            </Formik>


        </div>
    )
}