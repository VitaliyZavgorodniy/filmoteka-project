export const renderList = (genres, list) => {
  const rootGallery = document.querySelector(".gallery");

  const filterGenres = (genre_ids) =>
    genre_ids
      .map((id) => genres.find((genre) => genre.id === id))
      .map((item) => item?.name)
      .join(", ");

  const mappedGenres = (genres) => genres.map((genre) => genre.name).join(", ");

  const elementHTML = list
    .map(
      ({
        poster_path,
        id,
        genre_ids,
        genres,
        title,
        original_name,
        release_date,
        isWatched
      }) => {
        const name = title ? title : original_name;
        const genreList = genres
          ? mappedGenres(genres)
          : filterGenres(genre_ids);

        return `
          <li class="card" data-id="${id}">
            <img
              class="card__image"
              src="https://themoviedb.org/t/p/w440_and_h660_face${poster_path}"
              alt=${name}
              loading="lazy"
              data-id="${id}"
            >
            <p class="card__title">${name}</p>
            <p class="card__subtitle">
              ${genreList} | ${release_date}
            </p>
          </li>
    `;
      }
    )
    .join("");

  rootGallery.innerHTML = elementHTML;
};
