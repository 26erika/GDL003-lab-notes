import React, { Component } from 'react';
import firebase from '../Initializer/Firebase';


class MyNotes extends Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
    this.state = {
      notes: []
    }

  }
  componentDidMount() {
    firebase.db.collection("user").get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({...doc.data(), id: doc.id}));
        this.setState({ notes: data })
      })
  }
  deleteNote = (id) => {
    console.log("id", id);
    firebase.db.collection("user").doc(id).delete().then((data) => {
      console.log('data', data);
      console.log('The note has been deleted!');
    })
      .catch((error) => {
        console.log(error)
        console.log("The Note has not deleted");
      });
  }

  render() {
    const { notes } = this.state;
    return (
      <div className='backgroundHome'>
        {notes.map(user => console.log(user) || (
          <div className='note' key={user.uid}>
            <div className='allNotes'>
              <h6>{user.date + "  " + "  "}{user.hour}</h6>
              <h2>{user.title}</h2>
              <h4>{user.note}</h4>
              <button className='buttonAllNotes' type="button">Edit</button>
              <button className='buttonAllNotes' type="button" onClick={() => this.deleteNote(user.id)} key={user.uid}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
export default MyNotes;
