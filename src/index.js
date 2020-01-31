import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Login from './Components/Login';
import Admin from './Components/Admin';
import ListPerf from './Components/ListPerf';
import ListArtist from './Components/ListArtist';

ReactDOM.render(
  <Router>
    <Route exact path='/' component={ App }></Route>
    <Route path='/login' component={ Login }></Route>
    <Route path='/admin' component={ Admin }></Route>
    <Route path='/performance' component={ ListPerf }></Route>
    <Route path='artiste' component={ ListArtist }></Route>
  </Router>
  , document.getElementById('root'));
