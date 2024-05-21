import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from 'react-router-dom';
  
  import {
    FormikAbstraction,
    FormikBasicPage,
    FormikComponents,
    FormikYupPage,
    RegisterPage,
    RegisterFormikPage,
    DynamicForm,
  } from '../03-forms/pages'
  
  
  
  import logo from '../logo.svg';
import { LoginUser } from '../03-forms/pages/LoginUser';
  
  export const Navigation = () => {
    return (
      <Router>
        <div className="main-layout">
          <nav>
              <img src={ logo } alt="React Logo" />
            <ul>
              <li>
                <NavLink to="/users" activeClassName="nav-active" exact>Inicio</NavLink>
              </li>
              {/*<li>
                <NavLink to="/register" activeClassName="nav-active" exact >Register Page</NavLink>
              </li>
              <li>
                <NavLink to="/formik-basic" activeClassName="nav-active" exact>Formik Basic</NavLink>
              </li>
              <li>
                <NavLink to="/formik-yup" activeClassName="nav-active" exact>Formik Yup</NavLink>
              </li>
              <li>
                <NavLink to="/formik-components" activeClassName="nav-active" exact>Formik Components</NavLink>
    </li>*/}
              <li>
                <NavLink to="/login-user" activeClassName="nav-active" exact>Iniciosesion</NavLink>
              </li>
              <li>
                <NavLink to="/formik-register" activeClassName="nav-active" exact>Registro</NavLink>
               </li>
               <li>
                <NavLink to="/formik-abstractation" activeClassName="nav-active" exact>Servicios</NavLink>
               </li>
               <li>
                <NavLink to="/dynamic-form" activeClassName="nav-active" exact>Comentarios</NavLink>
               </li>
              
            </ul>
          </nav>
  
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/register">
              <RegisterPage />
            </Route>
            <Route path="/login-user">
              <LoginUser />
            </Route>
            <Route path="/formik-basic">
              <FormikBasicPage />
            </Route>
            <Route path="/formik-yup">
              <FormikYupPage />
            </Route>
            <Route path="/formik-components">
              <FormikComponents />
            </Route>
            <Route path="/formik-abstractation">
              <FormikAbstraction />
            </Route>
            <Route path="/formik-register">
              <RegisterFormikPage />
            </Route>
            <Route path="/dynamic-form">
              <DynamicForm />
            </Route>
            <Route path="/">
              <h1>Bienvenidos!</h1>
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }