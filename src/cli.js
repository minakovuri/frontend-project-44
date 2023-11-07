import readlineSync from 'readline-sync';

function askName() {
    const name = readlineSync.question('May I have your name? ');

    console.log(`Hello, ${name} !`);
}

export {
    askName
}