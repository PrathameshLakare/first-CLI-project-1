var readlineSync = require("readline-sync");
var score = 0;

var username = readlineSync.question("what is your name? ");

console.log("welcome " + username);

function play(question,answer){
  var useranswer = readlineSync.question(question);
  
  if (useranswer === answer){
    console.log("right!");
    score = score +1;
  }else{
    console.log("wrong");
  }
  console.log("your score is: "+score);
  console.log("__________")
}

var questionOne = {
  question : "where do I live ? ",
  answer : "nashik"
}
var questionTwo = {
  question : "what is my surname ? ",
  answer : "lakare"
}
var questionThree = {
  question : "which is my favoirate sport ? ",
  answer : "kabadi"
}

var questions = [questionOne,questionTwo,questionThree];

for(var i = 0; i<questions.length; i++){
  var currentQuestion = questions[i];
  play(currentQuestion.question,currentQuestion.answer);
}
