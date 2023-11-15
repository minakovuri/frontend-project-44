import { playGame } from '../index.js';
import { generateRandomInt, castBooleanToYesNoString } from '../utils.js';

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

function isPrime(number) {
  for (let i = 2, sqr = Math.sqrt(number); i <= sqr; i += 1) {
    if (number % i === 0) return false;
  }

  return number > 1;
}

function playRound() {
  const number = generateRandomInt(MIN_NUMBER, MAX_NUMBER);

  const prime = isPrime(number);

  return {
    question: number,
    correctAnswer: castBooleanToYesNoString(prime),
  };
}

const runBrainPrime = () => playGame({
  gameDescription: GAME_DESCRIPTION,
  playRound,
});

export default runBrainPrime;
