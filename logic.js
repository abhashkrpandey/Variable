let coordinateX = 0;
let coordinateY = 0;
let randomNumber = null;
let valuex = 0;
let valuey = 0;
let collection = [-10, -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let start = false;
let evaluation = 0;
let positiveXRange = 800;
let negativeRange = 0;
let positiveYRange = 400;

starter();
function starter() {
    document.addEventListener("keydown", function (e) {
        if (e.key == "a") {
            document.querySelector("h1").textContent = "Game starts!";
            begins(start);
            start = true;
        }
    });
}
function begins(start) {
    if (!start) {
        positionGeneratorNull();
    }
}


function positionGeneratorNull() {
    coordinateX = Math.floor(Math.random() * 789);
    coordinateY = Math.floor(Math.random() * 389);
    randomNumber = collection[Math.floor(Math.random() * 21)];
    noGeneratorNull();
}

function positionGenerator() {
    coordinateX = Math.floor(Math.random() * 789);
    coordinateY = Math.floor(Math.random() * 389);
    randomNumber = collection[Math.floor(Math.random() * 21)];
    noGenerator();
}

function noGenerator() {
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".number").style.transform = "translate(" + coordinateX + "px," + coordinateY + "px)"; 
}

function noGeneratorNull()
{
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".number").style.transform = "translate(" + coordinateX + "px," + coordinateY + "px)";
    pointerMover();
}

function evaluator()
{
    if(Math.abs(coordinateX-valuex)>=0 && Math.abs(coordinateX-valuex)<=10 && Math.abs(coordinateY-valuey)>=0 && Math.abs(coordinateY-valuey)<=10 )
    {
        evaluation+=randomNumber;
        positionGenerator();
        document.querySelector(".part3 h2").textContent="Score:"+evaluation;
    }
}

function pointerMover() {
    document.addEventListener("keydown",  pointerMoverFunc); 
}
function pointerMoverFunc(e){
    if (valuex <= positiveXRange && valuex >= negativeRange && valuey <= 400 && valuey >= negativeRange) {
        if (e.key == "ArrowDown") {

            valuey += 8;
            document.querySelector("i").style.transform = "translate(" + valuex + "px," + valuey + "px)";
        }
        else if (e.key == "ArrowUp") {
            valuey -= 8;
            document.querySelector("i").style.transform = "translate(" + valuex + "px," + valuey + "px)";
        }
        else if (e.key == "ArrowRight") {
            valuex += 8;
            document.querySelector("i").style.transform = "translate(" + valuex + "px," + valuey + "px)";
        }
        else if (e.key == "ArrowLeft") {
            valuex -= 8;
            document.querySelector("i").style.transform = "translate(" + valuex + "px," + valuey + "px)";
        }
        evaluator();
    }
    else {
        gameover();
    }
}
function gameover() {
    document.querySelector("h1").textContent = "Game Over! Press R to restart";
    document.addEventListener("keydown", function (e) {
        if (e.key == "r") {
            start = false;
            valuex = 0;
            valuey = 0;
            coordinateX = 0;
            coordinateY = 0;
            evaluation=0
            document.querySelector("i").style.transform = "translate(" + valuex + "px," + valuey + "px)";
            document.querySelector(".number").textContent = "";
            document.querySelector("h1").textContent = "Press A to begin the game!";
            document.querySelector(".part3 h2").textContent="Score:"+evaluation;
            document.removeEventListener("keydown",pointerMoverFunc);
            starter();
        }
    });
}

