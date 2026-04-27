// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore , collection } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBggbgF0Dqwa0LFTetQb1UKpHgZaVQ0SOM",
  authDomain: "g6database-ec22a.firebaseapp.com",
  projectId: "g6database-ec22a",
  storageBucket: "g6database-ec22a.firebasestorage.app",
  messagingSenderId: "660013119000",
  appId: "1:660013119000:web:b31b7479897c96692ef56d",
  measurementId: "G-65XYYPH5S4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const User = collection(db , 'users');
const Posts = collection(db , 'posts');

export {User , Posts , db};