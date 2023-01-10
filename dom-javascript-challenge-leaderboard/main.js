
const players = document.querySelector("#players");

function borderColor(inputsButtonColor) { // TODO yapamadım

    inputsButtonColor.style.borderColor = "#814840";
}

const playersDiv = document.createElement("div");
playersDiv.style.backgroundColor = "#e5c9c5";
playersDiv.style.display = "flex";
playersDiv.style.justifyContent = "space-between";
playersDiv.style.width = "978px";
playersDiv.style.height = "60px";
playersDiv.style.lineHeight = "60px";

const playerSpanName = document.createElement("span");
playerSpanName.textContent = "MARTHA YOHANES";
playerSpanName.style.marginLeft = "15px";

const playerSpanCountry = document.createElement("span");
playerSpanCountry.textContent = "FINLAND";

const playerSpanScore = document.createElement("span");
playerSpanScore.textContent = "85";

const playerSpanAction = document.createElement("span");
playerSpanAction.className = "buttons-action"

const deleteBorderDiv = document.createElement("div");
deleteBorderDiv.className = "buttons-parrent";

const deleteIcon = document.createElement("i");
deleteIcon.className = "fa-solid fa-trash-can";

deleteBorderDiv.appendChild(deleteIcon);

const plusBorderDiv = document.createElement("div");
plusBorderDiv.className = "buttons-parrent";

const pointsPlusIcon = document.createElement("span");
pointsPlusIcon.innerText = "+5";
plusBorderDiv.appendChild(pointsPlusIcon);

const reduceBorderDiv = document.createElement("div");
reduceBorderDiv.className = "buttons-parrent";

const pointsReduceIcon = document.createElement("span");
pointsReduceIcon.innerText = "-5";
reduceBorderDiv.appendChild(pointsReduceIcon);

playerSpanAction.appendChild(deleteBorderDiv);
playerSpanAction.appendChild(plusBorderDiv);
playerSpanAction.appendChild(reduceBorderDiv);

playersDiv.appendChild(playerSpanName);
playersDiv.appendChild(playerSpanCountry);
playersDiv.appendChild(playerSpanScore);
playersDiv.appendChild(playerSpanAction);

players.appendChild(playersDiv);