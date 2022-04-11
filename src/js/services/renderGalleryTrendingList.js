const refs = {
  gallery: document.querySelector(`.gallery-list`),
};
export function renderGallery(genres, list) {
  const filterGenres = (genre_ids) =>
    genre_ids
      .map((id) => genres.find((genre) => genre.id === id))
      .map((item) => item?.name)
      .join(", ");

  const mappedGenres = (genres) => genres.map((genre) => genre.name).join(", ");
  const markup = list
    .map(
      ({
        poster_path,
        id,
        genre_ids,
        genres,
        title,
        original_name,
          release_date,
        vote_average
        }) => {
       
        const name = title ? title : original_name;
        const genreList = genres
          ? mappedGenres(genres)
          : filterGenres(genre_ids);
        return `      <li class="gallery-list__item data-id="${id}">
        <div class="gallery-list__thumb">
          <img
            src="https://image.tmdb.org/t/p/w220_and_h330_face/${poster_path}"
            alt=${name}
             loading="lazy"
              data-id="${id}"
          />
        </div>
        <div class="gallery-list__content">
          <h2 class="galeery-list__title ">${name}</h2>
          <p class="gallery-list__text ">
            ${genreList} | ${release_date}<span>${vote_average}</span>
          </p>
        </div>
      </li>`;
      }
    )
    .join(``);
  refs.gallery.insertAdjacentHTML(`beforeend`, markup);
}
