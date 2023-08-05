#!/usr/bin/env node
import readlineSync from 'readline-sync';
import getUserName from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = getUserName();
console.log('Hello, ', userName);

const playBrainEvenGame = () => {
  console.log(
    "Answer 'yes' if the number is even, otherwise answer 'no' (without quotes).",
  );

  const isEvenNumber = (num) => num % 2 === 0;
  const YES = 'yes';
  const NO = 'no';

  let correctAnswer = '';
  for (let i = 0; i < 3;) {
    let randomNumber = Math.floor(Math.random() * 100);
    correctAnswer = isEvenNumber(randomNumber) ? YES : NO;
    console.log(`Question: ${randomNumber}`);
    const usersAnswer = readlineSync.question('Your answer: ');
    const wrongText = `${usersAnswer} is wrong answer ;(. Correct answer was ${correctAnswer}. Let's try again, ${userName}! Correct answers' number will start from the beginning.`;
    const correctText = `Correct! Number of correct answers: ${i + 1}`;
    if (usersAnswer !== correctAnswer) {
      i = 0;
      console.log(wrongText);
    } else {
      i += 1;
      console.log(correctText);
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

playBrainEvenGame();
