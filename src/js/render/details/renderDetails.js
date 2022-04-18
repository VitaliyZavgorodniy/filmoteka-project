import { store } from '../../store';
import languagePackage from '../../store/languagePackage.json';

import { openTrailer } from '../../handlers/handleTrailer';
import { closeDetails } from '../../handlers/handleDetails';

import { renderDetailsLibraryButton } from './renderDetailsLibraryButton';
import { renderDetailsLogin } from './renderDetailsLogin';
import { templateDetails } from '../../templates/templateDetails';

import { checkToken } from '../../utils/checkToken';
import { joinGenres } from '../../utils/joinGenres';

export const renderDetails = (movie) => {
  const { language } = store;
  const { rootDetails } = store.refs;
  const {
    title,
    original_title,
    popularity,
    overview,
    vote_average,
    vote_count,
    genres,
    poster_path,
    id,
  } = movie;

  const markup = templateDetails(
    languagePackage,
    language,
    poster_path,
    title,
    original_title,
    vote_average,
    vote_count,
    popularity,
    joinGenres(genres),
    overview,
    id
  );

  rootDetails.innerHTML = '';
  rootDetails.insertAdjacentHTML('afterbegin', markup);

  if (checkToken()) {
    renderDetailsLibraryButton('watched', movie);
    renderDetailsLibraryButton('queue', movie);
  } else {
    renderDetailsLogin(movie);
  }

  openTrailer();

  document
    .querySelector('[data-modal-close]')
    .addEventListener('click', closeDetails);
};
