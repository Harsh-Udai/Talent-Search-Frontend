import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Login from './Containers/LoginContainer';
import Signup from './Pages/Signup';
import Reset from './Pages/Reset';
import Dash from './Pages/Dash';

function App() {
  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path='/' component={Home} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Signup' component={Signup} />
          <Route exact path='/Reset' component={Reset} />
          <Route exact path='/dash' component={Dash} />
        </Switch>

      </Router>
    </div>
  );
}

export default App;
