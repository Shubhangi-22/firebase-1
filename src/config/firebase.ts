// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider} from "firebase/auth";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAsClliXhZMHSvoiCDefHlpwmSR_fInJxQ",
  authDomain: "authentication-2c759.firebaseapp.com",
  projectId: "authentication-2c759",
  storageBucket: "authentication-2c759.appspot.com",
  messagingSenderId: "467244252974",
  appId: "1:467244252974:web:1903f91f385ed48aaec4bf"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const provider=new GoogleAuthProvider();
export const db= getFirestore(app);