import { BoxGeometry } from "three";

function createGeometries() {
    const geom = new BoxGeometry(20, 20, 20);
    
    return { geom };
}

export { createGeometries }