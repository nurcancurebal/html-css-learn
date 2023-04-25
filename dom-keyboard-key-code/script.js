document.addEventListener("keypress", keyCode);

function keyCode(event) {

    let textOne = document.querySelector("#textOne");
    let textTwo = document.querySelector("#textTwo");

    textOne.innerHTML = "You pressed ";

    let span = document.createElement("span");

    span.textContent = event.key;
    span.style.color = "#5bbc7a";
    span.style.fontSize = "65px";

    textOne.appendChild(span);

    textTwo.innerHTML = event.keyCode;
    textTwo.style.display = "inline";
    textTwo.style.color = "#5bbc7a";
    textTwo.style.marginTop = "30px";
    textTwo.style.fontSize = "130px";
    textTwo.style.padding = "25px"
}