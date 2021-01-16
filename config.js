import firebase from 'firebase';
require('@firebase/firestore')

var firebaseConfig = {
  apiKey: "AIzaSyD09k8_h9GmJfxmi56LQyfGyz5RdrLCrpk",
  authDomain: "book-santa-app-d51e8.firebaseapp.com",
  databaseURL: "https://book-santa-app-d51e8.firebaseio.com",
  projectId: "book-santa-app-d51e8",
  storageBucket: "book-santa-app-d51e8.appspot.com",
  messagingSenderId: "829961306807",
  appId: "1:829961306807:web:dc5365e000eb95cbfe8332"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();