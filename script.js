'use strict';
const score__0 = document.getElementById('score--0');
const current_score__0 = document.getElementById('current--0');
const score__1 = document.getElementById('score--1');
const current_score__1 = document.getElementById('current--1');
var img_roll = document.querySelector('.dice');
const New_game = document.querySelector('.btn--new');
const Roll_dice = document.querySelector('.btn--roll');
const Hold = document.querySelector('.btn--hold');
const player_0 = document.querySelector('.player--0');
const player_1 = document.querySelector('.player--1');
let score_player_0 = 0;
let score_player_1 = 0;
let total_score_0 = 0;
let total_score_1 = 0;
score__0.textContent = 0;
current_score__0.textContent = 0;
score__1.textContent = 0;
current_score__1.textContent = 0;
const reset_game = () => {
  score_player_0 = 0;
  score_player_1 = 0;
  total_score_0 = 0;
  total_score_1 = 0;
  score__0.textContent = 0;
  current_score__0.textContent = 0;
  score__1.textContent = 0;
  current_score__1.textContent = 0;

  if (!img_roll.classList.contains('hidden')) {
    img_roll.classList.add('hidden');
  }
  if (player_0.classList.contains('player--winner')) {
    player_0.classList.remove('player--winner');
  } else if (player_1.classList.contains('player--winner')) {
    player_1.classList.remove('player--winner');
  }
};
const rolled = () => {
  let change_number = Math.trunc(Math.random() * 6) + 1;

  if (img_roll.classList.contains('hidden')) {
    img_roll.classList.remove('hidden');
  }
  img_roll.src = `img/dice-${change_number}.png`;
  if (player_0.classList.contains('player--active')) {
    if (change_number === 1) {
      score_player_0 = 0;
      score_player_1 = 0;
      current_score__0.textContent = 0;
      current_score__1.textContent = 0;
      player_0.classList.remove('player--active');
      player_1.classList.add('player--active');
    } else {
      score_player_0 += change_number;
      current_score__0.textContent = score_player_0;
    }
  } else {
    if (change_number === 1) {
      score_player_0 = 0;
      score_player_1 = 0;
      current_score__0.textContent = 0;
      current_score__1.textContent = 0;
      player_1.classList.remove('player--active');
      player_0.classList.add('player--active');
    } else {
      score_player_1 += change_number;

      current_score__1.textContent = score_player_1;
    }
  }
};
const collect_point = () => {
  total_score_0 += score_player_0;
  total_score_1 += score_player_1;
  player_0.classList.contains('player--active')
    ? (score__0.textContent = total_score_0)
    : (score__1.textContent = total_score_1);
  if (total_score_0 >= 100) {
    player_0.classList.add('player--winner');
    img_roll.classList.add('hidden');
    player_0.classList.remove('player--active');
    player_1.classList.remove('player--active');
  } else if (total_score_1 >= 100) {
    player_1.classList.add('player--winner');
    img_roll.classList.add('hidden');
    player_0.classList.remove('player--active');
    player_1.classList.remove('player--active');
  }
  if (player_0.classList.contains('player--active')) {
    player_0.classList.remove('player--active');
    player_1.classList.add('player--active');
  } else {
    player_1.classList.remove('player--active');
    player_0.classList.add('player--active');
  }
  score_player_0 = 0;
  score_player_1 = 0;
  current_score__1.textContent = 0;
  current_score__0.textContent = 0;
};
New_game.addEventListener('click', reset_game);
Roll_dice.addEventListener('click', rolled);
Hold.addEventListener('click', collect_point);
