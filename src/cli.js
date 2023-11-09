import readlineSync from 'readline-sync';

const greeting = () => {
  console.log('Welcome to the Brain Games!');

  const name = readlineSync.question('May I have your name? ');

  console.log(`Hello, ${name} !`);

  return name;
};

const showMessage = (message) => {
  console.log(message);
};

const askQuestion = (question) => {
  console.log(question);

  const answer = readlineSync.question('Your answer: ');

  return answer;
};

export {
  greeting,
  showMessage,
  askQuestion,
};
