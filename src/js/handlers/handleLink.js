import { store } from "../store";
import { clearActive } from "../utils/clearClasses";
import { renderSearchForm } from "../render/renderSearchForm";
import { renderLibsSelector } from "../render/renderLibsSelector";
import { initHome } from "../pages/home";
import { initLibrary } from "../pages/library";

export const handleLink = (e) => {
  e.preventDefault();
  
  const link = e.currentTarget;
  const value = link.getAttribute("data-page");

  clearActive(store.refs.rootMenu);

  link.classList.add("active");

  if (value === "home") {
    renderSearchForm();
    initHome();
  }
  if (value === "library") {
    renderLibsSelector();
    initLibrary();
  }
};

store.refs.refsLink.forEach((link) =>
  link.addEventListener("click", handleLink)
);
