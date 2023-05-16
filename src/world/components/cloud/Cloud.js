import { Group } from "three";
import { createMeshes } from "./meshes";

class Cloud extends Group {
    constructor() {
        super();
        this.meshes = createMeshes();
        this.add(this.meshes);
    }
}

export { Cloud };