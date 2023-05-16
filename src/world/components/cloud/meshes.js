import { Mesh, Object3D } from "three";
import { createGeometries } from "./geometries";
import { createMaterials } from "./materials";

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();

    let nBlocs = Math.floor(Math.random() * 3) + 3;

    const seas = new Object3D();

    for (let i = 0; i < nBlocs; i++) {
        const sea = new Mesh(geometries.geom, materials.mat);
        sea.position.x = i * 15;
        sea.position.y = Math.random() * 10;
        sea.position.z = Math.random() * 10;

        sea.rotation.z = Math.random() * Math.PI * 2;
        sea.rotation.y = Math.random() * Math.PI * 2;

        const sizeRandom = .1 + Math.random() * .9;
        sea.scale.set(sizeRandom, sizeRandom, sizeRandom);

        sea.castShadow = true;
        sea.receiveShadow = true;
        seas.add(sea);
    }

    return seas
    

}

export { createMeshes };