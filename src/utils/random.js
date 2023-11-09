const generateRandomInt = (min = 0, max = 1000000) => Math.floor(Math.random() * (max - min) + min);

export {
  generateRandomInt,
};
