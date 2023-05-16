import { Mesh } from "three";
import { createGeometries } from "./geometries";
import { createMaterials } from "./materials";

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();

    const sea = new Mesh(geometries.geom, materials.mat);
    sea.position.y = -600;

    return { sea };
    

}

export { createMeshes };