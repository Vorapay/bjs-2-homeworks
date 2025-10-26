"use strict"

// задание №1
function solveEquation(a, b, c) {
	let arr = [];

	let discriminant = b ** 2 - 4 * a * c;

	if (discriminant < 0) {
		return arr;
	} else if (discriminant === 0) {
		let root = -b / (2 * a);
		arr.push(root)
		return arr;
	} else if (discriminant > 0) {
		let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);
		let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);
		arr.push(root1, root2)
		return arr;
	}
}

console.log(solveEquation(1, 5, 4));
console.log(solveEquation(1, 2, 1));
console.log(solveEquation(1, 2, 10));

// задание №2
function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	const monthlyPercent = percent / 100 / 12;

	const loanBody = amount - contribution;

	if (loanBody <= 0) {
		return 0;
	}

	const monthlyPayment = loanBody * (monthlyPercent + monthlyPercent / ((1 + monthlyPercent) ** countMonths - 1));

	const totalAmount = monthlyPayment * countMonths;

	return Number(totalAmount.toFixed(2));
}

console.log(calculateTotalMortgage(10, 0, 50000, 12));
console.log(calculateTotalMortgage(10, 1000, 50000, 12));
console.log(calculateTotalMortgage(10, 20000, 20000, 48));
console.log(calculateTotalMortgage(10, 0, 10000, 36));
console.log(calculateTotalMortgage(15, 0, 10000, 36));