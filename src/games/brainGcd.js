import { playGame } from '../index.js';
import { generateRandomInt } from '../utils.js';

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

function getGcd(firstNumber, secondNumber) {
  if (!secondNumber) {
    return firstNumber;
  }

  return getGcd(secondNumber, firstNumber % secondNumber);
}

function playRound() {
  const firstNumber = generateRandomInt(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = generateRandomInt(MIN_NUMBER, MAX_NUMBER);

  const question = `${firstNumber} ${secondNumber}`;

  const correctAnswer = `${getGcd(firstNumber, secondNumber)}`;

  return {
    question,
    correctAnswer,
  };
}

const runBrainGcd = () => playGame({
  gameDescription: GAME_DESCRIPTION,
  playRound,
});

export {
  runBrainGcd,
};
