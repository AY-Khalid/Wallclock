setInterval(setClock, 1000);

let hourHand = document.querySelector("[data-hour-hand]");
let minuteHand = document.querySelector("[data-minute-hand]");
let secondHand = document.querySelector("[data-second-hand]");

function setClock() {
    let currentDate = new Date();
    let secondRate = currentDate.getSeconds() / 60;
    let minuteRate = (secondRate + currentDate.getMinutes()) / 60;
    let hourRate = (minuteRate + currentDate.getHours()) / 12;

    setRotation(secondHand, secondRate);
    setRotation(minuteHand, minuteRate);
    setRotation(hourHand, hourRate);
}

function setRotation(element, rotationRatio) {
    element.style.setProperty("--rotation", rotationRatio * 360); 
}

setClock();