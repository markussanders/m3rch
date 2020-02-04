import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAam3Usr5Q4b6erdAlFXVRg6C9PNknd3gw",
    authDomain: "m3rch-db.firebaseapp.com",
    databaseURL: "https://m3rch-db.firebaseio.com",
    projectId: "m3rch-db",
    storageBucket: "m3rch-db.appspot.com",
    messagingSenderId: "723421491038",
    appId: "1:723421491038:web:a16cec05b67b236e27e9cf",
    measurementId: "G-TT7039L90C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;