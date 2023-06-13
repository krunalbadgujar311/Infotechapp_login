import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyD5sKKt_c7Ch30rLKG9Fv5G4qLmfBUh7CA",
    authDomain: "infotechapplogin.firebaseapp.com",
    projectId: "infotechapplogin",
    storageBucket: "infotechapplogin.appspot.com",
    messagingSenderId: "528575650903",
    appId: "1:528575650903:web:839fd443f60014eeddd712",
    measurementId: "G-S6PNFV8Q85"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };