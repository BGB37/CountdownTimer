let body = document.getElementById('body');
let heading = document.getElementById('heading');
let shownSeconds = document.getElementById('seconds');
let shownMinutes = document.getElementById('minutes');
let shownHours = document.getElementById('hours');
let shownDays = document.getElementById('days');
let shownWeeks = document.getElementById('weeks');
let shownMonths = document.getElementById('months');
let shownYears = document.getElementById('years');

let usersHeading = prompt("What are you counting down for?")

if(usersHeading == "") {
    heading.innerHTML = "New Year"
} else {
    heading.innerHTML = usersHeading;
}

let date = prompt("Enter a date with the following format --> mm/dd/yyyy");

if(date == "") {
    date = "01/01/2023"
}

let dateToCountdown = date;

function randomRgbNumber() {
    return Math.floor(Math.random() * 255)
        
}


function countDown() {
    const countingDownFrom = new Date(dateToCountdown);
    console.log(countingDownFrom);
    const currentDate = new Date();

    const totalSeconds = (countingDownFrom - currentDate) / 1000;
    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(minutes / 60 / 24);
    const weeks = Math.floor(days / 7);
    const months = Math.floor(weeks / 4);
    const years = Math.floor(months / 12);


    shownSeconds.innerHTML = formatTime(seconds); 
    shownMinutes.innerHTML = formatTime(minutes);
    shownHours.innerHTML = formatTime(hours);
    shownDays.innerHTML = formatTime(days);
    shownWeeks.innerHTML = formatTime(weeks);
    shownMonths.innerHTML = formatTime(months);
    shownYears.innerHTML = formatTime(years);
};

function formatTime(time) {
    if(time < 10 ) {
        return "0" + time;
    } else {
        return time;
    }
}

function changeBodyColor() {
    if(shownSeconds.innerHTML == "00") {
    body.style.backgroundImage = `linear-gradient(rgb(${randomRgbNumber()},${randomRgbNumber()},${randomRgbNumber()}),rgb(${randomRgbNumber()},${randomRgbNumber()},${randomRgbNumber()}))`;
    }
};


setInterval(countDown,1000);
setInterval(randomRgbNumber,1000);
setInterval(changeBodyColor,1000);
