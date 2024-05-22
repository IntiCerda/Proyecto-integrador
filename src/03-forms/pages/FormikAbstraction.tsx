import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import { MyCheckbox, MyTextInput, MySelect } from '../components'

import '../styles/styles.css'



export const FormikAbstraction = () => {
    
    return (
        <div>
            <h1>Registro de Servicios</h1>

            <Formik
                initialValues={{
                    firstName: '',
                    lastName: '',
                    email: '',
                    terms: false,
                    jobType: ''
                }}
                onSubmit={ ( values ) => {
                    console.log( values )
                }}
                validationSchema={Yup.object({
                        firstName: Yup.string()
                                        .max(15, 'Debe de tener 15 caracteres o menos')
                                        .required('Requerido'),
                        lastName: Yup.string()
                                    .max(15, 'Debe de tener 15 caracteres o menos')
                                    .required('Requerido'),
                        email: Yup.string()
                                    .email('El correo no tiene un formato válido')
                                    .required('Requerido'),
                        terms: Yup.boolean()
                                    .oneOf([true], 'Debe de aceptar las condiciones'),
                        jobType: Yup.string()
                                    .notOneOf([ 'it-jr' ], 'Esta opción no es permitida.')
                                    .required('Requerido')
                    })
                }>

                    {(formik) => (
                            <Form>
                                <MyTextInput
                                  label="Nombre"
                                  name="firstName" 
                                  placeholder="Nombre"
                                />

                                <MyTextInput
                                  label="Apellido"
                                  name="lastName" 
                                  placeholder="Apellido"
                                />          

                                <MyTextInput
                                  label="Correo"
                                  name="email" 
                                  placeholder="nomb@gmail.com"
                                  type="email"
                                />                                

                                <MySelect label="Tipo de Servicio" name="jobType" >
                                    <option value="">Seleccione el Servicio</option>
                                    <option value="developer">Lavanderia</option>
                                    <option value="designer">Gasfiter</option>
                                    <option value="it-senior">Maestro chasquilla</option>
                                    <option value="it-jr">Veterinaria</option>
                                </MySelect>

                                <MyCheckbox label="Terminos y Condiciones." name="terms" />

                                <button type="submit">Siguiente</button>

                            </Form>
                        )
                    }
                

            </Formik>


            

        </div>
    )
}
