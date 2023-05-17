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
    engine.castShadow = true;
    engine.receiveShadow = true;

    const tailPlane = new Mesh(geometries.tailPlane, materials.cockpit);
    tailPlane.position.set(-35, 25, 0);
    tailPlane.castShadow = true;
    tailPlane.receiveShadow = true;

    const sideWing = new Mesh(geometries.sideWing, materials.cockpit);
    sideWing.castShadow = true;
    sideWing.receiveShadow = true;

    const blade = new Mesh(geometries.blade, materials.blade);
    blade.position.set(8, 0, 0);
    blade.castShadow = true;
    blade.receiveShadow = true;

    const propeller = new Mesh(geometries.propeller, materials.propeller);
    propeller.position.set(50, 0, 0);
    propeller.castShadow = true;
    propeller.receiveShadow = true;
    propeller.add(blade);

    return { cockpit, engine, tailPlane, sideWing, propeller }
}

export { createMeshes };