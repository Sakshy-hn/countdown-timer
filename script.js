const daysText = document.getElementById('days');
const hoursText = document.getElementById('hours');
const minutesText = document.getElementById('min');
const secondsText = document.getElementById('sec');

const newDate = "1 July 2023";


function countdownTimer(){
    const currentDate = new Date();
    const newYearDate = new Date(newDate);

    const Totalseconds = Math.floor((newYearDate - currentDate) / 1000);
    const days = Math.floor(Totalseconds / 3600 / 24);
    const hours = Math.floor(Totalseconds / 3600) % 24;
    const minutes = Math.floor(Totalseconds / 60) % 60;
    const seconds = Math.floor(Totalseconds % 60);

    daysText.innerHTML = days;
    hoursText.innerHTML = timeFormat(hours);
    minutesText.innerHTML = timeFormat(minutes);
    secondsText.innerHTML = timeFormat(seconds);
}
function timeFormat(time){
   return time < 10 ? `0${time}` : time;
}
countdownTimer();

setInterval(countdownTimer,1000);