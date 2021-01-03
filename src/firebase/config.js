import firebase from "firebase/app"
import "firebase/firebase-firestore"

const firebaseConfig = {
    apiKey: "AIzaSyDbfnTnPxMF8_VCpJjPbDmCTfAj-NE6qu0",
    authDomain: "vue-firebase-project-f1d93.firebaseapp.com",
    projectId: "vue-firebase-project-f1d93",
    storageBucket: "vue-firebase-project-f1d93.appspot.com",
    messagingSenderId: "796885842205",
    appId: "1:796885842205:web:89531eef934650543389f4"
  };

// init firebase
firebase.initializeApp(firebaseConfig)


// init firestore service
const projectFirestore = firebase.firestore()
const timestamp = firebase.firestore.FieldValue.serverTimestamp


export { projectFirestore, timestamp }