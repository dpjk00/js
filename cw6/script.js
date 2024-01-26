const canvas = document.getElementById('myCanvas');
const ctx = canvas.getContext('2d');

const balls = [];
const minDistance = 100;

let ballCount = document.getElementById('amountOfBalls').value;
let isAnimationRunning = false;

function setCanvasSize() {
  canvas.width = window.screen.width;
  canvas.height = window.screen.height;
}

setCanvasSize()

function start() {
  if (isAnimationRunning) return;
  ballCount = document.getElementById('amountOfBalls').value;
  console.log(document.getElementById('amountOfBalls').value);
  createBalls();
  animate();
  isAnimationRunning = true;
}

function reset() {
  balls.length = 0;
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  isAnimationRunning = false;
}

function createBalls() {
  for (let i = 0; i < ballCount; i++) {
    const ball = {
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      radius: 10,
      dx: (Math.random() - 0.5) * 2,
      dy: (Math.random() - 0.5) * 2
    };
    balls.push(ball);
  }
}

function animate() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  for (let i = 0; i < balls.length; i++) {
    const ball = balls[i];

    ball.x += ball.dx;
    ball.y += ball.dy;

    if (ball.x + ball.radius > canvas.width || ball.x - ball.radius < 0) {
      ball.dx = -ball.dx;
    }

    if (ball.y + ball.radius > canvas.height || ball.y - ball.radius < 0) {
      ball.dy = -ball.dy;
    }

    for (let j = i + 1; j < balls.length; j++) {
      const otherBall = balls[j];
      const distance = Math.sqrt((ball.x - otherBall.x)**2 + (ball.y - otherBall.y)**2);

      if (distance < minDistance) {
        ctx.beginPath();
        ctx.moveTo(ball.x, ball.y);
        ctx.lineTo(otherBall.x, otherBall.y);
        ctx.stroke();
      }
    }

    ctx.beginPath();
    ctx.arc(ball.x, ball.y, ball.radius, 0, Math.PI * 2);
    ctx.fill();
    ctx.closePath();
  }

  requestAnimationFrame(animate);
}