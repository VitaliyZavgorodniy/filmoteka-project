export const filterGenres = (genres, ids) =>
  ids
    .map((id) => genres.find((genre) => genre.id === id))
    .map((item) => item?.name)
    .join(", ");