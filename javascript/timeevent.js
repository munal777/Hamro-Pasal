//flash sales deadline timeset
const futureTimestamp = Date.now() + 14.5 * 24 * 60 * 60 * 1000;

const countdown = () => {
    // Specify the date and time we are counting down to.
    const now = Date.now();
    const countDate = new Date(futureTimestamp);

    //calcute remaining time
    const remainingTime = countDate - Date.now();

    //working the time in days, hours, mins, seconds
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;

    const textDay = Math.floor(remainingTime / day);
    const textHour = Math.floor((remainingTime % day) / hour);
    const textMinute = Math.floor((remainingTime % hour) / minute);
    const textSecond = Math.floor((remainingTime % minute) / second);

    //update the html with the calculated values 
    document.querySelector(".day").innerHTML = textDay;
    document.querySelector(".hour").innerHTML = textHour;
    document.querySelector(".minute").innerHTML = textMinute;
    document.querySelector(".second").innerHTML = textSecond;

    if (remainingTime <= 0) {
        clearInterval(interval);
        document.querySelector(".day").innerHTML = 0;
        document.querySelector(".hour").innerHTML = 0;
        document.querySelector(".minute").innerHTML = 0;
        document.querySelector(".second").innerHTML = 0;
    }
}
setInterval(countdown, 1000);