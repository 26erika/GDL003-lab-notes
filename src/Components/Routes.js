import React, {Component} from 'react';
import {BrowserRouter as Router, Route, NavLink} from 'react-router-dom';
import firebase from 'firebase/app';

import Login from './Login';
import Home from './Home';
import MyNotes from './MyNotes';
import NewNote from './NewNote';

class Routes extends Component {
  logOut = ()=> {
    
    firebase.auth().signOut().then(() => {
      alert("La sesión se cerró correctamente");
    }).catch(() => {
      alert("error");
    });
  }
 
  render(){
    return(
      <div>
        <Router>
        
          <header className='nav'>
            <ul>
              <li ><NavLink to="/home">Home</NavLink></li>
              <li ><NavLink to="/new-note">New note</NavLink></li>
              <li ><NavLink to="/my-notes">My notes</NavLink></li>
              <li onClick={this.logOut}>Log Out</li>
            </ul>
          </header>
        <Route path="/login" component={Login} />
        <Route path="/home" component={Home} />
        <Route path="/new-note" component={NewNote} />
        <Route path="/my-notes" component={MyNotes} />
      
  </Router>
      </div>
    )
  }
}
export default Routes