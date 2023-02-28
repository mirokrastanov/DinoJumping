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
    let characterTop = parseInt(window.getComputedStyle(character)
        .getPropertyValue("top"));
    let blockLeft = parseInt(window.getComputedStyle(block)
        .getPropertyValue("left"));
    if (blockLeft < 20 && blockLeft > -20 && characterTop >= 130) {
        block.style.animation = "none";
        alert("Game Over! SCORE: " + Math.floor(counter / 100));
        counter = 0;
        block.style.animation = "block 2s infinite linear";
        
       
       
        
    } else {
        counter++;
        document.getElementById("scoreSpan").innerHTML = Math.floor(counter / 100);
    }
}, 10);