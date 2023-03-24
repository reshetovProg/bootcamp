import { createCardsArray, dublicateArray, shuffle } from "./utils.js";

import { createGameCard } from "./gameCard.js";


export const startGame = (lvl) => {
	let firstCard = null;
	let secondCard = null;
	let clickable = true;

	const gameSection = document.querySelector('.game-section__container');

	gameSection.innerHTML = "";
	const gameField = document.createElement('div');

	const cardsArray = createCardsArray(lvl);

	const dubCardsArray = dublicateArray(cardsArray);

	const shuffleCardsArray = shuffle(dubCardsArray);

	gameField.classList.add('game-field');

	shuffleCardsArray.forEach(card => {
		gameField.append(createGameCard('X', card))
	});

	gameSection.append(gameField);

	console.log(shuffleCardsArray);
}