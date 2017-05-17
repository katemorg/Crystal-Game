/*variables:
	computerChoice = random number
	redCrystal = random value resets for each game
	blueCrystal = random value resets for each game
	greenCrystal = random value resets for each game
	whiteCrystal = random value resets for each game
		for these, create a reusable function
	wins = total number of wins (do wins++)
	losses = total number of losses (do losses++)
	scoreCount = total player score, this should update by adding
				 values of each crystal clicked
	addToScore = value of button clicked

*/

/*on click event to start/reset
	generates a random number to score, saves as variable, 
		and displays in random number div
	generates random numbers for each crystal
		saves as variables (integers) assigned to each crystal
			data attributes? values?
	does not reset the total wins/losses
*/
/*on click events for the crystals
	retrieves current value of the crystal
	adds it to the total score variable
	displays total score variable in score div
		this display has to reset each time a crystal is clicked, 
		but the variable itself can't reset until the user 
		wins/loses
	compares the total score variable to the random number
		if too low, keeps going
		if too high, records loss
			adds loss to stats div and resets the game
		if matches, records win
			adds win to stats div and resets the game
*/

/*
$(document).ready(function(){

var computerChoice = getRandomNumber(19, 120);
var redCrystal = 0;
var blueCrystal = 0;
var greenCrystal = 0;
var whiteCrystal = 0;
var wins = 0;
var losses = 0;
var scoreCount = 0;
var addToScore = 0;


//function to get a random number, inclusive
function getRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//var crystalNumbers = [];
//var crystalImages = ["assets/images/red.jpeg" , "assets/images/blue.jpg" , "assets/images/diamond.jpg" , "assets/images/green.jpg"]

/*function getCrystalNumbers() {
	crystalNumbers = [];
	for (var i = 0; i < 4; i++) {
		crystalNumbers[i]  = getRandomNumber(1, 12);
	}
	return(crystalNumbers);
	for (var i = 0; i < crystalNumbers.length; i++) {
		var crystalButton = $("<img>");
		crystalButton.attr("data-num", crystalNumbers[i])
					 .attr("src", crystalImages[i]);
		$('.crystals').append(crystalButton);
	}
}

getCrystalNumbers();*/

//function to reset the scores and get new random numbers
/*function resetGame (){
	scoreCount = 0;
	scoreAdd = 0;
	computerChoice = getRandomNumber(19, 120);
	redCrystal = getRandomNumber(1, 12);
	//$('.red').attr("data-num", (getRandomNumber(1,12));
	blueCrystal = getRandomNumber(1, 12);
	greenCrystal = getRandomNumber(1, 12);
	whiteCrystal = getRandomNumber(1, 12);
}

$('#start-button').click(function(){
	computerChoice = getRandomNumber(19,120);
	$('.random-computer-choice').html(computerChoice);
	redCrystal = getRandomNumber(1, 12);
	$('.red').attr("value", redCrystal);

});

$('.crystals').click(function(){
	scoreAdd = this.val();

});


}); */



$(document).ready(function(){

//function to get random number, inclusive
function getRandomNumber(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

//set random number and display in panel
var computerChoice = getRandomNumber(19,120);
//$('#random-computer-choice').html(computerChoice);

//set random numbers for crystals
var redNumber = getRandomNumber(1,12);
var blueNumber = getRandomNumber(1,12);
var whiteNumber = getRandomNumber(1,12);
var greenNumber = getRandomNumber(1,12);

//set variables for stats
var userTotal = 0;
var wins = 0;
var losses = 0;
//writes wins/losses stats to panel
$('#win-counter').text("Wins: " + wins);
$('#loss-counter').text("Losses: " + losses);

//resets the game
function reset(){
	computerChoice = getRandomNumber(19,120);
	$('#random-computer-choice').html(computerChoice);
	redNumber = getRandomNumber(1,12);
	blueNumber = getRandomNumber(1,12);
	whiteNumber = getRandomNumber(1,12);
	greenNumber = getRandomNumber(1,12);
	userTotal = 0;
	$('#total-score').text(userTotal);
}

//function for start/reset button
$('#start-button').click(function(){
	reset();
});

//function for winning
function winFunction(){
	wins++;
	$('#win-counter').text("Wins: " + wins);
	reset();
}

//function for losing
function loseFunction(){
	losses++;
	$('loss-counter').text("Losses: " + losses);
	reset();
}

//clicks for crystals
$('.red').click(function(){
	userTotal = userTotal + redNumber;
	$('#total-score').text(userTotal);
		if (userTotal == computerChoice){
			winFunction();
		}
		else if(userTotal > computerChoice){
			loseFunction();
		}
});

$('.green').click(function(){
	userTotal = userTotal + greenNumber;
	$('#total-score').text(userTotal);
		if (userTotal == computerChoice){
			winFunction();
		}
		else if(userTotal > computerChoice){
			loseFunction();
		}
});

$('.white').click(function(){
	userTotal = userTotal + whiteNumber;
	$('#total-score').text(userTotal);
		if (userTotal == computerChoice){
			winFunction();
		}
		else if(userTotal > computerChoice){
			loseFunction();
		}
});

$('.blue').click(function(){
	userTotal = userTotal + blueNumber;
	$('#total-score').text(userTotal);
		if (userTotal == computerChoice){
			winFunction();
		}
		else if(userTotal > computerChoice){
			loseFunction();
		}
});


});
