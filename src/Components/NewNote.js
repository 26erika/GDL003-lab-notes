import React, { Component } from 'react';
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
    
    firebase.db.collection("user").add({
      title: this.state.title,
      note: this.state.note,
      date: new Date().toLocaleDateString(), 
      hour: new Date().toLocaleTimeString(),
    })
    this.setState({
      title: "",
      note: "",
      date: new Date().toLocaleDateString(),
      hour: new Date().toLocaleTimeString(),
    })
  }



  render() {
    return (
      <div className='backgroundHome'>
        <form className='note' >
          <input value={this.title} onChange={this.handleChange} type='text' name='title' className="form-control" id='title' placeholder='Title' />
          <input value={this.note} onChange={this.handleChange} type='text' name='note' className="form-control" id='note' placeholder='What do think...?' />
          <button className='buttonSaveNote' type="button" onClick={this.saveNote} > Save</button>
        </form>
      </div>
    )
  }
}
export default NewNote;

