const title = document.querySelector('span');

let classWrapper = document.querySelectorAll('li');

classWrapper.forEach((wrapper, i) => {

    title.style.fontSize = "60px";

    if (i == 0) {

        wrapper.style.backgroundColor = '#5bbc7a';

    } else if (i == 1) {

        wrapper.style.backgroundColor = '#f7dc5c';

    } else {

        wrapper.style.backgroundColor = '#eb695b';
    }
})

const dateArea = document.getElementById("datearea");
const yearArea = document.getElementById("year");

dateArea.innerText = dateGenerator();

setTimeout(() => {

    setInterval(() => {

        yearArea.style.backgroundColor = colorGenerator();
    }, 1000);

}, 500)

setInterval(() => {

    dateArea.innerText = dateGenerator();
    dateArea.style.backgroundColor = colorGenerator();

}, 1000)

function colorGenerator() {

    return "#" + Number(Math.floor((Math.random() * 999999999) + 10000000), 16).toString(16).slice(0, 6);
}

function dateGenerator(params) {

    const date = new Date();
    let year = date.getFullYear();
    let mounth = date.getMonth();
    let dayNumber = date.getDate();
    let hour = date.getHours();
    let minute = date.getMinutes();
    let second = date.getSeconds();

    let months = [
        'January',
        'February',
        'March',
        'April',
        'May ',
        'June',
        'July',
        'August ',
        'September',
        'October',
        'November',
        'December'
    ];

    return `${months[mounth]} ${dayNumber}, ${year} ${hour}:${minute}:${second}`;
}