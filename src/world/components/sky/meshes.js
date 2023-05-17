import { Cloud } from "../cloud/Cloud";

function createMeshes() {
    const sky = [];
    const nClouds = 20;
    const stepAngle = Math.PI * 2 / nClouds;

    const cloud = new Cloud();

    for (let i = 0; i < nClouds; i++) {
        const c = cloud.clone();
        const a = stepAngle * i;
        const h = 750 + Math.random() * 200;
        
        c.position.y = Math.sin(a) * h;
        c.position.x = Math.cos(a) * h;
        c.position.z = -400 - Math.random() * 400;

        c.rotation.z = a + Math.PI / 2;

        const s = Math.random() * 2 + 1;
        c.scale.set(s, s, s);

        sky.push(c);
    }

    return sky;
}

export { createMeshes };