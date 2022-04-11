import "./firebase";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const provider = new GoogleAuthProvider();
const auth = getAuth();

export const loginGoogle = async () =>
  await signInWithPopup(auth, provider)
    .then(res => {
      const { uid, displayName } = res.user;

      localStorage.setItem("user", JSON.stringify({ uid, displayName }));

      return { uid, displayName, status: 200 };
    })
    .catch(err => {
      console.error(err);
      return { status: 500 };
    });
