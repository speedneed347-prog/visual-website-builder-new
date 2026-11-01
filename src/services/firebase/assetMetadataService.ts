import {
  collection,
  addDoc,
  getDocs,
  query,
  where,
  deleteDoc,
  doc
} from "firebase/firestore";
import { firestore } from "./firebase";

export type AssetMetadata = {
  ownerId: string;
  name: string;
  url: string;
  mimeType: string;
  size: number;
  createdAt: string;
};

function database() {
  if (!firestore) throw new Error("Firestore is not configured");
  return firestore;
}

export async function saveAssetMetadata(asset: AssetMetadata) {
  const reference = await addDoc(
    collection(database(), "assetMetadata"),
    asset
  );
  return reference.id;
}

export async function getAssetMetadata(ownerId: string) {
  const result = await getDocs(query(
    collection(database(), "assetMetadata"),
    where("ownerId", "==", ownerId)
  ));

  return result.docs.map((item) => ({
    id: item.id,
    ...item.data()
  }));
}

export async function removeAssetMetadata(id: string) {
  await deleteDoc(doc(database(), "assetMetadata", id));
}
