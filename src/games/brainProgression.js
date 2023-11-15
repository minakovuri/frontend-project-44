import { playGame } from '../index.js';
import { generateRandomInt } from '../utils.js';

const GAME_DESCRIPTION = 'What number is missing in the progression?';

const MIN_PROGRESSION_LENGTH = 5;
const RECOMMENDED_PROGRESSION_LENGTH = 10;

const StepRange = {
  MIN: -100,
  MAX: 100,
};

const FirstElementRange = {
  MIN: -100,
  MAX: 100,
};

function createProgression() {
  const length = generateRandomInt(MIN_PROGRESSION_LENGTH, RECOMMENDED_PROGRESSION_LENGTH);
  const d = generateRandomInt(StepRange.MIN, StepRange.MAX);
  const a1 = generateRandomInt(FirstElementRange.MIN, FirstElementRange.MAX);

  const progression = Array.from({ length }, (_, i) => a1 + (i + 1) * d);

  const missingElementIndex = generateRandomInt(1, length - 1);

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
  const { missingElement, incomleteProgression } = createProgression();

  return {
    question: incomleteProgression,
    correctAnswer: missingElement,
  };
}

const runBrainProgression = () => playGame({
  gameDescription: GAME_DESCRIPTION,
  playRound,
});

export default runBrainProgression;
