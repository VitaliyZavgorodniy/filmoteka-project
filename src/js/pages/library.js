import { store } from "../store";
import { checkToken } from "../utils/checkToken";
import { handleGallery } from "../handlers/handleGallery";
import { renderEmptyGallery } from "../render/renderEmptyGallery";

export const initLibrary = () => {
  store.mode = "watched";

  if (checkToken()) {
    handleGallery("watched", 1);
  } else {
    renderEmptyGallery();
  }
};
