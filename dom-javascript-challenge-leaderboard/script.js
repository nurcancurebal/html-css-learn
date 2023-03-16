
const players = document.querySelector("#players");
const firstNameInput = document.querySelector("#one");
const lastNameInput = document.querySelector("#two");
const countryInput = document.querySelector("#three");
const playerScoreInput = document.querySelector("#four");
const inputsButton = document.querySelector("#inputs-button");
const inputsButtonRequired = document.createElement("div");

inputsButton.appendChild(inputsButtonRequired);

const PLAYERSOBJ = [
    { firstName: "MARTHA", lastName: "YOHANES", country: "FINLAND", playerScore: "85" },
    { firstName: "DAVID", lastName: "SMITH", country: "UNITED KINGDOM", playerScore: "80" },
    { firstName: "NURCAN", lastName: "CUREBAL", country: "TURKEY", playerScore: "90" },
    { firstName: "MATHIAS", lastName: "ELIAS", country: "SWEDEN", playerScore: "70" }
];

playersFunction();

function playersFunction() {

    players.innerHTML = "";
    inputsButtonRequired.style.display = "none";

    for (let index = 0; index < PLAYERSOBJ.length; index++) {

        const playersDiv = document.createElement("div");
        playersDiv.className = "players-div";
        playersDiv.setAttribute("id", index);

        const playerSpanNameDate = document.createElement("span");

        const playerDivName = document.createElement("div");

        playerDivName.textContent = `${PLAYERSOBJ[index].firstName} ${PLAYERSOBJ[index].lastName}`;

        const playerDivDate = document.createElement("div");

        const date = new Date();

        let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        let year = date.getFullYear();
        let mounth = date.getMonth();
        let dayNumber = date.getDate();
        let hour = date.getHours();
        let minute = date.getMinutes();

        playerDivDate.innerText = `${months[mounth].toUpperCase()} ${dayNumber}.${year} ${hour}.${minute}`;

        playerSpanNameDate.appendChild(playerDivName);
        playerSpanNameDate.appendChild(playerDivDate);


        const playerSpanCountry = document.createElement("span");
        playerSpanCountry.textContent = `${PLAYERSOBJ[index].country}`;

        const playerSpanScore = document.createElement("span");
        playerSpanScore.textContent = PLAYERSOBJ[index].playerScore;


        const playerSpanAction = document.createElement("span");
        playerSpanAction.className = "buttons-action";

        const deleteBorderDiv = document.createElement("div");
        deleteBorderDiv.className = "buttons-parrent";
        const deleteIcon = document.createElement("i");
        deleteIcon.className = "fa-solid fa-trash-can";
        deleteBorderDiv.appendChild(deleteIcon);

        deleteBorderDiv.onclick = function () {

            if (playersDiv.id == index) {

                playersDiv.remove();
                PLAYERSOBJ.splice(index, 1);

                playersFunction();
            }
        }

        const plusBorderDiv = document.createElement("div");
        plusBorderDiv.className = "buttons-parrent";
        const pointsPlusIcon = document.createElement("span");
        pointsPlusIcon.innerText = "+5";

        plusBorderDiv.onclick = function () {

            PLAYERSOBJ[index].playerScore = Number(PLAYERSOBJ[index].playerScore) + 5;

            playerSpanScore.textContent = PLAYERSOBJ[index].playerScore;

        }

        plusBorderDiv.appendChild(pointsPlusIcon);

        const reduceBorderDiv = document.createElement("div");
        reduceBorderDiv.className = "buttons-parrent";
        const pointsReduceIcon = document.createElement("span");
        pointsReduceIcon.innerText = "-5";

        reduceBorderDiv.onclick = function () {


            PLAYERSOBJ[index].playerScore = Number(PLAYERSOBJ[index].playerScore) - 5;

            playerSpanScore.textContent = PLAYERSOBJ[index].playerScore;
        }

        reduceBorderDiv.appendChild(pointsReduceIcon);

        playerSpanAction.appendChild(deleteBorderDiv);
        playerSpanAction.appendChild(plusBorderDiv);
        playerSpanAction.appendChild(reduceBorderDiv);

        playersDiv.appendChild(playerSpanNameDate);
        playersDiv.appendChild(playerSpanCountry);
        playersDiv.appendChild(playerSpanScore);
        playersDiv.appendChild(playerSpanAction);

        players.appendChild(playersDiv);
    }
}

function addPlayerClick() {

    if (!firstNameInput.value || !lastNameInput.value || !countryInput.value || !playerScoreInput.value) {

        inputsButtonRequired.style.display = "block";
        inputsButtonRequired.textContent = "All fields are required";
        inputsButtonRequired.className = "inputs-button-required";

        return;
    }

    PLAYERSOBJ.push({ firstName: firstNameInput.value.toUpperCase(), lastName: lastNameInput.value.toUpperCase(), country: countryInput.value.toUpperCase(), playerScore: playerScoreInput.value.toUpperCase() });
    playersFunction();
}