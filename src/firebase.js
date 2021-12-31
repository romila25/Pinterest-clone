import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBKXyQSENCi4ztLzhPaOMN5r32x4Ydd-WY",
    authDomain: "slack-clone-challenge-f2283.firebaseapp.com",
    projectId: "slack-clone-challenge-f2283",
    storageBucket: "slack-clone-challenge-f2283.appspot.com",
    messagingSenderId: "910344846370",
    appId: "1:910344846370:web:e8799b961d8383d8ed1e7b"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

export default db;