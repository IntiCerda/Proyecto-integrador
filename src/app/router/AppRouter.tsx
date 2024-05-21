import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom"
import { AuthRouter } from "../views/auth/AuthRouter"
import { useContext } from "react"
import { AuthContext } from "../views/store/contexts/AuthContext"
import { PrivateRouter } from "./PrivateRouter"
import { DashboardRouter } from "../views/dashboard/DashboardRouter"


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
                <PrivateRouter 
                    loggedIn={user?.loggedIn}
                    component={DashboardRouter}
                />

                <Redirect to="dashboard/home" />
            </Switch>
        </Router>
    )
}