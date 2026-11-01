import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged
} from "firebase/auth";
import type { User, Unsubscribe } from "firebase/auth";
import { firebaseAuth } from "./firebase";

function requireAuth() {
  if (!firebaseAuth) {
    throw new Error("Firebase Authentication is not configured");
  }
  return firebaseAuth;
}

export async function registerWithEmail(email: string, password: string) {
  const result = await createUserWithEmailAndPassword(
    requireAuth(), email, password
  );
  return result.user;
}

export async function loginWithEmail(email: string, password: string) {
  const result = await signInWithEmailAndPassword(
    requireAuth(), email, password
  );
  return result.user;
}

export async function logout() {
  await signOut(requireAuth());
}

export function observeAuth(callback: (user: User | null) => void): Unsubscribe {
  return onAuthStateChanged(requireAuth(), callback);
}
