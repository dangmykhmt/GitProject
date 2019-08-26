let canvas = document.getElementById("display");
let context = canvas.getContext("2d");

context.arc(100, 100, 50, 0, Math.PI * 2, false);
context.stroke();
context.fillStyle = "green";
context.fill();
