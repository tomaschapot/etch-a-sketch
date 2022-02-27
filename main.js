const $container = document.querySelector(".container");
const $button = document.querySelector("button");
let boxSize;
let $colorSelection = document.querySelector("#color-selector");
let color = "#333333";
let newColor = 0;

function setCurrentColor(newColor) {
	color = newColor;
}

$colorSelection.onchange = (e) => setCurrentColor(e.target.value);

//Start Button
$button.addEventListener("click", () => {
	let $gridDensityInput = document.querySelector("#grid-density");
	const $grid = $container.querySelectorAll("div"); //resetea la grilla
	$grid.forEach((box) => {
		box.remove();
	});
	const $gridDensity = document.querySelector("#grid-density").value;
	createBoxes($gridDensity);
	$gridDensityInput.value = "";
});

function currentColor(colorList) {
	return colorList.value;
}

function createBoxes(divisons) {
	boxSize = 700 / divisons;
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
	if (e.ctrlKey === true) {
		e.target.style.backgroundColor = color;
		e.target.style.border = `solid 1px ${color}`;
		event.stopPropagation(e);
	}
	if (e.ctrlKey === true && e.altKey === true) {
		e.target.style.backgroundColor = "#fefefe";
		e.target.style.border = `0.2px solid rgb(241, 241, 241)`;

		event.stopPropagation(e);
	}
});

$container.addEventListener("click", (e) => {
	if (e.ctrlKey === false && e.target.classList[0] === "box") {
		e.target.style.backgroundColor = color;
		e.target.style.border = `solid 1px ${color}`;
		event.stopPropagation(e);
	}
	if (e.altKey === true) {
		e.target.style.backgroundColor = "#fefefe";
		e.target.style.border = `0.2px solid rgb(241, 241, 241)`;
		event.stopPropagation(e);
	}
});

createBoxes(16); //starting grid
