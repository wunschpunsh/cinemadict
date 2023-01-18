export const createDetailsControls = (isWatchlist, isWatched, isFavorites) => {
  const activeClassName = (boolean) =>
    boolean ? 'film-details__control-button--active' : '';

  return `
  <section class="film-details__controls">
    <button type="button" class="film-details__control-button film-details__control-button--watchlist ${activeClassName(
      isWatchlist
    )}" id="watchlist" name="watchlist">Add to watchlist</button>
    <button type="button" class="film-details__control-button ${activeClassName(
      isWatched
    )} film-details__control-button--watched" id="watched" name="watched">Already watched</button>
    <button type="button" class="film-details__control-button film-details__control-button--favorite ${activeClassName(
      isFavorites
    )}" id="favorite" name="favorite">Add to favorites</button>
  </section>`;
};
