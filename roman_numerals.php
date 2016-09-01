<?php

//any of the letters representing numbers in the Roman numerical system:
//I = 1, V = 5, X = 10, L = 50, C = 100, D = 500, M = 1,000.
//In this system, a letter placed after another of greater value adds (thus XVI or xvi is 16),
//whereas a letter placed before another of greater value subtracts (thus XC or xc is 90).

$input = 0;

function promptUser() {
    $prompt = "Type in a number to be converted into a Roman Numeral: ";
    echo $prompt;
}

$handle = fopen ("php://stdin","r");
$input = intval(fgets($handle));

if ($input > 0 && is_numeric($input)) {
    echo "Value is a int";
} else {
    echo "Please enter a valid number";
    $this->promptUser();
}


