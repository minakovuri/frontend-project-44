import { playGame } from '../index.js';
import { generateRandomInt, getRandomItem, evaluateExpression } from '../utils.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';

function playRound() {
  const firstNumber = generateRandomInt(1, 20);
  const secondNumber = generateRandomInt(1, 20);
  const operation = getRandomItem(['+', '-', '*']);

  const question = `${firstNumber} ${operation} ${secondNumber}`;

  const correctAnswer = `${evaluateExpression(question)}`;

  return {
    question,
    correctAnswer,
  };
}

const brainCalc = () => playGame({
  gameDescription: GAME_DESCRIPTION,
  playRound,
});

export default brainCalc;
