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
import { handleMouseMove } from './event/handleMouseMove.js';

let camera,
  renderer,
  scene, 
  loop, 
  controls,
  sea,
  sky,
  airPlane;

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

    controls.target.copy(airPlane.position);

    const { hemisphereLight, directionalLight, ambientLight } = createLights();

    loop.updatables.push(sea, sky, airPlane);

    scene.add(sea, sky, airPlane);
    scene.add( directionalLight, hemisphereLight, ambientLight);

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
