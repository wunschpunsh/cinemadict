export const createCardFilm = (card) => {
  const DESCRIPTION_LENGTH = 140;

  const {
    title,
    rating,
    releaseYear,
    runtime,
    genre,
    poster,
    description,
    comments,
    isWatchlist,
    isWatched,
    isFavorites,
  } = card;

  const renderDescription = (data) => {
    if (data.length > DESCRIPTION_LENGTH) {
      const text = `${data.substring(0, DESCRIPTION_LENGTH - 1)}...`;
      return text;
    }

    return data;
  };

  const getYear = (str) => {
    return str.substring(str.length - 4);
  };

  const activeClassName = (boolean) =>
    boolean ? 'film-card__controls-item--active' : '';

  return `<article class="film-card">
  <h3 class="film-card__title">${title}</h3>
  <p class="film-card__rating">${rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${getYear(releaseYear)}</span>
    <span class="film-card__duration">${runtime}</span>
    <span class="film-card__genre">${genre.join(' ')}</span>
  </p>
  <img src="./images/posters/${poster}.jpg" alt="" class="film-card__poster">
  <p class="film-card__description">${renderDescription(description)}</p>
  <a class="film-card__comments">${comments.length} comments</a>
  <div class="film-card__controls">
    <button class="film-card__controls-item film-card__controls-item--add-to-watchlist ${activeClassName(
      isWatchlist
    )}" type="button">Add to watchlist</button>
    <button class="film-card__controls-item film-card__controls-item--mark-as-watched ${activeClassName(
      isWatched
    )}" type="button">Mark as watched</button>
    <button class="film-card__controls-item film-card__controls-item--favorite ${activeClassName(
      isFavorites
    )}" type="button">Mark as favorite</button>
  </div>
</article>`;
};
