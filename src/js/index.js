import "regenerator-runtime/runtime";
import {
  fetchGenres,
  fetchSearch,
  fetchTrending,
  fetchSingleMovie
} from "./services/themoviedbService";
import { renderList } from "./render/renderList";
import { renderPagination } from "./render/renderPagination";
import { handleDetails } from "./handlers/handleDetails";
import { checkLogged } from "./handlers/checkLogged";

const rootSearchForm = document.querySelector(".search");
const rootGallery = document.querySelector(".gallery");
const rootPagination = document.querySelector(".pagination");
const rootModal = document.querySelector(".modal__wrapper");

const state = {
  isLoading: false,
  isSearching: false,
  genres: [],
  list: [],
  searchQuery: "",
  currentPage: 1,
  totalPages: null
};

fetchGenres()
  .then((res) => (state.genres = res))
  .then(() => {
    checkLogged();
    fetchMovies();
  });

const toggleModal = (e) => {
  const action = e.target.getAttribute("data-action");

  if (action === "close-modal" || e.code === "Escape")
    rootModal.classList.remove("active");
};

const handlePage = (e) => {
  state.currentPage = e.target.getAttribute("data-page");
  fetchMovies(state.currentPage);
};

const fetchMovies = () => {
  const { isSearching, searchQuery, currentPage } = state;
  const fetchList = isSearching ? fetchSearch : fetchTrending;

  fetchList(currentPage, searchQuery)
    .then((res) => {
      const { results, total_pages } = res;

      state.list = results;
      state.totalPages = total_pages;
    })
    .then(() => {
      const { genres, list, currentPage, totalPages } = state;

      renderList(genres, list);
      renderPagination(totalPages, currentPage);
    })
    .catch((e) => console.error(e));
};

const handleSearchForm = (e) => {
  e.preventDefault();

  const {
    elements: { searchQuery }
  } = e.currentTarget;

  state.searchQuery = searchQuery.value.trim();

  if (state.searchQuery) {
    state.isSearching = true;
    state.currentPage = 1;
    fetchMovies();
  }
};

document.addEventListener("keydown", toggleModal);
rootModal.addEventListener("click", toggleModal);
rootPagination.addEventListener("click", handlePage);
rootGallery.addEventListener("click", handleDetails);
rootSearchForm.addEventListener("submit", handleSearchForm);
