import { playGame } from '../index.js';
import { generateRandomInt, castBooleanToYesNoString } from '../utils.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

const MIN_NUMBER = 1;
const MAX_NUMBER = 100;

function isEven(number) {
  return number % 2 === 0;
}

function playRound() {
  const number = generateRandomInt(MIN_NUMBER, MAX_NUMBER);

  const even = isEven(number);

  return {
    question: number,
    correctAnswer: castBooleanToYesNoString(even),
  };
}

const runBrainEven = () => playGame({
  gameDescription: GAME_DESCRIPTION,
  playRound,
});

export default runBrainEven;
