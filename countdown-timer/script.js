const newYears = '1 jan 2023';

function countdown() {
    const newYearsDate = new Date(newYears);    // Represents the date and time in the newYears variable
    const currentDate = new Date(); // Represents the current date and time

    const totalSeconds = (newYearsDate - currentDate) / 1000;   // Contains the total number of seconds 

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // linking these variables to their HTML containers
    daysX.innerHTML = days;
    hoursX.innerHTML = hours;
    minutesX.innerHTML = minutes;
    secondsX.innerHTML = seconds;

    console.log(seconds)
}

countdown();    // initial call

setInterval(countdown, 1000)

// Note: 30 mins into video