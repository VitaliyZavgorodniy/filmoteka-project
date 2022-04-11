import { filterGenres } from "../utils/filterGenres";
import { store } from "../store";

export const renderGallery = (list) => {
  const { genres } = store;
  const { rootGallery } = store.refs;

  const markup = list
    .map(
      ({ poster_path, id, genre_ids, title, release_date, vote_average }) => {
        return `<li class="card" data-id="${id}">
                  <img
                    class="card__thumb"
                    src="https://themoviedb.org/t/p/w440_and_h660_face${poster_path}"
                    alt="${title}"
                    loading="lazy"
                    data-id="${id}"
                  >
                  <h2 class="card__title">${title}</h2>
                  <p class="card__text">
                    <span>${filterGenres(
                      genres,
                      genre_ids
                    )} | ${release_date}</span>
                    <span class="card__rating">${vote_average}</span>
                  </p>
                </li>`;
      }
    )
    .join("");

  rootGallery.innerHTML = markup;
};
