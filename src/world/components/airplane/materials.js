import { MeshPhongMaterial } from "three";
import { colors } from '../../data/color';

function createMaterials() {
    const cockpit = new MeshPhongMaterial({
        color: colors.red,
        flatShading: true
    });

    const engine = new MeshPhongMaterial({
        color: colors.white,
        flatShading: true
    });

    const propeller = new MeshPhongMaterial({
        color: colors.brown,
        flatShading: true
    });

    const blade = new MeshPhongMaterial({
        color: colors.brownDark,
        flatShading: true
    });


    return { cockpit, engine, propeller, blade };
}

export { createMaterials };