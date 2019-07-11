 import firebase from 'firebase/app'
 import 'firebase/firestore'
 
 // Your web app's Firebase configuration
 var firebaseConfig = {
    apiKey: "AIzaSyDEDnhkNrBH9TjLvx5tyHP7ThHxk0ANqr4",
    authDomain: "teambuilder-server.firebaseapp.com",
    databaseURL: "https://teambuilder-server.firebaseio.com",
    projectId: "teambuilder-server",
    storageBucket: "teambuilder-server.appspot.com",
    messagingSenderId: "897580753181",
    appId: "1:897580753181:web:a284deb9efc99c3b"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();


  export default db;