var numSquares=6;
var colors=generateRandomColor(numSquares);
var squares=document.querySelectorAll(".square");
var pickedColor=pickColor();
var messageDisplay=document.getElementById("message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");
var easyBtn=document.querySelector("#easyBtn");
var hardBtn=document.querySelector("#hardBtn");

easyBtn.addEventListener("click",function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares=3;
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		if(colors[i]){
			squares[i].style.backgroundColor=colors[i];
		}
		else{
			squares[i].style.display="none";
		}
	}
})
hardBtn.addEventListener("click",function(){
	hardBtn.classList.add("selected");
	easyBtn.classList.remove("selected");
	numSquares=6;
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
		squares[i].style.display="block";
	}
})
resetButton.addEventListener("click",function(){
	//generate all new colors;
	colors=generateRandomColor(numSquares);
	//pick a new random color from an array
	pickedColor=pickColor();
	//change colorDisplay to match picked color
	colorDisplay.textContent=pickedColor;
	//change colors of squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=colors[i];
	}
	h1.style.backgroundColor="steelblue";

	messageDisplay.textContent="";
	this.textContent="New Colors"
})

var colorDisplay=document.querySelector("#colorDisplay");
colorDisplay.textContent=pickedColor;


for(var i=0;i<squares.length;i++){
	//add initial color to square
	squares[i].style.backgroundColor=colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click",function(){
		//grap color of clicked square
		var clickedColor=this.style.backgroundColor;
		//compare color to picked color
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct";
			resetButton.textContent="Play Again?"
			changeColor(clickedColor);
		}
		else {
			this.style.backgroundColor="#232323";
			messageDisplay.textContent="Try Again";
		}
	})
}

function changeColor(color){
	//loop through all squares
	for(var i=0;i<squares.length;i++){
		squares[i].style.backgroundColor=color;
	}
	h1.style.backgroundColor=color;
}

function pickColor(){
	return colors[Math.floor(Math.random()*colors.length)];
}

function generateRandomColor(num){
	//make an array
	var arr=[];
	//add num random colors to arr
	for(var i=0;i<num;i++){
		arr.push(randomColor());
	}
	//return that array
	return arr;
}

function randomColor(){
	//pick red from 0-255
	var r=Math.floor(Math.random()*256);
	//pick green from 0-255
	var g=Math.floor(Math.random()*256);
	//pick blue from 0-255
	var b=Math.floor(Math.random()*256);

	return "rgb("+r+", "+g+", "+b+")";
}