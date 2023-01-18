const main = document.querySelector("#main");
const font = document.getElementById("font");

main.style.backgroundColor = colorGenerator();

font.className = "opacity";

setTimeout(() => {
    font.className = "non-opacity";
}, 100);

setInterval(
    function () {
        main.style.backgroundColor = colorGenerator();
    }, 5000)

function colorGenerator() {

    return "#" + Number(Math.floor((Math.random() * 999999999) + 10000000), 16).toString(16).slice(0, 6);
}

let splitText = font.innerText.split("");

/* console.log(splitText.match(/\d/g)); hata */

console.log(Array.isArray(splitText)); // true