import React, { Component } from 'react';
import firebase from '../Initializer/Firebase';


class MyNotes extends Component {
    constructor(props) {
        super(props);
        this.state = {
        notes:[]
      }
 
    }
      componentDidMount(){
        firebase.db.collection("user").get()
        .then(querySnapshot => {
          const data = querySnapshot.docs.map(doc =>
            doc.data());
            console.log(data);
            this.setState({notes:data}) 
        })
      }
      
    render() {
      const {notes}= this.state;
        return (
            <div className='backgroundHome'>
              {notes.map(user =>(
                <div className='note' key={user.uid}>
                  <div className='allNotes'>
                  <h6>{user.date +"     " + " "}{user.hour}</h6>
                  <h2>{user.title}</h2>
                  <h4>{user.note}</h4>
                  <button className='buttonAllNotes'>Edit</button>
                  <button className='buttonAllNotes'>Delete</button>
                  </div>
                </div>
              ))}
        </div>
        )
    }
}
export default MyNotes;
