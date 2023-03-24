export const createGameCard = (defaultImage, flippedImage)=>{
	const card = document.createElement('div');
	card.classList.add('game-card');
	const defaultSide = document.createElement('i');
	const flippedSide = document.createElement('i');

	defaultSide.classList.add('defaultSide');
	flippedSide.classList.add('flippedSide');

	card.append(defaultSide, flippedSide);
	return card;
}