import firebase from 'firebase/app';
import 'firebase/firestore'
import 'firebase/auth'
import "firebase/storage"

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
export const storage = firebase.storage()

export const provider = new firebase.auth.GoogleAuthProvider()
export const signInWithGoogle = () => auth.signInWithPopup(provider)
export const signOut = () => auth.signOut()
firestore.settings({timestampsInSnapshots : true})

export const createUserProfileDocument = async (user, additionalData) =>{
  if(!user) return;
    // get the reference where the data can might be
    const userRef = firestore.doc(`users/${user.uid}`)
    
    // fetch document location
    const snapshot = await userRef.get()
    if(!snapshot.exists){
      const {displayName, email, photoURL} = user
      const createAt = new Date()
      try {
        await userRef.set({
          displayName,
          email,
          createAt,
          photoURL,
          ...additionalData
        })
      } catch (error) {
        console.error("errore nella creazione", error)
      }
    }
    return getUserDocument(user.uid)
}
export const getUserDocument = async (uid) => {
  if(!uid) return null;
  try {
    return firestore.collection('users').doc(uid)
  } catch (error) {
    console.error("error fetching the data ", error.message)
  }
}


window.firebase = firebase
export default firebase