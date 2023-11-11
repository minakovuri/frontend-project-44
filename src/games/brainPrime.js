import { playGame } from '../index.js';
import { generateRandomInt, castBooleanToYesNoString } from '../utils.js';

const GAME_DESCRIPTION = 'Answer "yes" if given number is prime. Otherwise answer "no".';

function isPrime(number) {
  for (let i = 2, sqr = Math.sqrt(number); i <= sqr; i++) {
    if (number % i === 0) return false;
  }

  return number > 1;
}

function playRound() {
  const number = generateRandomInt(0, 100);

  const prime = isPrime(number);

  return {
    question: number,
    correctAnswer: castBooleanToYesNoString(prime),
  };
}

const brainPrime = () => playGame({
  gameDescription: GAME_DESCRIPTION,
  playRound,
});

export default brainPrime;
