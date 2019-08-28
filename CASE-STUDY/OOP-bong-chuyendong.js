class Ball {
  constructor(x, y, radius, dx, dy) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
  }
  drawBall() {
    let canvas = document.getElementById("display");
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "green";
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = "green";
    context.fill();
    context.closePath();
  }
}

class Paddle {
  constructor(x, y, width, height, speed) {
    this.width = width;
    this.height = height;
    this.x = x;
    this.y = y;
    this.speed = speed;
    this.isMovingLeft = false;
    this.isMovingRight = false;
  }
  drawPaddle() {
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.fill();
    context.stroke();
    context.closePath();
  }
}
let paddle = new Paddle(0, 490, 100, 10, 10);
let ball = new Ball(20, 20, 20, 10, 2);
let canvas = document.getElementById("display");
let context = canvas.getContext("2d");

document.addEventListener("keydown", function(event) {
  console.log("KEY DOWN");
  console.log(event);
  if (event.keyCode === 37) {
    paddle.isMovingLeft = true;
  } else if (event.keyCode === 39) {
    paddle.isMovingRight = true;
  }
});

document.addEventListener("keyup", function(event) {
  console.log("KEY UP");
  console.log(event);
  if (event.keyCode === 37) {
    paddle.isMovingLeft = false;
  } else if (event.keyCode === 39) {
    paddle.isMovingRight = false;
  }
});
function conditionBall() {
  if (ball.x < ball.radius || ball.x > canvas.width - ball.radius) {
    ball.dx = -ball.dx;
  }
  if (ball.y < ball.radius || ball.y > canvas.height - ball.radius) {
    ball.dy = -ball.dy;
  }
}
function positionBall() {
  ball.x += ball.dx;
  ball.y += ball.dy;
}

function draw() {
  let canvas = document.getElementById("display");
  let context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);

  if (paddle.isMovingLeft) {
    paddle.x -= paddle.speed;
  } else if (paddle.isMovingRight) {
    paddle.x += paddle.speed;
  }

  conditionBall();
  positionBall();
  ball.drawBall();
  paddle.drawPaddle();
  requestAnimationFrame(draw);
}
draw();
