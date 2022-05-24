import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDGRXzUDirlKZAOOsdKIpQ5mH-lpYrCs7k",
  authDomain: "soical-proof-vue3.firebaseapp.com",
  projectId: "soical-proof-vue3",
  storageBucket: "soical-proof-vue3.appspot.com",
  appId: "1:693177036514:web:061497fdbe148ab15bb8bb"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();

const usersCollection = db.collection('users');

export {
  auth,
  db,
  usersCollection,
};