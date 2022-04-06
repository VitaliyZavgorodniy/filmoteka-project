export const checkInWatchedItem = (id) => {
  const watchedStorage = JSON.parse(localStorage.getItem("watched"));

  if (!!watchedStorage)
    if (watchedStorage.some((watched) => watched.id === id)) return true;

  return false;
};

export const checkInQueueItem = (id) => {
  const queuedStorage = JSON.parse(localStorage.getItem("queued"));

  if (!!queuedStorage)
    if (queuedStorage.some((queued) => queued.id === id)) return true;

  return false;
};