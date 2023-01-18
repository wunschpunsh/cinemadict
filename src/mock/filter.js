const filterCards = {
  watchlist: (data) => data.filter((item) => item.isWatchlist).length,
  history: (data) => data.filter((item) => item.isWatched).length,
  favorites: (data) => data.filter((item) => item.isFavorites).length,
};

export const generateFilter = (data) =>
  Object.entries(filterCards).map(([filterName, countFilms]) => ({
    name: filterName,
    count: countFilms(data),
  }));
