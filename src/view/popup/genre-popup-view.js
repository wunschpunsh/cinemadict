export const createFilmGenreTemplate = (data) => {
  const genresMarkup = data.map(
    (item) => `<span class="film-details__genre">${item}</span>`
  );

  return genresMarkup.join(' ');
};
