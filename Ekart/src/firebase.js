import firebase from "firebase"
import 'firebase/firestore'
import "firebase/auth"

var firebaseApp = firebase.initializeApp({
  apiKey: ,
    authDomain: ,
    databaseURL: ,
    projectId: ,
    storageBucket: ,
    messagingSenderId: ,
    appId: ,
    measurementId: 
})
var db = firebaseApp.firestore()
export const auth = firebaseApp.auth()
export {db};
