import { AuthCard } from "../components/authCard/AuthCard";
import logo from '../../../assets/img/logo.png';
import accountIcon from '../../../assets/icons/account.svg';
import passwordIcon from '../../../assets/icons/password.svg';
import { Link, useHistory } from "react-router-dom";
import { useMutation, gql } from '@apollo/client';
import { FormEvent, useState } from 'react';
import { TRY_LOGIN } from "../../graphql/aiuda";


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, { loading, error }] = useMutation(TRY_LOGIN);
  const history = useHistory();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { data } = await login({ variables: { email, password } });
      if (data.login) {
        // Manejar inicio de sesión exitoso, redirigir a la página de inicio
        history.replace('/dashboard/home');
      }
    } catch (error) {
      // Manejar errores de inicio de sesión
      console.error('Error al iniciar sesión:', error);
      // Mostrar un mensaje de error al usuario
      alert('Error al iniciar sesión. Por favor, verifica tus credenciales e inténtalo de nuevo.');
    }
  };

  return (
    <div>
      <AuthCard>
        <form onSubmit={handleSubmit} autoComplete="off">
          <div className="text-center mb-2">
            <img className="img-fluid" src={logo} alt="logo" />
          </div>
          <div className="mb-2 p-1 d-flex border rounded">
            <div className="mx-2 mt-1"> 
              <img className="img-fluid" src={accountIcon} alt="iconUser" />
            </div>
            <input
              autoFocus
              className="form-control txt-input"
              name="email"
              type="email"
              placeholder="gege@gege.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="mb-2 p-1 d-flex border rounded">
            <div className="mx-2 mt-1"> 
              <img className="img-fluid" src={passwordIcon} alt="iconUser" />
            </div>
            <input
              className="form-control txt-input"
              name="password"
              type="password"
              placeholder="******"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="d-grid gap-2">
            <button type="submit" className="btn btn-primary">
              {loading ? 'Cargando...' : 'Iniciar Sesión'}
            </button>
          </div>
          <div className="mt-3 mb-3 text-center">
            <Link to="/auth/recover">¿Olvidaste la contraseña?</Link>
          </div>
          <div className="mt-3 mb-3 text-center">
            <h6>No tienes una cuenta</h6>
            <Link to="/auth/register">Registrarse</Link>
          </div>
        </form>
      </AuthCard>
    </div>
  );
};

export default Login;
