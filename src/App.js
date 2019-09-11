import React, {Component} from 'react';
import { BrowserRouter, Route } from "react-router-dom";
import fire from './Initializer/Firebase';
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
componentDidMount(){
  this.authListener();
}

authListener(){
  fire.auth().onAuthStateChanged((user)=> {
    if(user){
      this.setState({user});
    }else{
      this.setState({user:null});
    }
  })
}

  render(){
    return (
      <BrowserRouter>
      <div>

        <Route exact path="/" component={Login}/>
        <Route path ='/Home' component={Home}/>
        
      </div>
    </BrowserRouter>
    );
  }
}

export default App;

