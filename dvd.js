// Samantha Ngo
// Workshop 2 - Canvas
// Softdev - pd7
// 2017-02-08

// Remaining Bugs: Folows a consistent pattern; after a certain number of bounces, it goes off screen.

// Access canvas for actions
var canvas = document.getElementById("slate");
console.log("canvas: ", canvas);

// Set the context for canvas actions
ctx = canvas.getContext("2d");

var x = 53;
var y = 173;
var requestID;
var requested = false;
var radius = 10;

// Given the coordinates relative to the canvas upper left corner, draw a circle
// at that location.
var drawCircle = function(color){
    console.log("X: ", x);
    console.log("Y: ", y);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = color
    ctx.fill()
    console.log("Drew a circle.")
    return true
}

var xVal = 1;
var yVal = 1;
var negateX = false;
var negateY = false;
var color;
var switchColor = false;
var colorCode = 0;
var colorChange = -1;

var animate = function(){
    clearCanvas();
    if(colorCode == 0){
	color = "red";
	colorChange *= -1;
    } else if(colorCode == 1){
	color = "orange";
    } else if(colorCode == 2){
	color = "yellow";
    } else if(colorCode == 3){
	color = "green";
    } else if(colorCode == 4){
	color = "blue";
    } else if(colorCode == 5){
	color = "purple";
    } else if(colorCode == 6){
	color = "hotpink";
	colorChange *= -1;
	switchColor = true;
    }

    if (switchColor){
	colorCode += colorChange;
	switchColor = false;
    }

    console.log("Color code: ", colorCode);
    drawCircle(color);
    
    
    if (x >= 600 || x <= 0){ // Right edge
	negateX = true;
	switchColor = true;
    } else if (y >= 600 || y <= 0){
	negateY = true;
	switchColor = true;
    }

    if (negateX){
	xVal = xVal * -1;
	negateX = false;
    } else if (negateY){
	yVal = yVal * -1;
	negateY = false;
    }

    x += xVal * 2;
    y += yVal * 7;

    requestID = window.requestAnimationFrame(animate);
    console.log("REQID# ", requestID);
    return true;
}

var stopFunc = function(e){
    console.log("Cancel ID: ", requestID);
    window.cancelAnimationFrame(requestID);
    return true;
}

// Draw a white rectangle over the canvas to clear it.
var clearCanvas = function(){
    ctx.beginPath();
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,600,600);
    console.log("Canvas cleared.");
    return true
}

// Listen for user clicks
canvas.addEventListener('click', animate);

var stop = document.getElementById("stop");
console.log("stop: ", stop);
stop.addEventListener('click', stopFunc);
var start = document.getElementById("start");
console.log("start: ", start);
start.addEventListener('click', animate);
