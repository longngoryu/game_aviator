import { Mesh } from "three";
import { createGeometries } from "./geometries";
import { createMaterials } from "./materials";

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();

    const cockpit = new Mesh(geometries.cockpit, materials.cockpit);
    cockpit.castShadow = true;
    cockpit.receiveShadow = true;

    const engine = new Mesh(geometries.engine, materials.engine);
    engine.castShadow = true;
    engine.receiveShadow = true;
    engine.position.x = 40;

    const tailPlane = new Mesh(geometries.tailPlane, materials.cockpit);
    tailPlane.castShadow = true;
    tailPlane.receiveShadow = true;
    tailPlane.position.set(-35, 25, 0);

    const sideWing = new Mesh(geometries.sideWing, materials.cockpit);
    sideWing.castShadow = true;
    sideWing.receiveShadow = true;

    const blade = new Mesh(geometries.blade, materials.blade);
    blade.castShadow = true;
    blade.receiveShadow = true;
    blade.position.set(8, 0, 0);

    const propeller = new Mesh(geometries.propeller, materials.propeller);
    propeller.castShadow = true;
    propeller.receiveShadow = true;
    propeller.position.set(50, 0, 0);
    propeller.add(blade);

    return { cockpit, engine, tailPlane, sideWing, propeller }
}

export { createMeshes };