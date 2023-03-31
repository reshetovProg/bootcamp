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

	const cards = document.querySelectorAll('.game-card');
	cards.forEach((card, index) => {
		card.addEventListener('click', () => {
			if (clickable == true && !card.classList.contains('successfully')) {
				card.classList.add('flip');
				const t = card.getElementsByTagName('i')[1].className;
				card.classList.add(t)

			}
		});
	});


}