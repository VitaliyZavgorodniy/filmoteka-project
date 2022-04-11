import { store } from "../store";
import { loginGoogle } from "../services/serviceAuth";
import { renderLibsSelector } from "../render/renderLibsSelector";
import { initLibrary } from "../pages/library";

export const handleLogin = () =>
  loginGoogle().then((res) => {
    if (res.status === 200) {
      const { uid, displayName } = res;
      localStorage.setItem("user", JSON.stringify({ uid, displayName }));
      store.user = { uid, displayName };

      renderLibsSelector();
      initLibrary();
    }
  });

store.refs.btnLogin.addEventListener("click", handleLogin);
