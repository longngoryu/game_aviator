import { Group } from "three";
import { createMeshes } from "./meshes";

class Sky extends Group {
    constructor() {
        super();
        this.meshes = createMeshes();
        for (let i = 0, l = this.meshes.length; i < l; i++) {
            this.add(this.meshes[i]);
        }

        this.position.y = -600;
    }

    tick() {
        this.rotation.z += .01;
    }
}

export { Sky };