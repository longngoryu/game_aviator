const setSize = (container, camera, renderer) => {
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  camera.aspect = container.clientWidth / container.clientHeight;
  camera.updateProjectionMatrix();
};

class Resizer {
  constructor(container, camera, renderer) {
    setSize(container, camera, renderer);

    window.addEventListener('resize', () => {
      setSize(container, camera, renderer);
      this.onResize();
    }, false);
  }

  onResize() {}
}

export { Resizer };
