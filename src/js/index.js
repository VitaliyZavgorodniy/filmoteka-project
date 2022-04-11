import { clearActive } from "./utils/clearClasses";
import { loginGoogle } from "./services/serviceAuth";

const rootControlPanel = document.querySelector(".control-bar");
const rootSearchBar = document.querySelector('[data-root="search-bar"]');
const rootLibButtons = document.querySelector('[data-root="library-buttons"]');
const pageLinks = document.querySelectorAll(".navigation__link");
const navMenu = document.querySelector(".navigation__menu");
const loginButton = document.querySelector('[data-root="header-login"]');
const loginGoogleBtn = document.querySelector('[data-action="login-google"]');

const renderSearch = () => {
  clearActive(rootControlPanel);
  rootSearchBar.classList.add("active");
};

const renderLib = () => {
  clearActive(rootControlPanel);
  const user = JSON.parse(localStorage.getItem("user"));

  console.log('renderLib', user, user?.uid);

  if (user?.uid) rootLibButtons.classList.add("active");
  else loginButton.classList.add("active");
};

const handleLink = e => {
  const link = e.currentTarget;
  const value = link.getAttribute("data-page");
  clearActive(navMenu);

  link.classList.add("active");

  if (value === "home") renderSearch();
  if (value === "library") renderLib();
};

const handleLogin = () => {
  loginGoogle().then(res => {
    if (res.status === 200) renderLib();
  });
};

loginGoogleBtn.addEventListener("click", handleLogin);
pageLinks.forEach(link => link.addEventListener("click", handleLink));
