import "regenerator-runtime/runtime";
import { renderList } from "./render/renderList";
import { renderPagination } from "./render/renderPagination";
import { renderLogin } from "./render/renderLogin";
import { renderControl } from "./render/renderControl";
import { loginGoogle } from "./services/firebase/loginService";
import { getFromWatched } from "./services/firebase/databaseService";
import { handleDetails } from "./handlers/handleDetails";
import { checkLogged } from "./handlers/checkLogged";

const rootGallery = document.querySelector(".gallery");
const rootModal = document.querySelector(".modal__wrapper");

const state = {
  isLogged: false,
  user: null,
  mode: "watched",
  genres: [],
  list: []
};

checkLogged();

const toggleModal = (e) => {
  const action = e.target.getAttribute("data-action");

  if (action === "close-modal" || e.code === "Escape")
    rootModal.classList.remove("active");
};

const handleLogin = () =>
  loginGoogle().then((res) => {
    localStorage.setItem("user", JSON.stringify(res));
    setStateLogin();
  });

const handleShowWatched = () => console.log("handleShowWatched");

const handleShowQueue = () => console.log("handleShowQueue");

const fetchMovies = () => {
  const {
    user: { uid }
  } = state;

  getFromWatched(uid)
    .then((res) => (state.list = res))
    .then(() => {
      const { genres, list } = state;
      renderList(genres, list);
    })
    .catch((e) => console.error(e));
};

const setStateLogin = (user) => {
  state.isLogged = true;
  state.user = user;

  renderControl();

  const btnWatched = document.querySelector('[data-action="show-watched"]');
  const btnQueue = document.querySelector('[data-action="show-queue"]');

  btnWatched.addEventListener("click", handleShowWatched);
  btnQueue.addEventListener("click", handleShowQueue);

  fetchMovies();
};

const setStateLogout = () => {
  state.isLogged = false;

  renderLogin();

  const btnLogin = document.querySelector('[data-action="login"]');
  btnLogin.addEventListener("click", handleLogin);
};

(() => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user?.uid) setStateLogin(user);
  else setStateLogout();
})();

document.addEventListener("keydown", toggleModal);
rootModal.addEventListener("click", toggleModal);
rootGallery.addEventListener("click", handleDetails);
