function createHeart() {
    const heart = document.createElement('div');
    heart.classList.add('heart-rain');
    heart.innerHTML = '🩷';
    heart.style.left = Math.random() * 100 + 'vw';
    heart.style.animationDuration = Math.random() * 2 + 3 + 's';
    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 5000);
}


setInterval(createHeart, 300);


const audio = document.getElementById("myAudio");
const popup = document.getElementById("popup");

audio.addEventListener("play", () => {
    popup.classList.add("active");
});

function closePopup() {
    popup.classList.remove("active");
}