const pizarra = document.querySelector('.board');
const celdas = document.querySelectorAll('.cell');
const display = document.getElementById('winner');

let actualPlayer = 'X';
let gameActive = true;
let gameState = ["", "", "", "", "", "", "", "", ""];

function verificarGanador() {
    const ganadorCombinaciones = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ];

    for(const combinacion of ganadorCombinaciones) {
        const [a, b, c] = combinacion;
        if(gameState[a] && gameState[a] === gameState[b] && gameState[a] === gameState[c]) {
            return gameState[a];
        }
    }
    return null;
}

function verificaClickCelda(event){
    const cell = event.target;
    const index = cell.dataset.index;

    if(gameState[index] || !gameActive) {
        return;
    }

    gameState[index] = actualPlayer;
    cell.textContent = actualPlayer;
    cell.classList.add('taken');

    const winner = verificarGanador();
    if(winner) {
        display.textContent = `${winner} ha ganado!`;
        gameActive = false;
    }else if(!gameState.includes("")) {
        display.textContent = 'Empate!';
        gameActive = false;
    }else {
        actualPlayer = actualPlayer === 'X' ? 'O' : 'X';
    }
}

celdas.forEach(cell => cell.addEventListener('click', verificaClickCelda));