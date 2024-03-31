
// JavaScript for typing animation
const dynamicText = document.querySelector(".auto-type span");
const words = ["Full Stack Web Developer", "Javascript Developer", "Node.js Developer"];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

const typeEffect = () => {
    const currentWord = words[wordIndex];
    const currentChar = currentWord.substring(0, charIndex);
    dynamicText.textContent = currentChar;
    dynamicText.classList.add("stop-blinking");

    if (!isDeleting && charIndex < currentWord.length) {
        charIndex++;
        setTimeout(typeEffect, 200);
    } else if (isDeleting && charIndex > 0) {
        charIndex--;
        setTimeout(typeEffect, 100);
    } else {
        isDeleting = !isDeleting;
        dynamicText.classList.remove("stop-blinking");
        wordIndex = !isDeleting ? (wordIndex + 1) % words.length : wordIndex;
        setTimeout(typeEffect, 1200);
    }
}

typeEffect();

/* 
var nextPageButton = document.querySelector(".nextpage-button");
nextPageButton.addEventListener("click", function() {
    window.location.href = "../about.html";
});

var hireMeButton = document.querySelector(".hire-me-button");
hireMeButton.addEventListener("click", function() {
    window.location.href = "../contact.html";
});


var previousPageButton = document.querySelector(".previouspage-button");
previousPageButton.addEventListener("click", function() {
    window.location.href = "about.html";
});


var previousPageButton = document.querySelector(".previouspage-button");
previousPageButton.addEventListener("click", function() {
    window.location.href = "index.html";
});

var nextPageButton = document.querySelector(".nextpage-button");
nextPageButton.addEventListener("click", function() {
    window.location.href = "work.html";
});
 */
