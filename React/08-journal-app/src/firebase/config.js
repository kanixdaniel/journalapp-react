// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore/lite'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7-7u9WFePKP52H51km80qsHSRI5EpN7g",
    authDomain: "journalapp-react-b0ee0.firebaseapp.com",
    projectId: "journalapp-react-b0ee0",
    storageBucket: "journalapp-react-b0ee0.appspot.com",
    messagingSenderId: "417535459636",
    appId: "1:417535459636:web:cd2b372ab9e9c97c08e561"
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp);
export const firebaseDB = getFirestore(firebaseApp);