import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGRXzUDirlKZAOOsdKIpQ5mH-lpYrCs7k",
  authDomain: "soical-proof-vue3.firebaseapp.com",
  databaseURL: "https://soical-proof-vue3-default-rtdb.firebaseio.com",
  projectId: "soical-proof-vue3",
  storageBucket: "soical-proof-vue3.appspot.com",
  messagingSenderId: "693177036514",
  appId: "1:693177036514:web:061497fdbe148ab15bb8bb"
};

/// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
  storage
};