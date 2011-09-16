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
	
	
	
	
var	itemsToSteal = ["Gold Coins", "Silver Coins", "Keys"],
	itemsStolen = [0, 0, 0],
	timeRemaining = 60,
	goldTotal,
	silverTotal,
	coinOutput,
	starTotal
;




goblin.checkGoblin(goblin.name);
goblin.checkDifficulty(goblin.readyToSteal, goblin.difficultyLevel);




















alert("JavaScript works!");

