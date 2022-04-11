import { store } from "../store";
import { checkToken } from "../utils/checkToken";
import { handleGallery } from "../handlers/handleGallery";

export const initHome = () => {
  console.log("HOME PAGE");

  handleGallery("trend", 1);
};
