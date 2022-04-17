import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBTEJ8S9sDeFUDWwsupLtCPzBlO6eBG6hM",
  authDomain: "assignment-ten-auth.firebaseapp.com",
  projectId: "assignment-ten-auth",
  storageBucket: "assignment-ten-auth.appspot.com",
  messagingSenderId: "958269571489",
  appId: "1:958269571489:web:3465867b7dcd00a0e14be0"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;