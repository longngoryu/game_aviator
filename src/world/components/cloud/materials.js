import { MeshPhongMaterial } from "three";
import { colors } from '../../data/color';

function createMaterials() {
    const mat = new MeshPhongMaterial({
        color: colors.white,
    });

    return { mat };
}

export { createMaterials };