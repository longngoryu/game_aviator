import { Group } from "three";
import { createMeshes } from "./meshes";
import { normalize } from '../../event/normalize';
import { mousePos } from '../../data/mouse';

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

        this.position.y = 100;
        this.scale.set(.25, .25, .25);
    }

    tick() {
        this.meshes.propeller.rotation.x += 0.3;

        let targetX = normalize(mousePos.x, -1, 1, -100, 100);
        let targetY = normalize(mousePos.y, -1, 1, 25, 175);
        this.position.x = targetX;
        this.position.y = targetY;
    }
}

export { AirPlane };