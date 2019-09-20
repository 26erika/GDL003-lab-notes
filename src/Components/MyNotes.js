import React, { Component } from 'react';
import firebase from '../Initializer/Firebase';


class MyNotes extends Component {
    constructor(props) {
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.state = {
        title: '',
        note: '',
      }
 
    }
    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
      }
      addNote = e => {
        e.preventDefault();
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
            <form className='note' onSubmit={this.addNote}>
                <input type='text' id='title' placeholder='Title' onChange={this.handleChange} value={this.state.title}/>
                <input type='text' id='note' placeholder='What do think...?' onChange={this.handleChange} value={this.state.note}/>
                <button type='button' onChange={this.addNote}>Save</button>
            </form>
        </div>
        )
    }
}
export default MyNotes;
