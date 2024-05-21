import { Form, Formik } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';
import { MyTextInput } from '../components';

export const RegisterFormikPage = () => {


    return (
        <div>
            <h1>Registro de usuario</h1>

            <Formik
                initialValues={{
                    name: '',
                    email: '',
                    password1: '',
                    password2: ''
                }} 

                onSubmit={ ( values) => {
                    console.log(values)
                }}
                validationSchema={
                    Yup.object({
                        name: Yup.string()
                                        .min(2,'El nombre debe ser de 3 caracteres o mas')
                                        .max(15, 'El nombre debe ser menor de 15 caracteres')
                                        .required('Requerido'),
                        email: Yup.string()
                                        .email('Revise el formato del correo')
                                        .required('Requerido'),
                        password1: Yup.string()
                                        .min(6,'Minimo de 6 letras')
                                        .required('Requerido'),
                        password2: Yup.string()
                                        .oneOf([ Yup.ref('password1') ], 'Contraseña erronea')
                                        .required('Requerido')
                    })
                }

            >
                { ({ handleReset }) => (
                    <Form>
                        <MyTextInput
                            label="Nombre"
                            name="name"
                            placeholder="Pepito"
                        />

                        <MyTextInput
                            label="Correo"
                            name="email"
                            type="email"
                            placeholder="pepito@gmail.com"
                        />

                        <MyTextInput
                            label="Contraseña"
                            name="password1"
                            type="password"
                            placeholder="*****"
                        />

                        <MyTextInput
                            label="Confirmar contraseña"
                            name="password2"
                            type="password"
                            placeholder="*****"
                        />

                        
                        <button type="submit">Registrarse</button>
                
                        <button type="button" onClick={ handleReset }>Borrar</button>
                        
                    </Form>
                )}          
                
            </Formik>

        </div>
    )
}
