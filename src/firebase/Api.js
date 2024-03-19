import {
  collection,
  addDoc,
  updateDoc,
  onSnapshot,
  deleteDoc,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import { db } from "../firebase/Config";

const collectionName = "cheelbase";

export const saveUser = (newUser) =>
  addDoc(collection(db, collectionName), newUser);

export const saveQrCodeData = (newUser) =>
  addDoc(collection(db, collectionName), newUser);

export const updateUser = (id, updatedFields) =>
  updateDoc(doc(db, collectionName, id), updatedFields);

export const onGetUsers = (callback) => {
  const unsub = onSnapshot(collection(db, collectionName), callback);
  return unsub;
};

export const getUsers = () => getDocs(collection(db, collectionName));

export const deleteUser = (id) => deleteDoc(doc(db, collectionName, id));

export const getUser = (id) => getDoc(doc(db, collectionName, id));
