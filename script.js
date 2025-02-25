const CONTAINER_SIZE = 768;

const container = document.querySelector(".container");

let gridSize = 16;
let squareSize = CONTAINER_SIZE / gridSize;
createGrid();

dark = document.querySelector(".dark");
dark.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.opacity = 0;
        square.style.backgroundColor = `black`;
        square.addEventListener("mouseover", () => {
            if (parseFloat(square.style.opacity) < 1) {
                square.style.opacity = parseFloat(square.style.opacity) + 0.1;
            }
        });
    });
});

paint = document.querySelector(".color");
paint.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        color(square, `black`);
    });
});

sizeChanger = document.querySelector(".sizeChanger");
sizeChanger.addEventListener("click", () => {
    gridSize = parseInt(prompt("How many columns and rows"));
    squareSize = CONTAINER_SIZE / gridSize;
    createGrid();
});

erase = document.querySelector(".erase");
erase.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        color(square, `white`);
    });
});

rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        color(square, randomColor());
    });
});

const clearButton = document.querySelector(".clear");
clearButton.addEventListener("click", () => {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.backgroundColor = "white";
    });
});

function createGrid() {
    clearGrid();
    for (let i = 0; i < gridSize; i++) {
        const squaresColumn = document.createElement("div");
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.className = "square";
            square.style.border = "1px solid black";
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            squaresColumn.appendChild(square);
        }
        container.appendChild(squaresColumn);
    }
}

function color(element, color) {
    element.addEventListener("mouseover", () => {
        element.style.backgroundColor = `${color}`;
    });
}

function clearGrid() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function randomColor() {
    let red = Math.random() * 255;
    let green = Math.random() * 255;
    let blue = Math.random() * 255;
    return `rgb(${red}, ${green}, ${blue})`;
}
