let canvas = document.getElementById("display");
let context = canvas.getContext("2d");
let x = 20;
let y = 20;
let dx = 10;
let dy = 2;
let radius = 20;

let paddle = { width: 50, height: 10, x: 0, y: canvas.width - 10, speed: 15 };

function drawPaddle() {
  context.beginPath();
  context.rect(paddle.x, paddle.y, paddle.width, paddle.height);
  context.fill();
  context.stroke();
  context.closePath();
}

function drawBall() {
  context.beginPath();
  context.strokeStyle = "green";
  context.arc(x, y, radius, 0, Math.PI * 2);
  context.stroke();
  context.fillStyle = "green";
  context.fill();
  context.closePath();
}

// setInterval(function() {
//   context.clearRect(0, 0, canvas.width, canvas.height);
//   drawBall();
//   x += 0;
//   y += 5;
// }, 20);

function conditionBall() {
  if (x < radius || x > canvas.width - radius) {
    dx = -dx;
  }
  if (y < radius || y > canvas.height - radius) {
    dy = -dy;
  }
}

function positionBall() {
  x += dx;
  y += dy;
}

function draw() {
  context.clearRect(0, 0, canvas.width, canvas.height);
  conditionBall();
  positionBall();
  drawBall();
  drawPaddle();
  requestAnimationFrame(draw);
}
draw();

// https://www.youtube.com/watch?v=ZpA5AWEe_Yk&list=PL0tU2lrI2Ts5FJ5CVpo61Cz-3qwS44fmA&index=7
