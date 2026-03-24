// TYPEWRITER EFFECT
const text = "Hi, I'm Trevor Daley — Nice to meet you! ";
let i = 0;

function typeEffect() {
    if (i < text.length) {
        document.getElementById("typing-text").innerHTML += text.charAt(i);
        i++;
        setTimeout(typeEffect, 50);
    }
}

typeEffect();