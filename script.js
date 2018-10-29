var css = document.querySelector("h3");
var color1 =document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var button = document.querySelector(".btnrandom");


function setGradient(){
	body.style.background="linear-gradient(to right," + color1.value +"," 
	+color2.value+ ")";

	css.textContent = body.style.background +";";
}

function RandomColor(){
	var variables = '0123456789ABCDEF'.split('');
	var color ="#";

	for (var i = 0; i < 6; i++) {
		color += variables[Math.round(Math.random()* 15)];
	}

	return color;
}

function setRandom(){
	color1.value=RandomColor();
	color2.value=RandomColor();
	setGradient();
}

color1.addEventListener("input",setGradient);

color2.addEventListener("input",setGradient);

button.addEventListener("click",setRandom);

