var canvas = document.getElementById("dota");
var ctx = canvas.getContext("2d");

//background color
ctx.fillStyle = "#8D3020";
ctx.fillRect(0, 0, 200, 200);

//middle
ctx.beginPath();
ctx.moveTo(30, 40);
ctx.lineTo(40, 30);
ctx.lineTo(180, 130);
ctx.lineTo(175, 170);
ctx.lineTo(140, 170);
ctx.lineTo(30, 40);
ctx.fillStyle = "white";
ctx.fill();

// bottom
ctx.beginPath();
ctx.moveTo(25, 160);
ctx.lineTo(35, 130);
ctx.lineTo(70, 170);
ctx.lineTo(40, 175);
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();

//top
ctx.beginPath();
ctx.moveTo(160, 20);
ctx.lineTo(180, 35);
ctx.lineTo(175, 65);
ctx.lineTo(125, 30);
ctx.closePath();
ctx.fillStyle = "white";
ctx.fill();