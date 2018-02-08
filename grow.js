// Samantha Ngo
// Workshop 2 - Canvas
// Softdev - pd7
// 2017-02-06

// Access canvas for actions
var canvas = document.getElementById("slate");
console.log("canvas: ", canvas);

// Set the context for canvas actions
ctx = canvas.getContext("2d");

var x = 300;
var y = 300;
var requestID;
var requested = false;
var radius = 10;
var grow = true;

// Given the coordinates relative to the canvas upper left corner, draw a circle
// at that location.
var drawCircle = function(){
    console.log("X: ", x);
    console.log("Y: ", y);

    ctx.beginPath();
    ctx.arc(x, y, radius, 0, 2 * Math.PI);
    ctx.fillStyle = "hotpink"
    ctx.fill()
    console.log("Drew a circle.")
    return true
}

var stop = function(){
    window.cancelAnimationFrame(requestID);
    return true;
}

var animate = function(){
    clearCanvas();
    console.log("Radius: ", radius);
    drawCircle();

    if (radius == 200){
	grow = false;
    } else if(radius == 5){
	grow = true;
    }
    
    if (grow){
	radius += 5;
    } else {
	radius -= 5;
    } 
	
    requestID = window.requestAnimationFrame(animate);
    console.log("REQID# ", requestID);
    return true;
}

/*
var direction = "right";

// Based on the global state variable, decide whether to draw a circle or a
// square, connect the new point to the last point, and then draw the shape.
var animate = function(){
    clearCanvas();
    drawCircle(lastX, lastY);
   
    if (direction == "right"){
	console.log("Heading ", direction);
	if (lastX < 550){
	    lastX += 5
	} else {
	    direction = "down";
	}
    } else if (direction == "down"){
	console.log("Heading ", direction);
	if (lastY < 550){
	    lastY += 5;
	} else {
	    direction = "left";
	}
    } else if (direction == "left"){
	console.log("Heading ", direction);
	if (lastX > 50){
	    lastX -= 5;
	} else {
	    direction = "up";
	}
    } else if (direction == "up"){
	console.log("Heading ", direction);
	if (lastY > 50){
	    lastY -= 5;
	} else {
	    direction = "right";
	}
    } else {
	stop();
	console.log("Animation finished.");
    }

    requestID = window.requestAnimationFrame(animate);
    console.log("REQID# ", requestID);
    return true;
}
*/

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
stop.addEventListener('click', stop);
var start = document.getElementById("start");
console.log("start: ", start);
start.addEventListener('click', animate);
