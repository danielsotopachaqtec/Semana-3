// var fruits = ['apple', 'bannana', 'orange'];

// const fruitsElements = fruits.forEach(function (fruit, index) {
// 	console.log(index + 1 + '.' + fruit);
// });

// fruitsElements;

// var author = 'FF';

// function namedCallback(param) {
// 	console.log(`called by: ${param}`);
// }

// function testFunction(callback) {
// 	callback;
// }

// testFunction(namedCallback(author));

// var message = 'Hello there';

// function myCallbackFunction() {
// 	console.log('myCallbackFunction is called()');
// }

// function testCallback(param, callback) {
// 	console.log(param);
// 	if (callback && typeof callback === 'function') {
// 		callback;
// 	}
// }

// testCallback(message); // ver que ocurre cuando le añadimos un parametro

// var suma = 26;
// function sum(num1, num2) {
// 	return num1 + num2;
// }

// function calculate(num1, num2, sum) {
// 	// sum is the call back function
// 	if (typeof sum === 'function') {
// 		return sum(num1, num2);
// 	} else {
// 		return 'No es una funcion';
// 	}
// }

// const result = calculate(4, 6, suma);

// console.log(result);

// function getDataFromServer(callback) {
// 	setTimeout(function () {
// 		callback();
// 	}, 100);
// }

// function personDetails() {
// 	console.log('PersonDetails are available to use');
// }

// getDataFromServer(personDetails);

// var student = {
// 	age: 22,
// 	setFullName: function (firstName, lastName) {
// 		this.fullName = `${lastName}, ${firstName}`;
// 	},
// };

// function userInput(firstName, lastName, callback, object) {
// 	callback.call(object, firstName, lastName);
// }

// userInput('Daniel', 'Soto', student.setFullName, student);

// console.log(student.fullName);

// function finishedSpeking(animal, sound) {
// 	console.log(`The ${animal} has finished ${sound}ing`);
// }

// function notFinishedSpeaking(animal, sound) {
// 	console.log(`The ${animal} has NOT finished ${sound}ing`);
// }

// function speak(animal, noise, afterSpeaking) {
// 	console.log(noise.toUpperCase());
// 	return afterSpeaking(animal, noise);
// }

// speak('cat', 'meow', finishedSpeking);
// speak('dog', 'bark', notFinishedSpeaking);

// function addToEachNumber(numbers) {
// 	var newNumber = [];
// 	for (var i = 0; i < numbers.length; i++) {
// 		newNumber.push(numbers[i] + 1);
// 	}
// 	console.log(newNumber);
// }
