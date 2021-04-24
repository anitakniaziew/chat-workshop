import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';

import store from './store/store';

import Navigation from './components/nav/index.js';
import Profile from './components/Profile/index.js';
import Chat from './components/Chat/index.js';

import './App.css';


function App() {
  return (
    <Router>
      <Provider store={store}>
        <div className="App">
          <Navigation />
          <Switch>
            <Route path="/profile">
              <Profile />
            </Route>
            <Route path="/chat">
              <Chat />
            </Route>
          </Switch>
        </div>
      </ Provider>
    </Router>
  );
}

export default App;
