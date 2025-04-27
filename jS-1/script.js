'use strict';
// Selecting all the elements
const btnAgain = document.querySelector('.btn-again');
const resultArea = document.querySelector(".result-area");
const inputField = document.querySelector('.input-field');
const btnCheck = document.querySelector('.check-btn');
const feedBack = document.querySelector(".feedback");
const scoreField = document.querySelector('.score-field');
const highScore = document.querySelector('.highscore')
const mainContainer = document.querySelector('.main-container');
const score = document.querySelector('.score');

// generating secret number
let randomNumber = Math.trunc(Math.random() * 20) + 1;
// initializing values
let scoore = 20;
let highScoore = 0

btnCheck.addEventListener('click',function(){

const numberEntered = Number(inputField.value);
if((!numberEntered) || (numberEntered>20)){
alert('Enter a number from 1 to 20')
}
else if(numberEntered == randomNumber){
  console.log('correct');
  feedBack.textContent="Correct..!";
  resultArea.textContent=randomNumber;
  document.querySelector('body').style.backgroundColor='#60b347';
  if(scoore>highScoore){
    highScoore=scoore;
    document.querySelector('.highscore').textContent = highScoore;
  }

}
else if(numberEntered<randomNumber){
  if(scoore>1){
  console.log('too low')
  feedBack.textContent="Too Low";
  scoore--;
  score.textContent = scoore;
}else{
  feedBack.textContent = 'You loose..!'
}
  
}else if(numberEntered>randomNumber){
  if(scoore>1){
  feedBack.textContent="Too High";
  scoore--;
  score.textContent = scoore;
  }else{
  feedBack.textContent = 'You loose..!'

  }
}

// else if(numberEntered != randomNumber){
//   if(scoore>1){
//   scoore--;
//   score.textContent = scoore;
//   if(numberEntered>randomNumber){
//   feedBack.textContent="Too High";
//   }
//   else if(numberEntered<randomNumber){
//     feedBack.textContent="Too Low";
//   }
// }else{
//   feedBack.textContent = 'You loose..!'
// }
// }
})

// reset game:
btnAgain.addEventListener('click',function(){
  randomNumber = Math.trunc(Math.random() * 20) + 1;
  console.log(randomNumber)
  score.textContent=20;
  resultArea.textContent="?";
  feedBack.textContent="Start Guessing..!";
  document.querySelector('body').style.backgroundColor = 'black';
})

