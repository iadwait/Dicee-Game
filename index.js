
var randomNumber1 = getRandomNumber();
var randomNumber2 = getRandomNumber();
var dice1Image = "dice" + randomNumber1 + ".png";
var dice2Image = "dice" + randomNumber2 + ".png";
var result = checkResult(randomNumber1,randomNumber2)
if (result === "D")
{
	alert("Draw");
} else if (result === "W1")
{
	alert("Winner 1");
} else {
	alert("Winner 2");
}



// Functions Definations
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