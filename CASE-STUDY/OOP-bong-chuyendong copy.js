class Ball {
  constructor(x, y, radius, dx, dy, paddle) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.dx = dx;
    this.dy = dy;
    this.paddle = paddle;
  }
  drawBall() {
    let canvas = document.getElementById("display");
    let context = canvas.getContext("2d");
    context.beginPath();
    context.strokeStyle = "#FAFAFA";
    context.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    context.stroke();
    context.fillStyle = "#FAFAFA";
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

  ballCollisiPaddle() {
    if (
      ball.x + ball.radius >= paddle.x && //paddle.x tọa độ gốc trái trên của paddle
      ball.x + ball.radius <= paddle.x + paddle.width && // giải thích bóng nằm ngoài thì sao?
      ball.y + ball.radius >= canvas.height - paddle.height
    ) {
      ball.dy = -ball.dy;
    }
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

    context.strokeStyle = "#3104B4";
    context.rect(this.x, this.y, this.width, this.height);
    context.stroke();
    context.fillStyle = "#3104B4";
    context.fill();
    context.closePath();
  }

  conditionPaddle() {
    if (this.x < 0) {
      this.x = 0;
    } else if (this.x > canvas.width - this.width) {
      this.x = canvas.width - this.width;
    }
  }
}
////////////////////////////////////////

let canvas = document.getElementById("display");
let context = canvas.getContext("2d");
let paddle = new Paddle(
  canvas.width / 2 - 100,
  canvas.height - 10,
  200,
  10,
  10
);
let ball = new Ball(
  Math.floor(Math.random() * canvas.width),
  470,
  10,
  -5,
  -5,
  paddle
);
let brickConfig = {
  offsetX: 25,
  offsetY: 25,
  margin: 25,
  width: 70,
  height: 15,
  totalRow: 4,
  totalCol: 5
};
let brickList = [];

let gameOver = false;
let isGameWin = false;
let userScore = 0;
let maxScore = brickConfig.totalCol * brickConfig.totalRow;

for (var i = 0; i < brickConfig.totalRow; i++) {
  for (var j = 0; j < brickConfig.totalCol; j++) {
    brickList.push({
      x: brickConfig.offsetX + j * (brickConfig.width + brickConfig.margin),
      y: brickConfig.offsetY + i * (brickConfig.height + brickConfig.margin),
      isBroken: false
    });
  }
}

function drawBricks() {
  brickList.forEach(function(b) {
    if (!b.isBroken) {
      context.beginPath();
      context.rect(b.x, b.y, brickConfig.width, brickConfig.height);
      context.fill();
      context.closePath();
    }
  });
}

function ballCollisiBrick() {
  brickList.forEach(function(b) {
    if (!b.isBroken) {
      if (
        ball.x >= b.x &&
        ball.x <= b.x + brickConfig.width &&
        ball.y + ball.radius >= b.y &&
        ball.y - ball.radius <= b.y + brickConfig.height
      ) {
        ball.dy = -ball.dy;
        b.isBroken = true;
        userScore += 1;
        if (userScore >= maxScore) {
          gameOver = true;
          isGameWin = true;
        }
      }
    }
  });
}

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

// 2 * offset + 5*width + 4*margin = 500
// offset = margin = 25
// => width = 70
// row = 3
// col = 5

function draw() {
  if (!gameOver) {
    let canvas = document.getElementById("display");
    let context = canvas.getContext("2d");
    context.clearRect(0, 0, canvas.width, canvas.height); // xoa các chuyển động cũ

    //điều kiện
    if (paddle.isMovingLeft) {
      paddle.x -= paddle.speed;
    } else if (paddle.isMovingRight) {
      paddle.x += paddle.speed;
    }

    // xử lý di chuyển paddle trong canvas
    paddle.conditionPaddle();
    ball.conditionBall();
    drawBricks();
    ballCollisiBrick();
    ball.ballCollisiPaddle();
    ball.positionBall();
    ball.drawBall();
    paddle.drawPaddle();

    if (ball.y > canvas.height - ball.radius) {
      gameOver = true;
    }
    requestAnimationFrame(draw);
  } else {
    if (isGameWin) {
      console.log("YOU WIN");
    } else {
      console.log("YOU LOSE");
    }
  }
}
draw();
