import { store } from "../store";
import { renderLibsSelector } from "../render/renderLibsSelector";
import { initLibrary } from "../pages/library";

export const handleLogout = () => {
  localStorage.removeItem("user");
  store.user = null;

  renderLibsSelector();
  initLibrary();
};

store.refs.btnLogout.addEventListener("click", handleLogout);