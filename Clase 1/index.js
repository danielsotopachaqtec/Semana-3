// Clase 01

var example = (parameters) => {
	// code to execute
	console.log(parameters);
};

example('Message');

let fish = ['piranha', 'barracuda', 'cod', 'eel'];

fish.forEach((indivitualFish) => {
	console.log(indivitualFish);
});

for (let i = 0; i < fish.length; i++) {
	console.log(fish[i]);
}
let printFish = fish.map((individualFish) => {
	console.log(individualFish);
});

printFish;

let pluralFish = fish.map((individualFish) => {
	console.log(`${individualFish}s`);
});

pluralFish;

let seaCreatures = ['whale', 'octopus', 'shark', 'cuttlefish', 'flounder'];

let filteredList = seaCreatures.filter((creature) => {
	console.log('filteredList', creature[0] === 's');
	return creature[0] === 's';
});

filteredList;

console.log('filteredList', filteredList);

let number = [42, 23, 16, 15, 4, 8];

let sum = number.reduce((a, b) => {
	return a + b;
});

console.log(sum);

const isCephalopod = (cephalopod) => {
	return ['cuttlefish', 'octopus'].includes(cephalopod);
};

console.log('isCephalopod', isCephalopod(seaCreatures));
seaCreatures.find(isCephalopod);

console.log(seaCreatures.find(isCephalopod));

const isCephalopods = (cephalopod) => {
	return ['cuttlefish', 'octopus'].includes(cephalopod);
};
seaCreatures.findIndex(isCephalopod);

console.log(seaCreatures.findIndex(isCephalopod));

const isThereAnEel = (eel) => {
	return ['eel'].includes(eel);
};
console.log(seaCreatures.findIndex(isThereAnEel));
