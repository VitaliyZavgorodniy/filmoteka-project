import firebase from "firebase/app";
import "firebase/firestore";
import "./firebase";

const db = firebase.firestore();

export const fetchWatchedList = async (uid) => {
  const refData = db.collection("watched").doc(uid);

  return await refData
    .get()
    .then((doc) => {
      if (doc.exists) return doc.data().list;
      else return [];
    })
    .catch((err) => console.error(err));
};

export const updateWatchedList = async (uid, data) => {
  const refData = db.collection("watched").doc(uid);

  return await refData
    .get()
    .then(async (doc) => {
      if (doc.exists)
        await refData
          .update({
            list: firebase.firestore.FieldValue.arrayUnion(data),
          })
          .then(() => ({ result: "ok" }))
          .catch((err) => console.error(err));
      else
        await db
          .collection("watched")
          .doc(uid)
          .set({ list: [data] })
          .then(() => ({ result: "ok" }))
          .catch((err) => console.error(err));
    })
    .then(() => ({ status: 200 }))
    .catch((err) => console.error(err));
};

export const removeWatchedList = async (uid, data) => {
  const refData = db.collection("watched").doc(uid);

  await refData
    .update({
      list: firebase.firestore.FieldValue.arrayRemove(data),
    })
    .then(() => ({ status: 200 }))
    .catch((err) => console.error(err));
};
