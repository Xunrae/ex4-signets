import firebase from 'firebase/app';
import * as firebaseui from 'firebaseui';
import 'firebase/firestore';

// Configuration (mettez-y les vôtres !)
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCPHD2u1jjZfQ4d-W5qKImDKg1I9BalT4U",
  authDomain: "panier-achat-acl.firebaseapp.com",
  databaseURL: "https://panier-achat-acl-default-rtdb.firebaseio.com",
  projectId: "panier-achat-acl",
  storageBucket: "panier-achat-acl.appspot.com",
  messagingSenderId: "1051741793466",
  appId: "1:1051741793466:web:be8efccc79106ee3f36683",
  measurementId: "G-GFS0784J6L"
};

console.log(document.querySelector('#firebaseui-auth-container'));

// Initialiser Firebase
if(!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

// Initialiser FirebaseUI
export const instanceFirebaseUI = new firebaseui.auth.AuthUI(firebase.auth());

// Initialiser Firestore
export const firestore = firebase.firestore();
