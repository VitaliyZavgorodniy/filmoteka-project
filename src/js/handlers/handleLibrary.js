import { addToWatched } from "../services/firebase/databaseService";

export const handleAddToWatched = (data, callback) => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.uid)
    addToWatched(user?.uid, data)
      .then((res) => (res ? callback() : null))
      .catch((err) => console.error(err));
};

export const handleAddToQueue = (data) => {};
