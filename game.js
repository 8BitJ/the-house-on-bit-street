const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let gameStarted = false;

function startGame() {
  gameStarted = true;
  drawIntro();
}

function drawIntro() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "white";
  ctx.font = "16px Courier New";
  ctx.fillText("Eren: Emma? Where are you?", 20, 50);
  ctx.fillText("The house creaks... something feels off.", 20, 70);
  setTimeout(drawPuzzleHint, 3000);
}

function drawPuzzleHint() {
  ctx.fillText("Hint: The locked door responds to the name of your lost friend...", 20, 110);
  ctx.fillText("Type: emma", 20, 130);
  waitForInput();
}

function waitForInput() {
  document.addEventListener("keydown", function onKeyDown(e) {
    if (e.key.toLowerCase() === "e") {
      ctx.fillText("...You feel a presence behind you.", 20, 180);
      document.removeEventListener("keydown", onKeyDown);
    }
  });
}
