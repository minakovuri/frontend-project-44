import { playGame } from '../index.js';
import { generateRandomInt, getRandomItem, evaluateExpression } from '../utils.js';

const GAME_DESCRIPTION = 'What is the result of the expression?';

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;

const OPERATIONS = ['+', '-', '*'];

function playRound() {
  const firstNumber = generateRandomInt(MIN_NUMBER, MAX_NUMBER);
  const secondNumber = generateRandomInt(MIN_NUMBER, MAX_NUMBER);
  const operation = getRandomItem(OPERATIONS);

  const question = `${firstNumber} ${operation} ${secondNumber}`;

  const correctAnswer = `${evaluateExpression(question)}`;

  return {
    question,
    correctAnswer,
  };
}

const runBrainCalc = () => playGame({
  gameDescription: GAME_DESCRIPTION,
  playRound,
});

export default runBrainCalc;
