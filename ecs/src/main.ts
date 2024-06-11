import {
  createPlayer,
  createEnemy,
  moveSystem,
  checkCollisions,
  positions,
} from "./systems";
import * as readline from "readline";

const player = createPlayer(50, 50, 5);
const enemy1 = createEnemy(100, 0, 2);
const enemy2 = createEnemy(200, 0, 2);

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function gameLoop() {
  moveSystem();
  checkCollisions(player);
  render();
}

function render() {
  console.clear();
  console.log(
    `Player position: (${positions.get(player)?.x}, ${positions.get(player)?.y})`,
  );
  [enemy1, enemy2].forEach((enemy, index) => {
    console.log(
      `Enemy ${index + 1} position: (${positions.get(enemy)?.x}, ${positions.get(enemy)?.y})`,
    );
  });
}

rl.on("line", (input) => {
  const playerPos = positions.get(player);
  const speed = 5;
  if (playerPos) {
    switch (input.trim()) {
      case "left":
        playerPos.x -= speed;
        break;
      case "right":
        playerPos.x += speed;
        break;
      case "up":
        playerPos.y -= speed;
        break;
      case "down":
        playerPos.y += speed;
        break;
    }
  }
  gameLoop();
});

render();
setInterval(gameLoop, 1000 / 60);
