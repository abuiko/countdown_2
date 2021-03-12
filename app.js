const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
];

const weekdays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
];

const countdown = document.querySelector('.countdown');
const items = document.querySelectorAll('.content h4');
const content = document.querySelector('.content p');


let futureDate = new Date('2021-03-11T23:06:00');
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const date = futureDate.getDate();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];

content.textContent = `Giveaway ends on ${weekday}, ${month} ${date} ${year} at ${hours}:${minutes}am`;


const futureTime = futureDate.getTime();

function getRemainingTime() {
    const today = new Date().getTime();
    const t = futureTime - today;
    // in ms

    // 1s - 1000ms
    // 1min - 60s
    // 1hour - 60min
    // 1 day - 24hrs

    const oneDay = 24 * 60 * 60 * 1000;
    const oneHour = 60 * 60 * 1000;
    const oneMinute = 60 * 1000;

    let days = Math.floor(t / oneDay);
    let hours = Math.floor((t % oneDay) / oneHour);
    let minutes = Math.floor((t % oneHour) / oneMinute);
    let seconds = Math.floor((t % oneMinute) / 1000);

    const values = [days, hours, minutes, seconds];
    items.forEach((item, index) => {
        item.innerHTML = values[index];
    })

    if (t < 0) {
        clearInterval(time);
        countdown.innerHTML = '<h4>Giveaway Ended</h4>';
    }
}

let time = setInterval(getRemainingTime, 1000);


getRemainingTime();