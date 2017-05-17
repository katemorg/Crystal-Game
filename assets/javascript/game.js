$(document).ready(function(){

	//function to get random number, inclusive
	function getRandomNumber(min, max) {
		min = Math.ceil(min);
		max = Math.floor(max);
		return Math.floor(Math.random() * (max - min + 1)) + min;
	}

	//set random number and display in panel
	var computerChoice = getRandomNumber(19,120);
	$('#random-computer-choice').html(computerChoice);


	//set random numbers for crystals
	var redNumber = getRandomNumber(1,12);
	var blueNumber = getRandomNumber(1,12);
	var whiteNumber = getRandomNumber(1,12);
	var greenNumber = getRandomNumber(1,12);

	//set variables for stats
	var userTotal = 0;
	var wins = 0;
	var losses = 0;


	//function to reset the game at end of round
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

	//click event for reset button, just for fun
	$('#reset-button').click(function(){
		reset();
	});

	//function for tracking stats
	function scoreKeeper() {
		$('#total-score').text(userTotal);
			if (userTotal == computerChoice){
				wins++;
				$('#win-counter').text('Wins: ' + wins);
				reset();
			}
			else if(userTotal > computerChoice){
				losses++;
				$('#loss-counter').text('Losses: ' + losses);
				reset();
			}
	}


	//clicks for crystals
	$('.red').click(function(){
		userTotal = userTotal + redNumber;
		scoreKeeper();
	});

	$('.green').click(function(){
		userTotal = userTotal + greenNumber;
		scoreKeeper();
	});

	$('.white').click(function(){
		userTotal = userTotal + whiteNumber;
		scoreKeeper();
	});

	$('.blue').click(function(){
		userTotal = userTotal + blueNumber;
		scoreKeeper();
	});


});
