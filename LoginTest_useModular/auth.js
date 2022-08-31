import { getAuth } from "firebase/auth";
import firebaseApp from "./initializeApp";

const authService = getAuth(firebaseApp);