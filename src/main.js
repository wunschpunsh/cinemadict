import {renderTemplate} from './utils.js';
import {createFilter} from './view/menu/filter-view.js';
import {createSortFilms} from './view/sort-view.js';
import {createMainNavWrap} from './view/menu/nav-wrapper-view.js';
import {
  createSectionFilms,
  createSectionFilmList,
  createSectionFilmListContainer,
} from './view/films/card-wrappers-view.js';
import {createCardFilm} from './view/films/card-view.js';
import {createUserRating} from './view/user-rating.js';
import {createShowMoreButton} from './view/show-more-button-view.js';
import {createFooterStatistics} from './view/footer-statistics-view.js';
import {createPopup} from './view/popup/popup-view.js';
import {generateFilmCard} from './mock/card.js';
import {createStats} from './view/menu/stats-view.js';
import {generateFilter} from './mock/filter.js';

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

const CARD_COUNT_PER_STEP = 5;
const CARD_COUNT = 20;

const filmsData = Array.from({length: CARD_COUNT}, generateFilmCard);
const filtersData = generateFilter(filmsData);

// Component Filter
renderTemplate(main, createMainNavWrap(), 'beforeend');

const navWrapper = document.querySelector('.main-navigation');

renderTemplate(navWrapper, createFilter(filtersData), 'beforeend');

// Component Stats

renderTemplate(navWrapper, createStats(), 'beforeend');

// Component Sort

renderTemplate(main, createSortFilms(), 'beforeend');

// Component Card

renderTemplate(main, createSectionFilms(), 'beforeend');

const films = main.querySelector('.films');

renderTemplate(films, createSectionFilmList(), 'beforeend');

const filmsList = films.querySelector('.films-list');

renderTemplate(filmsList, createSectionFilmListContainer(), 'beforeend');

const filmsListContainer = filmsList.querySelector('.films-list__container');

for (let i = 0; i < Math.min(filmsData.length, CARD_COUNT_PER_STEP); i++) {
  renderTemplate(filmsListContainer, createCardFilm(filmsData[i]), 'beforeend');
}

if (filmsData.length > CARD_COUNT_PER_STEP) {
  let renderedCardCount = CARD_COUNT_PER_STEP;

  renderTemplate(filmsList, createShowMoreButton(), 'beforeend');

  const loadMoreBtn = filmsList.querySelector('.films-list__show-more');

  loadMoreBtn.addEventListener('click', (evt) => {
    evt.preventDefault();
    filmsData
      .slice(renderedCardCount, renderedCardCount + CARD_COUNT_PER_STEP)
      .forEach((card) => {
        renderTemplate(filmsListContainer, createCardFilm(card), 'beforeend');
      });

    renderedCardCount += CARD_COUNT_PER_STEP;

    if (renderedCardCount >= filmsData.length) {
      loadMoreBtn.remove();
    }
  });
}

// Componet User Rating

renderTemplate(header, createUserRating(), 'beforeend');

// Component popup

filmsListContainer.addEventListener('click', () => {
  renderTemplate(footer, createPopup(filmsData[0]), 'afterend');
  const closePopupBtn = document.querySelector('.film-details__close-btn');

  closePopupBtn.addEventListener('click', () => {
    document.querySelector('.film-details').remove();
  });
});

// Component Footer Statistics

const footetStatisticsContainer = footer.querySelector('.footer__statistics');
renderTemplate(
  footetStatisticsContainer,
  createFooterStatistics(filmsData),
  'beforeend'
);
