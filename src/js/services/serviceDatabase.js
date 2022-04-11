import "./firebase";
import firebase from "firebase/app";
import "firebase/firestore";

const db = firebase.firestore();

export const fetchWatchedList = async (uid) => {
  const refData = db.collection("watched").doc(uid);

  try {
    return await refData.get().then((doc) => {
      if (doc.exists) return doc.data().list;
      else return [];
    });
  } catch (err) {
    console.error(err);
    return { status: 500 };
  }
};

export const updateWatchedList = async (uid, data) => {
  const refData = db.collection("watched").doc(uid);

  try {
    await refData.get().then(async (doc) => {
      if (doc.exists)
        await refData.update({
          list: firebase.firestore.FieldValue.arrayUnion(data),
        });
      else
        await db
          .collection("watched")
          .doc(uid)
          .set({ list: [data] })
          .then(() => ({ result: "ok" }));
    });

    return { status: 200 };
  } catch (err) {
    console.error(err);
    return { status: 500 };
  }
};

export const removeWatchedList = async (uid, data) => {
  const refData = db.collection("watched").doc(uid);

  try {
    await refData.update({
      list: firebase.firestore.FieldValue.arrayRemove(data),
    });

    return { status: 200 };
  } catch (err) {
    console.error(err);
    return { status: 500 };
  }
};

export const fetchQueuedList = async (uid) => {
  const refData = db.collection("queued").doc(uid);

  try {
    return await refData.get().then((doc) => {
      if (doc.exists) return doc.data().list;
      else return [];
    });
  } catch (err) {
    console.error(err);
    return { status: 500 };
  }
};

export const updateQueuedList = async (uid, data) => {
  const refData = db.collection("queued").doc(uid);

  try {
    await refData.get().then(async (doc) => {
      if (doc.exists)
        await refData.update({
          list: firebase.firestore.FieldValue.arrayUnion(data),
        });
      else
        await db
          .collection("queued")
          .doc(uid)
          .set({ list: [data] })
          .then(() => ({ result: "ok" }));
    });

    return { status: 200 };
  } catch (err) {
    console.error(err);
    return { status: 500 };
  }
};

export const removeQueuedList = async (uid, data) => {
  const refData = db.collection("queued").doc(uid);

  try {
    await refData.update({
      list: firebase.firestore.FieldValue.arrayRemove(data),
    });

    return { status: 200 };
  } catch (err) {
    console.error(err);
    return { status: 500 };
  }
};
