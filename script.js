const CONTAINER_SIZE = 768;

const container = document.querySelector(".container");

let gridSize = parseInt(prompt("How many columns and rows"));

let squareSize = CONTAINER_SIZE / gridSize;

for (let i = 0; i < gridSize; i++) {
    const squaresColumn = document.createElement("div");
    for (let j = 0; j < gridSize; j++) {
        const square = document.createElement("div");
        square.className = "square";
        square.style.border = "1px solid black";
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "black";
        });
        squaresColumn.appendChild(square);
    }

    container.appendChild(squaresColumn);
}
