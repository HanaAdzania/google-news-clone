import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCNDNGI7vKppAMpxmK7j6Zn-z-s_ZvZkUg",
    authDomain: "clon-news-bb60a.firebaseapp.com",
    projectId: "clon-news-bb60a",
    storageBucket: "clon-news-bb60a.appspot.com",
    messagingSenderId: "864066123570",
    appId: "1:864066123570:web:278a1aa82cd352afae492b"
  };

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();
