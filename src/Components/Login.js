import React, {Component} from 'react';
import fire from '../Initializer/Firebase';


class Login extends Component {
  constructor(props){
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.resetPassword = this.resetPassword.bind(this);
    this.state ={
      name:'',
      email:'',
      password: '',
    }
  }
    handleChange=(e)=>{
      this.setState({[e.target.name]:e.target.value});
    }
    handleSubmit=(e)=>{
      e.preventDefault();
      console.log(this.state);
            
    }
    login(e) {
      e.preventDefault();
      fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        console.log(this.state.email, this.state.password, this.state.name);
        
      }).catch((error) => {
          console.log(error);
        });
    }
    
    signup(e){
      console.log(this.state.email)
      e.preventDefault();
      fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
        console.log(u)
        fire.auth().currentUser.sendEmailVerification();
      })
      .catch((error) => {
        console.log(error)
        })
    }
    resetPassword(e){
      e.preventDefault();
      fire.auth().sendPasswordResetEmail(this.state.email, this.state.password = !this.state.password).then((u) => {
        alert("El correo de verificación se ha enviado");
      }).catch(() => {
        alert("Error");
      });
    }

    
   render(){
    return (
      <div className = 'backgroundSign'>
           <h1 className = 'titleWindowSign'>My Notes</h1>
           <form onSubmit={this.handleSubmit}>
           <div>
             <input value={this.state.name} onChange={this.handleChange} type="text" name="name" className="form-control" id="name" placeholder="Enter Name" />
             </div>
             <div>
             <input value={this.state.email} onChange={this.handleChange} type="email" name="email" className="form-control" id="email" placeholder="Enter email" />
             </div>
             <div>
             <input value={this.state.password} onChange={this.handleChange} type="password" name="password" className="form-control" id="password" placeholder="Password" />
             </div>
           <button className='buttonSign' type= 'submit' onClick={this.login}>Sign In</button>
           <button className='buttonSign' type= 'submit' onClick={this.signup}>Sign Up </button>
           <button className='buttonSign' onClick={this.resetPassword}>Forgot Password</button>
   
           </form>
           
      </div>
       );
   }
}

export default Login;
