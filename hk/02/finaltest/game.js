// 遊戲狀態
var gameState = {
    board: [['', '', ''], ['', '', ''], ['', '', '']],
    currentPlayer: 'X',
    gameOver: false,
    moves: 0
};

// 更新遊戲狀態和畫面
function makeMove(row, col) {
    if (gameState.gameOver) {
        return;
    }

    if (gameState.board[row][col] === '') {
        gameState.board[row][col] = gameState.currentPlayer;
        document.getElementsByClassName('cell')[row * 3 + col].innerText = gameState.currentPlayer;
        gameState.moves++;

        if (checkWin(row, col)) {
            endGame(gameState.currentPlayer + ' 獲勝！');
        } else if (gameState.moves === 9) {
            endGame('遊戲結束，平局！');
        } else {
            gameState.currentPlayer = (gameState.currentPlayer === 'X') ? 'O' : 'X';
        }
    }
}

// 檢查是否有玩家獲勝
function checkWin(row, col) {
    var currentPlayer = gameState.currentPlayer;

    // 檢查列
    if (gameState.board[row][0] === currentPlayer && gameState.board[row][1] === currentPlayer && gameState.board[row][2] === currentPlayer) {
        return true;
    }

    // 檢查行
    if (gameState.board[0][col] === currentPlayer && gameState.board[1][col] === currentPlayer && gameState.board[2][col] === currentPlayer) {
        return true;
    }

    // 檢查對角線
    if (row === col && gameState.board[0][0] === currentPlayer && gameState.board[1][1] === currentPlayer && gameState.board[2][2] === currentPlayer) {
        return true;
    }
    if (row + col === 2 && gameState.board[0][2] === currentPlayer && gameState.board[1][1] === currentPlayer && gameState.board[2][0] === currentPlayer) {
        return true;
    }

    return false;
}

// 遊戲結束
function endGame(message) {
    gameState.gameOver = true;
    document.getElementById('message').innerText = message;
}
