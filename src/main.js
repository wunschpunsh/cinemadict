import {createMenu} from './view/menu-view.js';
import {createSortFilms} from './view/sort-view.js';
import {
  createSectionFilms,
  createSectionFilmList,
  createSectionFilmListContainer,
} from './view/films/card-wrappers-view.js';
import {createCardFilm} from './view/films/card-view.js';
import {createUserRating} from './view/user-rating.js';
import {createShowMoreButton} from './view/show-more-button-view.js';
import {createFooterStatistics} from './view/footer-statistics-view.js';
import {createPopup} from './view/popup-view.js';

const header = document.querySelector('.header');
const main = document.querySelector('.main');
const footer = document.querySelector('.footer');

const COUNT_CARD = 5;

// Render component

const renderTemplate = (container, template, position) => {
  container.insertAdjacentHTML(position, template);
};

// Component Menu

renderTemplate(main, createMenu(), 'beforeend');

// Component Sort

renderTemplate(main, createSortFilms(), 'beforeend');

// Component Card

renderTemplate(main, createSectionFilms(), 'beforeend');

const films = main.querySelector('.films');

renderTemplate(films, createSectionFilmList(), 'beforeend');

const filmsList = films.querySelector('.films-list');

renderTemplate(filmsList, createSectionFilmListContainer(), 'beforeend');

const filmsListContainer = filmsList.querySelector('.films-list__container');

for (let i = 1; i <= COUNT_CARD; i++) {
  renderTemplate(filmsListContainer, createCardFilm(), 'beforeend');
}

// Componet User Rating

renderTemplate(header, createUserRating(), 'beforeend');

// Component Show more button

renderTemplate(filmsList, createShowMoreButton(), 'beforeend');

// Component popup

renderTemplate(footer, createPopup(), 'afterend');

// Component Footer Statistics

const footetStatisticsContainer = footer.querySelector('.footer__statistics');
renderTemplate(
  footetStatisticsContainer,
  createFooterStatistics(),
  'beforeend'
);
