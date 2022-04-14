import './firebase';
import firebase from 'firebase/app';
import 'firebase/firestore';

const db = firebase.firestore();

export const fetchLibrary = async (uid, type = 'watched') => {
  const refData = db.collection(type).doc(uid);

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

export const updateLibrary = async (uid, data, type = 'watched') => {
  const refData = db.collection(type).doc(uid);

  try {
    await refData.get().then(async (doc) => {
      if (doc.exists)
        await refData.update({
          list: firebase.firestore.FieldValue.arrayUnion(data),
        });
      else
        await db
          .collection(type)
          .doc(uid)
          .set({ list: [data] })
          .then(() => ({ result: 'ok' }));
    });

    return { status: 200 };
  } catch (err) {
    console.error(err);
    return { status: 500 };
  }
};

export const removeFromLibrary = async (uid, data, type = 'watched') => {
  const refData = db.collection(type).doc(uid);

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
