import React, { Component } from 'react';
import firebase from '../Initializer/Firebase';

class NewNote extends React.Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.saveNote = this.saveNote.bind(this);
        this.state = {
            Title: '',
            Note: '',
        }
    }
    handleChange(event){
      this.setState({ [event.target.name]: event.target.value });    }
    componentWillMount(){
     
    }
 saveNote =(event) =>{
        event.preventDefault();
        console.log("title", this.state.title);
    firebase.db.collection("user").add({
      title: this.state.title,
      note: this.state.note
    })
    this.setState({
      title:"",
      note:""
    })
    }
      
  

    render() {
        return (
            <div>
              <form className='note' >
                <input value={this.title} onChange={this.handleChange} type='text' name='title' className="form-control" id='title' placeholder='Title' />
                <input value={this.note} onChange={this.handleChange} type='text' name='note' className="form-control" id='note' placeholder='What do think...?' />
                <button type="button" onClick={this.saveNote}>Save</button>
              </form>
            </div>
        )
    }
}
export default NewNote;

