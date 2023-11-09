import {
  greeting,
  showMessage,
  askQuestion,
} from '../cli.js';
import { castBooleanToYesNoString } from '../utils/bool.js';
import { generateRandomInt } from '../utils/random.js';
import { isEven } from './even.js';

const MAX_ROUNDS_COUNT = 3;

function playRound() {
  const number = generateRandomInt(0, 100);

  const answer = askQuestion(`Question: ${number}`);

  const even = isEven(number);
  const correctAnswer = castBooleanToYesNoString(even);

  return { answer, correctAnswer };
}

function brainEven() {
  const userName = greeting();

  showMessage('Answer "yes" if the number is even, otherwise answer "no".');

  let roundIndex = 0;

  while (roundIndex < MAX_ROUNDS_COUNT) {
    const { answer, correctAnswer } = playRound(userName);

    if (answer === correctAnswer) {
      showMessage('Correct!');
      roundIndex++;
    } else {
      showMessage(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      showMessage(`Let's try again, ${userName}!`);
      return;
    }
  }

  showMessage(`Congratulations, ${userName}!`);
}

export default brainEven;
