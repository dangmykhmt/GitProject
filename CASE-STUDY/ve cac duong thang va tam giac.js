let canvas = document.getElementById("display");
let context = canvas.getContext("2d");

// alert("abc");
context.lineTo(0, 0);
context.lineTo(50, 50);
context.lineTo(0, 50);
context.lineTo(0, 0);
context.stroke();

context.moveTo(0, 100);
context.lineTo(100, 100);
context.stroke();
