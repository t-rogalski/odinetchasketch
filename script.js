const CONTAINER_SIZE = 768;

const container = document.querySelector(".container");

let gridSize = 16;
let squareSize = CONTAINER_SIZE / gridSize;
createGrid();

const dark = document.querySelector(".dark");
dark.addEventListener("click", () => {
    resetEventListeners();
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.opacity = 0;
        square.style.backgroundColor = "black";
        square.addEventListener("mouseover", () => {
            let currentOpacity = parseFloat(square.style.opacity) || 0;
            if (currentOpacity < 1) {
                square.style.opacity = currentOpacity + 0.1;
            }
        });
    });
});

const paint = document.querySelector(".paint");
paint.addEventListener("click", () => {
    resetEventListeners();
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        color(square, "black");
    });
});

const sizeChanger = document.querySelector(".sizeChanger");
sizeChanger.addEventListener("click", () => {
    gridSize = parseInt(prompt("How many columns and rows"));
    squareSize = CONTAINER_SIZE / gridSize;
    createGrid();
});

const erase = document.querySelector(".erase");
erase.addEventListener("click", () => {
    resetEventListeners();
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        color(square, "white");
    });
});

const rainbow = document.querySelector(".rainbow");
rainbow.addEventListener("click", () => {
    resetEventListeners();
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        color(square, randomColor());
    });
});

const clear = document.querySelector(".clear");
clear.addEventListener("click", () => {
    clearGrid();
});

function createGrid() {
    removeGrid();
    for (let i = 0; i < gridSize; i++) {
        const squaresColumn = document.createElement("div");
        for (let j = 0; j < gridSize; j++) {
            const square = document.createElement("div");
            square.className = "square";
            square.style.width = `${squareSize}px`;
            square.style.height = `${squareSize}px`;
            squaresColumn.appendChild(square);
        }
        container.appendChild(squaresColumn);
    }
}

function color(element, color) {
    element.addEventListener("mouseover", () => {
        element.style.opacity = 1;
        element.style.backgroundColor = `${color}`;
    });
}

function removeGrid() {
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

function clearGrid() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        square.style.opacity = 1;
        square.style.backgroundColor = "white";
    });
}

function resetEventListeners() {
    const squares = document.querySelectorAll(".square");
    squares.forEach((square) => {
        const newSquare = square.cloneNode(true);
        square.parentNode.replaceChild(newSquare, square);
    });
}
