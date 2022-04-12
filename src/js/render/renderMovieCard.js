import { fetchSingleMovie } from "../services/serviceMoviesAPI";

const refs = {
  modalPoster: document.querySelector(".modal__poster"),
  movieContent: document.querySelector(".movie-wrapper"),
};

export const getMovie = async (movieId) => {
  try {
    const getData = await fetchSingleMovie(movieId);
    createCardMarkup(getData);
    createPosterMarkup(getData);
  } catch (error) {}
};

const createPosterMarkup = ({ poster_path, original_title }) => {
  const markup = `
        <img src="https://image.tmdb.org/t/p/w500${poster_path}" loading="lazy" alt="${original_title}" class="modal__img" />
    `;

  refs.modalPoster.innerHTML = "";
  refs.modalPoster.insertAdjacentHTML("afterbegin", markup);
};

const createCardMarkup = ({
  original_title,
  popularity,
  overview,
  vote_average,
  vote_count,
  genres,
}) => {
  const markup = `
      <p class="modal__title">${original_title}</p>
      <table class="modal-table">
        <tr class="modal-table__row">
          <td class="modal-table__title">Vote / Votes</td>
          <td class="modal-table__desc">
            <span class="modal-table__vote">${vote_average}</span> /
            <span class="modal-table__votes">${vote_count}</span>
          </td>
        </tr>
        <tr class="modal-table__row">
          <td class="modal-table__title">Popularity</td>
          <td class="modal-table__desc">${popularity}</td>
        </tr>
        <tr class="modal-table__row">
          <td class="modal-table__title">Original Title</td>
          <td class="modal-table__desc">${original_title}</td>
        </tr>
        <tr class="modal-table__row">
          <td class="modal-table__title">Genre</td>
          <td class="modal-table__desc">${genres.map(
            (genre) => " " + genre.name
          )}</td>
        </tr>
      </table>
      <p class="modal__subtitle">About</p>
      <p class="modal__desc">
        ${overview}
      </p>
    `;

  refs.movieContent.innerHTML = "";
  refs.movieContent.insertAdjacentHTML("afterbegin", markup);
};
