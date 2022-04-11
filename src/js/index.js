import { fetchGenres } from "./services/serviceMoviesAPI";
import { fetchTrending } from "./services/serviceMoviesAPI";
import { renderGallery } from "./services/renderGalleryTrendingList";

const state = {
  isLoading: false,
  isSearching: false,
  genres: [],
  list: [],
  searchQuery: "",
  currentPage: 1,
  totalPages: null,
  watchedList: [],
};
fetchGenres()
  .then((res) => (state.genres = res))
  .then(() => {
    fetchMovies();
  });
const fetchMovies = () => {
  const { isSearching, searchQuery, currentPage } = state;
  const fetchList = isSearching ? fetchSearch : fetchTrending;

  fetchList(currentPage, searchQuery)
    .then((res) => {
      const { list, total_pages } = res;

      state.list = list;
      state.totalPages = total_pages;
    })
    .then(() => {
      const { genres, list, currentPage, totalPages } = state;

      renderGallery(genres, list);
    })
    .catch((e) => console.error(e));
};
