"use strict";

function checkLetter(letter){
    var symbol = letter.toUpperCase();
    return symbol != 'Р' && symbol != 'К' && symbol != 'Н';
}

var inputStr;
var inputStrArray;
var ouputStrArray;

inputStr = process.argv[2];
inputStrArray = inputStr.split("");

ouputStrArray = inputStrArray.filter(checkLetter);
process.stdout.write(ouputStrArray.join(""));
