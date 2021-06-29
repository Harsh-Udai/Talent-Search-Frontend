import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import './App.css';
import Home from './Pages/Home';
import Login from './Containers/LoginContainer';
import Signup from './Pages/Signup';
import Reset from './Pages/Reset';
import Entry from './Containers/EntryContainer';
import DashVideo from './Containers/VideoContainer';
import DashImage from './Containers/ImageContainer';
import DashScript from './Containers/ScriptContainer';
import VideoPlay from "./Containers/PlaybackContainer";
import Profile from "./Containers/ProfileContainer";

function App() {

  return (
    <div className="App">
      <Router>

        <Switch>

          <Route exact path='/' component={Home} />
          <Route exact path='/Login' component={Login} />
          <Route exact path='/Signup' component={Signup} />
          <Route exact path='/Reset' component={Reset} />
          <Route exact path='/Dashboard' component={Entry} />
          <Route exact path='/Dashboard/Videos' component={DashVideo} />
          <Route exact path='/Dashboard/Images' component={DashImage} />
          <Route exact path='/Dashboard/Scripts' component={DashScript} />
          <Route exact path="/Dashboard/Videos/Play" component={VideoPlay} />
          <Route exact path="/Dashboard/Profile" component={Profile} />

        </Switch>

      </Router>
    </div>
  );
}

export default App;
