import { store } from "../store";
import { templateGalleryEmpty } from "../templates/templateGalleryEmpty";

export const renderEmptyGallery = () => {
  const { rootGallery } = store.refs;

  rootGallery.innerHTML = "";
  rootGallery.insertAdjacentHTML("afterbegin", templateGalleryEmpty());
};