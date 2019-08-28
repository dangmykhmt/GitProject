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

  conditionBall() {
    if (this.x < this.radius || this.x > canvas.width - this.radius) {
      this.dx = -this.dx;
    }
    if (this.y < this.radius) {
      // không có || this.y trường hợp gặp cạnh đáy => gameOver =  true
      this.dy = -this.dy;
    }
  }

  positionBall() {
    this.x += this.dx;
    this.y += this.dy;
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
////////////////////////////////////////
let paddle = new Paddle(0, 490, 100, 10, 10);
let ball = new Ball(20, 20, 15, 1, 2);
let canvas = document.getElementById("display");
let context = canvas.getContext("2d");
let gameOver = false;

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

function ballCollisiPaddle() {
  if (
    ball.x + ball.radius >= paddle.x && //paddle.x tọa độ gốc trái trên của paddle
    ball.x + ball.radius <= paddle.x + paddle.width && // giải thích bóng nằm ngoài thì sao?
    ball.y + ball.radius >= canvas.height - paddle.height
  ) {
    ball.dy = -ball.dy;
  }
}

function draw() {
  if (!gameOver) {
    let canvas = document.getElementById("display");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height);

    //điều kiện
    if (paddle.isMovingLeft) {
      paddle.x -= paddle.speed;
    } else if (paddle.isMovingRight) {
      paddle.x += paddle.speed;
    }
    // xử lý di chuyển paddle trong canvas
    if (paddle.x < 0) {
      paddle.x = 0;
    } else if (paddle.x > canvas.width - paddle.width) {
      paddle.x = canvas.width - paddle.width;
    }
    ballCollisiPaddle();
    ball.conditionBall();
    ball.positionBall();
    ball.drawBall();

    paddle.drawPaddle();

    if (ball.y > canvas.height - ball.radius) {
      gameOver = true;
    }
    requestAnimationFrame(draw);
  } else {
    console.log("GAME OVER");
  }
}
draw();
