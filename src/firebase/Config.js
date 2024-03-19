import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import {getStorage} from 'firebase/storage';
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBkoFpbEuZdWTXN1RtA7odTgppT50Uo9O0",
  authDomain: "cheelbase-9fb87.firebaseapp.com",
  projectId: "cheelbase-9fb87",
  storageBucket: "cheelbase-9fb87.appspot.com",
  messagingSenderId: "464290770413",
  appId: "1:464290770413:web:d45095b5d780775f740be4",
  measurementId: "G-JJE44FV7GK",
  databaseURL:"https://console.firebase.google.com/project/cheelbase-9fb87/firestore/data/~2Fqrcode~2FNFankAMv9fsJs3Vx02JX",
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const imageDb = getStorage(app);
const storage = getStorage(app);
export { db, imageDb, app, storage };