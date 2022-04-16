import headerLng from '../utils/data/header.json';
import { store } from '../store';
import { initHome } from '../pages/home';

const select = document.querySelector('#lang');

select.addEventListener('change', changeLanguage);

export function changeLanguage() {
  let lang = select.value;
  store.language = lang;
  localStorage.setItem('language', lang);
  setHeaderData(lang);

  initHome();
}
function setHeaderData(lang) {
  document.querySelector('.logo__text').textContent = `${
    headerLng['header-logo'][`${lang}`]
  }`;
  document.querySelector(
    '.navigation__link[data-page="home"]'
  ).textContent = `${headerLng['home'][`${lang}`]}`;
  document.querySelector(
    '.navigation__link[data-page="library"]'
  ).textContent = `${headerLng['library'][`${lang}`]}`;
  document.querySelector(`.search-form__input`).placeholder = `${
    headerLng['placeholder'][`${lang}`]
  }`;
  document.querySelector('[data-action="watched"]').textContent = `${
    headerLng['watched'][`${lang}`]
  }`;
  document.querySelector('[data-action="queue"]').textContent = `${
    headerLng['queue'][`${lang}`]
  }`;
  document.querySelector('[data-action="logout"]').textContent = `${
    headerLng['login'][`${lang}`]
  }`;
}
export function changeModalLanguage() {
  switch (select.value) {
    case 'ru':
      document.querySelector(
        '.md-vote-lang'
      ).textContent = `${headerLng.votes.ru}`;
      document.querySelector(
        '.md-popularity-lang'
      ).textContent = `${headerLng.popularity.ru}`;
      document.querySelector(
        '.md-title-lang'
      ).textContent = `${headerLng.title.ru}`;
      document.querySelector(
        '.md-genre-lang'
      ).textContent = `${headerLng.genres.ru}`;
      document.querySelector(
        '.md-about-lang'
      ).textContent = `${headerLng.about.ru}`;
      break;
    case 'uk':
      document.querySelector(
        '.md-vote-lang'
      ).textContent = `${headerLng.votes.uk}`;
      document.querySelector(
        '.md-popularity-lang'
      ).textContent = `${headerLng.popularity.uk}`;
      document.querySelector(
        '.md-title-lang'
      ).textContent = `${headerLng.title.uk}`;
      document.querySelector(
        '.md-genre-lang'
      ).textContent = `${headerLng.genres.uk}`;
      document.querySelector(
        '.md-about-lang'
      ).textContent = `${headerLng.about.uk}`;
      break;
  }
}
