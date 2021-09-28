// import firebase from 'firebase';

// const firebaseConfig = {
//     apiKey: 'AIzaSyC-6D2xRg7axGKQO4YsgYlbD7r9W_TC_QA',
//     authDomain: 'clone-3842b.firebaseapp.com',
//     projectId: 'clone-3842b',
//     storageBucket: 'clone-3842b.appspot.com',
//     messagingSenderId: '50327514768',
//     appId: '1:50327514768:web:cf052591709d1749dc7215',
//     measurementId: 'G-TJC79KJH1S',
// };

// const firebaseApp = firebase.initializeApp(firebaseConfig);

// const db = firebaseApp.firestore();
// const auth = firebase.auth();

// export { db, auth };
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyC-6D2xRg7axGKQO4YsgYlbD7r9W_TC_QA',
    authDomain: 'clone-3842b.firebaseapp.com',
    projectId: 'clone-3842b',
    storageBucket: 'clone-3842b.appspot.com',
    messagingSenderId: '50327514768',
    appId: '1:50327514768:web:cf052591709d1749dc7215',
    measurementId: 'G-TJC79KJH1S',
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
// const db = firebaseApp.firestore();
const auth = getAuth();

const registerUser = (email, password) =>
    createUserWithEmailAndPassword(auth, email, password);

const userSignin = (email, password) =>
    signInWithEmailAndPassword(auth, email, password);

const userSignOut = () => signOut(auth);
export { registerUser, userSignin, auth, onAuthStateChanged, userSignOut };
