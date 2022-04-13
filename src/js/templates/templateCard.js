export const templateCard = (
  id,
  poster_path,
  title,
  genresInfo,
  releaseYear,
  vote_average
) => `
  <li class="card" data-id="${id}">
    <div class="card__thumb" data-id="${id}"> 
      <img
        class="card__image"
        src="https://themoviedb.org/t/p/w342${poster_path}"
        alt="${title}"
        loading="lazy"
        data-id="${id}"
      >
    </div>
    <h4 class="card__title" data-id="${id}">${title}</h4>
    <p class="card__text" data-id="${id}">
      <span>${genresInfo} | ${releaseYear}</span>
      <span class="card__rating">${vote_average}</span>
    </p>
  </li>
`;
