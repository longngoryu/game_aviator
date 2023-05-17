import { BoxGeometry } from "three";

function createGeometries() {
    const box = new BoxGeometry(20, 20, 20);
    
    return { box };
}

export { createGeometries }