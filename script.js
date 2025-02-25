const CONTAINER_SIZE = 768;

const container = document.querySelector(".container");

let gridSize = 16; //default value of gridSize
let squareSize = CONTAINER_SIZE / gridSize;
createGrid();

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
            color(square, `black`);
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
