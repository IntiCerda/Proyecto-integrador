import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { AuthRouter } from "../views/auth/AuthRouter"
import { useContext } from "react"
import { AuthContext } from "../views/store/contexts/AuthContext"
import { PrivateRouter } from "./PrivateRouter"
import { DashboardRouter } from "../views/dashboard/DashboardRouter"
import { Register } from "../views/auth/register/Register"
import { RegisterPage } from "../../03-forms/pages"
import { Home } from "../views/dashboard/home/Home"
import { Navigation } from "../../routes/Navigation"
import { Recover } from "../views/auth/recover/Recover"


interface Context {
    dispatchUser?: any,
    user?: User

}

interface User{
    loggedIn: boolean
}

export function AppRouter(){

    const { user }: Context = useContext(AuthContext);


    return(
        <Router>
            <Switch>
                <Route path ='/auth' component={AuthRouter} />
                <Route path ='/auth/register' component={Register} />
                <Route path ='/03-forms/pages' component={RegisterPage} />
                <Route path ='/dashboard/home' component={Home} />
                <Route path ='/routes' component={Navigation} />
                <Route path ='/auth/recover' component={Recover} />

                <PrivateRouter 
                    loggedIn={user?.loggedIn}
                    component={DashboardRouter}
                />
                
                <Redirect to="/dashboard/home" />
            </Switch>
        </Router>
    )
}