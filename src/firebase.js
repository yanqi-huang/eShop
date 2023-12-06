import { initializeApp } from 'firebase/app';
import { getAuth } from "firebase/auth";
import { getFirestore } from "@firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyD9xDPUmz9OSum-qU_IaVwpvshiHOxO9Dc",
    authDomain: "eshop-3ab22.firebaseapp.com",
    projectId: "eshop-3ab22",
    storageBucket: "eshop-3ab22.appspot.com",
    messagingSenderId: "218561550743",
    appId: "1:218561550743:web:f1cf67e3653345a1c10cd2",
    measurementId: "G-N5P1CBRZDL"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

const auth = getAuth(app);

export { db, auth };