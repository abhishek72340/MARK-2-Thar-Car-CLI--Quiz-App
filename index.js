var readlineSync = require('readline-sync');
var score = 0;
var highScorers = [{
  name: 'Abhishek',
  score: 5
},
{
  name: 'Abhinandan',
  score: 4
}
]
var kQuestions = [{
  question: "Is mahindra Thar Car is 7 seater? ",
  answer: "No"
}, {
  question: "who invented mahindra Thar car? ",
  answer: "Mahindra and mahindra Ltd"
}, {
  question: "Does Thar Car have AC? ",
  answer: "Yes"
}, {
  question: "other name of Thar car? ",
  answer: "Himalayancar"
}, {
  question: "When was the Thar Car launched first? ",
  answer: "2010"
}]

function welcomeUser() {
  var userName = readlineSync.question('please enter your name: ');
  console.log(`\nHi! ${userName}. Welcome to "Thar Car-CLI Quiz App" quiz`)
}

function playQuiz(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() === answer.toLowerCase()) {
    score++;
    console.log('you are right!');
  } else {
    console.log('you are wrong! \ncorrect answer is: ' + answer);
  }
  console.log('current Score: ', score);
  console.log('---------------------------------');
}

function askQuestion() {
  for (let i = 0; i < kQuestions.length; i++) {
    var currentQuestion = kQuestions[i];
    playQuiz(currentQuestion.question, currentQuestion.answer);
  }
}

function showScores() {
  if (score < 1) {
    console.log('your final score is: ', score, '. Don\'t worry if you don\'t know me.Let\'s have a coffee someday!');
  } else {
    console.log('Hurrah! you have scored: ', score, 'you know me well');
  }
  console.log('---------------------------------');
  console.log('\nBelow are the high scorers of this QUIZ. If you have scored more than them send me a screenshot, I will update it  here');
  console.log('---------------------------------');
  highScorers.map(names => console.log(`${names.name}: ${names.score}`));
}
welcomeUser();
askQuestion();
showScores();
