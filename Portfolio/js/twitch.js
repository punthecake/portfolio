var canvas = document.getElementById("twitch");
var ctx = canvas.getContext("2d");


//twitch outline
ctx.beginPath();
ctx.moveTo(170, 30);
ctx.lineTo(40, 30);
ctx.lineTo(20, 45);
ctx.lineTo(20, 155);
ctx.lineTo(70, 155);
ctx.lineTo(70, 180);
ctx.lineTo(90, 180);
ctx.lineTo(105, 155);
ctx.lineTo(140, 155);
ctx.lineTo(170, 130);
ctx.closePath();
ctx.fillStyle="#6441a5";
ctx.fill();

//twitch inner outline
ctx.beginPath();
ctx.moveTo(160, 40);
ctx.lineTo(45, 40);
ctx.lineTo(45, 135);
ctx.lineTo(85, 135);
ctx.lineTo(85, 150);
ctx.lineTo(100, 135);
ctx.lineTo(135, 135);
ctx.lineTo(160, 120);
ctx.closePath();
ctx.fillStyle="white";
ctx.fill();

//twitch inner details
ctx.fillStyle="#6441a5";
ctx.fillRect(80, 70, 15, 35);
ctx.fillRect(120, 70, 15, 35);