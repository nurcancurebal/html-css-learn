const features = document.querySelector("#features");

const obj = [
    { class: "fa-solid fa-book-open", text: "Software Student" },
    { class: "fa-solid fa-fire", text: "Software Developer" },
    { class: "fa-solid fa-laptop", text: "Designer" },
    { class: "fa-solid fa-seedling", text: "Frontend Developer" }
]

let index = 0;

const featuresIcon = document.createElement("i");
const featuresIconText = document.createElement("span");

featuresIcon.setAttribute("class", ` ${obj[index].class}`);
featuresIcon.style.margin = "0 20px";
featuresIconText.innerText = obj[index].text;
featuresIconText.style.fontWeight = "500";

featuresIcon.appendChild(featuresIconText);
features.appendChild(featuresIcon);

index++;

setInterval(function () {

    featuresIconText.innerText = obj[index].text;
    featuresIcon.setAttribute("class", ` ${obj[index].class}`);

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
    }, 100);


    technologies.appendChild(technologiesSpan);

    counter++;

    setInterval(function () {

        technologiesSpan.remove();

        technologiesSpan.textContent = LIST[counter];
        technologiesSpan.className = "opacity";
        technologiesSpan.style.color = colorGenerator();

        technologies.appendChild(technologiesSpan);

        setTimeout(() => {
            technologiesSpan.className = "non-opacity";
        }, 10);

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