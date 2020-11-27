var canvas = document.getElementById("vaporwave");
var ctx = canvas.getContext("2d");

//background
ctx.fillStyle = "black";
ctx.fillRect(0, 0, 200, 200);

// Create gradient
var grd = ctx.createRadialGradient(80, 50, 5, 90, 60, 100);
grd.addColorStop(0, "red");
grd.addColorStop(1, "#de00a3");

// Fill with gradient

ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(100, 100, 80, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = grd;
ctx.fill();

//rectangles
ctx.fillStyle = "black";
ctx.fillRect(0, 100, 200, 5);
ctx.fillRect(0, 120, 200, 8);
ctx.fillRect(0, 140, 200, 10);
ctx.fillRect(0, 160, 200, 12);