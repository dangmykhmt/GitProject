let canvas = document.getElementById("display");
let context = canvas.getContext("2d");

context.strokeStyle = "red";
context.moveTo(0, 0);
context.lineTo(100, 0);
context.lineTo(100, 50);
context.lineTo(0, 50);
context.lineTo(0, 0);
context.stroke();

// context.rectStyle = "red";
context.rect(100, 100, 100, 50);
context.stroke();
context.fillStyle = "green"; // thay đổi màu cho hình khối
context.fill();
