"use strict"
const grid = document.querySelector('.grid')
    grid.style.left = '35px'
    grid.style.bottom = '120px'
const blockWidth = 125;
const blockHeight = 25;

//Create Block
class Block {
    constructor(xAxis, yAxis) {
        this.bottomLeft = [xAxis, yAxis]
        this.bottomRight = [xAxis + blockWidth, yAxis]
        this.topLeft = [xAxis, yAxis + blockHeight]
        this.topRight = [xAxis + blockWidth, yAxis + blockHeight]
    }
};

const blocks = [
    new Block(20,250),
    new Block(170,250),
    new Block(320,250),
    new Block(470,250),
    new Block(625,250),
    new Block(775,250),
    new Block(925,250),
    new Block(1075,250),
    new Block(1225,250),
];

function addBlocks(){
    for (let i=0; i < blocks.length; i++){
        const block = document.createElement('div')
            block.classList.add('block')
            block.style.left = blocks[i].bottomLeft[0] + 'px'
            block.style.bottom = blocks[i].bottomLeft[1] + 'px'
            grid.appendChild(block)
    }
};

addBlocks();
