import dayjs from 'dayjs';

export const renderTemplate = (container, template, position) => {
  container.insertAdjacentHTML(position, template);
};

export const getRandomInteger = (a = 0, b = 1) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));

  return Math.floor(lower + Math.random() * (upper - lower + 1));
};

export const getRandomFloatInteger = () => (Math.random() * 9 + 1).toFixed(1);

export const getRandomId = (min, max) => {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= max - min + 1) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

export const generateRandomArrayItem = (data) =>
  data[getRandomInteger(0, data.length - 1)];

export const generateRandomSentences = (data) => {
  const textDescription = data
    .split('. ')
    .map((item) => item.replace(/\.*$/, '.'))
    .sort(() => Math.random() - 0.5)
    .slice(0, getRandomInteger(1, 5))
    .join('');

  return textDescription;
};

export const generateRandomArrayItems = (data) =>
  data.sort(() => Math.random() - 0.5).slice(0, getRandomInteger(1, 5));
// .join(' ');

export const getRandomDate = (param) => {
  if (param) {
    return dayjs()
      .day(getRandomInteger(1, 31))
      .month(getRandomInteger(1, 12))
      .year(getRandomInteger(1945, 2023))
      .hour(getRandomInteger(0, 23))
      .minute(getRandomInteger(0, 59))
      .format('YYYY/MM/D HH:mm');
  }

  return dayjs()
    .day(getRandomInteger(1, 31))
    .month(getRandomInteger(1, 12))
    .year(getRandomInteger(1945, 2023))
    .format('D MMMM YYYY');
};

export const capitalizeFirstLetter = (str) =>
  str.charAt(0).toUpperCase() + str.slice(1);
