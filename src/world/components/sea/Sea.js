import { Group } from "three";
import { createMeshes } from "./meshes";

class Sea extends Group {
    constructor() {
        super();
        this.meshes = createMeshes();
        this.add(this.meshes.sea);

        this.position.y = -600;
    }

    tick() {
        this.rotation.z += .005;
    }
}

export { Sea };