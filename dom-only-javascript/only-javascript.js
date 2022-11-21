// ? Arka plan rengi değiştirildi.
document.body.style.backgroundColor = "#999";

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
parrentContainer.style.height = "200vh";
parrentContainer.style.marginTop = "30px";
parrentContainer.style.backgroundColor = "grey";
parrentContainer.style.display = "flex";
parrentContainer.style.justifyContent = "center";

// ? Containerın içindeki birinci bölüm = Header Alanı.
const header = document.createElement("div");
header.style.width = "100%";
header.style.height = "300px";
header.style.margin = "10px";
header.style.backgroundColor = "#ff00008f";

// ? Headerın içindeki birinci bölüm.
const headerTitleArea = document.createElement("div");
headerTitleArea.style.width = "auto";
headerTitleArea.style.height = "100px";
headerTitleArea.style.margin = "10px";
headerTitleArea.style.backgroundColor = "#ff1";
headerTitleArea.style.display = "flex";
headerTitleArea.style.justifyContent = "center";
headerTitleArea.style.alignItems = "center";

// ? Headerın içindeki areanın içindeki birinci bölüm.
const headerTitleAreaText = document.createElement("h1");
headerTitleAreaText.style.marginTop = "39px";
headerTitleAreaText.innerText = "Nurcan Cürebal challenges in";

// ? Headerın içindeki areanın içindeki ikinci bölüm = burası yılın olduğu yerdir.
const headerTitleAreaYear = document.createElement("h1");
headerTitleAreaYear.style.marginLeft = "10px";
headerTitleAreaYear.style.fontSize = "60px";
headerTitleAreaYear.innerText = new Date().getFullYear();

// ? Burada yılın renki değiştirilir her yarım saniyede bir.
setInterval(() => {
    headerTitleAreaYear.style.color = "#" + Math.floor((Math.random() * 333) + 111);
}, 500);

// ? Header Title areanın içersine 2 bölümden olusan elementler eklenir.
headerTitleArea.appendChild(headerTitleAreaText);
headerTitleArea.appendChild(headerTitleAreaYear);

// ? Header bölümüne title area eklenir.
header.appendChild(headerTitleArea);

// ? Rootun içindeki containerın icersine header eklenir.
parrentContainer.appendChild(header);

// ? Ana container blogunu root divinin içine ekler.
root.appendChild(parrentContainer);

// ? Root divini body ekler.
document.body.appendChild(root);
