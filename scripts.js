// MyScript.js

	//timers
	

	// function startTimer() {
	// 	timerId = setInterval(printTime, 0);
	// }
	// function stopTimer() {
	// 	clearInterval(timerId);
	// }

// MyScript.js

pageFn();

function pageFn() {
	var switchFrame = document.getElementById("flicker");
  var playerY = 0; //where should the top be at the beginning?
 
  function movePlayer() {
		switchFrame.style.display="block";

		setTimeout(function(){switchFrame.style.display="none";}, 100)

	// what is the top at the moment we should loop back?
		playerY = (playerY > -4000) ? playerY - 480 : 0;
		// console.log(playerY);

		$('#player').css("top", playerY);
	}
        
  setInterval(movePlayer, 1000);
}


function heleneFn() {

	var playerY = 0; //where should the top be at the beginning?

	function movePlayer() {
		if (playerY < 625) // what is the top at the moment we should loop back?
		{
			playerY = playerY + 3;
		}
		else {
			playerY = 0;
		}
		console.log(playerY);

		$('#player').css("top", playerY);
	}

	setInterval(movePlayer, 0.7);
}


