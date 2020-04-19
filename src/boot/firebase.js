// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from "firebase/app";

// Add the Firebase services that you want to use
import "firebase/auth";
import "firebase/database";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAx1QSEcbc13aRrUcW15B1BC0hBPwYzBnE",
  authDomain: "smackchat-e6523.firebaseapp.com",
  databaseURL: "https://smackchat-e6523.firebaseio.com",
  projectId: "smackchat-e6523",
  storageBucket: "smackchat-e6523.appspot.com",
  messagingSenderId: "878617130041",
  appId: "1:878617130041:web:259f9e2fa9b86e064fc9e8",
  measurementId: "G-F09FNDZQ3S"
};
// Initialize Firebase
let firebaseApp = firebase.initializeApp(firebaseConfig);
let firebaseAuth = firebaseApp.auth();
let firebaseDb = firebaseApp.database();

export { firebaseAuth, firebaseDb };
