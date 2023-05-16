import '../template/style.css'
import { World } from './world/World.js';

function main() {
  const container = document.querySelector('#world');
  const world = new World(container);
  world.start();
}

main();


