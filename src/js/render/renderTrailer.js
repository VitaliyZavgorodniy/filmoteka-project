import { templateTrailer } from '../templates/templateTrailer';

export const renderTrailer = (youtubeKey) => {
  const markup = templateTrailer(youtubeKey);
  const trailerPlayerRef = document.querySelector('.trailer-player');

  trailerPlayerRef.innerHTML = '';
  trailerPlayerRef.style.display = 'block';
  trailerPlayerRef.insertAdjacentHTML('afterbegin', markup);
};
