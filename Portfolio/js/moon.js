var canvas = document.getElementById("moon");
var ctx = canvas.getContext("2d");

//moon
ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(100, 100, 80, 0, 2 * Math.PI);
ctx.stroke();
ctx.closePath();
ctx.fillStyle = "#e6e7e9";
ctx.fill();

//moon-crater
ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(150, 100, 10, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "#969696";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(110, 100, 20, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "#969696";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(50, 100, 11, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "#969696";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(60, 60, 16, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "#969696";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(60, 140, 9, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "#969696";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(140, 60, 7, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "#969696";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(140, 130, 6, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "#969696";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(110, 50, 11, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "#969696";
ctx.fill();

ctx.beginPath();
ctx.lineWidth = 5;
ctx.arc(95, 160, 14, 0, 2 * Math.PI);
ctx.closePath();
ctx.fillStyle = "#969696";
ctx.fill();