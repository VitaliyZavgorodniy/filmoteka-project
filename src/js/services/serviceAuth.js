import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

import { firebaseConfig } from "./firebase";

export const loginGoogle = async () => {
  const app = initializeApp(firebaseConfig);
  const auth = getAuth(app);
  const provider = new GoogleAuthProvider();

  const response = await signInWithPopup(auth, provider).catch((err) =>
    console.error(err)
  );

  const { displayName, accessToken, uid } = response.user;

  return { displayName, accessToken, uid };
};