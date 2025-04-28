'use strict';

// selecting all the elements
const btnNewgame = document.querySelector('.btn-new-game');
const btnRolldice = document.querySelector('.btn-roll-dice');
const btnHold = document.querySelector('.btn-hold')
const player1Score = document.querySelector('.player1-score');
const player2Score = document.querySelector('.player2-score');
const player1Curscore = document.querySelector('.player1-current-score');
const player2Curscore = document.querySelector('.player2-current-score');
const activeP1 = document.querySelector('.card1');
const activeP2 = document.querySelector('.card2');

// Initial player scores
let player1Cur = 0;
let player2Cur = 0;
let player1High = 0;
let player2High = 0;


// Dice roll:
btnRolldice.addEventListener('click',function(){
 
  const diceNum = Math.trunc(Math.random() * 6) + 1
  document.querySelector('.dice').src = `dice-${diceNum}.png`
  document.querySelector('.dice-image').classList.remove('hidden')

  // active player:
  if(!(activeP1.classList.contains('fade-in'))){

    if(diceNum>1){
      player1Cur = player1Cur + diceNum
      player1Curscore.textContent = player1Cur;
    }else{
      player1Cur=0;
      player1Curscore.textContent=player1Cur;
      activeP1.classList.add('fade-in');
      activeP2.classList.remove('fade-in');
    }
  }
  else if(!(activeP2.classList.contains('fade-in'))){
    if(diceNum>1){
      player2Cur = player2Cur + diceNum
      player2Curscore.textContent = player2Cur;
    }else{
      player2Cur=0;
      player2Curscore.textContent=player2Cur;
      activeP2.classList.add('fade-in')
      activeP1.classList.remove('fade-in')
    }
  }
})

btnHold.addEventListener('click',function(){
    if(!(activeP1.classList.contains('fade-in'))){
    if(player1High>=100){
      player1Score.textContent = "Winner";
      document.querySelector('.dice-image').classList.add('hidden')
    }
    else if(player1High<100){
    player1High = player1High + player1Cur;
    player1Score.textContent = player1High;
    player1Cur = 0;
    player1Curscore.textContent = player1Cur;
    activeP1.classList.add('fade-in');
    activeP2.classList.remove('fade-in');
    }
  }
  
  else if(!(activeP2.classList.contains('fade-in'))){
    if(player2High>=100){
      player2Score.textContent = "Winner";
      document.querySelector('.dice-image').classList.add('hidden')
    }
    else if(player2High<100){
    player2High = player2High + player2Cur;
    player2Score.textContent = player2High;
    player2Cur = 0;
    player2Curscore.textContent = player2Cur;
    activeP2.classList.add('fade-in');
    activeP1.classList.remove('fade-in');
    }
  }

})

btnNewgame.addEventListener('click',function(){
  player1Cur = 0;
  player1Curscore.textContent = player1Cur;
  player2Cur = 0;
  player2Curscore.textContent = player2Cur
  player1High = 0;
  player1Score.textContent = player1High;
  player2High = 0;
  player2Score.textContent = player2High;
  activeP1.classList.remove('fade-in');
  activeP2.classList.add('fade-in');
  document.querySelector('.dice-image').classList.add('hidden')
})
