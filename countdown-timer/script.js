
// linking HTML containers to created variables
const daysX = document.getElementById('days');
const hoursX = document.getElementById('hours'); 
const minutesX = document.getElementById('minutes'); 
const secondsX = document.getElementById('seconds'); 

const newYears = '6 sep 2022';  // Global variable to hold the number of seconds until new years

function countdown() {  // Function to countdown the days, hours, minutes and seconds
    const newYearsDate = new Date(newYears);    // Represents the date and time in the newYears variable
    const currentDate = new Date(); // Represents the current date and time

    const totalSeconds = (newYearsDate - currentDate) / 1000;   // Contains the total number of seconds 

    const days = Math.floor(totalSeconds / 3600 / 24);
    const hours = Math.floor(totalSeconds / 3600) % 24;
    const minutes = Math.floor(totalSeconds / 60) % 60;
    const seconds = Math.floor(totalSeconds) % 60;

    // Assigning caalues to our constants to be displayed in HTML containers
    daysX.innerHTML = days;
    hoursX.innerHTML = formatTime(hours);
    minutesX.innerHTML = formatTime(minutes);
    secondsX.innerHTML = formatTime(seconds);

    console.log(seconds)
}

function formatTime(time) { // Function to Add a '0' placeholder when the countdown value decreases by a tenth
    return time <10 ? (`0${time}`) : time;  // For info on using backtick quotes, see here: https://stackoverflow.com/questions/27678052/usage-of-the-backtick-character-in-javascript
}       

countdown();    // function call

