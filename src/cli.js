import readlineSync from 'readline-sync';

const showMessage = (message) => {
  console.log(message);
};

const askQuestion = (question) => {
  const answer = readlineSync.question(question);

  return answer;
};

export {
  showMessage,
  askQuestion,
};
