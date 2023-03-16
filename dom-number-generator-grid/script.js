const isPrime = num => { // asal sayı bulma işlemi

    for (let i = 2; i <= Math.sqrt(num); i++) // Math.sqrt: karekök bulma

        if (num % i === 0) return false;

    return num > 1;
}

const numberContent = document.getElementById("number-content");
const generatorinput = document.getElementById("generator-input");

for (let index = 0; index <= 50; index++) {

    const numberElement = document.createElement('div');
    numberElement.textContent = index;
    numberElement.style.color = "white";
    numberElement.style.fontSize = "32px"
    numberElement.style.padding = "5px 0px";
    numberElement.style.textAlign = "center";

    if (isPrime(index)) { // asal

        numberElement.style.backgroundColor = "#eb695b"; // red

    } else if (index % 2 == 0) { // çift

        numberElement.style.backgroundColor = "#5bbc7a"; // green

    } else { // tek

        numberElement.style.backgroundColor = "#f7dc5c"; // yellow
    }

    numberContent.appendChild(numberElement);
}

function clickMe() {

    const p1 = document.getElementById("p1");
    const p2 = document.getElementById("p2");

    if (!generatorinput.value || generatorinput.value == "") {

        p1.style.display = "block";
        p2.style.display = "none";

    } else if (!isFinite(generatorinput.value)) {

        p2.style.display = "block";
        p1.style.display = "none";

    } else {

        p2.style.display = "none";
        p1.style.display = "none";

        numberContent.innerHTML = "";

        for (let index = 0; index <= generatorinput.value; index++) {

            const newNumberElement = document.createElement('div');
            newNumberElement.textContent = index;
            newNumberElement.style.color = "white";
            newNumberElement.style.fontSize = "32px"
            newNumberElement.style.padding = "5px 0px";
            newNumberElement.style.textAlign = "center";

            if (isPrime(index)) { // asal

                newNumberElement.style.backgroundColor = "#eb695b"; // red

            } else if (index % 2 == 0) { // çift

                newNumberElement.style.backgroundColor = "#5bbc7a"; // green

            } else { // tek

                newNumberElement.style.backgroundColor = "#f7dc5c"; // yellow
            }

            numberContent.appendChild(newNumberElement)
        }
    }
}