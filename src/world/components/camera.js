import { PerspectiveCamera } from 'three';

let fieldOfView = 60,
    aspectRatio = window.innerWidth / window.innerHeight,
    nearPlane = 1,
    farPlane = 10000;

function createCamera() {
  const camera = new PerspectiveCamera(
    fieldOfView,
		aspectRatio,
		nearPlane,
		farPlane
  );

  camera.position.set(0, 100, 200);

  return camera;
}

export { createCamera };
