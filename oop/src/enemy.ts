export class Enemy {
  x: number;
  y: number;
  speed: number;

  constructor(x: number, y: number, speed: number) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  move() {
    this.x -= this.speed;
  }
}
