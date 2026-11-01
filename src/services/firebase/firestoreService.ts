import {
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc,
  deleteDoc
} from "firebase/firestore";
import { firestore } from "./firebase";

function database() {
  if (!firestore) throw new Error("Firestore is not configured");
  return firestore;
}

export async function getRecord<T>(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(database(), collectionName, id));
  return snapshot.exists() ? snapshot.data() as T : null;
}

export async function setRecord<T>(
  collectionName: string,
  id: string,
  value: T
) {
  await setDoc(doc(database(), collectionName, id), value);
}

export async function deleteRecord(collectionName: string, id: string) {
  await deleteDoc(doc(database(), collectionName, id));
}

export async function listRecords<T>(collectionName: string) {
  const snapshot = await getDocs(collection(database(), collectionName));
  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data()
  })) as Array<T & { id: string }>;
}
