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
    renderTrailer(youtubeKey);
  });
};

const closeTrailer = (e) => {
  const element = e.target.getAttribute('data-action');
  const trailerPlayerRef = document.querySelector('.trailer-player');

  if (element === 'close-modal') return (trailerPlayerRef.innerHTML = '');
};

store.refs.rootDetails.addEventListener('click', closeTrailer);
