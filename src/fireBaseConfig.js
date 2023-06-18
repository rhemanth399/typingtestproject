import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyCSs2qn3ZBORRQfI7dUqKINzNoVNfP6Ayk",
  authDomain: "typing-test-b09c5.firebaseapp.com",
  projectId: "typing-test-b09c5",
  storageBucket: "typing-test-b09c5.appspot.com",
  messagingSenderId: "209115190661",
  appId: "1:209115190661:web:aa26be67198efed45ce0ec",
  measurementId: "G-6JHXJRPLVR"
};
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  const auth = firebase.auth()
  const db = firebaseApp.firestore();

  export {auth,db}