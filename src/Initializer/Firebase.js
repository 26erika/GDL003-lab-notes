import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyBwqyajVT3SSW0bqCLClkhJi_OyFFrEvpc",
    authDomain: "my-notes-9bd73.firebaseapp.com",
    databaseURL: "https://my-notes-9bd73.firebaseio.com",
    projectId: "my-notes-9bd73",
    storageBucket: "my-notes-9bd73.appspot.com",
    messagingSenderId: "360180833853",
    appId: "1:360180833853:web:eaa4c0a907099e54341454"
  };
  const fire = firebase.initializeApp(config);
  //const db = firebase.firestore(fire);
  
  //export default {fire,db};
  export default fire;