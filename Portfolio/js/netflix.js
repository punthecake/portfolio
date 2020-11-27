var canvas = document.getElementById("netflix");
var ctx = canvas.getContext("2d");

//background color
ctx.fillStyle="#221F1F";
ctx.fillRect(0, 0, 200, 200);

//netflix base rect
ctx.fillStyle="#B81D24";
ctx.fillRect(50, 30, 30, 140);
ctx.fillRect(120, 30, 30, 140);

//netflix base line
ctx.beginPath();
ctx.moveTo(50, 30);
ctx.lineTo(80, 30);
ctx.lineTo(150, 170);
ctx.lineTo(120, 170);
ctx.lineTo(50, 30);
ctx.closePath();
ctx.fillStyle="#E50914";
ctx.fill();