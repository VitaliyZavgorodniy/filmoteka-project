import { store } from "../store";
import { showLibSelector } from "../handlers/showLibSelector";
import { initLibrary } from "../pages/library";

export const handleLogout = () => {
  localStorage.removeItem("user");
  store.user = null;

  showLibSelector();
  initLibrary();
};

store.refs.btnLogout.addEventListener("click", handleLogout);
