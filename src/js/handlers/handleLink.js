import { store } from "../store";
import { clearActive } from "../utils/clearClasses";
import { renderSearchForm } from "../render/renderSearchForm";
import { renderLibsSelector } from "../render/renderLibsSelector";
import { initHome } from "../pages/home";
import { initLibrary } from "../pages/library";

export const handleLink = (e) => {
  e.preventDefault();

  const link = e.currentTarget;
  const value = link.getAttribute("href");

  const { rootHeader, rootMenu } = store.refs;
  clearActive(rootMenu);

  store.refs.rootMenu
    .querySelector(`[href="${value}"]`)
    .classList.add("active");

  if (value === "home") {
    renderSearchForm();
    initHome();
    rootHeader.classList.remove("header__container_library");
    rootHeader.classList.add("header__container_home");
  }
  if (value === "library") {
    renderLibsSelector();
    initLibrary();
    rootHeader.classList.add("header__container_library");
    rootHeader.classList.remove("header__container_home");
  }
};

store.refs.refsLink.forEach((link) =>
  link.addEventListener("click", handleLink)
);
