const features = document.querySelector("#features");

const obj = [
    { class: "fa-solid fa-book-open", text: "Software Student", color: "blue" },
    { class: "fa-solid fa-fire", text: "Software Developer", color: "red" },
    { class: "fa-solid fa-laptop", text: "Designer", color: "black" },
    { class: "fa-solid fa-seedling", text: "Frontend Developer", color: "green" }
]

let index = 0;

const featuresIcon = document.createElement("i");
const featuresIconText = document.createElement("span");

featuresIcon.setAttribute("class", ` ${obj[index].class}`);
featuresIcon.style.margin = "0 20px";
featuresIcon.style.color = obj[index].color;

featuresIconText.innerText = obj[index].text;
featuresIconText.className = "opacity non-margin";

setTimeout(() => {
    featuresIconText.className = "non-opacity margin";
}, 1);

featuresIcon.appendChild(featuresIconText);
features.appendChild(featuresIcon);

index++;

setInterval(function () {

    featuresIconText.remove(); // remove veriyoruz çünkü: opacity classları yeniden verebilmek için classnameleri her seferinde değiştirebilmek için

    featuresIconText.innerText = obj[index].text;
    featuresIconText.className = "opacity non-margin";

    setTimeout(() => {
        featuresIconText.className = "non-opacity margin";
    }, 1);

    featuresIcon.appendChild(featuresIconText);

    featuresIcon.setAttribute("class", ` ${obj[index].class}`);
    featuresIcon.style.color = obj[index].color;

    index++;

    if (index == 4) {
        index = 0;
    };
}, 3000);

{
    const LIST = ["HTML", "CSS", "JAVASCRIPT", "BOOTSTRAP", "VUE"];

    const technologies = document.querySelector("#technologies");

    let counter = 0;

    const technologiesSpan = document.createElement("span");

    technologiesSpan.textContent = LIST[counter];
    technologiesSpan.className = "opacity";
    technologiesSpan.style.color = colorGenerator();

    setTimeout(() => {
        technologiesSpan.className = "non-opacity";
    }, 1); // 1 sn nin 1000 de 1 i geçtiğinde çalışacak yani 1 milisaniyede


    technologies.appendChild(technologiesSpan);

    counter++;

    setInterval(function () {

        technologiesSpan.remove(); // belgeden bir öğeyi (veya düğümü) kaldırır.

        technologiesSpan.textContent = LIST[counter];
        technologiesSpan.className = "opacity";
        technologiesSpan.style.color = colorGenerator();

        technologies.appendChild(technologiesSpan);

        setTimeout(() => {
            technologiesSpan.className = "non-opacity";
        }, 1);

        counter++;

        if (counter == 5) {
            counter = 0;
        };

    }, 3000);

}

function colorGenerator() {

    return "#" + Number(Math.floor((Math.random() * 999999999) + 10000000), 16)
        .toString(16)
        .slice(0, 6);
};