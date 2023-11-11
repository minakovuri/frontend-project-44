import { playGame } from '../index.js';
import { generateRandomInt } from '../utils.js';

const GAME_DESCRIPTION = 'Find the greatest common divisor of given numbers.';

function getGcd(firstNumber, secondNumber) {
  if (!secondNumber) {
    return firstNumber;
  }

  return getGcd(secondNumber, firstNumber % secondNumber);
}

function playRound() {
  const firstNumber = generateRandomInt(1, 100);
  const secondNumber = generateRandomInt(1, 100);

  const question = `${firstNumber} ${secondNumber}`;

  const correctAnswer = `${getGcd(firstNumber, secondNumber)}`;

  return {
    question,
    correctAnswer,
  };
}

const brainGcd = () => playGame({
  gameDescription: GAME_DESCRIPTION,
  playRound,
});

export default brainGcd;
