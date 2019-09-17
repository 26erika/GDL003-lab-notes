import React, {Component} from 'react';
import { BrowserRouter } from "react-router-dom";
//import fire from './Initializer/Firebase'; 
import firebase from 'firebase/app'
import Login from './Components/Login';
import Home from './Components/Home';
import './Login.css';
import './App.css';


class App extends Component {
  constructor(props){
    super(props);
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



  render(){
    return (
      <BrowserRouter>
      <div>
     
      {this.state.user ?  ( <Home/>) : (<Login />)}
       
        
      </div>
    </BrowserRouter>
    );
  }
}

export default App;

