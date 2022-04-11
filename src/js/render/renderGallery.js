import { filterGenres } from "../utils/filterGenres";
import { mappedGenres } from "../utils/mappedGenres";
import { parseYear } from "../utils/parseYear";
import { store } from "../store";

export const renderGallery = (list) => {
  const { genresList } = store;
  const { rootGallery } = store.refs;

  const markup = list
    .map(
      ({
        poster_path,
        id,
        genre_ids,
        genres,
        title,
        release_date,
        vote_average,
      }) => {
        const genresInfo = genres
          ? mappedGenres(genres)
          : filterGenres(genresList, genre_ids);

        const releaseYear = parseYear(release_date);

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
                    <span>${genresInfo} | ${releaseYear}</span>
                    <span class="card__rating">${vote_average}</span>
                  </p>
                </li>`;
      }
    )
    .join("");

  rootGallery.innerHTML = markup;
};
