import axios from "axios";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.params = {
  api_key: "85f8b312958212858b9ad0c0c9cc6fdf",
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

export const fetchTrending = async (page = 1) =>
  await axios
    .get(`/trending/movie/day`, {
      params: {
        page,
      },
    })
    .then((res) => ({
      list: res.data,
      totalPages: res.total_pages,
      totalItems: res.total_results,
    }))
    .catch((e) => console.error(e));

export const fetchSearch = async (page = 1, query) =>
  await axios
    .get(`/search/movie`, {
      params: {
        language: "en-US",
        include_adult: false,
        page,
        query,
      },
    })
    .then((res) => ({
      list: res.data,
      totalPages: res.total_pages,
      totalItems: res.total_results,
    }))
    .catch((e) => console.error(e));

export const fetchSingleMovie = async (id) =>
  await axios
    .get(`/movie/${id}`)
    .then((res) => ({
      list: res.data,
      totalPages: res.total_pages,
      totalItems: res.total_results,
    }))
    .catch((e) => console.error(e));
