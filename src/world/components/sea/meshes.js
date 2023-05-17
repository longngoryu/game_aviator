import { Mesh } from "three";
import { createGeometries } from "./geometries";
import { createMaterials } from "./materials";

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();

    const sea = new Mesh(geometries.sea, materials.sea);

    return { sea };
}

export { createMeshes };