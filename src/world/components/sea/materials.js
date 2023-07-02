import { MeshPhongMaterial } from "three";
import { colors } from '../../data/color';
import { flattenJSON } from "three/src/animation/AnimationUtils";

function createMaterials() {
    const sea = new MeshPhongMaterial({
        color: colors.blue,
        transparent: true,
        opacity: .8,
        flatShading: true
    });

    return { sea };
}

export { createMaterials };