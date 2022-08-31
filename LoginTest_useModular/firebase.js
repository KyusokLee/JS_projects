// // ver8との共存
// import firebase from "firebase/compat/app";
// ver9 modular式
import { getFirestore } from "firebase/firestore";
import firebaseApp from "./initializeApp";
// firestoredbの作成
const db = getFirestore(firebaseApp);

// どこでも使えるように export
export default db;