export const templateCard = (
  id,
  poster_path,
  title,
  genresInfo,
  releaseYear,
  vote_average,
  voteShow
) => `
  <li class="gallery__item">
    <div class="card" data-id="${id}">
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
        ${genresInfo} | ${releaseYear}
        ${voteShow ? '<span class="rating rating_accent">' + vote_average + '</span>' : ""}
      </p>
    </div>
  </li>
`;
