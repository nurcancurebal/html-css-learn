const table = document.querySelector("table");
const noteOne = document.querySelector("#noteOne");
const noteTwo = document.querySelector("#noteTwo");

const countries = [
    {
        name: 'Afghanistan',
        languages: ['Pashto', 'Uzbek', 'Turkmen'],
        population: 27657145
    },
    {
        name: 'Åland Islands',
        languages: ['Swedish'],
        population: 28875
    },
    {
        name: 'Albania',
        languages: ['Albanian'],
        population: 2886026
    },
    {
        name: 'Algeria',
        languages: ['Arabic'],
        population: 40400000
    },
    {
        name: 'American Samoa',
        languages: ['English', 'Samoan'],
        population: 57100
    },
    {
        name: 'Andorra',
        languages: ['Catalan'],
        population: 78014
    },
    {
        name: 'Angola',
        languages: ['Portuguese'],
        population: 25868000
    },
    {
        name: 'Anguilla',
        languages: ['English'],
        population: 13452
    },
    {
        name: 'Antarctica',
        languages: ['English', 'Russian'],
        population: 1000
    },
    {
        name: 'Antigua and Barbuda',
        languages: ['English'],
        population: 86295
    },
    {
        name: 'Argentina',
        languages: ['Spanish', 'Guaraní'],
        population: 43590400
    },
    {
        name: 'Armenia',
        languages: ['Armenian', 'Russian'],
        population: 2994400
    },
    {
        name: 'Aruba',
        languages: ['Dutch', '(Eastern) Punjabi'],
        population: 107394
    },
    {
        name: 'Australia',
        languages: ['English'],
        population: 24117360
    },
    {
        name: 'Austria',
        languages: ['German'],
        population: 8725931
    },
    {
        name: 'Azerbaijan',
        languages: ['Azerbaijani'],
        population: 9730500
    },
    {
        name: 'Bahamas',
        languages: ['English'],
        population: 378040
    },
    {
        name: 'Bahrain',
        languages: ['Arabic'],
        population: 1404900
    },
    {
        name: 'Bangladesh',
        languages: ['Bengali'],
        population: 161006790
    },
    {
        name: 'Barbados',
        languages: ['English'],
        population: 285000
    },
    {
        name: 'Belarus',
        languages: ['Belarusian', 'Russian'],
        population: 9498700
    },
    {
        name: 'Belgium',
        languages: ['Dutch', 'French', 'German'],
        population: 11319511
    },
    {
        name: 'Belize',
        languages: ['English', 'Spanish'],
        population: 370300
    },
    {
        name: 'Benin',
        languages: ['French'],
        population: 10653654
    },
    {
        name: 'Bermuda',
        languages: ['English'],
        population: 61954
    },
    {
        name: 'Bhutan',
        languages: ['Dzongkha'],
        population: 775620
    },
    {
        name: 'Bolivia (Plurinational State of)',
        languages: ['Spanish', 'Aymara', 'Quechua'],
        population: 10985059
    },
    {
        name: 'Bonaire, Sint Eustatius and Saba',
        languages: ['Dutch'],
        population: 17408
    },
    {
        name: 'Bosnia and Herzegovina',
        languages: ['Bosnian', 'Croatian', 'Serbian'],
        population: 3531159
    },
    {
        name: 'Botswana',
        languages: ['English', 'Tswana'],
        population: 2141206
    },
    {
        name: 'Bouvet Island',
        languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
        population: 0
    },
    {
        name: 'Brazil',
        languages: ['Portuguese'],
        population: 206135893
    },
    {
        name: 'British Indian Ocean Territory',
        languages: ['English'],
        population: 3000
    },
    {
        name: 'United States Minor Outlying Islands',
        languages: ['English'],
        population: 300
    },
    {
        name: 'Virgin Islands (British)',
        languages: ['English'],
        population: 28514
    },
    {
        name: 'Virgin Islands (U.S.)',
        languages: ['English'],
        population: 114743
    },
    {
        name: 'Brunei Darussalam',
        languages: ['Malay'],
        population: 411900
    },
    {
        name: 'Bulgaria',
        languages: ['Bulgarian'],
        population: 7153784
    },
    {
        name: 'Burkina Faso',
        languages: ['French', 'Fula'],
        population: 19034397
    },
    {
        name: 'Burundi',
        languages: ['French', 'Kirundi'],
        population: 10114505
    },
    {
        name: 'Cambodia',
        languages: ['Khmer'],
        population: 15626444
    },
    {
        name: 'Cameroon',
        languages: ['English', 'French'],
        population: 22709892
    },
    {
        name: 'Canada',
        languages: ['English', 'French'],
        population: 36155487
    },
    {
        name: 'Cabo Verde',
        languages: ['Portuguese'],
        population: 531239
    },
    {
        name: 'Cayman Islands',
        languages: ['English'],
        population: 58238
    },
    {
        name: 'Central African Republic',
        languages: ['French', 'Sango'],
        population: 4998000
    },
    {
        name: 'Chad',
        languages: ['French', 'Arabic'],
        population: 14497000
    },
    {
        name: 'Chile',
        languages: ['Spanish'],
        population: 18191900
    },
    {
        name: 'China',
        languages: ['Chinese'],
        population: 1377422166
    },
    {
        name: 'Christmas Island',
        languages: ['English'],
        population: 2072
    },
    {
        name: 'Cocos (Keeling) Islands',
        languages: ['English'],
        population: 550
    },
    {
        name: 'Colombia',
        languages: ['Spanish'],
        population: 48759958
    },
    {
        name: 'Comoros',
        languages: ['Arabic', 'French'],
        population: 806153
    },
    {
        name: 'Congo',
        languages: ['French', 'Lingala'],
        population: 4741000
    },
    {
        name: 'Congo (Democratic Republic of the)',
        languages: ['French', 'Lingala', 'Kongo', 'Swahili', 'Luba-Katanga'],
        population: 85026000
    },
    {
        name: 'Cook Islands',
        languages: ['English'],
        population: 18100
    },
    {
        name: 'Costa Rica',
        languages: ['Spanish'],
        population: 4890379
    },
    {
        name: 'Croatia',
        languages: ['Croatian'],
        population: 4190669
    },
    {
        name: 'Cuba',
        languages: ['Spanish'],
        population: 11239004
    },
    {
        name: 'Curaçao',
        languages: ['Dutch', '(Eastern) Punjabi', 'English'],
        population: 154843
    },
    {
        name: 'Cyprus',
        languages: ['Greek (modern)', 'Turkish', 'Armenian'],
        population: 847000
    },
    {
        name: 'Czech Republic',
        languages: ['Czech', 'Slovak'],
        population: 10558524
    },
    {
        name: 'Denmark',
        languages: ['Danish'],
        population: 5717014
    },
    {
        name: 'Djibouti',
        languages: ['French', 'Arabic'],
        population: 900000
    },
    {
        name: 'Dominica',
        languages: ['English'],
        population: 71293
    },
    {
        name: 'Dominican Republic',
        languages: ['Spanish'],
        population: 10075045
    },
    {
        name: 'Ecuador',
        languages: ['Spanish'],
        population: 16545799
    },
    {
        name: 'Egypt',
        languages: ['Arabic'],
        population: 91290000
    },
    {
        name: 'El Salvador',
        languages: ['Spanish'],
        population: 6520675
    },
    {
        name: 'Equatorial Guinea',
        languages: ['Spanish', 'French'],
        population: 1222442
    },
    {
        name: 'Eritrea',
        languages: ['Tigrinya', 'Arabic', 'English'],
        population: 5352000
    },
    {
        name: 'Estonia',
        languages: ['Estonian'],
        population: 1315944
    },
    {
        name: 'Ethiopia',
        languages: ['Amharic'],
        population: 92206005
    },
    {
        name: 'Falkland Islands (Malvinas)',
        languages: ['English'],
        population: 2563
    },
    {
        name: 'Faroe Islands',
        languages: ['Faroese'],
        population: 49376
    },
    {
        name: 'Fiji',
        languages: ['English', 'Fijian', 'Hindi', 'Urdu'],
        population: 867000
    },
    {
        name: 'Finland',
        languages: ['Finnish', 'Swedish'],
        population: 5491817
    },
    {
        name: 'France',
        languages: ['French'],
        population: 66710000
    },
    {
        name: 'French Guiana',
        languages: ['French'],
        population: 254541
    },
    {
        name: 'French Polynesia',
        languages: ['French'],
        population: 271800
    },
    {
        name: 'French Southern Territories',
        languages: ['French'],
        population: 140
    },
    {
        name: 'Gabon',
        languages: ['French'],
        population: 1802278
    },
    {
        name: 'Gambia',
        languages: ['English'],
        population: 1882450
    },
    {
        name: 'Georgia',
        languages: ['Georgian'],
        population: 3720400
    },
    {
        name: 'Germany',
        languages: ['German'],
        population: 81770900
    },
    {
        name: 'Ghana',
        languages: ['English'],
        population: 27670174
    },
    {
        name: 'Gibraltar',
        languages: ['English'],
        population: 33140
    },
    {
        name: 'Greece',
        languages: ['Greek (modern)'],
        population: 10858018
    },
    {
        name: 'Greenland',
        languages: ['Kalaallisut'],
        population: 55847
    },
    {
        name: 'Grenada',
        languages: ['English'],
        population: 103328
    },
    {
        name: 'Guadeloupe',
        languages: ['French'],
        population: 400132
    },
    {
        name: 'Guam',
        languages: ['English', 'Chamorro', 'Spanish'],
        population: 184200
    },
    {
        name: 'Guatemala',
        languages: ['Spanish'],
        population: 16176133
    },
    {
        name: 'Guernsey',
        languages: ['English', 'French'],
        population: 62999
    },
    {
        name: 'Guinea',
        languages: ['French', 'Fula'],
        population: 12947000
    },
    {
        name: 'Guinea-Bissau',
        languages: ['Portuguese'],
        population: 1547777
    },
    {
        name: 'Guyana',
        languages: ['English'],
        population: 746900
    },
    {
        name: 'Haiti',
        languages: ['French', 'Haitian'],
        population: 11078033
    },
    {
        name: 'Heard Island and McDonald Islands',
        languages: ['English'],
        population: 0
    },
    {
        name: 'Holy See',
        languages: ['Latin', 'Italian', 'French', 'German'],
        population: 451
    },
    {
        name: 'Honduras',
        languages: ['Spanish'],
        population: 8576532
    },
    {
        name: 'Hong Kong',
        languages: ['English', 'Chinese'],
        population: 7324300
    },
    {
        name: 'Hungary',
        languages: ['Hungarian'],
        population: 9823000
    },
    {
        name: 'Iceland',
        languages: ['Icelandic'],
        population: 334300
    },
    {
        name: 'India',
        languages: ['Hindi', 'English'],
        population: 1295210000
    },
    {
        name: 'Indonesia',
        languages: ['Indonesian'],
        population: 258705000
    },
    {
        name: "Côte d'Ivoire",
        languages: ['French'],
        population: 22671331
    },
    {
        name: 'Iran (Islamic Republic of)',
        languages: ['Persian (Farsi)'],
        population: 79369900
    },
    {
        name: 'Iraq',
        languages: ['Arabic', 'Kurdish'],
        population: 37883543
    },
    {
        name: 'Ireland',
        languages: ['Irish', 'English'],
        population: 6378000
    },
    {
        name: 'Isle of Man',
        languages: ['English', 'Manx'],
        population: 84497
    },
    {
        name: 'Israel',
        languages: ['Hebrew (modern)', 'Arabic'],
        population: 8527400
    },
    {
        name: 'Italy',
        languages: ['Italian'],
        population: 60665551
    },
    {
        name: 'Jamaica',
        languages: ['English'],
        population: 2723246
    },
    {
        name: 'Japan',
        languages: ['Japanese'],
        population: 126960000
    },
    {
        name: 'Jersey',
        languages: ['English', 'French'],
        population: 100800
    },
    {
        name: 'Jordan',
        languages: ['Arabic'],
        population: 9531712
    },
    {
        name: 'Kazakhstan',
        languages: ['Kazakh', 'Russian'],
        population: 17753200
    },
    {
        name: 'Kenya',
        languages: ['English', 'Swahili'],
        population: 47251000
    },
    {
        name: 'Kiribati',
        languages: ['English'],
        population: 113400
    },
    {
        name: 'Kuwait',
        languages: ['Arabic'],
        population: 4183658
    },
    {
        name: 'Kyrgyzstan',
        languages: ['Kyrgyz', 'Russian'],
        population: 6047800
    },
    {
        name: "Lao People's Democratic Republic",
        languages: ['Lao'],
        population: 6492400
    },
    {
        name: 'Latvia',
        languages: ['Latvian'],
        population: 1961600
    },
    {
        name: 'Lebanon',
        languages: ['Arabic', 'French'],
        population: 5988000
    },
    {
        name: 'Lesotho',
        languages: ['English', 'Southern Sotho'],
        population: 1894194
    },
    {
        name: 'Liberia',
        languages: ['English'],
        population: 4615000
    },
    {
        name: 'Libya',
        languages: ['Arabic'],
        population: 6385000
    },
    {
        name: 'Liechtenstein',
        languages: ['German'],
        population: 37623
    },
    {
        name: 'Lithuania',
        languages: ['Lithuanian'],
        population: 2872294
    },
    {
        name: 'Luxembourg',
        languages: ['French', 'German', 'Luxembourgish'],
        population: 576200
    },
    {
        name: 'Macao',
        languages: ['Chinese', 'Portuguese'],
        population: 649100
    },
    {
        name: 'Macedonia (the former Yugoslav Republic of)',
        languages: ['Macedonian'],
        population: 2058539
    },
    {
        name: 'Madagascar',
        languages: ['French', 'Malagasy'],
        population: 22434363
    },
    {
        name: 'Malawi',
        languages: ['English', 'Chichewa'],
        population: 16832910
    },
    {
        name: 'Malaysia',
        languages: ['Malaysian'],
        population: 31405416
    },
    {
        name: 'Maldives',
        languages: ['Divehi'],
        population: 344023
    },
    {
        name: 'Mali',
        languages: ['French'],
        population: 18135000
    },
    {
        name: 'Malta',
        languages: ['Maltese', 'English'],
        population: 425384
    },
    {
        name: 'Marshall Islands',
        languages: ['English', 'Marshallese'],
        population: 54880
    },
    {
        name: 'Martinique',
        languages: ['French'],
        population: 378243
    },
    {
        name: 'Mauritania',
        languages: ['Arabic'],
        population: 3718678
    },
    {
        name: 'Mauritius',
        languages: ['English'],
        population: 1262879
    },
    {
        name: 'Mayotte',
        languages: ['French'],
        population: 226915
    },
    {
        name: 'Mexico',
        languages: ['Spanish'],
        population: 122273473
    },
    {
        name: 'Micronesia (Federated States of)',
        languages: ['English'],
        population: 102800
    },
    {
        name: 'Moldova (Republic of)',
        languages: ['Romanian'],
        population: 3553100
    },
    {
        name: 'Monaco',
        languages: ['French'],
        population: 38400
    },
    {
        name: 'Mongolia',
        languages: ['Mongolian'],
        population: 3093100
    },
    {
        name: 'Montenegro',
        languages: ['Serbian', 'Bosnian', 'Albanian', 'Croatian'],
        population: 621810
    },
    {
        name: 'Montserrat',
        languages: ['English'],
        population: 4922
    },
    {
        name: 'Morocco',
        languages: ['Arabic'],
        population: 33337529
    },
    {
        name: 'Mozambique',
        languages: ['Portuguese'],
        population: 26423700
    },
    {
        name: 'Myanmar',
        languages: ['Burmese'],
        population: 51419420
    },
    {
        name: 'Namibia',
        languages: ['English', 'Afrikaans'],
        population: 2324388
    },
    {
        name: 'Nauru',
        languages: ['English', 'Nauruan'],
        population: 10084
    },
    {
        name: 'Nepal',
        languages: ['Nepali'],
        population: 28431500
    },
    {
        name: 'Netherlands',
        languages: ['Dutch'],
        population: 17019800
    },
    {
        name: 'New Caledonia',
        languages: ['French'],
        population: 268767
    },
    {
        name: 'New Zealand',
        languages: ['English', 'Māori'],
        population: 4697854
    },
    {
        name: 'Nicaragua',
        languages: ['Spanish'],
        population: 6262703
    },
    {
        name: 'Niger',
        languages: ['French'],
        population: 20715000
    },
    {
        name: 'Nigeria',
        languages: ['English'],
        population: 186988000
    },
    {
        name: 'Niue',
        languages: ['English'],
        population: 1470
    },
    {
        name: 'Norfolk Island',
        languages: ['English'],
        population: 2302
    },
    {
        name: "Korea (Democratic People's Republic of)",
        languages: ['Korean'],
        population: 25281000
    },
    {
        name: 'Northern Mariana Islands',
        languages: ['English', 'Chamorro'],
        population: 56940
    },
    {
        name: 'Norway',
        languages: ['Norwegian', 'Norwegian Bokmål', 'Norwegian Nynorsk'],
        population: 5223256
    },
    {
        name: 'Oman',
        languages: ['Arabic'],
        population: 4420133
    },
    {
        name: 'Pakistan',
        languages: ['English', 'Urdu'],
        population: 194125062
    },
    {
        name: 'Palau',
        languages: ['English'],
        population: 17950
    },
    {
        name: 'Palestine, State of',
        languages: ['Arabic'],
        population: 4682467
    },
    {
        name: 'Panama',
        languages: ['Spanish'],
        population: 3814672
    },
    {
        name: 'Papua New Guinea',
        languages: ['English'],
        population: 8083700
    },
    {
        name: 'Paraguay',
        languages: ['Spanish', 'Guaraní'],
        population: 6854536
    },
    {
        name: 'Peru',
        languages: ['Spanish'],
        population: 31488700
    },
    {
        name: 'Philippines',
        languages: ['English'],
        population: 103279800
    },
    {
        name: 'Pitcairn',
        languages: ['English'],
        population: 56
    },
    {
        name: 'Poland',
        languages: ['Polish'],
        population: 38437239
    },
    {
        name: 'Portugal',
        languages: ['Portuguese'],
        population: 10374822
    },
    {
        name: 'Puerto Rico',
        languages: ['Spanish', 'English'],
        population: 3474182
    },
    {
        name: 'Qatar',
        languages: ['Arabic'],
        population: 2587564
    },
    {
        name: 'Republic of Kosovo',
        languages: ['Albanian', 'Serbian'],
        population: 1733842
    },
    {
        name: 'Réunion',
        languages: ['French'],
        population: 840974
    },
    {
        name: 'Romania',
        languages: ['Romanian'],
        population: 19861408
    },
    {
        name: 'Russian Federation',
        languages: ['Russian'],
        population: 146599183
    },
    {
        name: 'Rwanda',
        languages: ['Kinyarwanda', 'English', 'French'],
        population: 11553188
    },
    {
        name: 'Saint Barthélemy',
        languages: ['French'],
        population: 9417
    },
    {
        name: 'Saint Helena, Ascension and Tristan da Cunha',
        languages: ['English'],
        population: 4255
    },
    {
        name: 'Saint Kitts and Nevis',
        languages: ['English'],
        population: 46204
    },
    {
        name: 'Saint Lucia',
        languages: ['English'],
        population: 186000
    },
    {
        name: 'Saint Martin (French part)',
        languages: ['English', 'French', 'Dutch'],
        population: 36979
    },
    {
        name: 'Saint Pierre and Miquelon',
        languages: ['French'],
        population: 6069
    },
    {
        name: 'Saint Vincent and the Grenadines',
        languages: ['English'],
        population: 109991
    },
    {
        name: 'Samoa',
        languages: ['Samoan', 'English'],
        population: 194899
    },
    {
        name: 'San Marino',
        languages: ['Italian'],
        population: 33005
    },
    {
        name: 'Sao Tome and Principe',
        languages: ['Portuguese'],
        population: 187356
    },
    {
        name: 'Saudi Arabia',
        languages: ['Arabic'],
        population: 32248200
    },
    {
        name: 'Senegal',
        languages: ['French'],
        population: 14799859
    },
    {
        name: 'Serbia',
        languages: ['Serbian'],
        population: 7076372
    },
    {
        name: 'Seychelles',
        languages: ['French', 'English'],
        population: 91400
    },
    {
        name: 'Sierra Leone',
        languages: ['English'],
        population: 7075641
    },
    {
        name: 'Singapore',
        languages: ['English', 'Malay', 'Tamil', 'Chinese'],
        population: 5535000
    },
    {
        name: 'Sint Maarten (Dutch part)',
        languages: ['Dutch', 'English'],
        population: 38247
    },
    {
        name: 'Slovakia',
        languages: ['Slovak'],
        population: 5426252
    },
    {
        name: 'Slovenia',
        languages: ['Slovene'],
        population: 2064188
    },
    {
        name: 'Solomon Islands',
        languages: ['English'],
        population: 642000
    },
    {
        name: 'Somalia',
        languages: ['Somali', 'Arabic'],
        population: 11079000
    },
    {
        name: 'South Africa',
        languages: [
            'Afrikaans',
            'English',
            'Southern Ndebele',
            'Southern Sotho',
            'Swati',
            'Tswana',
            'Tsonga',
            'Venda',
            'Xhosa',
            'Zulu'
        ],
        population: 55653654
    },
    {
        name: 'South Georgia and the South Sandwich Islands',
        languages: ['English'],
        population: 30
    },
    {
        name: 'Korea (Republic of)',
        languages: ['Korean'],
        population: 50801405
    },
    {
        name: 'South Sudan',
        languages: ['English'],
        population: 12131000
    },
    {
        name: 'Spain',
        languages: ['Spanish'],
        population: 46438422
    },
    {
        name: 'Sri Lanka',
        languages: ['Sinhalese', 'Tamil'],
        population: 20966000
    },
    {
        name: 'Sudan',
        languages: ['Arabic', 'English'],
        population: 39598700
    },
    {
        name: 'Suriname',
        languages: ['Dutch'],
        population: 541638
    },
    {
        name: 'Svalbard and Jan Mayen',
        languages: ['Norwegian'],
        population: 2562
    },
    {
        name: 'Swaziland',
        languages: ['English', 'Swati'],
        population: 1132657
    },
    {
        name: 'Sweden',
        languages: ['Swedish'],
        population: 9894888
    },
    {
        name: 'Switzerland',
        languages: ['German', 'French', 'Italian'],
        population: 8341600
    },
    {
        name: 'Syrian Arab Republic',
        languages: ['Arabic'],
        population: 18564000
    },
    {
        name: 'Taiwan',
        languages: ['Chinese'],
        population: 23503349
    },
    {
        name: 'Tajikistan',
        languages: ['Tajik', 'Russian'],
        population: 8593600
    },
    {
        name: 'Tanzania, United Republic of',
        languages: ['Swahili', 'English'],
        population: 55155000
    },
    {
        name: 'Thailand',
        languages: ['Thai'],
        population: 65327652
    },
    {
        name: 'Timor-Leste',
        languages: ['Portuguese'],
        population: 1167242
    },
    {
        name: 'Togo',
        languages: ['French'],
        population: 7143000
    },
    {
        name: 'Tokelau',
        languages: ['English'],
        population: 1411
    },
    {
        name: 'Tonga',
        languages: ['English', 'Tonga (Tonga Islands)'],
        population: 103252
    },
    {
        name: 'Trinidad and Tobago',
        languages: ['English'],
        population: 1349667
    },
    {
        name: 'Tunisia',
        languages: ['Arabic'],
        population: 11154400
    },
    {
        name: 'Turkey',
        languages: ['Turkish'],
        population: 78741053
    },
    {
        name: 'Turkmenistan',
        languages: ['Turkmen', 'Russian'],
        population: 4751120
    },
    {
        name: 'Turks and Caicos Islands',
        languages: ['English'],
        population: 31458
    },
    {
        name: 'Tuvalu',
        languages: ['English'],
        population: 10640
    },
    {
        name: 'Uganda',
        languages: ['English', 'Swahili'],
        population: 33860700
    },
    {
        name: 'Ukraine',
        languages: ['Ukrainian'],
        population: 42692393
    },
    {
        name: 'United Arab Emirates',
        languages: ['Arabic'],
        population: 9856000
    },
    {
        name: 'United Kingdom of Great Britain and Northern Ireland',
        languages: ['English'],
        population: 65110000
    },
    {
        name: 'United States of America',
        languages: ['English'],
        population: 323947000
    },
    {
        name: 'Uruguay',
        languages: ['Spanish'],
        population: 3480222
    },
    {
        name: 'Uzbekistan',
        languages: ['Uzbek', 'Russian'],
        population: 31576400
    },
    {
        name: 'Vanuatu',
        languages: ['Bislama', 'English', 'French'],
        population: 277500
    },
    {
        name: 'Venezuela (Bolivarian Republic of)',
        languages: ['Spanish'],
        population: 31028700
    },
    {
        name: 'Viet Nam',
        languages: ['Vietnamese'],
        population: 92700000
    },
    {
        name: 'Wallis and Futuna',
        languages: ['French'],
        population: 11750
    },
    {
        name: 'Western Sahara',
        languages: ['Spanish'],
        population: 510713
    },
    {
        name: 'Yemen',
        languages: ['Arabic'],
        population: 27478000
    },
    {
        name: 'Zambia',
        languages: ['English'],
        population: 15933883
    },
    {
        name: 'Zimbabwe',
        languages: ['English', 'Shona', 'Northern Ndebele'],
        population: 14240168
    }
];

mostSpokenTenLanguages();

function mostSpokenTenLanguages() {

    table.innerHTML = "";

    noteOne.style.display = "block";
    noteTwo.style.display = "none";

    const allLanguages = [];

    countries.forEach(countryLanguage => {

        allLanguages.push(...countryLanguage.languages);
    });

    const set = new Set(allLanguages);

    const allLanguagesFilterSet = [];

    for (const uniqueSet of set) {

        const allLanguagesFilter = allLanguages.filter(function (allLanguage) {

            return allLanguage === uniqueSet; // ikisinde aynı olan değeri bir array içine aLır
        });

        allLanguagesFilterSet.push({ name: uniqueSet, value: allLanguagesFilter.length });
    }

    const allLanguagesFilterSetSort = allLanguagesFilterSet.sort(function (a, b) {

        return b.value - a.value;

    }).map(function (item) {

        return { [item.name]: item.value };
    });

    const resultCountries = allLanguagesFilterSetSort.filter(function (item, index) {

        if (index < 10) {

            return item;
        }
    });

    for (let index = 0; index < resultCountries.length; index++) {

        let key = Object.entries(resultCountries[index])[0][0];
        let value = Object.entries(resultCountries[index])[0][1];

        let tr = document.createElement("tr");

        let td = document.createElement("td");
        td.textContent = key;
        td.style.width = "20%";
        tr.appendChild(td);

        let tdTwo = document.createElement("td");
        tdTwo.style.width = "60%";

        let tdTwoDiv = document.createElement("div");
        tdTwoDiv.style.width = `${value}%`;
        tdTwoDiv.style.height = "100%";
        tdTwoDiv.style.backgroundColor = "#f2a93b";
        tdTwoDiv.style.borderRadius = "3px";
        tdTwo.appendChild(tdTwoDiv);

        tr.appendChild(tdTwo);

        let tdThree = document.createElement("td");
        tdThree.textContent = value;
        tdThree.style.width = "20%";
        tr.appendChild(tdThree);

        table.appendChild(tr);
    }
}

function mostSpokenTenPopulation() {

    table.innerHTML = "";

    noteOne.style.display = "none";
    noteTwo.style.display = "block";

    const tr = document.createElement("tr");

    const td = document.createElement("td");
    td.textContent = "World";
    td.style.width = "20%";

    tr.appendChild(td);

    let tdTwo = document.createElement("td");
    tdTwo.style.width = "60%";
    tdTwo.style.height = "41px";

    let tdTwoDiv = document.createElement("div");

    tdTwoDiv.style.width = "100%";
    tdTwoDiv.style.height = "100%";
    tdTwoDiv.style.backgroundColor = "#f2a93b";
    tdTwoDiv.style.borderRadius = "3px";
    tdTwo.appendChild(tdTwoDiv);

    tr.appendChild(tdTwo);

    let tdThree = document.createElement("td");

    let totalPopulation = 0;

    for (let index = 0; index < countries.length; index++) {

        totalPopulation += countries[index].population;
    }

    tdThree.textContent = totalPopulation;

    tdThree.style.width = "20%";

    tr.appendChild(tdThree);

    table.appendChild(tr);

    const populationSort = countries.sort(function (a, b) {

        return b.population - a.population;
    });

    const populationTenSort = [];

    populationSort.forEach(function (item, index) {

        if (index < 10) {
            populationTenSort.push(item);
        }
    })

    for (let index = 0; index < 10; index++) {

        let tr = document.createElement("tr");

        let td = document.createElement("td");
        td.textContent = populationTenSort[index].name;
        td.style.width = "20%";

        tr.appendChild(td);

        let tdTwo = document.createElement("td");
        tdTwo.style.width = "60%";

        let tdTwoDiv = document.createElement("div");

        const widthPopulation = (populationTenSort[index].population * 100) / totalPopulation;

        tdTwoDiv.style.width = `${widthPopulation}%`;
        tdTwoDiv.style.height = "100%";
        tdTwoDiv.style.backgroundColor = "#f2a93b";
        tdTwoDiv.style.borderRadius = "3px";
        tdTwo.appendChild(tdTwoDiv);

        tr.appendChild(tdTwo);

        let tdThree = document.createElement("td");
        tdThree.textContent = populationTenSort[index].population;;
        tdThree.style.width = "20%";
        tr.appendChild(tdThree);

        table.appendChild(tr);
    }
}
