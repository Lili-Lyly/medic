
import Login from "./screens/login/Login";
import Register from "./screens/register/register";
import {BrowserRouter as Router, Link,Redirect, Route, Switch} from "react-router-dom";
import Principal from "./screens/principal/principal";
import Error from "./screens/error/error";
function App() {
    return (
        <Router>
                <Switch>

                <Route exact path="/">
                    <Redirect to="/principal"/>
                </Route>
                <Route path="/principal">
                    <Principal/>
                </Route>


                    <Route path="/login">
                        <Login/>
                    </Route>
                    <Route path="/register">
                        <Register/>
                    </Route>

                    <Route component={Error}/>


                </Switch>
            
        </Router>
    );
}
export default App;