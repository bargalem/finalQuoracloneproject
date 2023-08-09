// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
 import {getAuth,GoogleAuthProvider} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyAir4WADHjISqJoWWJPVVMj96e4J4DPJ7A",
  authDomain: "qoura-clone-project.firebaseapp.com",
  projectId: "qoura-clone-project",
  storageBucket: "qoura-clone-project.appspot.com",
  messagingSenderId: "243817943569",
  appId: "1:243817943569:web:5f73ff9fbbf87aeff1d7b0",
  measurementId: "G-74T40ZWVQ5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth();
const provider=new GoogleAuthProvider();

export{auth,provider,app}
