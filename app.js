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

const countdown = document.querySelector('countdown');
const items = document.querySelectorAll('.content h4');
const content = document.querySelector('.content p');


let futureDate = new Date('2021-06-01T05:30:00');
const year = futureDate.getFullYear();
const hours = futureDate.getHours();
const minutes = futureDate.getMinutes();

const date = futureDate.getDate();
const month = months[futureDate.getMonth()];
const weekday = weekdays[futureDate.getDay()];

content.textContent = `Giveaway ends on ${weekday}, ${month} ${date} ${year} at ${hours}:${minutes}pm`;