export const templateCard = (
  id,
  poster_path,
  title,
  genresInfo,
  releaseYear,
  vote_average,
  voteShow,
  category
) => `
  <li class="gallery__item">
    <div class="card" data-id="${id}" data-category="${category}">
      <div class="card__thumb" data-id="${id}" data-category="${category}"> 
        <picture class="card__image" data-id="${id}" data-category="${category}">
          <source 
            srcset="https://themoviedb.org/t/p/w342${poster_path}"
            media="(min-width: 1024px)">
          <source 
            srcset="https://themoviedb.org/t/p/w342${poster_path}"
            media="(min-width: 768px)">
          <img 
            data-id="${id}"
            data-category="${category}"
            alt="${title}"
            loading="lazy"
            src="https://themoviedb.org/t/p/w185${poster_path}"
          />
        </picture>
      </div>
      <h4 class="card__title" data-id="${id}" data-category="${category}">${title}</h4>
      <p class="card__text" data-id="${id}" data-category="${category}">
        ${genresInfo} | ${releaseYear}
        ${
          voteShow
            ? '<span class="rating rating_accent">' + vote_average + '</span>'
            : ''
        }
      </p>
    </div>
  </li>
`;
