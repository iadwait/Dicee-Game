
// Variable Declarations
var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();
var dice1Image = "images/dice" + randomNumber1 + ".png";
var dice2Image = "images/dice" + randomNumber2 + ".png";
var result = checkResult(randomNumber1,randomNumber2)
var image1 = document.querySelectorAll("img")[0].setAttribute("src",dice1Image);
var image2 = document.querySelectorAll("img")[1].setAttribute("src",dice2Image);

// Update UI Based on Result
if (result === "D")
{
	document.querySelector("h1").innerHTML = "DRAW !!";	
} else if (result === "W1")
{
	document.querySelector("h1").innerHTML = "Player 1 Wins !!";
} else {
	document.querySelector("h1").innerHTML = "Player 2 Wins !!";
}

// Functions Definations

// Function to generate Random Number
function getRandomNumber() 
{
    var randomNumber = Math.random()
    var num = randomNumber * 6
    var actualNum = Math.floor(num) + 1;
    return actualNum
}

// Function to Check Result
function checkResult(score1 , score2)
{
	if (score1 === score2)
	{
		return "D"
	} else if(score1 > score2)
	{
		return "W1"
	}else {
		return "W2"
	}
}