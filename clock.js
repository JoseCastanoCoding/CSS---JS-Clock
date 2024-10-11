const secondsHand = document.querySelector(".seconds");
const minutesHand = document.querySelector(".minutes");
const hoursHand = document.querySelector(".hours");


function setTime () {
    const now = new Date();
    const seconds = now.getSeconds();
    const secondDegrees = ((seconds / 60) * 360) + 90;
    secondsHand.style.transform = `rotate(${secondDegrees}deg)`;

    const minutes = now.getMinutes();
    const minuteDegrees = ((minutes / 60) * 360) + 90;
    minutesHand.style.transform = `rotate(${minuteDegrees}deg)`;

    const hours = now.getHours();
    const hourDegrees = ((hours / 12) * 360) + 90;
    hoursHand.style.transform = `rotate(${hourDegrees}deg)`;
    
}

setInterval(setTime, 1000);
