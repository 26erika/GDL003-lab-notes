import React, { Component } from 'react';
import { BrowserRouter as Router, Link } from "react-router-dom";
import fire from '../Initializer/Firebase';
import db from '../Initializer/Firebase';

//import NewNote from './Components/NewNote';
//import MyNotes from './Components/MyNotes';


class Home extends Component {
  constructor(props) {
    super(props);
    this.logOut = this.logOut.bind(this);
    this.saveNote = this.saveNote.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.state = {
      Title: '',
      Note: '',
  }
  }
  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

  }
  logOut(e) {
    e.preventDefault();
    fire.auth().signOut().then(() => {
      alert("La sesión se cerró correctamente");
    }).catch(() => {
      alert("error");
    });
  }
  saveNote () {
		const{title, note} = this.state;
		let date = new Date().toLocaleDateString();
		let hour= new Date().toLocaleTimeString();
		
		db.collection('user').add({
		  Title: title,
		  Note: note,
		  Date: date +' '+hour, 
		}).then(()=>{
		  console.log('The note is add')
		}).catch(()=>{
		  console.log('err')
		})
	  }
  render() {
    return (
      <Router>
        <div className='backgroundHome'>
          <nav className='nav'>
            <ul>
              <li onClick={this.home}><Link to="/home">Home</Link></li>
              <li onClick={this.newNote}><Link to="/new-note">New note</Link></li>
              <li onClick={this.myNotes}><Link to="/my-notes">My notes</Link></li>
              <li onClick={this.logOut}>Log Out</li>
            </ul>
          </nav>
          <div className='imageHome'>
            <img src={('https://media.giphy.com/media/3oz8xTUmZABI3PGwDe/giphy.gif')} alt='pig notes' />
          </div>
          <div>
                <form className='note' onSubmit={this.handleSubmit}>
                    <input value={this.state.Title} onChange={this.handleChange} type='text' name='title' className="form-control" id='title' placeholder='Title' />
                    <input value={this.state.Note} onChange={this.handleChange} type='text' name='note' className="form-control" id='note' placeholder='What do think...?' />
                    <button type='submit' onClick={this.notes}>Save</button>
                </form>
            </div>
        </div>
      </Router>
    );
  }
}

export default Home;
