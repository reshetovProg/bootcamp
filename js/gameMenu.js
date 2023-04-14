import { startGame } from "./startGame.js"

export const createGameMenu = () => {
	const btnPrev = document.querySelector('.header__btn-prev');
	btnPrev.style.display = "none";


	const score = document.querySelector('.score');
	let s1 = Number(score.textContent);
	score.style.display = "none";

	const bestScore = document.querySelector('.best_score');
	if (bestScore.textContent == "") {
		bestScore.textContent = "1000000";
	}
	else {
		if (Number(bestScore.textContent) > s1) {
			bestScore.textContent = s1;
		}
	}


	const title = document.createElement('h2');
	title.classList.add('game-menu__title');
	const gameSection = document.querySelector('.game-section__container');
	gameSection.innerHTML = "";

	title.textContent = "сложность игры";

	const createMenuButton = (lvl) => {
		const button = document.createElement('div');
		button.classList.add('game-btn');

		if (lvl == 1) lvl = 'легкий';
		else if (lvl == 2) lvl = 'средний';
		else if (lvl == 3) lvl = 'сложный';
		button.textContent = lvl;
		button.addEventListener('click', () => startGame(lvl));
		return button;
	}

	gameSection.append(
		title,
		createMenuButton(1),
		createMenuButton(2),
		createMenuButton(3)
	);
}