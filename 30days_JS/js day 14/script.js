const canvas = document.getElementById("game");
const ctx = canvas.getContext("2d");

const box = 10;
const platformHeight = box * 8;
const maxPlatformY = canvas.height - box - platformHeight;

var platfromSpeed = 10;
var ballSpeed = 5;

const user1 = {
  x: box * 2,
  y: canvas.height / 2 - platformHeight / 2,
  width: box,
  height: platformHeight,
  dy: 0,
};

const user2 = {
  x: canvas.width - box * 3,
  y: canvas.height / 2 - platformHeight / 2,
  width: box,
  height: platformHeight,
  dy: 0,
};

var ball = {
  x: canvas.width / 2,
  y: canvas.height / 2,
  width: box,
  height: box,
  resetting: false,
  dx: ballSpeed,
  dy: -ballSpeed,
};

function collides(obj1, obj2) {
  return (
    obj1.x < obj2.x + obj2.width &&
    obj1.x + obj1.width > obj2.x &&
    obj1.y < obj2.y + obj2.height &&
    obj1.y + obj1.height > obj2.y
  );
}

function loop() {
  ball.dx += 0.01;
  ball.dy += 0.01;

  requestAnimationFrame(loop);
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  user1.y += user1.dy;
  user2.y += user2.dy;
  if (user1.y < box) {
    user1.y = box;
  } else if (user1.y > maxPlatformY) {
    user1.y = maxPlatformY;
  }
  if (user2.y < box) {
    user2.y = box;
  } else if (user2.y > maxPlatformY) {
    user2.y = maxPlatformY;
  }
  ctx.fillStyle = "white";
  ctx.fillRect(user1.x, user1.y, user1.width, user1.height);
  ctx.fillRect(user2.x, user2.y, user2.width, user2.height);
  ball.x += ball.dx;
  ball.y += ball.dy;
  if (ball.y < box) {
    ball.y = box;
    ball.dy *= -1;
  } else if (ball.y + box > canvas.height - box) {
    ball.y = canvas.height - box * 2;
    ball.dy *= -1;
  }

  if (collides(ball, user1)) {
    ball.dx *= -1;
    ball.x = user1.x + user1.width;
  } else if (collides(ball, user2)) {
    ball.dx *= -1;
    ball.x = user2.x - ball.width;
  }

  ctx.fillRect(ball.x, ball.y, ball.width, ball.height);
  ctx.fillStyle = "rgb(65, 62, 62)";
  ctx.fillRect(0, 0, canvas.width, box);
  ctx.fillRect(0, canvas.height - box, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  for (let i = box; i < canvas.height - box; i += box * 2) {
    ctx.fillRect(canvas.width / 2 - box / 2, i, box, box);
  }

  document.addEventListener("keydown", function (event) {
    if (event.which === 38) {
      user2.dy = -platfromSpeed;
    } else if (event.which === 40) {
      user2.dy = platfromSpeed;
    }
    if (event.which === 87) {
      user1.dy = -platfromSpeed;
    } else if (event.which === 83) {
      user1.dy = platfromSpeed;
    }
  });
  document.addEventListener("keyup", function (event) {
    if (event.which === 38 || event.which === 40) {
      user2.dy = 0;
    }
    if (event.which === 83 || event.which === 87) {
      user1.dy = 0;
    }
  });
}

requestAnimationFrame(loop);
