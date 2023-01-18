import {capitalizeFirstLetter} from '../../utils';

const createFilterItemTemplate = (data) => {
  const {name, count} = data;

  return `<a href="#${name}" class="main-navigation__item">${capitalizeFirstLetter(
    name
  )} <span class="main-navigation__item-count">${count}</span></a>`;
};

export const createFilter = (data) => {
  const filtersMarkup = data
    .map((item) => createFilterItemTemplate(item))
    .join(' ');
  return `

    <div class="main-navigation__items">
      <a href="#all" class="main-navigation__item main-navigation__item--active">All movies</a>
      ${filtersMarkup}
    </div>
        `;
};
