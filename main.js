const $container = document.querySelector(".container");
const $button = document.querySelector("button");
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
	if (e.ctrlKey === true) {
		e.target.classList.add("painted");
		event.stopPropagation(e);
	}
	if (e.ctrlKey === true && e.altKey === true) {
		e.target.classList.remove("painted");
		event.stopPropagation(e);
	}
});

$container.addEventListener("click", (e) => {
	if (e.ctrlKey === false && e.target.classList[0] === "box") {
		e.target.classList.add("painted");
		event.stopPropagation(e);
	}
	if (e.altKey === true) {
		e.target.classList.remove("painted");
		event.stopPropagation(e);
	}
	console.log(e);
});

createBoxes(16); //starting grid
