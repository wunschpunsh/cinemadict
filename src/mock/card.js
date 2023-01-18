import {
  getRandomInteger,
  getRandomFloatInteger,
  getRandomId,
  generateRandomArrayItem,
  generateRandomSentences,
  generateRandomArrayItems,
  getRandomDate,
} from '../utils.js';

import {
  FILM_TITLES,
  FILM_POSTERS,
  COUNTRIES,
  COMMENT_TEXTS,
  AUTHOR_NAMES,
  FILM_DESCRIPTIONS,
  FILM_GENRES,
  EMOJIES,
  AGE_RATING,
  DICRECTORS,
  ACTORS,
} from './data.js';

const generateFilmRuntime = () => {
  const hour = getRandomInteger(1, 2);
  const minutes = getRandomInteger(10, 59);
  const runtime = `${hour}h ${minutes}m`;
  return runtime;
};

// const randomIdAuthor = getRandomId(1, 10);
const randomIdFilm = getRandomId(1, 100);

const generateComments = (number) => ({
  id: number + 1,
  comment: generateRandomArrayItem(COMMENT_TEXTS),
  emotion: generateRandomArrayItem(EMOJIES),
  author: generateRandomArrayItem(AUTHOR_NAMES),
  date: getRandomDate(true),
});

const commentsData = () => {
  const list = [];

  for (let i = 0; i <= getRandomInteger(0, 5); i++) {
    const item = generateComments(i);
    list.push(item);
  }

  return list;
};

export const generateFilmCard = () => ({
  id: randomIdFilm(),
  comments: commentsData(),
  title: generateRandomArrayItem(FILM_TITLES),
  alternativeTitle: generateRandomArrayItem(FILM_TITLES),
  rating: getRandomFloatInteger(),
  poster: generateRandomArrayItem(FILM_POSTERS),
  ageRating: generateRandomArrayItem(AGE_RATING),
  director: generateRandomArrayItem(DICRECTORS),
  writers: generateRandomArrayItems(DICRECTORS),
  releaseYear: getRandomDate(),
  actors: generateRandomArrayItems(ACTORS),
  genre: generateRandomArrayItems(FILM_GENRES),
  country: generateRandomArrayItem(COUNTRIES),
  runtime: generateFilmRuntime(),
  description: generateRandomSentences(FILM_DESCRIPTIONS),

  // comments: [1, 2, 3, 4, 5],

  isWatchlist: Boolean(getRandomInteger(0, 1)),
  isWatched: Boolean(getRandomInteger(0, 1)),
  isFavorites: Boolean(getRandomInteger(0, 1)),
});
