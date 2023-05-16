import { WebGLRenderer } from "three";

function createRenderer() {
    const renderer = new WebGLRenderer({alpha: true, antialias: true});
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.shadowMap.enabled = true;

    return renderer;
}

export { createRenderer };