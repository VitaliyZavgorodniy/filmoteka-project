import { store } from "./store";

import "./handlers/handleLink";
import "./handlers/handleLibType";
import "./handlers/handleLogin";
import "./handlers/handleLogout";
import "./handlers/handleSearch";
import "./handlers/handleDetails";

import { fetchGenres } from "./services/serviceMoviesAPI";
import { initHome } from "./pages/home";

(async () => {
  const genres = await fetchGenres();

  store.genresList = genres;

  initHome();
})();
