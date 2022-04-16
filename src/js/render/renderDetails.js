import { store } from '../store';

import { closeDetails } from '../handlers/handleDetails';

import {
  renderWatchButton,
  renderQueueButton,
  renderLoginButton,
} from './renderDetailsButtons';
import { templateDetails } from '../templates/templateDetails';

import { checkToken } from '../utils/checkToken';
import { joinGenres } from '../utils/joinGenres';
import { changeModalLanguage } from '../handlers/changeLanguage';

export const renderDetails = (movie) => {
  const { rootDetails } = store.refs;
  const {
    original_title,
    popularity,
    overview,
    vote_average,
    vote_count,
    genres,
    poster_path,
  } = movie;

  const markup = templateDetails(
    poster_path,
    original_title,
    vote_average,
    vote_count,
    popularity,
    joinGenres(genres),
    overview
  );

  rootDetails.innerHTML = '';
  rootDetails.insertAdjacentHTML('afterbegin', markup);

  if (checkToken()) {
    renderWatchButton(movie);
    renderQueueButton(movie);
  } else {
    renderLoginButton(movie);
  }

  document
    .querySelector('[data-modal-close]')
    .addEventListener('click', closeDetails);
  changeModalLanguage()
};
