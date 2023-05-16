import { Group } from "three";
import { createMeshes } from "./meshes";

class AirPlane extends Group {
    constructor() {
        super();
        this.meshes = createMeshes();
        this.add(
            this.meshes.cockpit,
            this.meshes.engine,
            this.meshes.propeller,
            this.meshes.sideWing,
            this.meshes.tailPlane
        );
    }

    tick(delta) {
        this.meshes.propeller.rotation.x += 0.3;
    }
}

export { AirPlane };