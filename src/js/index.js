import { store } from "./store";

import "./handlers/handleLink";
import "./handlers/handleLibType";
import "./handlers/handleLogin";
import "./handlers/handleLogout";
import "./handlers/handleSearch";
import { handleGallery } from "./handlers/handleGallery";

import {
  fetchGenres,
  fetchTrending,
  fetchSearch,
  fetchSingleMovie,
} from "./services/serviceMoviesAPI";
import { fetchWatchedList, fetchQueuedList } from "./services/serviceDatabase";

import { initHome } from "./pages/home";
import { checkToken } from "./utils/checkToken";

fetchGenres()
  .then((res) => {
    store.genres = res;

    checkToken();
  })
  .then(() => {
    initHome();
  });
