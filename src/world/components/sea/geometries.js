import { CylinderGeometry, Matrix4 } from "three";

function createGeometries() {
    var sea = new CylinderGeometry(600, 600, 800, 40, 10);
    sea.applyMatrix4(new Matrix4().makeRotationX(-Math.PI / 2));

    return { sea };
}

export { createGeometries }