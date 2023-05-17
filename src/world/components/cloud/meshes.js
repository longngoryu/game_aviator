import { Mesh } from "three";
import { createGeometries } from "./geometries";
import { createMaterials } from "./materials";

function createMeshes() {
    const geometries = createGeometries();
    const materials = createMaterials();

    const nBlocs = Math.floor(Math.random() * 3) + 3;

    const seaSample = new Mesh(geometries.box, materials.box);
    const sea = [];

    for (let i = 0; i < nBlocs; i++) {
        const s = seaSample.clone();
        s.position.x = i * 15;
        s.position.y = Math.random() * 10;
        s.position.z = Math.random() * 10;

        s.rotation.z = Math.random() * Math.PI * 2;
        s.rotation.y = Math.random() * Math.PI * 2;

        const sizeRandom = .1 + Math.random() * .9;

        s.scale.set(sizeRandom, sizeRandom, sizeRandom);
        s.castShadow = true;
        s.receiveShadow = true;
        
        sea.push(s)
    }

    return sea;
    

}

export { createMeshes };