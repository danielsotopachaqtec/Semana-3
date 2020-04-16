// var species = 'human';

// function transform() {
// 	// initialize a local, function-scope variable
// 	var species = 'werewolf';
// 	console.log(species);
// }

// Log the global and Local variable

// console.log(species);
// transform();
// console.log(species);

// var fullMoonm = false;

// // initializa a global variable

// let species = 'human';

// if (fullMoonm) {
// 	// initialize a block-scoped variable
// 	let species = 'werewolf';
// 	console.log(`It is a full moon, is currently a ${species}.`);
// }

// console.log(`It is not a full moon. is currently a ${species}.`);

// var x = 100;

// function hoist() {
// 	if (false) {
// 		var x = 200;
// 	}
// 	console.log(x);
// }

// hoist();

// let x = true;

// function hoist() {
// 	if (3 === 4) {
// 		let x = false;
// 	}
// 	console.log(x);
// }

// hoist();

//mutable

const car = {
	color: 'yellow',
	price: 50000,
};

// Modify a property of Car

car.price = 20000;

console.log(car);
