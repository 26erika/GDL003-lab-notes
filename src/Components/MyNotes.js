import React, { Component } from 'react';
import firebase from '../Initializer/Firebase';


class MyNotes extends Component {
  constructor(props) {
    super(props);
    this.deleteNote = this.deleteNote.bind(this);
    this.editNote = this.editNote.bind(this);
    this.state = {
      title: '',
      note: '',
      notes: []
    }

  }
  componentDidMount() {
    firebase.db.collection("user").get()
      .then(querySnapshot => {
        const data = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id }));
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
  editNote = (id) => {
    firebase.db.collection("user").doc(id).update({
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
    const { notes } = this.state;
    return (
      <div className='backgroundHome'>
        {notes.map(user => console.log(user) || (
          <div className='note' key={user.uid}>
            <div className='allNotes'>
              <h6>{user.date + "  " + "  "}{user.hour}</h6>
              <input value= {user.title}/>
              <input value= {user.note}/>
              <button className='buttonAllNotes' type="button" onClick={() => this.editNote(user.id)} key={user.uid}>Edit</button>
              <button className='buttonAllNotes' type="button" onClick={() => this.deleteNote(user.id)} key={user.uid}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
export default MyNotes;
