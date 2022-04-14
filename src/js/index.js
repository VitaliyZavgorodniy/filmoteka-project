import { store, PAGE_STATE_KEY } from './store';

import './handlers/handleLink';
import './handlers/handleLibType';
import './handlers/handleLogin';
import './handlers/handleLogout';
import './handlers/handleSearch';
import './handlers/handleDetails';
import './handlers/handleBtnUp';

import { fetchGenres } from './services/serviceMoviesAPI';
import { initHome } from './pages/home';
import { checkToken } from './utils/checkToken';
import { initLibraryMode } from './pages/library';
import { initPageLayout } from './handlers/handleLink';

(async () => {
  const genres = await fetchGenres();
  store.genresList = genres;

  checkToken();

  const pageState = sessionStorage.getItem(PAGE_STATE_KEY);

  if (!pageState) {
    initHome();
  } else {
    initPageLayout('library');
    initLibraryMode(pageState, 1);
  }
})();
