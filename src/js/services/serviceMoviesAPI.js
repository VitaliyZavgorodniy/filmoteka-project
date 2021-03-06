import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
axios.defaults.params = {
  api_key: '85f8b312958212858b9ad0c0c9cc6fdf',
};

export const fetchGenres = async (language = 'en-US') => {
  const endpoints = [`genre/movie/list`, `genre/tv/list`];

  const response = await axios.all(
    endpoints.map((endpoint) =>
      axios
        .get(`/${endpoint}`, { params: { language } })
        .catch((e) => console.error(e))
    )
  );

  return response[0].data.genres.concat(response[1].data.genres);
};

export const fetchTrending = async (language = 'en-US', page = 1, category) =>
  await axios
    .get(`/trending/${category}/day`, {
      params: {
        language,
        page,
      },
    })
    .then((res) => ({
      list: res.data.results,
      totalPages: res.data.total_pages,
      totalItems: res.data.total_results,
    }))
    .catch((e) => console.error(e));

export const fetchSearch = async (
  language = 'en-US',
  page = 1,
  category = 'movie',
  query
) =>
  await axios
    .get(`/search/${category}`, {
      params: {
        language,
        include_adult: false,
        page,
        query,
      },
    })
    .then((res) => ({
      list: res.data.results,
      totalPages: res.data.total_pages,
      totalItems: res.data.total_results,
    }))
    .catch((e) => console.error(e));

export const fetchSingleMovie = async (language = 'en-US', id, category) => {
  const details = await axios
    .get(`/${category}/${id}`, {
      params: { language },
    })
    .then((res) => ({ ...res.data }))
    .catch((e) => console.error(e));

  const cast = await axios
    .get(`/${category}/${id}/credits`, {
      params: { language },
    })
    .then((res) => [...res.data.cast])
    .catch((e) => console.error(e));

  return { ...details, cast };
};

export const fetchMovieTrailer = async (movieId, category) => {
  try {
    const res = await axios.get(`/${category}/${movieId}/videos`);
    return res.data.results;
  } catch (e) {
    return console.error(e);
  }
};
