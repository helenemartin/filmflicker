// MyScript.js

	//timers
	

	// function startTimer() {
	// 	timerId = setInterval(printTime, 0);
	// }
	// function stopTimer() {
	// 	clearInterval(timerId);
	// }

// MyScript.js
/////////////////////////////////////
//  change TOP_UP to change direction
/////////////////////////////////////
// var TOP_UP = true;
var TOP_UP = false;
var SHOW_FILM_2 = false;

var TOP_DOWN_START = -4320;
var MAX_POS = -4000;
var FRAME_SIZE = -480;
var playerY = 0; //where should the top be at the beginning?
var strips = ["url(../FilmFlicker/images/strip2.jpg)", "url(../FilmFlicker/images/strippink.jpg)", "url(../FilmFlicker/images/stripblue.jpg)" ];
var counter = 0;

// this (one-time) check makes frame size negative
if (TOP_UP === false) {

	playerY = TOP_DOWN_START;
	FRAME_SIZE = -FRAME_SIZE;
}

var switchFrame = document.getElementById("flicker");

if (SHOW_FILM_2 === true) {
	var projector = document.getElementById("player");

	projector.classList.remove('playerFilm1');
	projector.classList.add('playerFilm2');
}

startPlayer();

function startPlayer() {
 
  function movePlayer() {
		switchFrame.style.display="block";

		setTimeout(function () {
				var noOp = 0;
				switchFrame.style.display="none";

				// this just gives me a place for a breakpoint!
				noOp = 1;
			},
			100
		);

	// what is the top at the moment we should loop back?
		// playerY = (playerY > -4000) ? playerY - 480 : 0;
		if (TOP_UP === true)
		{
			if (playerY > MAX_POS) 
			{
				playerY = playerY + FRAME_SIZE;
			}
			else {
				playerY = 0;
			}
		}
		else {
			// if (playerY < -FRAME_SIZE) 
			if (playerY < 0) 
			{
				playerY = playerY + FRAME_SIZE;
			}
			else {
				playerY = TOP_DOWN_START;
				//this is where the loop changes
				$("#player").css("background", strips[counter] + ' no-repeat');
				if (counter === strips.length) {
					counter = 0;
				}
				else {
					counter++;
				}
				
			}
		}

		console.log($("#player").css("background"));

		$('#player').css("top", playerY);
	}
        
  setInterval(movePlayer, 80);
}


// function origFn() {

// 	function movePlayer() {
// 		if (playerY < 625) // what is the top at the moment we should loop back?
// 		{
// 			playerY = playerY + 3;
// 		}
// 		else {
// 			playerY = 0;
// 		}
// 		console.log(playerY);

// 		$('#player').css("top", playerY);
// 	}

// 	setInterval(movePlayer, 0.7);
// }


