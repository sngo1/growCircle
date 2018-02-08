// Samantha Ngo
// Workshop 2 - Canvas
// Softdev - pd7
// 2017-02-06

// Access canvas for actions
var canvas = document.getElementById("slate");
console.log("canvas: ", canvas);

// Set the context for canvas actions
ctx = canvas.getContext("2d");

var lastX = 50;
var lastY = 50;

// Given the coordinates relative to the canvas upper left corner, draw a circle
// at that location.
var drawCircle = function(x,y){
    console.log("X: ", x);
    console.log("Y: ", y);

    ctx.beginPath();
    ctx.arc(x, y, 20, 0, 2 * Math.PI);
    ctx.fillStyle = "hotpink"
    ctx.fill()
    console.log("Drew a circle.")
    while (lastX < 1000){
	lastX += 1;
	    clearCanvas();
	console.log(window.requestAnimationFrame(drawCircle(lastX, lastY)));
    }
    return true
}

// Based on the global state variable, decide whether to draw a circle or a
// square, connect the new point to the last point, and then draw the shape.
var animate = function(){
    window.requestAnimationFrame(drawCircle(lastX, lastY));
    return true;
}

var stop = function(){
    window.cancelAnimationFrame(lastX);
    return true;
}

// Draw a white rectangle over the canvas to clear it.
var clearCanvas = function(){
    ctx.beginPath();
    lastX = -1;
    lastY = -1;
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0,0,600,600);
    console.log("Canvas cleared.");
    return true
}

// Listen for user clicks
canvas.addEventListener('click', animate);

animate();

var stop = document.getElementById("stop");
console.log("stop: ", stop);
stop.addEventListener('click', changeShape);
