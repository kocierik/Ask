import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyB7CaWOFDQY9d6SA7eqXBBrWBS_EXECyTU",
  authDomain: "sportlive-39adb.firebaseapp.com",
  projectId: "sportlive-39adb",
  storageBucket: "sportlive-39adb.appspot.com",
  messagingSenderId: "316472539993",
  appId: "1:316472539993:web:c2b7f5c9cc6d492d232a48",
  measurementId: "G-CQ7S9K31T8"
};
firebase.initializeApp(firebaseConfig)

export const firestore = firebase.firestore();
export const auth = firebase.auth()
export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()
firestore.settings({timestampsInSnapshots : true})

window.firebase = firebase
export default firebase