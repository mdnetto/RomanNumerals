// any of the letters representing numbers in the 
// Roman numerical system: I = 1, V = 5, X = 10, 
// L = 50, C = 100, D = 500, M = 1,000. In this 
// system, a letter placed after another of 
// greater value adds (thus XVI or xvi is 16), 
// whereas a letter placed before another of 
// greater value subtracts (thus XC or xc is 90).
//
// I, II, III, IV, V, VI, VII, VIII, IX, X
// XI, XII, XIII, XIV, XV, XVI, XVII,  
//
const readline = require('readline');
const read = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
});

function getNumber() {
	read.question('Type in a number to be converted to a Roman Numeral: ', (number) => {
		var romanNumeral = '';
		console.log('The Roman Numeral is: ', checkForMatch(number));
		read.close();
	});
}

function checkForMatch(n) {
var rn = { 1:"I", 5:"V", 10:"X", 50:"L", 100:"C", 500:"D", 1000:"M" };
	var array = Object.keys(rn);
	for (var i=0; i<=array.length; i++){
		if (n == array[i]) {
			return rn[array[i]];
		} else if (n.length == 1) {
			return convert(n, 'I', 'V', 'X');
		} else if (n.length == 2) {
			return convert(n[0], 'X', 'L', 'C') + convert(n[1], 'I', 'V', 'X');
		} else if (n.length == 3) {
			return convert(n[0], 'C', 'D', 'M') + convert(n[1], 'X', 'L', 'C') + convert(n[2], 'I', 'V', 'X');
		}
	}
	return false;
}

function convert(n, unit, min, max) {
	var string = '';
	if (n <= 3) {
		string = buildSingles(n, unit);
	} else if (n == 4) {
	  string += unit + min; 
	} else if (n == 9) {
	  string += unit + max;
	} else if (n <= 8) {
	  string += min + buildSingles(n-5, unit); 
	}
	return string;
}

function buildSingles(n, unit) {
	var string = '';
		for (var i=1; i<=n; i++) {
			string += unit; 
		}
	return string;
}

getNumber();
