import { getFromWatched } from "../services/firebase/databaseService";

export const checkLogged = () => {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    getFromWatched(user?.uid);
    return { isLogged: true, user };
  }
  return { isLogged: false, user: null };
};