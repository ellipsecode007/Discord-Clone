import firebase from 'firebase/compat/app'; 
import 'firebase/compat/auth'; 
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB3WfHZyg6Jbr4wES8FWZR3rdfNXUz9vgQ",
    authDomain: "discord-clone-24b34.firebaseapp.com",
    projectId: "discord-clone-24b34",
    storageBucket: "discord-clone-24b34.appspot.com",
    messagingSenderId: "678386026916",
    appId: "1:678386026916:web:70592c1a2a12c802fc1931",
    measurementId: "G-4VN4R67612"
  };

  const firebaseApp =   firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();

  export {auth, provider};
  export default db;
