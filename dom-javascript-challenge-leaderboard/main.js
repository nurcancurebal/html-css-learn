
const players = document.querySelector("#players");

const PLAYERSOBJ = [
    { firstName: "MARTHA", lastName: "YOHANES", country: "FINLAND", playerScore: "85" },
    { firstName: "DAVID", lastName: "SMITH", country: "UNITED KINGDOM", playerScore: "80" },
    { firstName: "NURCAN", lastName: "CUREBAL", country: "TURKEY", playerScore: "90" },
    { firstName: "MATHIAS", lastName: "ELIAS", country: "SWEDEN", playerScore: "70" }
];


for (let index = 0; index < PLAYERSOBJ.length; index++) {

    const playersDiv = document.createElement("div");
    playersDiv.className = "players-div";


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
    playerSpanScore.textContent = `${PLAYERSOBJ[index].playerScore}`;


    const playerSpanAction = document.createElement("span");
    playerSpanAction.className = "buttons-action";

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

    playersDiv.appendChild(playerSpanNameDate);
    playersDiv.appendChild(playerSpanCountry);
    playersDiv.appendChild(playerSpanScore);
    playersDiv.appendChild(playerSpanAction);

    players.appendChild(playersDiv);
}