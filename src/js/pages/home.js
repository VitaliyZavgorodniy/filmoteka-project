import { store } from "../store";
import { checkToken } from "../utils/checkToken";
import { handleGallery } from "../handlers/handleGallery";

export const initHome = () => {
  handleGallery("trend", 1);
};
