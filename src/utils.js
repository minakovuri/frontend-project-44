const castBooleanToYesNoString = (bool) => (bool ? 'yes' : 'no');

const generateRandomInt = (min = 0, max = 1000000) => Math.floor(Math.random() * (max - min) + min);

const getRandomItem = (...items) => items[Math.floor(Math.random() * items.length)];

// eslint-disable-next-line no-eval
const evaluateExpression = (expression) => eval(expression);

export {
  castBooleanToYesNoString,
  generateRandomInt,
  getRandomItem,
  evaluateExpression,
};
