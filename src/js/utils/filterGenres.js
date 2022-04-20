export const filterGenres = (genres, ids) => {
  const str = ids
    .map((id) => genres.find((genre) => genre.id === id))
    .map((item) => item?.name)
    .join(', ');

  if (str) return str;
  else return '';
};
