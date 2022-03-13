"use strict"
const grid = document.querySelector('.grid')
    grid.style.left = '35px'
    grid.style.bottom = '120px'
const blockWidth = 125;
const blockHeight = 25;
const userStart = [625, 25];
let currentPosition = userStart;
const scoreDisplay = document.querySelector('#score');
const boardWidth = 1370;
const boardHeight = 650;
const ballDiameter = 20;
const ballStart = [690, 48];
let ballCurrentPosition = ballStart;
let timerId;
let xDirection = 3;
let yDirection = 3;
let score = 0;
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
drawUser()
grid.appendChild(user)


//draw the user
function drawUser() {
    user.style.left = currentPosition[0] + 'px'
    user.style.bottom = currentPosition[1] + 'px'
};

//Draw the ball
function drawBall () {
    ball.style.left = ballCurrentPosition[0] + 'px'
    ball.style.bottom = ballCurrentPosition[1] + 'px'
}

//move user
function moveUser(e){
    switch(e.key){
        case 'ArrowLeft':
            if (currentPosition[0]>10){
            currentPosition[0] -= 55
            drawUser()
            break;}
        case 'ArrowRight':
            if (currentPosition[0] < boardWidth - blockWidth - 40){
            currentPosition[0] += 55
            drawUser()
            break;}
    }
}

document.addEventListener('keydown', moveUser)

const ball = document.createElement('div')
ball.classList.add('ball')
drawBall()
grid.appendChild(ball)

//Moving the ball
function moveBall(){
    ballCurrentPosition[0] += xDirection
    ballCurrentPosition[1] += yDirection
    drawBall()
    checkForCollisions()
}
timerId = setInterval(moveBall, 10)


function checkForCollisions (){
    // wall collisions
for (let i=0; i < blocks.length; i++){
    if (
        (ballCurrentPosition[0] > blocks[i].bottomLeft[0] && ballCurrentPosition[0] < blocks[i].bottomRight[0]) &&
        ((ballCurrentPosition[1] + ballDiameter) > blocks[i].bottomLeft[1] && ballCurrentPosition[1] < blocks[i].topLeft[1])
    ) {
        const allBlocks = Array.from(document.querySelectorAll('.block'))
        allBlocks[i].classList.remove('block')
        blocks.splice(i, 1)
        changeDirection()
        score++
        scoreDisplay.innerHTML = score

        if (blocks.length === 0){
            scoreDisplay.innerHTML = 'You Win'
            clearInterval(timerId)
            document.removeEventListener('keydown', moveUser)
        }
    }
}

if (ballCurrentPosition[0] >= (boardWidth - ballDiameter) || 
    ballCurrentPosition[1] >= (boardHeight - ballDiameter)||
    ballCurrentPosition[0] <= 0){
    changeDirection();
}
if (
    (ballCurrentPosition[0] > currentPosition[0] && ballCurrentPosition[0] < currentPosition[0] + blockWidth) &&
    (ballCurrentPosition[1] > currentPosition[1] && ballCurrentPosition[1] < currentPosition[1] + blockHeight) ){
changeDirection()}

if (ballCurrentPosition[1] <= 0){
    clearInterval(timerId)
    scoreDisplay.innerHTML = 'You lose'
    document.removeEventListener('keydown', moveUser)
}
};


function changeDirection() {
    if(xDirection === 3 && yDirection === 3){
        yDirection = -3
        return
    } 
    if (xDirection === 3 && yDirection === -3){
        xDirection = -3
        return
    } if (xDirection === -3 && yDirection === -3){
        yDirection = 3
        return
    } if (xDirection === -3 && yDirection ===3){
        xDirection = 3 
        return
    }
}