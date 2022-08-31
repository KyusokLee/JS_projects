// nodeを使う方法
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// import { getAuth } from "firebase/auth";
// import { getFirestore } from "firebase/firestore";

// firebaseConginf 情報でfirebase start
firebase.initializeApp(firebaseConfig);
// firestoreを編数に保存
const db = firebase.firestore();

// 必要な場所で使えるようにする
export { db };