let superHeroesArray = [
	'Iron Man',
	'Capitain America',
	'Black Widow',
	'Thor',
	'Hulk',
	'Hawkeye',
];

let avengers = superHeroesArray.map((superhero) => {
	return (superhero += ' Avenger');
});

console.log(avengers);

let shortNamesAvengers = superHeroesArray.filter(
	(superHero) => superHero.length < 5
);

console.log(shortNamesAvengers);

let shortNameAvengers = superHeroesArray.find(
	(superHero) => superHero.length < 5
);

let findShortNamesAvenger = superHeroesArray.findIndex(
	(superHero) => superHero.length < 5
);

console.log(shortNamesAvengers);
console.log(findShortNamesAvenger);

let allAvenger = superHeroesArray.reduce((all, hero) => (all += ' ' + hero));
console.log(allAvenger);

let isAllStr = superHeroesArray.every((hero) => typeof hero === 'string');

console.log(isAllStr);

let isSomerNbr = superHeroesArray.some((hero) => typeof hero === 'number');

console.log(isSomerNbr);
