import { store } from "../store";
import { filterGenres } from "../utils/filterGenres";
import { joinGenres } from "../utils/joinGenres";
import { parseYear } from "../utils/parseYear";
import { templateCard } from "../templates/templateCard";

export const renderGallery = (list) => {
  const { genresList, mode } = store;
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

        console.log(list);

        return templateCard(
          id,
          poster_path,
          title,
          genresInfo,
          releaseYear,
          vote_average,
          mode === "watched" || mode === "queue"
        );
      }
    )
    .join("");

  rootGallery.innerHTML = "";
  rootGallery.insertAdjacentHTML("afterbegin", markup);
};
