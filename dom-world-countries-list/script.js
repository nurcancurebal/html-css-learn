const countries = [
    'Afghanistan',
    'Albania',
    'Algeria',
    'Andorra',
    'Angola',
    'Antigua and Barbuda',
    'Argentina',
    'Armenia',
    'Australia',
    'Austria',
    'Azerbaijan',
    'Bahamas',
    'Bahrain',
    'Bangladesh',
    'Barbados',
    'Belarus',
    'Belgium',
    'Belize',
    'Benin',
    'Bhutan',
    'Bolivia',
    'Bosnia and Herzegovina',
    'Botswana',
    'Brazil',
    'Brunei',
    'Bulgaria',
    'Burkina Faso',
    'Burundi',
    'Cambodia',
    'Cameroon',
    'Canada',
    'Cape Verde',
    'Central African Republic',
    'Chad',
    'Chile',
    'China',
    'Colombi',
    'Comoros',
    'Congo (Brazzaville)',
    'Congo',
    'Costa Rica',
    "Cote d'Ivoire",
    'Croatia',
    'Cuba',
    'Cyprus',
    'Czech Republic',
    'Denmark',
    'Djibouti',
    'Dominica',
    'Dominican Republic',
    'East Timor (Timor Timur)',
    'Ecuador',
    'Egypt',
    'El Salvador',
    'Equatorial Guinea',
    'Eritrea',
    'Estonia',
    'Ethiopia',
    'Fiji',
    'Finland',
    'France',
    'Gabon',
    'Gambia, The',
    'Georgia',
    'Germany',
    'Ghana',
    'Greece',
    'Grenada',
    'Guatemala',
    'Guinea',
    'Guinea-Bissau',
    'Guyana',
    'Haiti',
    'Honduras',
    'Hungary',
    'Iceland',
    'India',
    'Indonesia',
    'Iran',
    'Iraq',
    'Ireland',
    'Israel',
    'Italy',
    'Jamaica',
    'Japan',
    'Jordan',
    'Kazakhstan',
    'Kenya',
    'Kiribati',
    'Korea, North',
    'Korea, South',
    'Kuwait',
    'Kyrgyzstan',
    'Laos',
    'Latvia',
    'Lebanon',
    'Lesotho',
    'Liberia',
    'Libya',
    'Liechtenstein',
    'Lithuania',
    'Luxembourg',
    'Macedonia',
    'Madagascar',
    'Malawi',
    'Malaysia',
    'Maldives',
    'Mali',
    'Malta',
    'Marshall Islands',
    'Mauritania',
    'Mauritius',
    'Mexico',
    'Micronesia',
    'Moldova',
    'Monaco',
    'Mongolia',
    'Morocco',
    'Mozambique',
    'Myanmar',
    'Namibia',
    'Nauru',
    'Nepal',
    'Netherlands',
    'New Zealand',
    'Nicaragua',
    'Niger',
    'Nigeria',
    'Norway',
    'Oman',
    'Pakistan',
    'Palau',
    'Panama',
    'Papua New Guinea',
    'Paraguay',
    'Peru',
    'Philippines',
    'Poland',
    'Portugal',
    'Qatar',
    'Romania',
    'Russia',
    'Rwanda',
    'Saint Kitts and Nevis',
    'Saint Lucia',
    'Saint Vincent',
    'Samoa',
    'San Marino',
    'Sao Tome and Principe',
    'Saudi Arabia',
    'Senegal',
    'Serbia and Montenegro',
    'Seychelles',
    'Sierra Leone',
    'Singapore',
    'Slovakia',
    'Slovenia',
    'Solomon Islands',
    'Somalia',
    'South Africa',
    'Spain',
    'Sri Lanka',
    'Sudan',
    'Suriname',
    'Swaziland',
    'Sweden',
    'Switzerland',
    'Syria',
    'Taiwan',
    'Tajikistan',
    'Tanzania',
    'Thailand',
    'Togo',
    'Tonga',
    'Trinidad and Tobago',
    'Tunisia',
    'Turkey',
    'Turkmenistan',
    'Tuvalu',
    'Uganda',
    'Ukraine',
    'United Arab Emirates',
    'United Kingdom',
    'United States',
    'Uruguay',
    'Uzbekistan',
    'Vanuatu',
    'Vatican City',
    'Venezuela',
    'Vietnam',
    'Yemen',
    'Zambia',
    'Zimbabwe'
];

const containerTwo = document.querySelector("#container-two");
const searchCountry = document.querySelector("#search-country");
const countriesContainingContainer = document.querySelector("#countries-containing-container");
const searchWithAnyWord = document.querySelector("#search-with-any-word");
const startingWord = document.querySelector("#starting-word");
const faArrow = document.querySelector("#fa-arrow");
const faArrowI = document.querySelector("#fa-arrow-i");

let searchType;

function searchWithAnyWordClick() {

    if (!!searchCountry.value) {

        searchCountry.value = "";
        countriesContainingContainer.style.display = "none";
        countriesList(countries);

    } else {
        searchType = "ANY";
        searchWithAnyWord.style.backgroundColor = "#4f1ba9";
        startingWord.style.backgroundColor = "#7e55d7";
        faArrow.style.backgroundColor = "#7e55d7";
        searchCountry.removeAttribute("disabled");
    }
};

function startingWordClick() {

    if (!!searchCountry.value) {

        searchCountry.value = "";
        countriesContainingContainer.style.display = "none";
        countriesList(countries);

    } else {

        searchType = "START";
        startingWord.style.backgroundColor = "#4f1ba9";
        searchWithAnyWord.style.backgroundColor = "#7e55d7";
        faArrow.style.backgroundColor = "#7e55d7";
        searchCountry.removeAttribute("disabled");
    }
};

function faArrowClick() {

    faArrow.style.backgroundColor = "#4f1ba9";
    startingWord.style.backgroundColor = "#7e55d7";
    searchWithAnyWord.style.backgroundColor = "#7e55d7";

    countriesContainingContainer.style.display = "none";
    searchCountry.setAttribute("disabled", "true");

    const faArrowIClass = faArrowI.getAttribute("class");

    if (faArrowIClass == "fa-solid fa-arrow-down-a-z") {

        const countriesSort = countries.sort((a, b) => a.localeCompare(b));

        countriesList(countriesSort);

        faArrowI.setAttribute("class", "fa-solid fa-arrow-down-z-a");

        return;

    } else if (faArrowIClass == "fa-solid fa-arrow-down-z-a") {

        const countriesSort = countries.sort((a, b) => b.localeCompare(a));

        countriesList(countriesSort);

        faArrowI.setAttribute("class", "fa-solid fa-arrow-down-a-z");

        return
    }
};

countriesList(countries);

searchCountry.addEventListener("keyup", function keyCode() {

    const inputValue = searchCountry.value;

    if (!inputValue) {
        countriesList(countries);
        return;
    }

    countriesContainingContainer.innerHTML = "";

    const countriesContaining = document.createElement("span");

    const filterCountries = countries.filter(function (filterCountry) {

        switch (searchType) {

            case "START": {

                countriesContaining.textContent = "Countries start with ";

                countriesContainingContainer.style.display = "block";

                const regexpFormule = new RegExp(`^${inputValue}`, "gi"); // $ regex olarak değil değişken tanımlama amaçlı kullanılmıştır.
                return String(filterCountry).match(regexpFormule);
            }

            case "ANY": {

                countriesContaining.textContent = "Countries containing ";

                countriesContainingContainer.style.display = "block";

                const regexpFormule = new RegExp(`${inputValue}`, "gi");
                return String(filterCountry).match(regexpFormule);
            }

            default:
                return false;
        }
    });

    const spanEventKey = document.createElement("span");
    spanEventKey.textContent = inputValue;
    spanEventKey.style.color = colorGenerator();

    const spanAre = document.createElement("span");
    spanAre.textContent = " are ";

    const spanFilterCountries = document.createElement("span");
    spanFilterCountries.textContent = filterCountries.length;
    spanFilterCountries.style.color = colorGenerator();

    countriesContainingContainer.appendChild(countriesContaining);
    countriesContainingContainer.appendChild(spanEventKey);
    countriesContainingContainer.appendChild(spanAre);
    countriesContainingContainer.appendChild(spanFilterCountries);

    function colorGenerator() {

        return "#" + Number(Math.floor((Math.random() * 999999999) + 10000000), 16).toString(16).slice(0, 6);
    }

    countriesList(filterCountries);
}); // keyCode sonu


function countriesList(countries) {

    containerTwo.innerHTML = "";

    countries.forEach(function (country) {

        const divCountryBacgroundColor = document.createElement("div");
        divCountryBacgroundColor.style.backgroundColor = "#071034ad";
        divCountryBacgroundColor.textContent = country.toUpperCase();
        divCountryBacgroundColor.style.color = "white";
        divCountryBacgroundColor.style.textAlign = "center";
        divCountryBacgroundColor.style.height = "146px";
        divCountryBacgroundColor.style.display = "flex";
        divCountryBacgroundColor.style.justifyContent = "center";
        divCountryBacgroundColor.style.alignItems = "center";
        divCountryBacgroundColor.style.fontWeight = "800";

        const divCountry = document.createElement("div");
        divCountry.style.backgroundImage = "url('img/map_image.jpg')";
        divCountry.style.backgroundRepeat = "no-repeat";
        divCountry.style.backgroundSize = "100% 100%";

        divCountry.appendChild(divCountryBacgroundColor);
        containerTwo.appendChild(divCountry);
    });
}