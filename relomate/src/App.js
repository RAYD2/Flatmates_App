import logo from './logo.svg';
import './App.css';
import Login from './Components/Login';
import Register from './Components/Register'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
    return (
        <Router>
            <Login />
            <Switch>
                <Route path='/Register'>
                    <Register />
                </Route>
            </Switch>
        </Router>
    )
}

export default App;
