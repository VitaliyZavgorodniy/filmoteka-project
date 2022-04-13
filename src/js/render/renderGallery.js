import { store } from "../store";
import { filterGenres } from "../utils/filterGenres";
import { joinGenres } from "../utils/joinGenres";
import { parseYear } from "../utils/parseYear";
import { templateCard } from "../templates/templateCard";

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
          ? joinGenres(genres)
          : filterGenres(genresList, genre_ids);

        const releaseYear = parseYear(release_date);

        return templateCard(
          id,
          poster_path,
          title,
          genresInfo,
          releaseYear,
          vote_average
        );
      }
    )
    .join("");

  rootGallery.innerHTML = "";
  rootGallery.insertAdjacentHTML("beforeend", markup);
};
