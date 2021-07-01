import firebase from "firebase";
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyA0n7VoEkZ7WwKA7WxhX0sZenfUhBeEi4Y",
  authDomain: "facebook-clone-cedf4.firebaseapp.com",
  projectId: "facebook-clone-cedf4",
  storageBucket: "facebook-clone-cedf4.appspot.com",
  messagingSenderId: "894186370078",
  appId: "1:894186370078:web:43e22b9136f75fdec36a0f",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const storage = firebase.storage();

export { db, storage };
