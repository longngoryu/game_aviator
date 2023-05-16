import { MeshPhongMaterial } from "three";
import { colors } from '../../../../assets/color';

function createMaterials() {
    const mat = new MeshPhongMaterial({
        color: colors.white,
    });

    return { mat };
}

export { createMaterials };