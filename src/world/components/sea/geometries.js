import { CylinderGeometry, Matrix4 } from "three";

function createGeometries() {
    const geom = new CylinderGeometry(600, 600, 800, 40, 10);
    geom.applyMatrix4(new Matrix4().makeRotationX(-Math.PI / 2));
    
    return { geom };
}

export { createGeometries }