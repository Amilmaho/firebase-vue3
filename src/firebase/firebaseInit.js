import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAew7Ro3iAUdGACKKwsnQXoi0MLqu7xJyc",
    authDomain: "fireblogs-vue3.firebaseapp.com",
    projectId: "fireblogs-vue3",
    storageBucket: "fireblogs-vue3.appspot.com",
    messagingSenderId: "9268442366",
    appId: "1:9268442366:web:412540e2178d97e46da1af"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {timestamp};
export default firebaseApp.firestore();