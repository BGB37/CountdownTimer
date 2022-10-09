let shownSeconds = document.getElementById('seconds');
let shownMinutes = document.getElementById('minutes');
let shownHours = document.getElementById('hours');
let shownDays = document.getElementById('days');
let heading = document.getElementById('heading');

let usersHeading = prompt("What are you counting down for?")

heading.innerHTML = usersHeading;

let date = prompt("Enter a date with the following format --> mm/dd/yyyy");

let dateToCountdown = date;




function countDown() {
    const countingDownFrom = new Date(dateToCountdown);
    console.log(countingDownFrom);
    const currentDate = new Date();

    const totalSeconds = (countingDownFrom - currentDate) / 1000;
    const seconds = Math.floor(totalSeconds) % 60;
    const minutes = Math.floor(totalSeconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(minutes / 60 / 24);


    shownSeconds.innerHTML = formatTime(seconds); 
    shownMinutes.innerHTML = formatTime(minutes);
    shownHours.innerHTML = formatTime(hours);
    shownDays.innerHTML = formatTime(days);
};

function formatTime(time) {
    if(time < 10 ) {
        return "0" + time;
    } else {
        return time;
    }
}
setInterval(countDown,1000);