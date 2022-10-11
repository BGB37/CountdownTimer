// Defining the elements in js.
let body = document.getElementById('body');
let heading = document.getElementById('heading');
let shownSeconds = document.getElementById('seconds');
let shownMinutes = document.getElementById('minutes');
let shownHours = document.getElementById('hours');
let shownDays = document.getElementById('days');
let shownWeeks = document.getElementById('weeks');
let shownMonths = document.getElementById('months');
let shownYears = document.getElementById('years');
// ----------------------------------------------------------------------------

// Giving information about the format.
alert("In countdown you will only see complete years, months and weeks. If days between now and target date 380 days, you will see years as 01 because there is only one year in 380 days.");
// ----------------------------------------------------------------------------

// Getting a title from the user. If the user does not fill, setting the title to new year.
let usersHeading = prompt("What are you counting down for?")
if(usersHeading == "") {
    heading.innerHTML = "New Year"
} else {
    heading.innerHTML = usersHeading;
}
// ----------------------------------------------------------------------------

// Getting a date from the user. Checking for the invalid inputs and warning the user. If not entered, setting the target date to 01/01/2023.
var date = prompt("Enter a date with the following format --> mm/dd/yyyy");
while (date[0] == 1 && date[1] > 2 || date[3] == 3 && date[4] > 1) {
    alert("Month can not be higher than 12 and day can not be higher than 31.");
     date = prompt("Enter a date with the following format --> mm/dd/yyyy");
} 
 if(date == "") {
    date = "01/01/2023"
}
let dateToCountdown = date;
// ----------------------------------------------------------------------------


// FUNCTIONS

// Generating a new number to set as the rgb value for the background color of the body.
function randomRgbNumber() {
    return Math.floor(Math.random() * 255)
        
}
// ----------------------------------------------------------------------------


// Doing the calculations for remaining years, months, weeks, days, hours, minutes and seconds.
function countDown() {
    const countingDownFrom = new Date(dateToCountdown);
    console.log(countingDownFrom);
    const currentDate = new Date();

    const totalSeconds = (countingDownFrom - currentDate) / 1000;
    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
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
// ----------------------------------------------------------------------------

// Formatting the displayed time on the screen. if the number is a one digit, putting a zero to left of it.
function formatTime(time) {
    if(time < 10 ) {
        return "0" + time;
    } else {
        return time;
    }
}
// ----------------------------------------------------------------------------

// Changing the background color of the page via setting the generated numbers in to rgb(). Changing the color only if seconds displayed equals to 00.
function changeBodyColor() {
    if(shownSeconds.innerHTML == "00") {
    body.style.backgroundImage = `linear-gradient(rgb(${randomRgbNumber()},${randomRgbNumber()},${randomRgbNumber()}),rgb(${randomRgbNumber()},${randomRgbNumber()},${randomRgbNumber()}))`;
    }
};
// ----------------------------------------------------------------------------

// Using the setInterval method to refresh the numbers each second.
setInterval(countDown,1000);
setInterval(randomRgbNumber,1000);
setInterval(changeBodyColor,1000);
// ----------------------------------------------------------------------------
