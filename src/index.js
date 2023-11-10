import { askQuestion, showMessage } from './cli.js';

const MAX_ROUNDS_COUNT = 3;

const playGame = ({
  gameDescription,
  playRound,
}) => {
  showMessage('Welcome to the Brain Games!');

  const name = askQuestion('May I have your name? ');

  showMessage(`Hello, ${name} !`);

  showMessage(gameDescription);

  let roundIndex = 0;

  while (roundIndex < MAX_ROUNDS_COUNT) {
    const { question, correctAnswer } = playRound();

    showMessage(`Question: ${question}`);

    const answer = askQuestion('Your answer: ');

    if (answer === correctAnswer) {
      showMessage('Correct!');
      roundIndex++;
    } else {
      showMessage(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      showMessage(`Let's try again, ${name}!`);
      return;
    }
  }

  showMessage(`Congratulations, ${name}!`);
};

export {
  playGame,
};
