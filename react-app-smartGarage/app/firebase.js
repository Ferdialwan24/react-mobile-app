import { initializeApp } from "firebase/app";
import { getDatabase, ref, onValue } from "firebase/database";
import "firebase/database";

const firebaseConfig = {
    apiKey: "AIzaSyBIsICzYVtSuTFB8gahe5xlQYyjkOSheDQ",
    authDomain: "react-app-smartgarage-8ab2e.firebaseapp.com",
    databaseURL: "https://react-app-smartgarage-8ab2e-default-rtdb.firebaseio.com",
    projectId: "react-app-smartgarage-8ab2e",
    storageBucket: "react-app-smartgarage-8ab2e.appspot.com",
    messagingSenderId: "654341913145",
    appId: "1:654341913145:web:d31f90789765a7d2ababe8"
  };

const app = initializeApp(firebaseConfig);
const db = getDatabase();

export { app, db, ref, onValue };