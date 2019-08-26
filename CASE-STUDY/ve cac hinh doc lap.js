let canvas = document.getElementById("display");
let context = canvas.getContext("2d");

context.beginPath();
context.strokeStyle = "red";
context.rect(0, 0, 100, 50);
context.stroke();
context.fillStyle = "green";
context.fill();
context.closePath();

context.beginPath();
context.arc(150, 150, 100, 0, Math.PI * 2);
context.stroke();
context.fillStyle = "red";
context.fill();
context.closePath();

context.beginPath();
context.rect(400, 400, 100, 50);
context.stroke();
context.fillStyle = "yellow";
context.fill();
context.closePath;
