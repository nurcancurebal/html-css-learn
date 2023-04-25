const backgroundColorDiv = document.querySelector("#background-color-div");
const font = document.getElementById("font");

backgroundColorDiv.style.backgroundColor = colorGenerator();

setInterval(
    function () {
        backgroundColorDiv.style.backgroundColor = colorGenerator();
    }, 3000)

font.style.fontFamily = "Courier";

setInterval(
    function () {

        font.style.fontFamily = fontFamilyGenerator();
    }, 3000)

function fontFamilyGenerator() {

    const fontArray = ["Times New Roman", "Times", "serif", "Arial", "Helvetica", "sans-serif", "Times New Roman", "Georgia", "Garamond", "Verdana", "Courier New", "Lucida Console", "Monaco", "Brush Script MT", "Lucida Handwriting", "Copperplate", "Papyrus"];

    return fontArray[Math.floor(Math.random() * fontArray.length)];
}

const text = "30 DAYS OF JAVASCRİPT CHALLENGE 2023 NURCAN CÜREBAL";

const textSplit = text.split("");

textSplit.forEach(function (letter) {

    const letterSpan = document.createElement("span");

    letterSpan.className = "opacity";

    setTimeout(() => {

        letterSpan.className = "non-opacity";
    }, 100);

    letterSpan.innerText = letter;
    letterSpan.style.color = colorGenerator();

    font.appendChild(letterSpan);
})

setInterval(function () {

    font.innerHTML = "";

    textSplit.forEach(function (letter) {

        const letterSpan = document.createElement("span");

        letterSpan.className = "opacity";

        setTimeout(() => {

            letterSpan.className = "non-opacity";
        }, 100);

        letterSpan.innerText = letter;
        letterSpan.style.color = colorGenerator();

        font.appendChild(letterSpan);
    })
}, 3000)

function colorGenerator() {

    return "#" + Number(Math.floor((Math.random() * 999999999) + 10000000), 16).toString(16).slice(0, 6);
}