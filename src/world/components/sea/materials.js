import { MeshPhongMaterial } from "three";
import { colors } from '../../../../assets/color';

function createMaterials() {
    const mat = new MeshPhongMaterial({
        color: colors.blue,
        transparent: true,
        opacity: .6,
        flatShading: true
    });

    return { mat };
}

export { createMaterials };