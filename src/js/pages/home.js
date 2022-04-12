import { store } from "../store";
import { checkToken } from "../utils/checkToken";
import { handleGallery } from "../handlers/handleGallery";

export const initHome = () => {
  store.mode = "trend";

  handleGallery("trend", 1);
};
