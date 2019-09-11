import firebase from 'firebase';
  const config = {
    apiKey: "AIzaSyBbrE_QmMEt2oBgIPsqvmxt_tSfrAomkH4",
    authDomain: "my-notes-327c8.firebaseapp.com",
    databaseURL: "https://my-notes-327c8.firebaseio.com",
    projectId: "my-notes-327c8",
    storageBucket: "",
    messagingSenderId: "588815220765",
    appId: "1:588815220765:web:759eff84686beb742e06f4"
  };
  const fire = firebase.initializeApp(config);

  export default fire;