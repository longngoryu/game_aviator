import { createCamera } from './components/camera.js';
import { createLights } from './components/lights.js';
import { createScene } from './components/scene.js';

import { createRenderer } from './systems/renderer.js';
import { Resizer } from './systems/Resizer.js';
import { Loop } from './systems/Loop.js';
import { createControls } from './systems/controls.js';

import { Sea } from './components/sea/Sea.js';
import { Sky } from './components/sky/Sky.js';
import { AirPlane } from './components/airplane/AirPlane.js';

let camera,
  renderer,
  scene, 
  loop, 
  controls,
  sea,
  sky,
  airPlane;

let mousePos = { x:0, y:0 };

function handleMouseMove(event) {	
	var tx = -1 + (event.clientX / window.innerWidth)*2;
	var ty = 1 - (event.clientY / window.innerHeight)*2;
	mousePos = {x:tx, y:ty};
}

class World {
  constructor(container) {
    camera = createCamera();
    renderer = createRenderer();
    scene = createScene();
    loop = new Loop(camera, scene, renderer);
    controls = createControls(camera, renderer.domElement);
    container.append(renderer.domElement);

    sea = new Sea();
    sky = new Sky();
    airPlane = new AirPlane();

    airPlane.position.y = 100;
    airPlane.scale.set(.25, .25, .25);

    const { hemisphereLight, directionalLight } = createLights();

    loop.updatables.push(controls, sea, sky, airPlane);

    scene.add(hemisphereLight, directionalLight, sea, sky, airPlane);

    document.addEventListener('mousemove', handleMouseMove, false);

    const resizer = new Resizer(container, camera, renderer);
  }

  start() {
    loop.start();
  }

  stop() {
    loop.stop();
  }
}

export { World };
