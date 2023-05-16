import { Object3D } from "three";
import { Cloud } from "../cloud/Cloud";


function createMeshes() {
    const sky = new Object3D();
    const nClouds = 20;
    const stepAngle = Math.PI * 2 / nClouds;

    const cloud = new Cloud();

    for (let i = 0; i < nClouds; i++) {
        const c = cloud.clone();
        const a = stepAngle * i;
        const h = 750 + Math.random() * 200;

        c.meshes.position.y = Math.sin(a) * h;
        c.meshes.position.x = Math.cos(a) * h;

        c.meshes.rotation.z = a + Math.PI / 2;
        c.position.z = -400 - Math.random() * 400;

        const s = Math.random() * 2 + 1;
        c.meshes.scale.set(s, s, s);

        sky.add(c.meshes);
    }

    sky.position.y = -600;
    return { sky }
    

}

export { createMeshes };