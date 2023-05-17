import { Group } from "three";
import { createMeshes } from "./meshes";

class Cloud extends Group {
    constructor() {
        super();
        this.meshes = createMeshes();
        for (let i = 0, l = this.meshes.length; i < l; i++) {
            this.add(this.meshes[i]);
        }
    }
}

export { Cloud };