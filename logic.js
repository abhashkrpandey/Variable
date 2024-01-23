let coordinateX = 0;
let coordinateY = 0;
let randomNumber = null;
let valuex = 0;
let valuey = 0;
let collection = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let start = false;
let currentWidth=(parseFloat)(getComputedStyle(document.querySelector(".box")).width);
let currentHeight=(parseFloat)(getComputedStyle(document.querySelector(".box")).height);
let evaluation = 0;
let positiveXRange = currentWidth;
let negativeRange = 0;
let positiveYRange = currentHeight;
let count = "00";
let timecounter = null;
let setInterval_id;

timesetter();
function timesetter() {
    document.querySelector(".countdown").textContent = "0:" + count;
    document.querySelector(".first").addEventListener("click", setter);
    document.querySelector(".second").addEventListener("click", setter);
}
function setter() {
    if (this.innerText == "30s") {
        count = 30;
        timecounter = 30;
    }
    else if (this.innerText == "60s") {
        count = 60;
        timecounter = 60;
    }
    setInterval_id = setInterval(timer, 1000);
    function timer() {
        if (count >= 0) {
            document.querySelector(".countdown").textContent = "0:" + count;
            count--;
        }
    }
    setTimeout(eraseTimer, (timecounter + 2) * 1000);
    function eraseTimer() {
        clearInterval(setInterval_id);
    }
    if (timecounter == 30 || timecounter == 60) {
        starter();
    }

}

function starter() {
    document.addEventListener("keydown", function (e) {
        if (e.key == "a" && timecounter != null) {
            document.querySelector("h1").textContent = "Game started!";
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
    coordinateX = Math.floor(Math.random() * currentWidth);
    coordinateY = Math.floor(Math.random() * currentHeight);
    randomNumber = collection[Math.floor(Math.random() * 11)];
    noGeneratorNull();
}

function positionGenerator() {
    coordinateX = Math.floor(Math.random() * currentWidth);
    coordinateY = Math.floor(Math.random() * currentHeight);
    randomNumber = collection[Math.floor(Math.random() * 11)];
    noGenerator();
}

function noGenerator() {
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".number").style.transform = "translate(" + coordinateX + "px," + coordinateY + "px)";
}

function noGeneratorNull() {
    document.querySelector(".number").textContent = randomNumber;
    document.querySelector(".number").style.transform = "translate(" + coordinateX + "px," + coordinateY + "px)";
    pointerMover();
}

function evaluator() {
    if (Math.abs(coordinateX - valuex) >= 0 && Math.abs(coordinateX - valuex) <= 10 && Math.abs(coordinateY - valuey) >= 0 && Math.abs(coordinateY - valuey) <= 10) {
        evaluation += randomNumber;
        positionGenerator();
        document.querySelector(".part3 h2").textContent = "Score " + evaluation;
    }
}

function pointerMover() {
    document.addEventListener("keydown", pointerMoverFunc);
}
function pointerMoverFunc(e) {
    if ((count >= 0) && valuex <= positiveXRange && valuex >= negativeRange && valuey <= positiveYRange && valuey >= negativeRange) {
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
    clearInterval(setInterval_id);
    document.querySelector("h1").textContent = "Game Over! Press R to restart";
    document.addEventListener("keydown", function (e) {
        if (e.key == "r") {
            start = false;
            valuex = 0;
            valuey = 0;
            count = "00";
            coordinateX = 0;
            coordinateY = 0;
            evaluation = 0;
            timecounter = null;
            document.querySelector("i").style.transform = "translate(" + valuex + "px," + valuey + "px)";
            document.querySelector(".number").textContent = "";
            document.removeEventListener("keydown", pointerMoverFunc);
            document.querySelector(".first").removeEventListener("click", setter);
            document.querySelector(".second").removeEventListener("click", setter);
            document.querySelector("h1").textContent = "Again, Set the timer and Press A to move the pointer";
            document.querySelector(".part3 h2").textContent = "Score:" + evaluation;
            timesetter();
        }
    });
}

