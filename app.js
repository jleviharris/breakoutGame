"use strict"
const grid = document.querySelector('.grid')
    grid.style.left = '35px'
    grid.style.bottom = '120px'
const blockWidth = 125;
const blockHeight = 25;
const userStart = [625, 25]
let currentPosition = userStart

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
    new Block(20,610),
    new Block(170,610),
    new Block(320,610),
    new Block(470,610),
    new Block(625,610),
    new Block(775,610),
    new Block(925,610),
    new Block(1075,610),
    new Block(1225,610),
    new Block(20,575),
    new Block(170,575),
    new Block(320,575),
    new Block(470,575),
    new Block(625,575),
    new Block(775,575),
    new Block(925,575),
    new Block(1075,575),
    new Block(1225,575),
    new Block(20,540),
    new Block(170,540),
    new Block(320,540),
    new Block(470,540),
    new Block(625,540),
    new Block(775,540),
    new Block(925,540),
    new Block(1075,540),
    new Block(1225,540),
    new Block(20,505),
    new Block(170,505),
    new Block(320,505),
    new Block(470,505),
    new Block(625,505),
    new Block(775,505),
    new Block(925,505),
    new Block(1075,505),
    new Block(1225,505),
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

//add user
const user = document.createElement('div')
user.classList.add('user')
user.style.left = currentPosition[0] + 'px'
user.style.bottom = currentPosition[1] + 'px'

grid.appendChild(user)

