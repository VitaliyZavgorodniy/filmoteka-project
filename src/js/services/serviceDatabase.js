import { initializeApp } from "firebase/app";

import { firebaseConfig } from "./firebaseConfig";

import {
  getDatabase,
  ref,
  set,
  child,
  update,
  remove,
  push,
  get
} from "firebase/database";

export const addToWatched = async (uid, data) => {
  // const list = await getFromWatched(uid);

  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const listRef = ref(db, `user-watched/${uid}`);
  const newItemRef = push(listRef);

  await set(newItemRef, data);
  return true;
};

export const getFromWatched = async (uid) => {
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  const response = await get(child(ref(db), `user-watched/${uid}`)).catch(
    (error) => console.error(error)
  );

  if (response.val()) {
    const list = Object.values(response.val());
    localStorage.setItem("watched", JSON.stringify(list));

    return list;
  } else {
    localStorage.setItem("watched", JSON.stringify([]));
  }

  return [];
};
