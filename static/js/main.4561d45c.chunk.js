(window["webpackJsonplab-notes"]=window["webpackJsonplab-notes"]||[]).push([[0],{33:function(e,t,a){e.exports=a(55)},38:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},55:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(29),i=a.n(r),l=(a(38),a(8)),c=a(9),s=a(11),u=a(10),m=a(12),h=a(15),d=a(14),p=a(21),b=a.n(p),f=a(16),g=a(13),v=a(23),E=a.n(v),y=(a(48),E.a.initializeApp({apiKey:"AIzaSyBwqyajVT3SSW0bqCLClkhJi_OyFFrEvpc",authDomain:"my-notes-9bd73.firebaseapp.com",databaseURL:"https://my-notes-9bd73.firebaseio.com",projectId:"my-notes-9bd73",storageBucket:"my-notes-9bd73.appspot.com",messagingSenderId:"360180833853",appId:"1:360180833853:web:eaa4c0a907099e54341454"})),w={fire:y,db:E.a.firestore(y)},O=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).handleChange=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.handleSubmit=function(e){e.preventDefault(),console.log(a.state)},a.signIn=a.signIn.bind(Object(g.a)(a)),a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.signUp=a.signUp.bind(Object(g.a)(a)),a.resetPassword=a.resetPassword.bind(Object(g.a)(a)),a.state={name:"",email:"",password:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"signIn",value:function(e){var t=this;e.preventDefault(),w.fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((function(e){console.log(t.state.email,t.state.password,t.state.name)})).catch((function(e){console.log(e)}))}},{key:"signUp",value:function(e){console.log(this.state.email),e.preventDefault(),w.fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((function(){w.fire.auth().currentUser.sendEmailVerification()})).catch((function(e){alert(e,"Error")}))}},{key:"resetPassword",value:function(e){e.preventDefault(),w.fire.auth().sendPasswordResetEmail(this.setState.email,this.setState.password=!this.setState.password).then((function(e){alert("El correo de verificaci\xf3n se ha enviado")})).catch((function(){alert("Error")}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"login"},o.a.createElement("h1",{className:"titleWindowSign"},"My Notes"),o.a.createElement("form",{onSubmit:this.handleSubmit},o.a.createElement("div",null,o.a.createElement("input",{value:this.state.name,onChange:this.handleChange,type:"text",name:"name",className:"form-login",placeholder:"Enter Name"})),o.a.createElement("div",null,o.a.createElement("input",{value:this.state.email,onChange:this.handleChange,type:"email",name:"email",className:"form-login",placeholder:"Enter Email"})),o.a.createElement("div",null,o.a.createElement("input",{value:this.state.password,onChange:this.handleChange,type:"password",name:"password",className:"form-login",placeholder:"Password"})),o.a.createElement("button",{className:"buttonSign",type:"submit",onClick:this.signIn},"Sign In"),o.a.createElement("button",{className:"buttonSign",type:"submit",onClick:this.signUp},"Sign Up "),o.a.createElement("button",{className:"buttonSign",onClick:this.resetPassword},"Forgot Password")))}}]),t}(n.Component);a(49),a(50);function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}var N=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).deleteNote=function(e){w.db.collection("user").doc(e).delete().then((function(e){alert("The note has been deleted!")})).catch((function(e){alert("The Note has not deleted")}))},a.editNote=function(e){w.db.collection("user").doc(e).update({title:a.state.title,note:a.state.note,date:(new Date).toLocaleDateString(),hour:(new Date).toLocaleTimeString()})},a.state={title:"",note:"",notes:[]},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;w.db.collection("user").get().then((function(t){var a=t.docs.map((function(e){return function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},e.data(),{id:e.id})}));e.setState({notes:a})}))}},{key:"render",value:function(){var e=this,t=this.state.notes;return o.a.createElement("div",{className:"backgroundMyNotes"},t.map((function(t){return console.log(t)||o.a.createElement("div",{className:"note",key:t.uid},o.a.createElement("div",{className:"allNotes"},o.a.createElement("h6",null,"Date: ",t.date," Hour: ",t.hour),o.a.createElement("input",{placeholder:t.title,className:"form",onChange:function(t){return e.setState({title:t.target.value})}}),o.a.createElement("textarea",{placeholder:t.note,className:"form",onChange:function(t){return e.setState({note:t.target.value})}}),o.a.createElement("div",{className:"buttonAllNotes"},o.a.createElement("button",{className:"buttonAllNotes1",type:"button",onClick:function(){return e.editNote(t.id)},key:t.uid},o.a.createElement("i",{className:"material-icons"},"edit")),o.a.createElement("button",{className:"buttonAllNotes2",type:"button",onClick:function(){return e.deleteNote(t.id)},key:t.uid},o.a.createElement("i",{className:"material-icons"},"delete")))))})))}}]),t}(n.Component),S=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).saveNote=function(){w.db.collection("user").add({title:a.state.title,note:a.state.note,date:(new Date).toLocaleDateString(),hour:(new Date).toLocaleTimeString()}),a.setState({title:"",note:"",date:(new Date).toLocaleDateString(),hour:(new Date).toLocaleTimeString()}),a.props.history.push("/my-notes")},a.handleChange=a.handleChange.bind(Object(g.a)(a)),a.state={title:"",note:""},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"handleChange",value:function(e){this.setState(Object(f.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return o.a.createElement("div",{className:"backgroundNewNote"},o.a.createElement("form",{className:"newNote"},o.a.createElement("h1",{className:"homeTitle"},"You can write notes to never forget them"),o.a.createElement("input",{value:this.title,onChange:this.handleChange,type:"text",name:"title",className:"form-new-note",id:"title",placeholder:"Title"}),o.a.createElement("input",{value:this.note,onChange:this.handleChange,type:"text",name:"note",className:"form-new-note",id:"note",placeholder:"What do think...?"}),o.a.createElement("button",{className:"buttonSaveNote",type:"button",onClick:this.saveNote}," Save")))}}]),t}(n.Component),C=Object(d.e)(S),k=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(s.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).logOut=function(){b.a.auth().signOut().then((function(){alert("La sesi\xf3n se cerr\xf3 correctamente")})).catch((function(){alert("error")}))},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",null,o.a.createElement(h.a,null,o.a.createElement("header",{className:"nav"},o.a.createElement("ul",{className:"nav-router"},o.a.createElement("li",null,o.a.createElement(h.b,{to:"/new-note"},"New note")),o.a.createElement("li",null,o.a.createElement(h.b,{to:"/my-notes"},"My notes")),o.a.createElement("li",{onClick:this.logOut},"Log Out"))),o.a.createElement(d.a,{path:"/login",component:O}),o.a.createElement(d.a,{path:"/new-note",component:C}),o.a.createElement(d.a,{path:"/my-notes",component:N})))}}]),t}(n.Component),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={user:{}},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"authListener",value:function(){var e=this;b.a.auth().onAuthStateChanged((function(t){t?e.setState({user:t}):e.setState({user:null})}))}},{key:"componentDidMount",value:function(){this.authListener()}},{key:"render",value:function(){var e=this;return o.a.createElement(h.a,null,o.a.createElement(d.a,{render:function(){return e.state.user?o.a.createElement(d.a,{exact:!0,path:"/",component:k}):o.a.createElement(O,null)}}))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(D,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[33,1,2]]]);
//# sourceMappingURL=main.4561d45c.chunk.js.map