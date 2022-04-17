import { fetchMovieTrailer } from '../services/serviceMoviesAPI';
import { store } from '../store';
import { renderTrailer } from '../render/renderTrailer';

export const openTrailer = async () => {
  const watchTrailerBtnRef = document.querySelector('.watch-trailer-btn');

  watchTrailerBtnRef.addEventListener('click', async (e) => {
    const movieId = e.target.getAttribute('data-id');
    const results = await fetchMovieTrailer(movieId);

    const officialTrailer = results.find((trailer) =>
      trailer.name.includes('Official')
    );

    if (!officialTrailer) {
      alert(`Sorry, we didn't find the official trailer`);
      return;
    }

    const { key: youtubeKey } = officialTrailer;
    showTrailer();
    renderTrailer(youtubeKey);
  });

};

const backdropTrailer = document.querySelector('.backdrop-trailer');
const trailerPlayerRef = document.querySelector('.modal-trailer');

const showTrailer = () => {
  backdropTrailer.classList.remove('is-hidden');
  document.addEventListener('keydown', closeOnEscClick);
};

const closeTrailer = () => {
  trailerPlayerRef.innerHTML = '';
  backdropTrailer.classList.add('is-hidden');
  document.removeEventListener('keydown', closeOnEscClick);
};

const closeOnBackdropClick = (e) => {
  if (!e.target === e.currentTarget) return;
  closeTrailer();
};
backdropTrailer.addEventListener('click', closeOnBackdropClick);

const closeOnEscClick = (e) => {
  if (e.code === 'Escape') {
    closeTrailer();
  }
};
