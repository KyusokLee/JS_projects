import db from "./firebase";
import { collection, getDocs, query, query } from "firebase/firestore";
// queryとgetDocsメソッドでreadができる

// collection 読み込み
const myUserAccount = collection(db, "myUserAccount");
// queryとgetDocsを混ぜて使った方法
// まず、queryでfirebaseで使うqueryに変換
const query = await query(myUserAccount);
// getDocsで、rowを読み込む
const myUserDatas = await getDocs(query);
const newData = myUserDatas.docs.map(doc => ({
    ...doc.data()
}));
