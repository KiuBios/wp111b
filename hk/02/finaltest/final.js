// 遊戲故事和選擇路徑
var story = document.getElementById("story");
var input = document.getElementById("input");
var button = document.querySelector("button");

// 遊戲狀態
var gameState = {
    score: 0,
    started: false
};

// 遊戲開始
function startGame() {
    story.innerHTML = "歡迎來到文字冒險遊戲！";
    gameState.started = true;
}

// 玩家選擇
function play() {
    if (!gameState.started) {
        startGame();
        return;
    }

    var choice = input.value;

    switch (gameState.score) {
        case 0:
            if (choice.toLowerCase() === "左") {
                story.innerHTML = "你選擇了左邊的路。";
                gameState.score += 1;
            } else if (choice.toLowerCase() === "右") {
                story.innerHTML = "你選擇了右邊的路。";
                gameState.score += 2;
            } else {
                story.innerHTML = "請選擇「左」或「右」。";
            }
            break;
        case 1:
            if (choice.toLowerCase() === "繼續") {
                story.innerHTML = "你繼續往前走，遇到了一隻小熊。遊戲結束。";
                gameState.started = false;
            } else {
                story.innerHTML = "請輸入「繼續」。";
            }
            break;
        case 2:
            if (choice.toLowerCase() === "返回") {
                story.innerHTML = "你選擇返回，發現了一扇神秘的門。遊戲結束。";
                gameState.started = false;
            } else {
                story.innerHTML = "請輸入「返回」。";
            }
            break;
    }

    input.value = "";
}
