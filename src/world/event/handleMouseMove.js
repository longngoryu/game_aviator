import { mousePos } from '../data/mouse';

function handleMouseMove(event) {
	let tx = -1 + (event.clientX /  window.innerWidth) * 2;
	let ty = 1 - (event.clientY / window.innerHeight) * 2;
	mousePos.x = tx;
    mousePos.y = ty;
}

export { handleMouseMove }