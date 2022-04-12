import { getMovie } from "../render/renderMovieCard";

const refs = {
  backdrop: document.querySelector("[data-modal]"),
  closeBtn: document.querySelector("[data-modal-close]"),
  modal: document.querySelector(".modal"),
  gallery: document.querySelector(".gallery"),
};

const toggleBackdrop = () => refs.backdrop.classList.toggle("is-hidden");

const onEscClick = (e) => {
  if (e.code === "Escape") {
    toggleBackdrop();
    document.removeEventListener("keydown", onEscClick);
  }
};

const openModal = () => {
  toggleBackdrop();
  document.addEventListener("keydown", onEscClick);
};

const closeModal = () => {
  toggleBackdrop();
  document.removeEventListener("keydown", onEscClick);
};
refs.closeBtn.addEventListener("click", closeModal);

const onBackdropClick = (e) => {
  if (e.currentTarget === e.target) {
    closeModal();
  }
};
refs.backdrop.addEventListener("click", onBackdropClick);

const onMovieCardClick = (e) => {
  if (!e.target.classList.contains === "card") return;

  const movieId = e.target.closest(".card").getAttribute("data-id");
  getMovie(movieId);
  openModal();
};
refs.gallery.addEventListener("click", onMovieCardClick);
