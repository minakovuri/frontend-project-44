import { playGame } from '../index.js';
import { generateRandomInt } from '../utils.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';

function createArythmeticProgression() {
  const length = generateRandomInt(5, 10);
  const d = generateRandomInt(-100, 100);
  const a1 = generateRandomInt(-100, 100);

  const progression = Array.from({ length }, (_, i) => a1 + (i + 1) * d);

  const missingElementIndex = generateRandomInt(0, length - 1);

  const missingElement = `${progression[missingElementIndex]}`;
  const elementsBeforeMissing = progression.slice(0, missingElementIndex);
  const elementsAfterMissing = progression.slice(missingElementIndex + 1);

  const incomleteProgression = `${elementsBeforeMissing.join(' ')} .. ${elementsAfterMissing.join(' ')}`;

  return {
    missingElement,
    incomleteProgression,
  };
}

function playRound() {
  const { missingElement, incomleteProgression } = createArythmeticProgression();

  return {
    question: incomleteProgression,
    correctAnswer: missingElement,
  };
}

const brainProgression = () => playGame({
  gameDescription: GAME_DESCRIPTION,
  playRound,
});

export default brainProgression;
