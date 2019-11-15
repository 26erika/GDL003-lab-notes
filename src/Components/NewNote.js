import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import firebase from '../Initializer/Firebase';

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    //this.saveNote = this.saveNote.bind(this);
    this.state = {
      title: '',
      note: '',
    }
  }
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }
  
  saveNote = () => {
    let uid= firebase.fire.auth().currentUser.uid;
  
      firebase.db.collection("user").add({
        uid:uid,
        title: this.state.title,
        note: this.state.note,
        date: new Date().toLocaleDateString(), 
        hour: new Date().toLocaleTimeString(),
      })
      this.setState({
        uid: uid,
        title: "",
        note: "",
        date: new Date().toLocaleDateString(),
        hour: new Date().toLocaleTimeString(),
      })
    
    this.props.history.push('/my-notes')
  }



  render() {
    return (
      <div className='backgroundNewNote'>
        <form className='newNote' >
          <h1 className='homeTitle'>You can write notes to never forget them</h1>
          <input value={this.title} onChange={this.handleChange} type='text' name='title' className="form-new-note" id='title' placeholder='Title' />
          <input value={this.note} onChange={this.handleChange} type='text' name='note' className="form-new-note" id='note' placeholder='What do think...?' />
          <button className='buttonSaveNote' type="button" onClick={this.saveNote} > Save</button>
        </form>
      </div>
    )
  }
}
export default withRouter (NewNote);

