export class Player {
  x: number;
  y: number;
  speed: number;

  constructor(x: number, y: number, speed: number) {
    this.x = x;
    this.y = y;
    this.speed = speed;
  }

  move(direction: string) {
    switch (direction) {
      case "left":
        this.x -= this.speed;
        break;
      case "right":
        this.x += this.speed;
        break;
      case "up":
        this.y -= this.speed;
        break;
      case "down":
        this.y += this.speed;
        break;
    }
  }
}
