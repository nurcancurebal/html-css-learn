// ? Web sitenin başlığı değiştirilir.
document.title = "Web Sitem";

// ? Root elementi oluşturulur.
const root = document.createElement("root");

// ? Root divinine bazı styleler verilir cünkü içindeki container ortalaması gerekiyor.
root.style.display = "flex";
root.style.justifyContent = "center";

// ? Rootun içersindeki container.
const parrentContainer = document.createElement("div");
parrentContainer.style.width = "60vw";
parrentContainer.style.marginTop = "30px";
parrentContainer.style.flexDirection = "column"
parrentContainer.style.display = "flex";

// ! HEADER ALANI - START

// ? Containerın içindeki birinci bölüm = Header Alanı.
const header = document.createElement("div");
header.style.height = "190px";
header.style.marginBottom = "20px";

// ? Headerın içindeki birinci bölüm.
const headerTitleArea = document.createElement("div");
headerTitleArea.style.width = "auto";
headerTitleArea.style.height = "100px";
headerTitleArea.style.display = "flex";
headerTitleArea.style.justifyContent = "center";
headerTitleArea.style.alignItems = "center";

// ? Headerın içindeki areanın içindeki birinci bölüm.
const headerTitleAreaText = document.createElement("h1");
headerTitleAreaText.style.marginTop = "39px";
headerTitleAreaText.style.fontSize = "50px";
headerTitleAreaText.innerText = "Nurcan Cürebal challenges in";

// ? Headerın içindeki areanın içindeki ikinci bölüm = burası yılın olduğu yerdir.
const headerTitleAreaYear = document.createElement("h1");
headerTitleAreaYear.style.marginLeft = "10px";
headerTitleAreaYear.style.fontSize = "60px";
headerTitleAreaYear.innerText = new Date().getFullYear();

// ? Burada yılın rengi değiştirilir her yarım saniyede bir.
setInterval(() => {
    headerTitleAreaYear.style.color = "#" + Math.floor((Math.random() * 333) + 111);
}, 500);

// ? Header Title areanın içersine 2 bölümden olusan elementler eklenir.
headerTitleArea.appendChild(headerTitleAreaText);
headerTitleArea.appendChild(headerTitleAreaYear);

// ? Header orta bölümü.
const headerMiddle = document.createElement("p");
headerMiddle.innerText = "30DaysOfJavaScript Challenge";
headerMiddle.style.textAlign = "center";
headerMiddle.style.marginTop = "7px";
headerMiddle.style.marginBottom = "10px";
headerMiddle.style.fontSize = "26px";
headerMiddle.style.textDecoration = "underline";

// ? Header alt bölümü.
const headerFooter = document.createElement("div");
headerFooter.style.display = "flex";
headerFooter.style.justifyContent = "center";

const headerFooterText = document.createElement("p");
headerFooterText.style.display = "inline";
headerFooterText.innerText = new Date().toUTCString();
headerFooterText.style.fontSize = "18px";
headerFooterText.style.backgroundColor = "#" + Math.floor((Math.random() * 333) + 111);
headerFooterText.style.margin = "0";
headerFooterText.style.padding = "9px";

setInterval(() => {
    headerFooterText.style.backgroundColor = "#" + Math.floor((Math.random() * 333) + 111);
    headerFooterText.innerText = new Date().toUTCString();
}, 750);

headerFooter.appendChild(headerFooterText);

// ? Header bölümüne title area eklenir.
header.appendChild(headerTitleArea);
header.appendChild(headerMiddle);
header.appendChild(headerFooter);

// ! HEADER ALANI - END

// ! CONTENT ALANI - START

const contentData = [
    { name: "30 Days Of Python", listName: "Python", listChild: ["django", "Flask"], process: "Done", button: false },
    { name: "30 Days Of JavaScript", listName: "JavaScript", listChild: ["react", "vue", "angular"], process: "Ongoing", button: false },
    { name: "30 Days Of HTML & CSS", listName: "HTML & CSS", listChild: ["dom", "zom", "non"], process: "Coming", button: false },
    { name: "30 Days Of PHP", listName: "PHP", listChild: ["Larevel", "Symfony", "SQL"], process: "Coming", button: false },
    { name: "30 Days Of React", listName: "React", listChild: ["Larevel", "Symfony", "SQL"], process: "Coming", button: false },
    { name: "30 Days Of ReactNative", listName: "ReactNative", listChild: ["Larevel", "Symfony", "SQL"], process: "Coming", button: false },
    { name: "30 Days Of Fullstack", listName: "Fullstack", listChild: ["Larevel", "Symfony", "SQL"], process: "Coming", button: false },
    { name: "30 Days Of Data Analysis", listName: "Data Analysis", listChild: ["Larevel", "Symfony", "SQL"], process: "Coming", button: false }
];

const content = document.createElement("div");
content.style.display = "flex";
content.style.flexDirection = "column";

let contentDataIndex = 0;

while (contentData.length > contentDataIndex) {

    const contentItem = contentData[contentDataIndex];

    const contentItemElement = document.createElement("div");
    contentItemElement.style.height = "62px";
    contentItemElement.style.marginBottom = "5px";
    contentItemElement.style.display = "flex";
    contentItemElement.style.justifyContent = "space-between";
    contentItemElement.style.alignItems = "center";
    contentItemElement.style.paddingLeft = "20px";
    contentItemElement.style.paddingRight = "20px";


    const contentItemElementOne = document.createElement("div");
    contentItemElementOne.innerText = contentItem.name;

    const contentItemElementTwo = document.createElement("div");
    const contentItemElementTwoDetails = document.createElement("details");
    const contentItemElementTwoSummary = document.createElement("summary");

    for (let index = 0; index < contentItem.listChild.length; index++) {

        const contentItemElementTwoDiv = document.createElement("div");
        contentItemElementTwoDiv.innerText = contentItem.listChild[index];

        contentItemElementTwoDetails.appendChild(contentItemElementTwoDiv);
    }

    contentItemElementTwoSummary.innerText = contentItem.listName;

    contentItemElementTwoSummary.onclick = function () {

        if (contentItem.button) {

            contentItemElement.style.height = "62px";

        } else {

            contentItemElement.style.height = "100px";
        }

        contentItem.button = !contentItem.button;
    }

    contentItemElementTwoDetails.appendChild(contentItemElementTwoSummary);
    contentItemElementTwo.appendChild(contentItemElementTwoDetails);

    const contentItemElementThree = document.createElement("div");
    contentItemElementThree.innerText = contentItem.process;

    contentItemElement.appendChild(contentItemElementOne);
    contentItemElement.appendChild(contentItemElementTwo);
    contentItemElement.appendChild(contentItemElementThree);

    switch (contentItem.process) {
        case "Done":
            contentItemElement.style.backgroundColor = "#21bf74";
            contentItemElementOne.style.textDecoration = "underline";
            break;

        case "Ongoing":
            contentItemElement.style.backgroundColor = "#fddb3a";
            contentItemElementOne.style.textDecoration = "underline";
            break;

        case "Coming":
            contentItemElement.style.backgroundColor = "#fe5e53";
            break;
    }

    content.append(contentItemElement);
    contentDataIndex++;
}

// ! CONTENT ALANI - END

// ! FOOTER ONE ALANI - START
const footer = document.createElement("footer");
footer.style.display = "flex";
footer.style.flexDirection = "column";
footer.style.marginBottom = "100px";

const footerAreaOne = document.createElement("div");
footerAreaOne.style.height = "140px";
footerAreaOne.style.display = "flex";
footerAreaOne.style.flexDirection = "column";
footerAreaOne.style.justifyContent = "center";
footerAreaOne.style.alignItems = "center";

const footerAreaOneText = document.createElement("h1");
footerAreaOneText.innerText = "Nurcan Cürebal";
footerAreaOneText.style.margin = "0";

footerAreaOneText.style.textAlign = "center"

const footerAreaOneIconsArea = document.createElement("div");
footerAreaOneIconsArea.style.display = "flex";
footerAreaOneIconsArea.style.justifyContent = "center";

const footerAreaOneIconsOne = document.createElement("i");
footerAreaOneIconsOne.style.margin = "5px";
footerAreaOneIconsOne.style.fontSize = "30px";
footerAreaOneIconsOne.classList.add("fa-brands", "fa-linkedin");

const footerAreaOneIconsTwo = document.createElement("i");
footerAreaOneIconsTwo.style.margin = "5px";
footerAreaOneIconsTwo.style.fontSize = "30px";
footerAreaOneIconsTwo.classList.add("fa-brands", "fa-square-twitter");

const footerAreaOneIconsThree = document.createElement("i");
footerAreaOneIconsThree.style.margin = "5px";
footerAreaOneIconsThree.style.fontSize = "30px";
footerAreaOneIconsThree.classList.add("fa-brands", "fa-square-github");

footerAreaOneIconsArea.appendChild(footerAreaOneIconsOne);
footerAreaOneIconsArea.appendChild(footerAreaOneIconsTwo);
footerAreaOneIconsArea.appendChild(footerAreaOneIconsThree);

footerAreaOne.appendChild(footerAreaOneText);
footerAreaOne.appendChild(footerAreaOneIconsArea);

const footerAreaTwo = document.createElement("div");
footerAreaTwo.style.height = "100px";
footerAreaTwo.style.display = "flex";
footerAreaTwo.style.flexDirection = "column";
footerAreaTwo.style.justifyContent = "center";
footerAreaTwo.style.alignItems = "center";

const parafText = "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Eveniet, nesciunt, rerum nihil ab, aliquid ad inventore culpa sint fugiat unde magnam. Explicabo molestiae vitae eius, numquam reiciendis sit maiores expedita delectus hic veniam saepe eaque vel eveniet, consequuntur quod quis, corrupti nihil suscipit quo natus. Aut obcaecati similique a debitis!";

const footerAreaTwoText = document.createElement("p");
footerAreaTwoText.innerText = parafText;
footerAreaTwoText.style.textAlign = "center";
footerAreaTwoText.style.margin = "0";

footerAreaTwo.appendChild(footerAreaTwoText);

const footerAreaThree = document.createElement("div");
footerAreaThree.style.height = "180px";
footerAreaThree.style.display = "flex";
footerAreaThree.style.justifyContent = "space-around";
footerAreaThree.style.paddingTop = "20px";

const footerAreaData = [
    {
        name: "Titles", child: [
            { name: "Educator", img: "./img/computer.png" },
            { name: "Programmer", img: "./img/computer.png" },
            { name: "Developer", img: "./img/computer.png" },
            { name: "Motivator", img: "./img/computer.png" },
            { name: "Content Creator", img: "./img/computer.png" }
        ]
    },
    {
        name: "Skills", child: [
            { name: "Web Development", img: "./img/yes.png" },
            { name: "Data Analysis", img: "./img/yes.png" },
            { name: "Data Visialization", img: "./img/yes.png" },
            { name: "Programming", img: "./img/yes.png" },
            { name: "Databases", img: "./img/yes.png" },
            { name: "Developing API", img: "./img/yes.png" },
        ]
    },
    {
        name: "Qualifications", child: [
            { name: "MSc. Computer Science Ongoing", img: "./img/student.png" },
            { name: "BSc. Information and Communication Eng.", img: "./img/student.png" },
            { name: "MSc. Food Techonology", img: "./img/student.png" },
            { name: "BSc. Food Techonology", img: "./img/student.png" },
        ]
    },
];

let footerAreaDataIndex = 0;
while (footerAreaData.length > footerAreaDataIndex) {
    const footerAreaThreeItemData = footerAreaData[footerAreaDataIndex];

    const footerAreaThreeItem = document.createElement("ul");
    footerAreaThreeItem.style.listStyle = "none";
    footerAreaThreeItem.style.margin = "0px";
    footerAreaThreeItem.style.padding = "0px";

    const footerAreaThreeItemTitle = document.createElement("li");
    footerAreaThreeItemTitle.innerText = footerAreaThreeItemData.name;
    footerAreaThreeItemTitle.style.fontWeight = "700";
    footerAreaThreeItemTitle.style.marginBottom = "7px";
    footerAreaThreeItem.appendChild(footerAreaThreeItemTitle);

    let footerAreaThreeItemDataIndex = 0
    while (footerAreaThreeItemData.child.length > footerAreaThreeItemDataIndex) {
        const footerAreaThreeItemDataItem = footerAreaThreeItemData.child[footerAreaThreeItemDataIndex];

        const footerAreaThreeItemDataItemElement = document.createElement("li");
        footerAreaThreeItemDataItemElement.style.marginTop = "3px";

        const footerAreaThreeItemDataItemElementImg = document.createElement("img");
        footerAreaThreeItemDataItemElementImg.setAttribute("src", footerAreaThreeItemDataItem.img);
        footerAreaThreeItemDataItemElementImg.style.width = "15px";
        footerAreaThreeItemDataItemElementImg.style.height = "15px";
        footerAreaThreeItemDataItemElementImg.style.marginRight = "5px";

        const footerAreaThreeItemDataItemElementSpan = document.createElement("span");
        footerAreaThreeItemDataItemElementSpan.innerText = footerAreaThreeItemDataItem.name;

        footerAreaThreeItemDataItemElement.appendChild(footerAreaThreeItemDataItemElementImg);
        footerAreaThreeItemDataItemElement.appendChild(footerAreaThreeItemDataItemElementSpan);

        footerAreaThreeItem.appendChild(footerAreaThreeItemDataItemElement);
        footerAreaThreeItemDataIndex++;
    }

    footerAreaThree.appendChild(footerAreaThreeItem)
    footerAreaDataIndex++;
}

const footerAreaFour = document.createElement("div");
footerAreaFour.style.height = "200px";

const footerAreaFourTitle = document.createElement("h3");
footerAreaFourTitle.innerText = "Keywords";

const footerAreaFourKeywordsArea = document.createElement("div");
footerAreaFourKeywordsArea.style.display = "flex";
footerAreaFourKeywordsArea.style.justifyContent = "center";

const footerAreaFourKeywordsAreaIn = document.createElement("div");
footerAreaFourKeywordsAreaIn.style.width = "55vw";
footerAreaFourKeywordsAreaIn.style.display = "flex";
footerAreaFourKeywordsAreaIn.style.flexWrap = "wrap";

const keywords = ["#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript", "#Html", "#Css", "#Javascript"];

let keywordsIndex = 0

while (keywords.length > keywordsIndex) {
    const keyword = keywords[keywordsIndex];

    const footerAreaFourKeywordsAreaInItem = document.createElement("span");
    footerAreaFourKeywordsAreaInItem.style.backgroundColor = "#" + Math.floor((Math.random() * 333) + 111);
    footerAreaFourKeywordsAreaInItem.style.borderRadius = "20px";
    footerAreaFourKeywordsAreaInItem.innerText = keyword;
    footerAreaFourKeywordsAreaInItem.style.padding = "5px 10px";
    footerAreaFourKeywordsAreaInItem.style.height = "20px";
    footerAreaFourKeywordsAreaInItem.style.marginTop = "5px";
    footerAreaFourKeywordsAreaInItem.style.marginRight = "10px";

    footerAreaFourKeywordsAreaIn.appendChild(footerAreaFourKeywordsAreaInItem);
    keywordsIndex++;
}


footerAreaFourKeywordsArea.appendChild(footerAreaFourKeywordsAreaIn);

footerAreaFour.appendChild(footerAreaFourTitle);
footerAreaFour.appendChild(footerAreaFourKeywordsArea);

footer.appendChild(footerAreaOne);
footer.appendChild(footerAreaTwo);
footer.appendChild(footerAreaThree);
footer.appendChild(footerAreaFour);

// ! FOOTER ONE ALANI - END

// ? Rootun içindeki containerın icersine header eklenir.
parrentContainer.appendChild(header);
parrentContainer.appendChild(content);
parrentContainer.appendChild(footer);

// ? Ana container blogunu root divinin içine ekler.
root.appendChild(parrentContainer);

// ? Root divini body ekler.
document.body.appendChild(root);