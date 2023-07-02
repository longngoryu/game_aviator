import { BoxGeometry } from "three";

function createGeometries() {    
    const cockpit = new BoxGeometry(60,50,50,1,1,1);
    console.log(cockpit);

    const engine = new BoxGeometry(20,50,50,1,1,1);
    const tailPlane = new BoxGeometry(15,20,5,1,1,1);
    const sideWing = new BoxGeometry(40,8,150,1,1,1);
    const propeller = new BoxGeometry(20,10,10,1,1,1);
    const blade = new BoxGeometry(1,100,20,1,1,1);

    return { 
        cockpit, 
        engine, 
        tailPlane,
        sideWing,
        propeller,
        blade
    };
}

export { createGeometries }