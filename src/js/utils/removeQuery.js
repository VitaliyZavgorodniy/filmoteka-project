export const removeQuery = () =>
  history.replaceState &&
  history.replaceState(
    null,
    '',
    location.pathname +
      location.search.replace(/[\?&]id=[^&]+/, '').replace(/^&/, '?') +
      location.hash
  );