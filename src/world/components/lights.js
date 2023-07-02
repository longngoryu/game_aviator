import { DirectionalLight, HemisphereLight, AmbientLight} from 'three';

function createLights() {
  const hemisphereLight = new HemisphereLight(
    0xaaaaaa,
    0x000000,
    .9,
  );

  const directionalLight = new DirectionalLight(0xffffff, .9);
  directionalLight.position.set(150, 350, 350);

  directionalLight.castShadow = true;
  directionalLight.shadow.camera.left = -400;
  directionalLight.shadow.camera.right = 400;
  directionalLight.shadow.camera.top = 400;
  directionalLight.shadow.camera.bottom = -400;
  directionalLight.shadow.camera.near = 1;
  directionalLight.shadow.camera.far = 1000;

  directionalLight.shadow.mapSize.width = 2048;
  directionalLight.shadow.mapSize.height = 2048;

  const ambientLight = new AmbientLight(0xdc8874, .5);

  return { hemisphereLight, directionalLight, ambientLight };
}

export { createLights };
