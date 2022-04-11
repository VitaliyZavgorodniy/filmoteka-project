import { store } from "../store";
import { handleGallery } from "./handleGallery";

export const handleLibType = (e) => {
  const { btnsLibs } = store.refs;
  const link = e.currentTarget;
  const lib = link.getAttribute("data-action");

  btnsLibs.forEach((element) => element.classList.remove("is-active"));
  link.classList.add("is-active");

  handleGallery(lib, 1);
};

store.refs.btnsLibs.forEach((element) =>
  element.addEventListener("click", handleLibType)
);