/*import React, { Component } from 'react';
import db from '../Initializer/Firestore';

class NewNote extends Component {
    constructor(props) {
        super(props);
        this.state = {
            Title: '',
            Note: '',
        }
    }

    saveNote =() =>{
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
            <div>
                <form className='note' onSubmit={this.handleSubmit}>
                    <input value={this.state.Title} onChange={this.handleChange} type='text' name='title' placeholder='Title' />
                    <input value={this.state.Note} onChange={this.handleChange} type='text' name='note' placeholder='What do think...?' />
                    <button type='submit' onClick={this.notes}>Save</button>
                </form>
            </div>
        )
    }
}
export default NewNote;*/

