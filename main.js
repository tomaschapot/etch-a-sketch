const $container = document.querySelector(".container");
const $button = document.querySelector("button");
let boxSize;

$button.addEventListener("click", () => {
	const $grid = $container.querySelectorAll("div"); //resetea la grilla
	$grid.forEach((box) => {
		box.remove();
	});
	const $gridDensity = document.querySelector("#grid-density").value;
	createBoxes($gridDensity);
});

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

createBoxes(50);
