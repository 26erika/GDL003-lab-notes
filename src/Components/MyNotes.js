import React, { Component } from 'react';
import firebase from '../Initializer/Firebase';


class MyNotes extends Component {
  constructor(props) {
    super(props);
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
    firebase.db.collection("user").doc(id).delete().then((data) => {
      alert('The note has been deleted!');
    })
      .catch((error) => {
        alert("The Note has not deleted");
      });
  }
  editNote = (id) => {
    firebase.db.collection("user").doc(id).update({
      title: this.state.title,
      note: this.state.note,
      date: new Date().toLocaleDateString(),
      hour: new Date().toLocaleTimeString(),
    })

  }

  render() {
    const { notes } = this.state;
    return (
      <div className='backgroundNewNote'>
        {notes.map(user => console.log(user) || (
          <div className='note' key={user.uid}>
            <div className='allNotes'>
              <h6>Date: {user.date} Hour: {user.hour}</h6>
              <input placeholder= {user.title} onChange={(event) => (this.setState({title:event.target.value}))}/>
              <input placeholder= {user.note} onChange={(event) => (this.setState({note:event.target.value}))}/>
              <button className='buttonAllNotes' type="button" onClick={() => this.editNote(user.id)} key={user.uid}><i className="material-icons">edit</i></button>
              <button className='buttonAllNotes' type="button" onClick={() => this.deleteNote(user.id)} key={user.uid}><i className="material-icons">delete</i></button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}
export default MyNotes;
