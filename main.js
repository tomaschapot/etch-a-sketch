const $container = document.querySelector(".container");
const $button = document.querySelector("button");
let $colorList = document.querySelector("#colors");
let boxSize;

//Start Button
$button.addEventListener("click", () => {
	const $grid = $container.querySelectorAll("div"); //resetea la grilla
	$grid.forEach((box) => {
		box.remove();
	});
	const $gridDensity = document.querySelector("#grid-density").value;
	createBoxes($gridDensity);
});

function currentColor(colorList) {
	return colorList.value;
}

function removeAllColor(event) {
	event.target.classList.remove(`painted-red`);
	event.target.classList.remove(`painted-blue`);
	event.target.classList.remove(`painted-yellow`);
	event.target.classList.remove(`painted-green`);
	event.target.classList.remove(`painted-black`);
	event.target.classList.remove(`painted-orange`);
}

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

$container.addEventListener("mouseover", (e) => {
	let color = currentColor($colorList);

	if (e.ctrlKey === true) {
		removeAllColor(e);
		e.target.classList.add(`painted-${color}`);
		event.stopPropagation(e);
	}
	if (e.ctrlKey === true && e.altKey === true) {
		removeAllColor(e);

		event.stopPropagation(e);
	}
});

$container.addEventListener("click", (e) => {
	let color = currentColor($colorList);
	removeAllColor(e);
	if (e.ctrlKey === false && e.target.classList[0] === "box") {
		e.target.classList.add(`painted-${color}`);
		event.stopPropagation(e);
	}
	if (e.altKey === true) {
		removeAllColor(e);
		event.stopPropagation(e);
	}
});

createBoxes(16); //starting grid
