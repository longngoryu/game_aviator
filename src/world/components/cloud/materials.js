import { MeshPhongMaterial } from "three";
import { colors } from '../../data/color';

function createMaterials() {
    const box = new MeshPhongMaterial({
        color: colors.white,
    });

    return { box };
}

export { createMaterials };