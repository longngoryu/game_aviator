import { BoxGeometry } from "three";

function createGeometries() {
    var cockpit = new BoxGeometry(60,50,50,1,1,1);
    var engine = new BoxGeometry(20,50,50,1,1,1);
    var tailPlane = new BoxGeometry(15,20,5,1,1,1);
    var sideWing = new BoxGeometry(40,8,150,1,1,1);
    var propeller = new BoxGeometry(20,10,10,1,1,1);
    var blade = new BoxGeometry(1,100,20,1,1,1);

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