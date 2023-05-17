import { mousePos } from '../data/mouse';

const WIDTH = window.innerWidth,
    HEIGHT = window.innerHeight;

function handleMouseMove(event) {
	var tx = -1 + (event.clientX / WIDTH)*2;
	var ty = 1 - (event.clientY / HEIGHT)*2;
	mousePos.x = tx;
    mousePos.y = ty;
}

export { handleMouseMove }