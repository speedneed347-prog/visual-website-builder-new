import {
  collection,
  addDoc,
  getDocs,
  doc,
  updateDoc,
  deleteDoc,
  query,
  where,
  orderBy
} from "firebase/firestore";
import type { BuilderDocument } from "../../document/documentFactory";
import { firestore } from "./firebase";

const COLLECTION = "projects";

function requireDatabase() {
  if (!firestore) throw new Error("Firebase Firestore is not configured");
  return firestore;
}

export async function saveCloudProject(
  ownerId: string,
  document: BuilderDocument
) {
  const db = requireDatabase();

  const reference = await addDoc(collection(db, COLLECTION), {
    ownerId,
    document,
    name: document.name,
    updatedAt: new Date().toISOString()
  });

  return reference.id;
}

export async function listCloudProjects(ownerId: string) {
  const db = requireDatabase();
  const projectsQuery = query(
    collection(db, COLLECTION),
    where("ownerId", "==", ownerId),
    orderBy("updatedAt", "desc")
  );

  const snapshot = await getDocs(projectsQuery);

  return snapshot.docs.map((item) => ({
    id: item.id,
    ...item.data()
  }));
}

export async function updateCloudProject(
  id: string,
  document: BuilderDocument
) {
  await updateDoc(doc(requireDatabase(), COLLECTION, id), {
    document,
    name: document.name,
    updatedAt: new Date().toISOString()
  });
}

export async function deleteCloudProject(id: string) {
  await deleteDoc(doc(requireDatabase(), COLLECTION, id));
}
