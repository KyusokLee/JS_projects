// // version8との互換性のためのコード
// import firebase from "firebase/compat/app"
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
    apiKey: "AIzaSyC2WZlUyCJfK9H3G8uimi3Zz6JcJ2Bn7lo",
    authDomain: "firestorelogintest.firebaseapp.com",
    projectId: "firestorelogintest",
    storageBucket: "firestorelogintest.appspot.com",
    messagingSenderId: "867280319645",
    appId: "1:867280319645:web:88bb58c2b0cce9a7e31074",
    measurementId: "G-973VSVQ42V"
};

const firebaseApp = initializeApp(firebaseConfig);
getAnalytics(firebaseApp);
// どこでも使えるように export
export default firebaseApp;