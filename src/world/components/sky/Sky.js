import { Group } from "three";
import { createMeshes } from "./meshes";

class Sky extends Group {
    constructor() {
        super();
        this.meshes = createMeshes();
        this.add(this.meshes.sky);
    }

    tick(delta) {
        this.meshes.sky.rotation.z += .01;
    }
}

export { Sky };