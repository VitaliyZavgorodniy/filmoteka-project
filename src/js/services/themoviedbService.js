import axios from "axios";

// const API_URL = process.env.TMDB_API_URL;
// const API_KEY = process.env.TMDB_API_KEY;

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "85f8b312958212858b9ad0c0c9cc6fdf"
};

export const fetchGenres = async () => {
  const endpoints = [`genre/movie/list`, `genre/tv/list`];

  const response = await axios.all(
    endpoints.map((endpoint) =>
      axios.get(`/${endpoint}`).catch((e) => console.error(e))
    )
  );

  return response[0].data.genres.concat(response[1].data.genres);
};

export const fetchTrending = async (page = 1) => {
  const response = await axios
    .get(`/trending/movie/day`, {
      params: {
        page
      }
    })
    .catch((e) => console.error(e));

  return response.data;
};

export const fetchSearch = async (page = 1, query) => {
  const response = await axios
    .get(`/search/movie`, {
      params: {
        language: "en-US",
        include_adult: false,
        page,
        query
      }
    })
    .catch((e) => console.error(e));

  return response.data;
};

export const fetchSingleMovie = async (id) => {
  const response = await axios
    .get(`/movie/${id}`)
    .catch((e) => console.error(e));

  return response.data;
};
