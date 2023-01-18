import {createFilmGenreTemplate} from './genre-popup-view.js';
import {createDetailsControls} from './controls-popup-view.js';
import {createCommentsTemplate} from './comments-popup-view.js';
import {createNewComment} from './new-comment-popup-view.js';
import {createFilmDescription} from './film-description-popup-view.js';

export const createPopup = (card) => {
  const {
    title,
    alternativeTitle,
    rating,
    poster,
    description,
    genre,
    ageRating,
    comments,
    isWatchlist,
    isWatched,
    isFavorites,
  } = card;

  return `<section class="film-details">
  <form class="film-details__inner" action="" method="get">
    <div class="film-details__top-container">
      <div class="film-details__close">
        <button class="film-details__close-btn" type="button">close</button>
      </div>
      <div class="film-details__info-wrap">
        <div class="film-details__poster">
          <img class="film-details__poster-img" src="./images/posters/${poster}.jpg" alt="">
          <p class="film-details__age">${ageRating}+</p>
        </div>

        <div class="film-details__info">
          <div class="film-details__info-head">
            <div class="film-details__title-wrap">
              <h3 class="film-details__title">${title}</h3>
              <p class="film-details__title-original">Original:${alternativeTitle}</p>
            </div>

            <div class="film-details__rating">
              <p class="film-details__total-rating">${rating}</p>
            </div>
          </div>

          <table class="film-details__table">
            <tbody>
                ${createFilmDescription(card)}
                <tr class="film-details__row">
                  <td class="film-details__term">${
                    genre.length > 1 ? 'Genres' : 'Genre'
                  }</td>
                  <td class="film-details__cell">
                  ${createFilmGenreTemplate(genre)}
                  </td>
                </tr>
            </tbody>
          </table>
          <p class="film-details__film-description">${description}</p>
        </div>
      </div>
      ${createDetailsControls(isWatchlist, isWatched, isFavorites)}
    </div>

    <div class="film-details__bottom-container">
      <section class="film-details__comments-wrap">
        <h3 class="film-details__comments-title">Comments <span class="film-details__comments-count">${
          comments.length
        }</span></h3>

        <ul class="film-details__comments-list">
          ${createCommentsTemplate(comments)}
        </ul>

        ${createNewComment()}
      </section>
    </div>
  </form>
  </section>`;
};
