import { store } from '../../store';
import languagePackage from '../../store/languagePackage.json';
import 'sharer.js';

import { openTrailer } from '../../handlers/handleTrailer';
import { closeDetails } from '../../handlers/handleDetails';
import { handleNotification } from '../../handlers/handleNotification';

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

  const link = `${window.location.origin}/?id=${id}`;

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
    id,
    link
  );

  rootDetails.innerHTML = '';
  rootDetails.insertAdjacentHTML('afterbegin', markup);

  Sharer.init();
  const shareButton = document.querySelector('[data-share="link"]');
  shareButton.addEventListener('click', () => {
    const link = shareButton.getAttribute('data-url');
    navigator.clipboard
      .writeText(link)
      .then(() =>
        handleNotification(
          'success',
          languagePackage.shareLinkButton[language]
        )
      );
  });

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
