export const joinGenres = (genres) => {
  const str = genres.map((genre) => genre.name).join(', ');

  if (str) return str;
  else return 'no genres';
};
