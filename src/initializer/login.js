import React from 'react';
import firebase from "firebase";


class Login extends React.Component {
  constructor(props){
    super(props);
    this.state = {email:'',password:''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
   SignInUserRegister = () =>{
     firebase.auth().signInWithEmailAndPassword(email, password).catch= () =>{

     }
   }
   render(){
    return (
      <div className = 'backgroundSign'>
           <h1 className = 'titleWindowSign'>My Notes</h1>
           <form>
           <input type='text' className ='inputSign' placeholder = 'Email'/>
           <input type='password' className ='inputSign' placeholder = 'Password'/>
           <button>Sign Up </button>
           <button>Forgot Password</button>
   
           </form>
           
      </div>
       );
   }
}

export default Login;


/*import React, {Component} from 'react';
import withFirebaseAuth from 'react-with-firebase-auth';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import firebaseConfig from './firebase';

const firebaseApp = firebase.initializeApp(firebaseConfig);

Login =()=>  {
 
    const loginWithGoogle = new firebase.auth.GoogleAuthProvider(GoogleAuthProvider);
      firebase.auth(firebaseApp).signInWithPopup(loginWithGoogle).then(() => {
        alert("Google signIn");
      }).catch(() => {
        alert("Error");
    } 
  }

  export default Login;*/