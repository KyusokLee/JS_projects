// Firestore Test mode 生成

// // Initialize Firebase
// // export 定義: 他のfileでも使えるようにした
// const app = initializeApp(firebaseConfig);
// // analytics 使用
// const analytics = getAnalytics(app);
// // Authentication 使用
// export const auth = getAuth(app);
// // firestore 間数使用
// export const db = getFirestore(app);

//宣言されていない変数に値を割り当てたり、既存に存在するprotoTypeを変更することを防ぐためのcode
'use strict';

const myUserAccount = db.collection("myUserAccount");

myUserAccount.doc("UserData").get().then((doc) => {
    console.log(doc.data());
    console.log("success to get doc id", doc.id);
})