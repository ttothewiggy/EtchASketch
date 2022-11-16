
const container = document.getElementById('grid');
const DEFAULT_SIZE = 16;
const default_colour = '#ffffff';

function createGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', function(event){ event.target});
        gridElement.addEventListener('mousedown', gridColour);
        grid.appendChild(gridElement);
    };
};

// function gridColour(){
    
// }

window.onload = () => {
    createGrid(DEFAULT_SIZE)
  };


// function makeRows(rows, cols ) {
//     container.style.setProperty('--grid-rows', rows);
//     container.style.setProperty('--grid-cols', cols);
//     for (c = 0; c < (rows * cols); c++){
//         let cell = document.createElement('div');
//         cell.innerText = (c + 1);
//         container.appendChild(cell).className = 'grid-item';
//     } ;
// };

// makeRows(16, 16);










// const container = document.querySelector('.grid-box');
// let rows = document.getElementsByClassName('gridRow');
// let cells = document.getElementsByClassName('cell');

// // create default grid 16 x 16

// function defaultGrid() {
//     makeRows(60);
//     makeColumns(60);
// };

// // funtion to take input and make a grid

// function makeRows(rowNum) {
//     // creates rows
//     for (r = 0; r < rowNum; r++){
//         let row = document.createElement('div');
//         container.appendChild(row).className = 'gridRow';
//     };
// };

// // creates columns

// function makeColumns(cellNum){
//     for (i = 0; i < rows.length; i++){
//         for (j = 0; j < cellNum; j++){
//             let newCell = document.createElement('div');
//             rows[j].appendChild(newCell).className = 'cell';
//         };
//     };
// };

// defaultGrid();












// const gridBoxes = document.createElement('div');

// for (var i = 0; i < 100; i++){
//     for (var j = 0; j < 100; j++){
//     const box = document.createElement('div');
//     box.style.width = '6px';
//     box.style.height = '6px';
//     box.style.background = 'black';
    
//     }
//     const grids = document.getElementsByClassName(grids);

//     var jump = document.createElement('br');
//     grids.appendChild(jump);
//     grids.appendChild(div);

// }