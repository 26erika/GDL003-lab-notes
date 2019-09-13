import React, { Component } from 'react';
import fire from '../Initializer/Firebase';
//import db from '../Initializer/Firebase';

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);
   // this.notes = this.notes.bind(this);
    this.state={
    Title:'',
    Note:'',
    }
  }
  handleChange=(e)=>{
    this.setState({[e.target.name]:e.target.value});
  }
  handleSubmit=(e)=>{
    e.preventDefault();
    console.log(this.state);
          
  }
  logout(e) {
    e.preventDefault();
    fire.auth().signOut().then(() => {
      alert("La sesión se cerró correctamente");
    }).catch(() => {
      alert("error");
    });
  }
  /*notes(e) {
    e.preventDefault(this.state);
    db.collection('user').add({
    Date: new Date().toLocaleDateString(),
    Hour: new Date().toLocaleTimeString(),
    Title:'',
    Note:'',
    
    }).then(() =>{

    })
  }*/
  

  render() {
    return (
      <div className='backgroundHome'>
        <nav className='nav'>
          <ul>
            <li>Home</li>
            <li>New note</li>
            <li>My notes
              <ul>
                <li>All notes</li>
              </ul>
            </li>
            <li onClick={this.logout}>Log Out</li>
          </ul>
        </nav>
        <div className='imageHome'>
           <img src={('https://media.giphy.com/media/3oz8xTUmZABI3PGwDe/giphy.gif')}alt='pig notes'/>
        </div>
        <form className='note' onSubmit={this.handleSubmit}>
          <input value={this.state.Title} onChange={this.handleChange} type='text' name='title' placeholder='Title'/>
          <input value={this.state.Note} onChange={this.handleChange} type='text' name='note' placeholder='What do think...?'/>
          <button type='submit' onClick={this.notes}>Save</button>
        </form> 
      </div>

    );
  }
}

export default Home;
