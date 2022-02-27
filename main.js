const $container = document.querySelector(".container");
let i = 0;

let boxSize;

function createBoxes(divisons) {
	boxSize = 900 / divisons;
	let i = 0;
	while (i < divisons ** 2) {
		const box = document.createElement("div");
		box.classList.add("box");
		box.setAttribute("style", `height: ${boxSize}px; width: ${boxSize}px`);

		$container.appendChild(box);
		i++;
	}
}

createBoxes(8);
