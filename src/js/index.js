import { store } from "./store";

import "./handlers/handleLink";
import "./handlers/handleLibType";
import "./handlers/handleLogin";
import "./handlers/handleLogout";
import "./handlers/handleSearch";
import "./handlers/handleDetails";

import { fetchGenres } from "./services/serviceMoviesAPI";
import { fetchLibrary } from "./services/serviceDatabase";

import { initHome } from "./pages/home";
import { checkToken } from "./utils/checkToken";

const initIndex = () => {
  fetchGenres()
    .then((res) => {
      store.genresList = res;
    })
    .then(() => {
      if (checkToken()) {
        const { uid } = JSON.parse(localStorage.getItem("user"));

        fetchLibrary(uid).then((res) => (store.watched = res));
      }

      initHome();
    });
};

initIndex();
