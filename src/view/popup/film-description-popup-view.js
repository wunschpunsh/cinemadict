import {capitalizeFirstLetter} from '../../utils.js';

export const createFilmDescription = (card) => {
  const {director, writers, actors, releaseYear, runtime, country} = card;

  const data = {
    director,
    writers,
    actors,
    releaseYear,
    runtime,
    country,
  };

  const dataArr = [];

  for (const key in data) {
    const elementValue = data[key];
    const element = `
    <tr class="film-details__row">
      <td class="film-details__term">${capitalizeFirstLetter(key)}</td>
      <td class="film-details__cell">${
        Array.isArray(data[key]) ? elementValue.join(', ') : elementValue
      }</td>
    </tr>`;

    dataArr.push(element);
  }

  return dataArr.join(' ');
};
