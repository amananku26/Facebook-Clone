import firebase from "firebase"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSvqItRX5j_xt11ZDOIprhOzfXnwtENeA",
  authDomain: "facebook-clone-ccd54.firebaseapp.com",
  projectId: "facebook-clone-ccd54",
  storageBucket: "facebook-clone-ccd54.appspot.com",
  messagingSenderId: "801305381550",
  appId: "1:801305381550:web:8f5724695f82f28aff3b3f",
  measurementId: "G-7KZVXSXENG",
};

const firebaseApp  = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider();

export {auth,provider}
export default db;