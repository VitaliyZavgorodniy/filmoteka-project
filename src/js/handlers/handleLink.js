import { store } from '../store';
import { clearActive } from '../utils/clearClasses';
import { showSearchForm } from '../handlers/showSearchForm';
import { showLibSelector } from '../handlers/showLibSelector';
import { initHome } from '../pages/home';
import { initLibrary } from '../pages/library';

export const handleLink = (e) => {
  e.preventDefault();

  const link = e.currentTarget;
  const value = link.getAttribute('data-page');

  const { rootHeader, rootMenu } = store.refs;
  clearActive(rootMenu);

  store.refs.rootMenu
    .querySelector(`[data-page="${value}"]`)
    .classList.add('active');

  if (value === 'home') {
    showSearchForm();
    initHome();
    rootHeader.classList.remove('header__container_library');
    rootHeader.classList.add('header__container_home');
  }
  if (value === 'library') {
    showLibSelector();
    initLibrary();
    rootHeader.classList.add('header__container_library');
    rootHeader.classList.remove('header__container_home');
  }
};

store.refs.refsLink.forEach((link) =>
  link.addEventListener('click', handleLink)
);
