import headerLng from '../store/languagePackage.json';
import { store } from '../store';
import { initHome } from '../pages/home';
import { initLibrary } from '../pages/library';
import { handleGallery } from '../handlers/handleGallery';
import { fetchGenres } from '../services/serviceMoviesAPI';

export const changeLanguage = async () => {
  const { mode, page, language } = store;
  setHeaderLanguage(language);
  setFooterLanguage(language);
  setModalLanguage(language);

  const genres = await fetchGenres(language);
  store.genresList = genres;

  handleGallery(mode, page);
};

const setHeaderLanguage=(lang) =>{
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

 const setModalLanguage = (lang) =>{
  // switch (lang) {
  //   case 'ru':
  //     document.querySelector(
  //       '.md-vote-lang'
  //     ).textContent = `${headerLng.votes.ru}`;
  //     document.querySelector(
  //       '.md-popularity-lang'
  //     ).textContent = `${headerLng.popularity.ru}`;
  //     document.querySelector(
  //       '.md-title-lang'
  //     ).textContent = `${headerLng.title.ru}`;
  //     document.querySelector(
  //       '.md-genre-lang'
  //     ).textContent = `${headerLng.genres.ru}`;
  //     document.querySelector(
  //       '.md-about-lang'
  //     ).textContent = `${headerLng.about.ru}`;
  //     break;
  //   case 'uk':
  //     document.querySelector(
  //       '.md-vote-lang'
  //     ).textContent = `${headerLng.votes.uk}`;
  //     document.querySelector(
  //       '.md-popularity-lang'
  //     ).textContent = `${headerLng.popularity.uk}`;
  //     document.querySelector(
  //       '.md-title-lang'
  //     ).textContent = `${headerLng.title.uk}`;
  //     document.querySelector(
  //       '.md-genre-lang'
  //     ).textContent = `${headerLng.genres.uk}`;
  //     document.querySelector(
  //       '.md-about-lang'
  //     ).textContent = `${headerLng.about.uk}`;
  //     break;
  // }
}
const setFooterLanguage =(lang) =>{
  switch (lang) {
    case 'ru':
      document.querySelector(
        '.footer-rights-lang'
      ).textContent = `${headerLng.rights.ru}`;
      document.querySelector(
        '.footer-dev-lang'
      ).textContent = `${headerLng.dev.ru}`;
      document.querySelector(
        '.footer-by-lang'
      ).textContent = `${headerLng.by.ru}`;
      document.querySelector(
        '.footer-goit-lang'
      ).textContent = `${headerLng.goit.ru}`;
      break;
    case 'uk':
      document.querySelector(
        '.footer-rights-lang'
      ).textContent = `${headerLng.rights.uk}`;
      document.querySelector(
        '.footer-dev-lang'
      ).textContent = `${headerLng.dev.uk}`;
      document.querySelector(
        '.footer-by-lang'
      ).textContent = `${headerLng.by.uk}`;
      document.querySelector(
        '.footer-goit-lang'
      ).textContent = `${headerLng.goit.uk}`;
      break;
    case 'en':
      document.querySelector(
        '.footer-rights-lang'
      ).textContent = `${headerLng.rights.en}`;
      document.querySelector(
        '.footer-dev-lang'
      ).textContent = `${headerLng.dev.en}`;
      document.querySelector(
        '.footer-by-lang'
      ).textContent = `${headerLng.by.en}`;
      document.querySelector(
        '.footer-goit-lang'
      ).textContent = `${headerLng.goit.en}`;
      break;
  }
}

