import { Player } from "./player";
import { Enemy } from "./enemy";
import * as readline from "readline";

class Game {
  player: Player;
  enemies: Enemy[];
  rl: readline.Interface;

  constructor() {
    this.player = new Player(0, 0, 1);
    this.enemies = [new Enemy(10, 10, 1)];
    this.rl = readline.createInterface({
      input: process.stdin,
      output: process.stdout,
    });

    this.rl.on("line", (input) => {});
  }

  update() {
    this.enemies.forEach((enemy) => enemy.move());
    this.checkCollision();
  }

  checkCollision() {
    this.enemies.forEach((enemy) => {
      if (this.player.x === enemy.x && this.player.y === enemy.y) {
        console.log("Game Over");
        this.rl.close();
        process.exit(0);
      }
    });
  }

  movePlayer(direction: string) {
    this.player.move(direction);
  }

  render() {
    console.clear();
    console.log(`Player: ${this.player.x}, ${this.player.y}`);
    this.enemies.forEach((enemy) =>
      console.log(`Enemy: ${enemy.x}, ${enemy.y}`),
    );
  }
}

const game = new Game();
game.render();
