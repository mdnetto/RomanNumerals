// any of the letters representing numbers in the 
// Roman numerical system: I = 1, V = 5, X = 10, 
// L = 50, C = 100, D = 500, M = 1,000. In this 
// system, a letter placed after another of 
// greater value adds (thus XVI or xvi is 16), 
// whereas a letter placed before another of 
// greater value subtracts (thus XC or xc is 90).
//
// I, II, III, IV, V, VI, VII, VIII, IX, X
// XI, XII, XIII, XIV, XV, XVI, 
//
const readline = require('readline');

const read = readline.createInterface({
	  input: process.stdin,
	  output: process.stdout
});

function getNumber() {
	read.question('Type in a number to be converted to a Roman Numeral: ', (number) => {
		console.log('The Roman Numeral is: ', checkForMatch(number));
		read.close();
	});
}

function checkForMatch(n) {
var romanNumerals = { 1:"I", 5:"V", 10:"X", 50:"L", 100:"C", 500:"D", 1000:"M" };
	var array = Object.keys(romanNumerals);
	for (var i=0; i<=array.length; i++){
		if (n == array[i]) {
			return romanNumerals[array[i]];
		 } else {
			 convertOnes(n);
		}
	}
}

function convertOnes(n) {
	if (romanNumerals[1]) {
	var string = "";
		if (n < 4 && n < 8) {
			string += "V";
			if (n-5 != 0) {
				buildSingles(n-5, string);
			}
		}
	}
}

getNumber();

function buildSingles(n, string) {
	typeof string === 'undefined' ? string = '' : string;
	if (n <= 3) {
		for (var i=1; i<=n; i++) {
			string += "I";
		}
	}
}
