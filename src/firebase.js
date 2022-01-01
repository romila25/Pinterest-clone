import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCjKzd4hvo9Y5NY6Xs7F9mN6V0VJQxh51s",
    authDomain: "slack-clone-c2779.firebaseapp.com",
    projectId: "slack-clone-c2779",
    storageBucket: "slack-clone-c2779.appspot.com",
    messagingSenderId: "542117040515",
    appId: "1:542117040515:web:090013fbdae071cede26b6"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const auth = getAuth();
const provider = new GoogleAuthProvider();

export default db;
export { auth, provider };