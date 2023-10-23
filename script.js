document.addEventListener("DOMContentLoaded", function () {
    let timer;
    let timerDuration = 1 * 60; // 5 minutes in seconds
    let currentTime = timerDuration;
    let startTime;

    const timerDisplay = document.querySelector("#timer");
    const startTimerButton = document.querySelector("#startTimerButton");
    const main = document.querySelector(".main");
    const formContainer = document.querySelector(".form_container");


    function updateTimerDisplay() {
        const minutes = Math.floor(currentTime / 60);
        const seconds = currentTime % 60;
        timerDisplay.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    }

    function startTimer() {
        startTime = new Date();
        console.log("Start Time:", startTime);
        formContainer.innerHTML += `<div style="width:100%;height:1000px;background:red;" data-fillout-id="qscGSiWWNHus" data-fillout-embed-type="standard"
                data-fillout-inherit-parameters data-fillout-dynamic-resize data-starttime="${startTime}"></div>
                </div>
                `

        formContainer.style.display = "flex";

        timer = setInterval(function () {
            currentTime--;
            if (currentTime <= 0) {
                clearInterval(timer);
                alert("Time's up! You have to submit your answer. !");                
            }

            updateTimerDisplay();
        }, 1000);

        startTimerButton.disabled = true;
    }

    startTimerButton.addEventListener("click", startTimer);
});

