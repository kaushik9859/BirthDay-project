
function startCountdown(targetDate) {

    const countdownInterval = setInterval(function () {
        const now = new Date().getTime();
        const timeLeft = targetDate - now;

        const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
        const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

        document.getElementById("days").innerHTML = days;
        document.getElementById("hours").innerHTML = (hours < 10 ? "0" : "") + hours;
        document.getElementById("mins").innerHTML = (minutes < 10 ? "0" : "") + minutes;
        document.getElementById("seconds").innerHTML = (seconds < 10 ? "0" : "") + seconds;

        if (timeLeft < 0) {
            clearInterval(countdownInterval);
            document.querySelector(".counter").innerHTML = "Countdown Over!";
            document.querySelector(".counter").style.fontSize = "40px";
            document.querySelector(".counter").style.fontWeight = "900";
            document.querySelector(".wallpaper").innerHTML = `
                <img src="birthgif.gif" style="
                    height: 450px;
                    width: 1000px;
                    border-radius: 15px;"
                >
                <audio src="song.mp3" autoplay></audio>
            `;
        }
    }, 1000);
}


const addUserButton = document.getElementById('user');
const popupForm = document.getElementById('popupForm');
const closePopup = document.querySelector('.close');
const submit = document.querySelector('#submit');
const birth = document.querySelector('#birthday');
const nameInput = document.querySelector('#name');

addUserButton.addEventListener('click', () => {
    popupForm.style.display = 'block';
});

closePopup.addEventListener('click', () => {
    popupForm.style.display = 'none';
});
window.addEventListener('click', (event) => {
    if (event.target === popupForm.parentElement) {
        popupForm.style.display = 'none';
    }
});

submit.addEventListener('click', (event) => {
    event.preventDefault(); 

    popupForm.style.display = 'none';

    const name = nameInput.value;
    const birthDay = birth.value; 
    const targetDate = new Date(`${birthDay}T00:00:00`).getTime();

    alert(`Welcome ${name}`);
    startCountdown(targetDate);
});
