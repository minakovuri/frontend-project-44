import { playGame } from '../index.js';
import { generateRandomInt, castBooleanToYesNoString } from '../utils.js';

const GAME_DESCRIPTION = 'Answer "yes" if the number is even, otherwise answer "no".';

function playRound() {
  const number = generateRandomInt(0, 100);

  const isEven = number % 2 === 0;

  return {
    question: number,
    correctAnswer: castBooleanToYesNoString(isEven),
  };
}

const brainEven = () => playGame({
  gameDescription: GAME_DESCRIPTION,
  playRound,
});

export default brainEven;
