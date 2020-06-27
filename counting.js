var numSquares = 6;
var colors = generateRandomColors(6);//[
//"rgb(255, 0, 0)",
//"rgb(255, 255, 0)",
//"rgb(0, 255, 0)",
//"rgb(0, 255, 255)",
//"rgb(0, 0, 255)",
//"rgb(255, 0, 255)",
//]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor( );
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
//var easyBtn = document.querySelector("#easyBtn");
//var hardBtn = document.querySelector("#hardBtn");


//easyBtn.addEventListener("click", function(){
	//show that it was selected
	//hardBtn.classList.remove("selected");
	//easyBtn.classList.add("selected");
	//add logic to show the difficulties when easy or hard is chosen
	//generate three new colors , hide the other square
	//numSquares = 3;
	//colors = generateRandomColors(numSquares);
	//pickedColor = pickColor();
	//colorDisplay.textContent = pickedColor;
	//to hide is by looping and setting display color to be none
	//for(var i = 0;  i < squares.length; i++){
		//if(colors[i]){
			//squares[i].style.background = colors[i];
		//} else {
			//squares[i].style.display = "none";

		//}
	//} 

//});

//hardBtn.addEventListener("click", function(){
	//hardBtn.classList.add("selected");
	//easyBtn.classList.remove("selected");
	//numSquares = 6; bn modeButtons.length; i++){
	var moodButtons = document.querySelectorAll(".mood");
	for(var i = 0; i < moodButtons.length; i++){
		moodButtons[i].addEventListener("click", function(){
			moodButtons[0].classList.remove("selected");
			moodButtons[0].classList.remove("selected");
		this.classList.add("selected");
		this.textContent === "Easy" ? numSquares = 3: numSquares = 6; 
		//if(this.textContent === "Easy"){
			//numSquares = 3;
		//} else {
			//numSquares = 6;
		//}
		reset();
		
	});
};

function reset(){
	colors = generateRandomColors(numSquares);
	//pick a new random from array
	pickedColor = pickColor();
	//change colordisplay tomatch picked color
	colorDisplay.textContent = pickedColor;
	resetButton.textContent ="New Colors";
	messageDisplay.textContent = "";
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display ="block";
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display = "none";
	}
	}
	h1.style.background = "steelblue";



}

resetButton.addEventListener("click", function(){
	//generate new colors
	colors = generateRandomColors(numSquares);
	//pick a new random from array
	pickedColor = pickColor();
	//change colordisplay tomatch picked color
	colorDisplay.textContent = pickedColor;
	this.textContent ="New Colors";
	messageDisplay.textContent = "";
	//change color of squares
	for(var i = 0; i < squares.length; i++){
		squares[i].style.background = colors[i];
	}
	h1.style.background = "steelblue";
});

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	//add initial color to sq
	squares[i].style.background= colors[i];
	//add click listeners to squares
	squares[i].addEventListener("click", function(){
		//grab color
		var clickedColor = this.style.background;
		console.log(clickedColor, pickedColor);
		//compare color to picked color
		if(clickedColor === pickedColor){
			messageDisplay.textContent = "correct!";
			resetButton.textContent ="Play Again?"
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again"
		}
	});
}


function changeColors(colors) {
	//loop through the square
	for(var i = 0; i < squares.length; i++){
		//change the color of the squares
		squares[i].style.background = colors;
	};
};

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
};

function generateRandomColors(num){
//make an array
var arr = []
//add num random color
for(var i = 0; i < num; i++){
	//get random color and push into the array
	arr.push(randomColor())
}
//return that array
return arr;
}

function randomColor(){
	//pick a "red" from 0-255
	var r = Math.floor(Math.random() * 256);
	//pick a "green" from 0-255
	var g = Math.floor(Math.random() * 256);
	//pick a "blue" from 0=255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"};
//end