import { PositionComponent, SpeedComponent } from "./components";

type Entity = number;
let nextEntityId = 0;

function createEntity(): Entity {
  return nextEntityId++;
}

const positions: Map<Entity, PositionComponent> = new Map();
const speeds: Map<Entity, SpeedComponent> = new Map();

function createPlayer(x: number, y: number, speed: number): Entity {
  const player = createEntity();
  positions.set(player, { x, y });
  speeds.set(player, { speed });
  return player;
}

function createEnemy(x: number, y: number, speed: number): Entity {
  const enemy = createEntity();
  positions.set(enemy, { x, y });
  speeds.set(enemy, { speed });
  return enemy;
}

function moveSystem() {
  positions.forEach((position, entity) => {
    const speed = speeds.get(entity);
    if (speed) {
      position.y += speed.speed;
    }
  });
}

function checkCollisions(player: Entity) {
  const playerPos = positions.get(player);
  if (!playerPos) {
    return;
  }
  positions.forEach((position, entity) => {
    if (entity !== player) {
      if (position.x === playerPos.x && position.y === playerPos.y) {
        console.log("Collision!");
        process.exit(0);
      }
    }
  });
}

export { createPlayer, createEnemy, moveSystem, checkCollisions, positions };
