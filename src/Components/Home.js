import React, {Component} from 'react';
import fire from '../Initializer/Firebase';

class Home extends Component {
    constructor(props){
      super(props);
      this.logout = this.logout.bind(this);
    }


    logout() {
        fire.auth().signOut().then(() => {
            alert("La sesión se cerró correctamente");
          }).catch(() => {
            alert("error");
          });
    }
     render(){
      return (
        <div className = 'backgroundSign'>
            <h1 className = 'titleWindowSign'>You are in Home</h1>
            <button onClick={this.logout}>Log Out</button>
        </div>
         );
     }
  }
  
  export default Home;
  