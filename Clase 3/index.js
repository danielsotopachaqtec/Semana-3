// 1) Añadir nuevos callback que reste, divida
// 2) refactorizar o re-escribir la funcion doMath
// 3) Añadir validaciones a nuestras callback if typeof ...

function addOne(number) {
	console.log(number + 1);
}

function multiplyByTen(number) {
	console.log(number * 10);
}

function multiply(number, multiply) {
	console.log(number * multiply);
}

function doMath(numbers, numberCallback, multiplyValue) {
	var newNumber = [];
	if (!multiplyValue) {
		for (var i = 0; i < numbers.length; i++) {
			var result = numberCallback(numbers[i]);
			newNumber.push(result);
		}
	} else {
		for (var i = 0; i < numbers.length; i++) {
			var result = numberCallback(numbers[i], multiplyValue);
			newNumber.push(result);
		}
	}
}

var oldNumbers = [3, 8, 6];
doMath(oldNumbers, addOne);
doMath(oldNumbers, multiply, 2);
