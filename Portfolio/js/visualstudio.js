var canvas = document.getElementById("visualstudio");
var ctx = canvas.getContext("2d");

//background color
ctx.fillStyle="#221F1F";
ctx.fillRect(0, 0, 200, 200);

//base
ctx.beginPath();
ctx.moveTo(140, 10);
ctx.lineTo(190, 30);
ctx.lineTo(190, 160);
ctx.lineTo(140, 190);
ctx.closePath();
ctx.fillStyle = "#3C99D4";
ctx.fill();

//extension1
ctx.beginPath();
ctx.moveTo(140, 10);
ctx.lineTo(140, 70);
ctx.lineTo(40, 140);
ctx.lineTo(10, 130);
ctx.closePath();
ctx.fillStyle = "#0877B9";
ctx.fill();

//extension2
ctx.beginPath();
ctx.moveTo(140, 190);
ctx.lineTo(140, 130);
ctx.lineTo(40, 60);
ctx.lineTo(10, 70);
ctx.closePath();
ctx.fillStyle = "#2489CA";
ctx.fill();