let character = document.getElementById("character");
let block = document.getElementById("block");
let counter = 0;
let listener = document.querySelector('html');
let gameENDED = false;
let newGameBtnElement = null;
listener.addEventListener('click', jump);

function jump() {
    if (gameENDED) {
        return;
    }
    if (character.classList == "animate") { return }
    character.classList.add("animate");
    setTimeout(function () {
        character.classList.remove("animate");
    }, 600);
}

let checkDead = setInterval(function () {
    if (gameENDED) {
        return;
    }
   
}, 10);