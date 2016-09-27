// MyScript.js



	
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



	//timers
	

	// function startTimer() {
	// 	timerId = setInterval(printTime, 0);
	// }
	// function stopTimer() {
	// 	clearInterval(timerId);
	// }











