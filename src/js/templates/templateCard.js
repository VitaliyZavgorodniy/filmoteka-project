export const templateCard = (
  id,
  poster_path,
  title,
  genresInfo,
  releaseYear,
  vote_average
) => `
  <li class="card" data-id="${id}">
    <img
      class="card__thumb"
      src="https://themoviedb.org/t/p/w342${poster_path}"
      alt="${title}"
      loading="lazy"
      data-id="${id}"
    >
    <h2 class="card__title">${title}</h2>
    <p class="card__text">
      <span>${genresInfo} | ${releaseYear}</span>
      <span class="card__rating">${vote_average}</span>
    </p>
  </li>
`;