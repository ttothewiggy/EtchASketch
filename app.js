
// variables
const container = document.getElementById('grid');
const DEFAULT_SIZE = 126;
const default_colour = '#ffffff';
var randoColour = Math.floor(Math.random()*16777215).toString(16);
const val = document.getElementById('slider').value;

const slider = document.querySelector('#slider')
const sliderValue = document.querySelector('.value');

// buttons
const resetButton = document.getElementById('reset');

// button events
resetButton.onclick = () => reset();


// functions

//function to initially populate grid with div elements

function createGrid(size){
    grid.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < size * size; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', function(event){ event.target.style.backgroundColor = 'black';});
        gridElement.addEventListener('mousedown', function(event){ event.target.style.backgroundColor = 'black';});
        grid.appendChild(gridElement);
    };
};

slider.addEventListener('input', function(){
    let val = document.getElementById('slider').value;
    sliderValue.textContent = val;
    reset();
    grid.style.gridTemplateColumns = `repeat(${val}, 1fr)`;
    grid.style.gridTemplateRows = `repeat(${val}, 1fr)`;
    for (let i = 0; i < val * val; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', function(event){ event.target.style.backgroundColor = 'black';});
        gridElement.addEventListener('mousedown', function(event){ event.target.style.backgroundColor = 'black';});
        grid.appendChild(gridElement);
    }

})

function randomColour(){
    reset();
    var rando = Math.floor(Math.random()*16777215).toString(16);
    for (let i = 0; i < val * val; i++){
        const gridElement = document.createElement('div');
        gridElement.classList.add('grid-element');
        gridElement.addEventListener('mouseover', function(event){ event.target.style.backgroundColor = "#" + rando;});
        gridElement.addEventListener('mousedown', function(event){ event.target.style.backgroundColor = "#" + rando;});
        grid.appendChild(gridElement);
    };
    
    // document.gridElement.style.backgroundColor = "#" + rando;
}

function userSize(value){
    // var input = document.getElementById('userInputbox').elements[0].value;
    // document.getElementById('alert').innerHTML = "The user input is: " + input;
    
};

function reset(){
    grid.innerHTML = '';
    createGrid(DEFAULT_SIZE);
};
// function gridColour(){
    
// }

window.onload = () => {
    createGrid(DEFAULT_SIZE);
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