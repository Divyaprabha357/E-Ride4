import firebase from "firebase";
require("@firebase/firestore");

//Paste your firebaseConfig here
const firebaseConfig = {
    apiKey: "AIzaSyBCJiaSJTap9XDQMkdRJB63ygRqmFDZkmw",
    authDomain: "e-bike-30730.firebaseapp.com",
    projectId: "e-bike-30730",
    storageBucket: "e-bike-30730.appspot.com",
    messagingSenderId: "920071476244",
    appId: "1:920071476244:web:1e5589c8ac5eaad1540301",
    measurementId: "G-TP6M0CQJTE"
  };
//
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();
