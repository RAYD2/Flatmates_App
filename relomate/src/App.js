import './App.css';
import Login from './Components/Login';
import Register from './Components/Register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
    return (
        <Router>
            <Switch>
                <Route exact path='/'>
                    <Login />
                </Route>
                <Route exact path='/Register'>
                    <Register />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
