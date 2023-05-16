import { Group } from "three";
import { createMeshes } from "./meshes";

class Sea extends Group {
    constructor() {
        super();
        this.meshes = createMeshes();
        this.add(this.meshes.sea);
    }

    tick(delta) {
        this.meshes.sea.rotation.z += .005;
    }
}

export { Sea };