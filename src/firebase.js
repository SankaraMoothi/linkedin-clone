import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCj3EfvjrOW7eCKE_cjy7wubJAO-Q7O6Ps",
  authDomain: "linkedin-clone-bd942.firebaseapp.com",
  projectId: "linkedin-clone-bd942",
  storageBucket: "linkedin-clone-bd942.appspot.com",
  messagingSenderId: "1091541739790",
  appId: "1:1091541739790:web:18573ef48a021e77cecf5f",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
