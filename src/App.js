import React, {Component} from 'react';
//import logo from './logo.svg';
import Login from './initializer/login';
import firebase from 'firebase';
import './login.css';
import './App.css';

function App(){
  return (
    <div>
      <body className = 'backgroundSign'>
        <Login/>
        </body>
     
    </div>
  );
}

export default App;
