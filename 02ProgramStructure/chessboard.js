let size = 20;
let oddGrid = "";
let space = " ";
let hash = "#";

for (let i = 0; i < size; i++) {
    if (i % 2 == 0) {
        oddGrid += space;
    } else {
        oddGrid += hash;
    }
}
oddGrid += "\n";
let evenGrid = "";

for (let i = 0; i < size; i++) {
    if (i % 2 == 0) {
        evenGrid += hash;
    } else {
        evenGrid += space;
    }
}
evenGrid += "\n";

let grid = "";

for (let i = 0; i < size; i++) {
    if (i % 2 == 0) {
        grid += oddGrid;
    } else {
        grid += evenGrid;
    }
}
console.log(grid);
// book's solution
let board = "";

for (let j = 0; j < size; j++) {
    for (let i = 0; i < size; i++) {
        if ((i + j) % 2 == 0) {
            board += " ";
        } else {
            board += "#";
        }
    }
    board += "\n";
}

console.log(board);
