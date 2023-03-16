const planetSelect = document.getElementById("planet-select");
const massInput = document.getElementById("mass-input");
const planetArea = document.getElementById("planet-area");
const descriptionArea = document.getElementById("description-area");

function calculateWeight() {

    if (!massInput.value) {

        planetArea.style.display = "none";
        descriptionArea.style.display = "block";
        descriptionArea.innerText = "Mass is required";

    } else if (isFinite(massInput.value)) {

        if (planetSelect.value == "none") {

            planetArea.style.display = "none";
            descriptionArea.style.display = "block";
            descriptionArea.innerText = "You did not coose a planet yet";

        } else {

            const planetValues = {
                earth: 9.8,
                jupiter: 25.8,
                mars: 3.7,
                mercury: 3.7,
                venus: 8.87,
                earth: 9.8,
                moon: 1.6,
                saturn: 10.44,
                uranus: 8.69,
                neptune: 11.15,
                pluto: 0.62
            };

            planetArea.style.display = "block";
            planetArea.setAttribute("src", `./img/${planetSelect.value}.png`);
            descriptionArea.innerHTML = "";
            descriptionArea.style.marginLeft = "20px";
            descriptionArea.style.display = "flex";
            descriptionArea.style.alignItems = "center";
            descriptionArea.style.flexDirection = "column";

            const descriptionAreaHeader = document.createElement("div");
            descriptionAreaHeader.style.marginBottom = "20px";

            const descriptionAreaHeaderPre = document.createElement("span");
            descriptionAreaHeaderPre.innerText = "The weight of the object on";
            descriptionAreaHeaderPre.style.marginRight = "10px";

            const descriptionAreaHeaderWhichPlanet = document.createElement("span");
            descriptionAreaHeaderWhichPlanet.style.fontWeight = "700";
            descriptionAreaHeaderWhichPlanet.innerText = String(planetSelect.value).toUpperCase();

            descriptionAreaHeader.appendChild(descriptionAreaHeaderPre);
            descriptionAreaHeader.appendChild(descriptionAreaHeaderWhichPlanet);

            const descriptionAreaFooter = document.createElement("div");
            descriptionAreaFooter.className = "description-area-calculate";

            const descriptionAreaFooterText = document.createElement("b");
            descriptionAreaFooterText.innerText = (Number(massInput.value) * planetValues[planetSelect.value]).toFixed(2) + " N";
            descriptionAreaFooterText.style.position = "absolute";
            descriptionAreaFooterText.style.left = "58px";
            descriptionAreaFooterText.style.top = "85px";

            descriptionAreaFooter.appendChild(descriptionAreaFooterText);

            descriptionArea.appendChild(descriptionAreaHeader);
            descriptionArea.appendChild(descriptionAreaFooter);

        }
    }
}