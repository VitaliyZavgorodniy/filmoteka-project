export const filterGenres = (genres, indexes) => indexes
  .map((id) => genres.find((genre) => genre.id === id))
  .map((item) => item?.name)
  .join(", ");