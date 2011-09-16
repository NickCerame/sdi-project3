//Nicholas Cerame
//September 16th, 2011
//Deliverable 3

var goblin = {
	name: 				"Norm",
	readyToSteal: 		true,
	difficultyLevel: 	"Hard",
	checkGoblin: 		function(name) {
			if (name === "Norm"){
			console.log("Morning, " + name + ".");
			}
			else {
			console.log("You better get back to guarding the entrance before the boss catches you down here.");
			}
	},
	checkDifficulty:	function(ready, difficulty) {
			var easy = 3,
				normal = 5,
				hard = 7
			;
			if (ready) {
				if (difficulty === "Easy"){
					console.log("You'll need to collect " + easy + " keys to unlock the door to the next room.");
					return easy;
				}
				else if (difficulty === "Normal") {
					console.log("You'll need to collect " + normal + " keys to unlock the door to the next room.");
					return normal;
				}
				else if (difficulty === "Hard") {
					console.log("You'll need to collect " + hard + " keys to unlock the door to the next room.");
					return hard;
				}
			}
			else {
				console.log("You should go back to the main menu and view the tutorial if you need help.");
			}
	}
};

var cave = {
	itemsToSteal:		["Gold Coins", "Silver Coins", "Keys"],
	level1: {
	keysRequired: 		0,
	coinOutput:			"",
	timeRemaining: 		60,
	itemsStolen: 		[0, 0, 0],
	starTotal:			0,
	goldTotal:			0,
	silverTotal:		0,
	itemAndTimeCheck: 	function (items, timeToSteal) {
			var silver,
				gold;
		
			console.log("Time Limit:");
		
			for (var stolenItems = items; stolenItems[2] != cave.level1.keysRequired; timeToSteal--) {
				console.log(timeToSteal);
				stolenItems[2] = Math.floor(Math.random() * (cave.level1.keysRequired + 1));
		
				silver = Math.floor(Math.random() * 8);
				gold = Math.floor(Math.random() * 6);
		
				stolenItems[0] += gold;
				stolenItems[1] += silver;
			}
	
			if (timeToSteal === 0) {
				console.log("Time limit reached. Better luck next time, " + goblin.name + ".");
			}
			else {
				console.log("Great job collecting enough keys before the time limit ran out, " + goblin.name + ". You now have enough to unlock the next room.");
			}
	
			return stolenItems;
	},
	outputItems: 		function (items, numItems) {
			return ("You've collected " + numItems[0] + " " + items[0] + " and " + numItems[1] + " " + items[1] + ".");
	},
	coinCheck: 			function (goldCoins, silverCoins) {
			if (goldCoins && silverCoins) {
				console.log("You've earned 2 stars.");
				starTotal = 2;
			}
			else if (goldCoins || silverCoins) {
				console.log("You've earned 1 star.");
				starTotal = 1;
			}
			else {
				console.log("You've earned 0 stars.");
				starTotal = 0;
			}
	
			return starTotal;
		}
	}
};

var starCheck = function (numStars) {
	var starsNeeded;
	while (numStars < 15) {
		starsNeeded = 15 - numStars
		console.log("You need 15 stars to unlock the next cave. Sorry, you only have " + numStars + ".");
		console.log("Would you like to buy enough stars to move onto the next cave? It'll be $0.99.");
		numStars += starsNeeded;
	}
	
	return numStars;
};



goblin.checkGoblin(goblin.name);
cave.level1.keysRequired = goblin.checkDifficulty(goblin.readyToSteal, goblin.difficultyLevel);
cave.level1.itemsStolen = cave.level1.itemAndTimeCheck(cave.level1.itemsStolen, cave.level1.timeRemaining);
cave.level1.coinOutput = cave.level1.outputItems(cave.itemsToSteal, cave.level1.itemsStolen);
console.log("Stats:");
console.log(cave.level1.coinOutput);
if (cave.level1.itemsStolen[0] >= 15) {
	cave.level1.goldTotal = true;
}
else {
	cave.level1.goldTotal = false;
}

if (cave.level1.itemsStolen[1] >= 25) {
	cave.level1.silverTotal = true;
}
else {
	cave.level1.silverTotal = false;
}

cave.level1.starTotal = cave.level1.coinCheck(cave.level1.goldTotal, cave.level1.silverTotal);
console.log("-----Attempt to unlock cave 2-----");
cave.level1.starTotal = starCheck(cave.level1.starTotal);

console.log("You now have " + cave.level1.starTotal + " stars. Would you like to unlock the next cave?");
console.log("Cave 2 is now unlocked.");



alert("JavaScript works!");

