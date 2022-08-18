const notif = document.querySelector(".notif");
const winnerAlert = document.querySelector(".winnerAlert");
const squares = document.querySelectorAll(".square");

let player = 1;
let emptySquares = squares.length;
let xs = [];
let os = [];

const squaresObj = {
    s1: "",
    s2: "",
    s3: "",
    s4: "",
    s5: "",
    s6: "",
    s7: "",
    s8: "",
    s9: ""
}


const initGame = () => {
    showNotif("<p>Welcome!<br> Are you ready for the game?</p>");
    setTimeout(() => {
        turnNotif(player);
        initSquares();
    }, 3500);
}

function showNotif(message) {
    notif.classList.add("show");
    notif.innerHTML = message;

    setTimeout(() => {
        notif.classList.remove("show");
    }, 3000);
}

function turnNotif(player) {
    showNotif(`<p>Player ${player}'s turn!</p>`)
}

function initSquares() {
    squares.forEach((square, index) => {
        square.addEventListener("click", () => drawLine(square));
    });
}

function drawLine(square) {
    if(emptySquares > 0) {
        if(!square.textContent) {
            if(player === 1) {
                square.textContent = "X";
                xs.push(square.id);
                let varName = "s"+ square.id;
                squaresObj[varName] = "X";
                if(xs.length > 2) {
                    checkIsFinished(1);
                }
                
            }
            else if(player === 2) {
                square.textContent = "O";
                os.push(square.id);
                let varName = "s"+ square.id;
                squaresObj[varName] = "O";
                if(os.length > 2) {
                    checkIsFinished(2);
                }
            }
            player = player === 1 ? 2 : 1;
            emptySquares--;
            emptySquares && turnNotif(player);
        }
    }
}

function showWinnerAlert(winner) {
    winnerAlert.innerHTML = `<p>${winner}. oyuncu kazandı. <br /> Tebrikler!</p><button>Yeniden Başlat</button>`
    winnerAlert.style.display = "flex";
    const restartButton = document.querySelector(".winnerAlert > button");
    restartButton.addEventListener("click", restartGame);
}

function restartGame() {
    window.location.reload();
}

function checkIsFinished(player) {
    let {s1, s2, s3, s4, s5, s6, s7, s8, s9} = squaresObj;
    const squaresArr = Array.from(squares);
    if(player === 1) {
        if(s1 === "X" && s2 === "X" && s3 === "X") {
            const clickedSquares = squaresArr.filter(square => square.id === "1" || square.id === "2"|| square.id === "3");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(1);
        }
        else if(s1 === "X" && s4=== "X" && s7 === "X") {
            const clickedSquares = squaresArr.filter(square => square.id === "1" || square.id === "4"|| square.id === "7");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(1);
        }
        else if(s1 === "X" && s5=== "X" && s9 === "X") {
            const clickedSquares = squaresArr.filter(square => square.id === "1" || square.id === "5"|| square.id === "9");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(1);
        }
        else if(s3 === "X" && s5=== "X" && s7 === "X") {
            const clickedSquares = squaresArr.filter(square => square.id === "3" || square.id === "5"|| square.id === "7");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(1);
        }
        else if(s4 === "X" && s5=== "X" && s6 === "X") {
            const clickedSquares = squaresArr.filter(square => square.id === "4" || square.id === "5"|| square.id === "6");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(1);
        }
        else if(s7 === "X" && s8=== "X" && s9 === "X") {
            const clickedSquares = squaresArr.filter(square => square.id === "7" || square.id === "8"|| square.id === "9");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(1);
        }
        else if(s2 === "X" && s5=== "X" && s8 === "X") {
            const clickedSquares = squaresArr.filter(square => square.id === "2" || square.id === "5"|| square.id === "8");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(1);
        }
        else if(s3 === "X" && s6=== "X" && s9 === "X") {
            const clickedSquares = squaresArr.filter(square => square.id === "3" || square.id === "6"|| square.id === "9");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(1);
        }
    }
    else if(player === 2) {
        if(s1 === "O" && s2 === "O" && s3 === "O") {
            const clickedSquares = squaresArr.filter(square => square.id === "1" || square.id === "2"|| square.id === "3");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(2);
        }
        else if(s1 === "O" && s4=== "O" && s7 === "O") {
            const clickedSquares = squaresArr.filter(square => square.id === "1" || square.id === "4"|| square.id === "7");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(2);
        }
        else if(s1 === "O" && s5=== "O" && s9 === "O") {
            const clickedSquares = squaresArr.filter(square => square.id === "1" || square.id === "5"|| square.id === "9");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(2);
        }
        else if(s3 === "O" && s5=== "O" && s7 === "O") {
            const clickedSquares = squaresArr.filter(square => square.id === "3" || square.id === "5"|| square.id === "7");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(2);
        }
        else if(s4 === "O" && s5=== "O" && s6 === "O") {
            const clickedSquares = squaresArr.filter(square => square.id === "4" || square.id === "5"|| square.id === "6");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(2);
        }
        else if(s7 === "O" && s8=== "O" && s9 === "O") {
            const clickedSquares = squaresArr.filter(square => square.id === "7" || square.id === "8"|| square.id === "9");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(2);
        }
        else if(s2 === "O" && s5=== "O" && s8 === "O") {
            const clickedSquares = squaresArr.filter(square => square.id === "2" || square.id === "5"|| square.id === "8");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(2);
        }
        else if(s3 === "O" && s6=== "O" && s9 === "O") {
            const clickedSquares = squaresArr.filter(square => square.id === "3" || square.id === "6"|| square.id === "9");
            clickedSquares.forEach(square => square.style.color = "red");
            showWinnerAlert(2);
        }
    }
}


document.body.addEventListener("load", initGame());
