/**
*	This is the JavaScript code page for my 5 game website
*	@author Kevin Dimarco Feb, 2019
*/
window.onload = function method() {
	document.getElementById("location1").innerHTML = "X";
	document.getElementById("location2").innerHTML = "O";
	document.getElementById("location3").innerHTML = "X";
	document.getElementById("location1").style.backgroundColor = 'red';


}

// Start tic tac toe code
const player1 = 'X';
const player2 = 'O';
const possibleWinCombinations = [[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];

// var testLocation = document.getElementById("location1");
// testLocation.innerHTML = "works";

console.log(possibleWinCombinations);




