import firebase from "firebase/app";
import "firebase/auth";
import "./firebase";

const provider = new firebase.auth.GoogleAuthProvider();

export const loginGoogle = async () =>
  await firebase
    .auth()
    .signInWithPopup(provider)
    .then((res) => {
      return {
        displayName: res.user.displayName,
        uid: res.user.uid,
      };
    })
    .catch((err) => console.error(err));
