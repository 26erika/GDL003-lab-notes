import React, {Component} from 'react';
import {  BrowserRouter as Router, Route, NavLink } from "react-router-dom";
//import fire from './Initializer/Firebase'; 
import firebase from 'firebase/app';
import Login from './Components/Login';
import Home from './Components/Home';
import MyNotes from './Components/MyNotes';
import NewNote from './Components/NewNote';

import './Login.css';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
    this.logOut = this.logOut.bind(this);
    this.state={
      user:{},
    }
  }
  authListener(){
    firebase.auth().onAuthStateChanged((user)=> {
      if(user){
        this.setState({user});
      }else{
        this.setState({user:null});
      }
    })
  }

componentDidMount(){
  this.authListener();
}
logOut(e) {
  e.preventDefault();
  firebase.auth().signOut().then(() => {
    alert("La sesión se cerró correctamente");
  }).catch(() => {
    alert("error");
  });
}


  render(){
    return (
      <Router>
          <nav className='nav'>
            <ul>
              <li ><NavLink to="/">Home</NavLink></li>
              <li ><NavLink to="/new-note">New note</NavLink></li>
              <li ><NavLink to="/my-notes">My notes</NavLink></li>
              <li onClick={this.logOut}>Log Out</li>
            </ul>
          </nav>
        <Route render= {() => (
          (this.state.user) ? ( <Route exact path="/" component={Home}/>) : (<Login />)
        )}/>

    <Route path="/new-note" component={NewNote}/>
   
    <Route path="/my-notes" component={MyNotes}/>           
     
    </Router>
    );
  }
}

export default App;

