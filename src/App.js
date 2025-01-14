import React, { Component } from 'react';
import { BrowserRouter as HashRouter, Route } from "react-router-dom";
//import fire from './Initializer/Firebase'; 
import firebase from 'firebase/app';
import Login from './Components/Login';

import './App.css';
import Routes from './Components/Routes';



class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {},
    }
  }
  authListener() {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    })
  }

  

  componentDidMount() {
    this.authListener();
  }
  


  render() {
    return (
      <HashRouter basename="/my-notes">
        <Route render={() => (
          (this.state.user) ? (<Route exact path="/" component={Routes} />) : (<Login />)
        )} />
      </HashRouter>
    );
  }
}

export default App;

