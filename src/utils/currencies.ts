const currencies = [
  {
    currencyName: "United Arab Emirates Dirham",
    currencyCode: "AED",
    flag: {
      path: "./flags/AE.png",
      url: "https://www.countryflags.io/AE/flat/64.png",
    },
    name: "United Arab Emirates",
  },
  {
    currencyName: "Afghan Afghani",
    currencyCode: "AFN",
    flag: {
      path: "./flags/AF.png",
      url: "https://www.countryflags.io/AF/flat/64.png",
    },
    name: "Afghanistan",
  },
  {
    currencyName: "Albanian Lek",
    currencyCode: "ALL",
    flag: {
      path: "./flags/AL.png",
      url: "https://www.countryflags.io/AL/flat/64.png",
    },
    name: "Albania",
  },
  {
    currencyName: "Armenian Dram",
    currencyCode: "AMD",
    flag: {
      path: "./flags/AM.png",
      url: "https://www.countryflags.io/AM/flat/64.png",
    },
    name: "Armenia",
  },
  {
    currencyName: "Netherlands Antillean Guilder",
    currencyCode: "ANG",
    flag: {
      path: "./flags/AN.png",
      url: "https://www.countryflags.io/AN/flat/64.png",
    },
  },
  {
    currencyName: "Angolan Kwanza",
    currencyCode: "AOA",
    flag: {
      path: "./flags/AO.png",
      url: "https://www.countryflags.io/AO/flat/64.png",
    },
    name: "Angola",
  },
  {
    currencyName: "Argentine Peso",
    currencyCode: "ARS",
    flag: {
      path: "./flags/AR.png",
      url: "https://www.countryflags.io/AR/flat/64.png",
    },
    name: "Argentina",
  },
  {
    currencyName: "Australian Dollar",
    currencyCode: "AUD",
    flag: {
      path: "./flags/AU.png",
      url: "https://www.countryflags.io/AU/flat/64.png",
    },
    name: "Australia",
  },
  {
    currencyName: "Aruban Florin",
    currencyCode: "AWG",
    flag: {
      path: "./flags/AW.png",
      url: "https://www.countryflags.io/AW/flat/64.png",
    },
    name: "Aruba",
  },
  {
    currencyName: "Azerbaijani Manat",
    currencyCode: "AZN",
    flag: {
      path: "./flags/AZ.png",
      url: "https://www.countryflags.io/AZ/flat/64.png",
    },
    name: "Azerbaijan",
  },
  {
    currencyName: "Bosnia-Herzegovina Convertible Mark",
    currencyCode: "BAM",
    flag: {
      path: "./flags/BA.png",
      url: "https://www.countryflags.io/BA/flat/64.png",
    },
    name: "Bosnia and Herzegovina",
  },
  {
    currencyName: "Barbadian Dollar",
    currencyCode: "BBD",
    flag: {
      path: "./flags/BB.png",
      url: "https://www.countryflags.io/BB/flat/64.png",
    },
    name: "Barbados",
  },
  {
    currencyName: "Bangladeshi Taka",
    currencyCode: "BDT",
    flag: {
      path: "./flags/BD.png",
      url: "https://www.countryflags.io/BD/flat/64.png",
    },
    name: "Bangladesh",
  },
  {
    currencyName: "Bulgarian Lev",
    currencyCode: "BGN",
    flag: {
      path: "./flags/BG.png",
      url: "https://www.countryflags.io/BG/flat/64.png",
    },
    name: "Bulgaria",
  },
  {
    currencyName: "Bahraini Dinar",
    currencyCode: "BHD",
    flag: {
      path: "./flags/BH.png",
      url: "https://www.countryflags.io/BH/flat/64.png",
    },
    name: "Bahrain",
  },
  {
    currencyName: "Burundian Franc",
    currencyCode: "BIF",
    flag: {
      path: "./flags/BI.png",
      url: "https://www.countryflags.io/BI/flat/64.png",
    },
    name: "Burundi",
  },
  {
    currencyName: "Bermudan Dollar",
    currencyCode: "BMD",
    flag: {
      path: "./flags/BM.png",
      url: "https://www.countryflags.io/BM/flat/64.png",
    },
    name: "Bermuda",
  },
  {
    currencyName: "Brunei Dollar",
    currencyCode: "BND",
    flag: {
      path: "./flags/BN.png",
      url: "https://www.countryflags.io/BN/flat/64.png",
    },
    name: "Brunei",
  },
  {
    currencyName: "Bolivian Boliviano",
    currencyCode: "BOB",
    flag: {
      path: "./flags/BO.png",
      url: "https://www.countryflags.io/BO/flat/64.png",
    },
    name: "Bolivia",
  },
  {
    currencyName: "Brazilian Real",
    currencyCode: "BRL",
    flag: {
      path: "./flags/BR.png",
      url: "https://www.countryflags.io/BR/flat/64.png",
    },
    name: "Brazil",
  },
  {
    currencyName: "Bahamian Dollar",
    currencyCode: "BSD",
    flag: {
      path: "./flags/BS.png",
      url: "https://www.countryflags.io/BS/flat/64.png",
    },
    name: "Bahamas",
  },
  {
    currencyName: "Bhutanese Ngultrum",
    currencyCode: "BTN",
    flag: {
      path: "./flags/BT.png",
      url: "https://www.countryflags.io/BT/flat/64.png",
    },
    name: "Bhutan",
  },
  {
    currencyName: "Botswanan Pula",
    currencyCode: "BWP",
    flag: {
      path: "./flags/BW.png",
      url: "https://www.countryflags.io/BW/flat/64.png",
    },
    name: "Botswana",
  },
  {
    currencyName: "Belarusian Ruble",
    currencyCode: "BYN",
    flag: {
      path: "./flags/BY.png",
      url: "https://www.countryflags.io/BY/flat/64.png",
    },
    name: "Belarus",
  },
  {
    currencyName: "Belize Dollar",
    currencyCode: "BZD",
    flag: {
      path: "./flags/BZ.png",
      url: "https://www.countryflags.io/BZ/flat/64.png",
    },
    name: "Belize",
  },
  {
    currencyName: "Canadian Dollar",
    currencyCode: "CAD",
    flag: {
      path: "./flags/CA.png",
      url: "https://www.countryflags.io/CA/flat/64.png",
    },
    name: "Canada",
  },
  {
    currencyName: "Congolese Franc",
    currencyCode: "CDF",
    flag: {
      path: "./flags/CD.png",
      url: "https://www.countryflags.io/CD/flat/64.png",
    },
    name: "DR Congo",
  },
  {
    currencyName: "Swiss Franc",
    currencyCode: "CHF",
    flag: {
      path: "./flags/CH.png",
      url: "https://www.countryflags.io/CH/flat/64.png",
    },
    name: "Switzerland",
  },
  {
    currencyName: "Chilean Peso",
    currencyCode: "CLP",
    flag: {
      path: "./flags/CL.png",
      url: "https://www.countryflags.io/CL/flat/64.png",
    },
    name: "Chile",
  },
  {
    currencyName: "Chinese Yuan",
    currencyCode: "CNY",
    flag: {
      path: "./flags/CN.png",
      url: "https://www.countryflags.io/CN/flat/64.png",
    },
    name: "China",
  },
  {
    currencyName: "Colombian Peso",
    currencyCode: "COP",
    flag: {
      path: "./flags/CO.png",
      url: "https://www.countryflags.io/CO/flat/64.png",
    },
    name: "Colombia",
  },
  {
    currencyName: "Costa Rican Colón",
    currencyCode: "CRC",
    flag: {
      path: "./flags/CR.png",
      url: "https://www.countryflags.io/CR/flat/64.png",
    },
    name: "Costa Rica",
  },
  {
    currencyName: "Cuban Peso",
    currencyCode: "CUP",
    flag: {
      path: "./flags/CU.png",
      url: "https://www.countryflags.io/CU/flat/64.png",
    },
    name: "Cuba",
  },
  {
    currencyName: "Cape Verdean Escudo",
    currencyCode: "CVE",
    flag: {
      path: "./flags/CV.png",
      url: "https://www.countryflags.io/CV/flat/64.png",
    },
    name: "Cape Verde",
  },
  {
    currencyName: "Czech Koruna",
    currencyCode: "CZK",
    flag: {
      path: "./flags/CZ.png",
      url: "https://www.countryflags.io/CZ/flat/64.png",
    },
    name: "Czechia",
  },
  {
    currencyName: "Djiboutian Franc",
    currencyCode: "DJF",
    flag: {
      path: "./flags/DJ.png",
      url: "https://www.countryflags.io/DJ/flat/64.png",
    },
    name: "Djibouti",
  },
  {
    currencyName: "Danish Krone",
    currencyCode: "DKK",
    flag: {
      path: "./flags/DK.png",
      url: "https://www.countryflags.io/DK/flat/64.png",
    },
    name: "Denmark",
  },
  {
    currencyName: "Dominican Peso",
    currencyCode: "DOP",
    flag: {
      path: "./flags/DO.png",
      url: "https://www.countryflags.io/DO/flat/64.png",
    },
    name: "Dominican Republic",
  },
  {
    currencyName: "Algerian Dinar",
    currencyCode: "DZD",
    flag: {
      path: "./flags/DZ.png",
      url: "https://www.countryflags.io/DZ/flat/64.png",
    },
    name: "Algeria",
  },
  {
    currencyName: "Egyptian Pound",
    currencyCode: "EGP",
    flag: {
      path: "./flags/EG.png",
      url: "https://www.countryflags.io/EG/flat/64.png",
    },
    name: "Egypt",
  },
  {
    currencyName: "Eritrean Nakfa",
    currencyCode: "ERN",
    flag: {
      path: "./flags/ER.png",
      url: "https://www.countryflags.io/ER/flat/64.png",
    },
    name: "Eritrea",
  },
  {
    currencyName: "Ethiopian Birr",
    currencyCode: "ETB",
    flag: {
      path: "./flags/ET.png",
      url: "https://www.countryflags.io/ET/flat/64.png",
    },
    name: "Ethiopia",
  },
  {
    currencyName: "Euro",
    currencyCode: "EUR",
    flag: {
      path: "./flags/EU.png",
      url: "https://www.countryflags.io/EU/flat/64.png",
    },
    name: "European Union",
  },
  {
    currencyName: "Fijian Dollar",
    currencyCode: "FJD",
    flag: {
      path: "./flags/FJ.png",
      url: "https://www.countryflags.io/FJ/flat/64.png",
    },
    name: "Fiji",
  },
  {
    currencyName: "Falkland Islands Pound",
    currencyCode: "FKP",
    flag: {
      path: "./flags/FK.png",
      url: "https://www.countryflags.io/FK/flat/64.png",
    },
    name: "Falkland Islands",
  },
  {
    currencyCode: "FOK",
    flag: {
      path: "./flags/FO.png",
      url: "https://www.countryflags.io/FO/flat/64.png",
    },
    name: "Faroe Islands",
    currencyName: "Faroese Króna",
  },
  {
    currencyName: "British Pound",
    currencyCode: "GBP",
    flag: {
      path: "./flags/GB.png",
      url: "https://www.countryflags.io/GB/flat/64.png",
    },
    name: "United Kingdom",
  },
  {
    currencyName: "Georgian Lari",
    currencyCode: "GEL",
    flag: {
      path: "./flags/GE.png",
      url: "https://www.countryflags.io/GE/flat/64.png",
    },
    name: "Georgia",
  },
  {
    currencyCode: "GGP",
    flag: {
      path: "./flags/GG.png",
      url: "https://www.countryflags.io/GG/flat/64.png",
    },
    name: "Guernsey",
    currencyName: "Guernsey Pound",
  },
  {
    currencyName: "Ghanaian Cedi",
    currencyCode: "GHS",
    flag: {
      path: "./flags/GH.png",
      url: "https://www.countryflags.io/GH/flat/64.png",
    },
    name: "Ghana",
  },
  {
    currencyName: "Gibraltar Pound",
    currencyCode: "GIP",
    flag: {
      path: "./flags/GI.png",
      url: "https://www.countryflags.io/GI/flat/64.png",
    },
    name: "Gibraltar",
  },
  {
    currencyName: "Gambian Dalasi",
    currencyCode: "GMD",
    flag: {
      path: "./flags/GM.png",
      url: "https://www.countryflags.io/GM/flat/64.png",
    },
    name: "Gambia",
  },
  {
    currencyName: "Guinean Franc",
    currencyCode: "GNF",
    flag: {
      path: "./flags/GN.png",
      url: "https://www.countryflags.io/GN/flat/64.png",
    },
    name: "Guinea",
  },
  {
    currencyName: "Guatemalan Quetzal",
    currencyCode: "GTQ",
    flag: {
      path: "./flags/GT.png",
      url: "https://www.countryflags.io/GT/flat/64.png",
    },
    name: "Guatemala",
  },
  {
    currencyName: "Guyanaese Dollar",
    currencyCode: "GYD",
    flag: {
      path: "./flags/GY.png",
      url: "https://www.countryflags.io/GY/flat/64.png",
    },
    name: "Guyana",
  },
  {
    currencyName: "Hong Kong Dollar",
    currencyCode: "HKD",
    flag: {
      path: "./flags/HK.png",
      url: "https://www.countryflags.io/HK/flat/64.png",
    },
    name: "Hong Kong",
  },
  {
    currencyName: "Honduran Lempira",
    currencyCode: "HNL",
    flag: {
      path: "./flags/HN.png",
      url: "https://www.countryflags.io/HN/flat/64.png",
    },
    name: "Honduras",
  },
  {
    currencyName: "Croatian Kuna",
    currencyCode: "HRK",
    flag: {
      path: "./flags/HR.png",
      url: "https://www.countryflags.io/HR/flat/64.png",
    },
    name: "Croatia",
  },
  {
    currencyName: "Haitian Gourde",
    currencyCode: "HTG",
    flag: {
      path: "./flags/HT.png",
      url: "https://www.countryflags.io/HT/flat/64.png",
    },
    name: "Haiti",
  },
  {
    currencyName: "Hungarian Forint",
    currencyCode: "HUF",
    flag: {
      path: "./flags/HU.png",
      url: "https://www.countryflags.io/HU/flat/64.png",
    },
    name: "Hungary",
  },
  {
    currencyName: "Indonesian Rupiah",
    currencyCode: "IDR",
    flag: {
      path: "./flags/ID.png",
      url: "https://www.countryflags.io/ID/flat/64.png",
    },
    name: "Indonesia",
  },
  {
    currencyName: "Israeli New Shekel",
    currencyCode: "ILS",
    flag: {
      path: "./flags/IL.png",
      url: "https://www.countryflags.io/IL/flat/64.png",
    },
    name: "Israel",
  },
  {
    currencyCode: "IMP",
    flag: {
      path: "./flags/IM.png",
      url: "https://www.countryflags.io/IM/flat/64.png",
    },
    name: "Isle of Man",
    currencyName: "Manx Round",
  },
  {
    currencyName: "Indian Rupee",
    currencyCode: "INR",
    flag: {
      path: "./flags/IN.png",
      url: "https://www.countryflags.io/IN/flat/64.png",
    },
    name: "India",
  },
  {
    currencyName: "Iraqi Dinar",
    currencyCode: "IQD",
    flag: {
      path: "./flags/IQ.png",
      url: "https://www.countryflags.io/IQ/flat/64.png",
    },
    name: "Iraq",
  },
  {
    currencyName: "Iranian Rial",
    currencyCode: "IRR",
    flag: {
      path: "./flags/IR.png",
      url: "https://www.countryflags.io/IR/flat/64.png",
    },
    name: "Iran",
  },
  {
    currencyName: "Icelandic Króna",
    currencyCode: "ISK",
    flag: {
      path: "./flags/IS.png",
      url: "https://www.countryflags.io/IS/flat/64.png",
    },
    name: "Iceland",
  },
  {
    currencyName: "Jamaican Dollar",
    currencyCode: "JMD",
    flag: {
      path: "./flags/JM.png",
      url: "https://www.countryflags.io/JM/flat/64.png",
    },
    name: "Jamaica",
  },
  {
    currencyName: "Jordanian Dinar",
    currencyCode: "JOD",
    flag: {
      path: "./flags/JO.png",
      url: "https://www.countryflags.io/JO/flat/64.png",
    },
    name: "Jordan",
  },
  {
    currencyName: "Japanese Yen",
    currencyCode: "JPY",
    flag: {
      path: "./flags/JP.png",
      url: "https://www.countryflags.io/JP/flat/64.png",
    },
    name: "Japan",
  },
  {
    currencyName: "Kenyan Shilling",
    currencyCode: "KES",
    flag: {
      path: "./flags/KE.png",
      url: "https://www.countryflags.io/KE/flat/64.png",
    },
    name: "Kenya",
  },
  {
    currencyName: "Kyrgystani Som",
    currencyCode: "KGS",
    flag: {
      path: "./flags/KG.png",
      url: "https://www.countryflags.io/KG/flat/64.png",
    },
    name: "Kyrgyzstan",
  },
  {
    currencyName: "Cambodian Riel",
    currencyCode: "KHR",
    flag: {
      path: "./flags/KH.png",
      url: "https://www.countryflags.io/KH/flat/64.png",
    },
    name: "Cambodia",
  },
  {
    currencyCode: "KID",
    flag: {
      path: "./flags/KI.png",
      url: "https://www.countryflags.io/KI/flat/64.png",
    },
    name: "Kiribati",
    currencyName: "Kiribati Dollar",
  },
  {
    currencyName: "Comorian Franc",
    currencyCode: "KMF",
    flag: {
      path: "./flags/KM.png",
      url: "https://www.countryflags.io/KM/flat/64.png",
    },
    name: "Comoros",
  },
  {
    currencyName: "South Korean Won",
    currencyCode: "KRW",
    flag: {
      path: "./flags/KR.png",
      url: "https://www.countryflags.io/KR/flat/64.png",
    },
    name: "South Korea",
  },
  {
    currencyName: "Kuwaiti Dinar",
    currencyCode: "KWD",
    flag: {
      path: "./flags/KW.png",
      url: "https://www.countryflags.io/KW/flat/64.png",
    },
    name: "Kuwait",
  },
  {
    currencyName: "Cayman Islands Dollar",
    currencyCode: "KYD",
    flag: {
      path: "./flags/KY.png",
      url: "https://www.countryflags.io/KY/flat/64.png",
    },
    name: "Cayman Islands",
  },
  {
    currencyName: "Kazakhstani Tenge",
    currencyCode: "KZT",
    flag: {
      path: "./flags/KZ.png",
      url: "https://www.countryflags.io/KZ/flat/64.png",
    },
    name: "Kazakhstan",
  },
  {
    currencyName: "Laotian Kip",
    currencyCode: "LAK",
    flag: {
      path: "./flags/LA.png",
      url: "https://www.countryflags.io/LA/flat/64.png",
    },
    name: "Laos",
  },
  {
    currencyName: "Lebanese Pound",
    currencyCode: "LBP",
    flag: {
      path: "./flags/LB.png",
      url: "https://www.countryflags.io/LB/flat/64.png",
    },
    name: "Lebanon",
  },
  {
    currencyName: "Sri Lankan Rupee",
    currencyCode: "LKR",
    flag: {
      path: "./flags/LK.png",
      url: "https://www.countryflags.io/LK/flat/64.png",
    },
    name: "Sri Lanka",
  },
  {
    currencyName: "Liberian Dollar",
    currencyCode: "LRD",
    flag: {
      path: "./flags/LR.png",
      url: "https://www.countryflags.io/LR/flat/64.png",
    },
    name: "Liberia",
  },
  {
    currencyName: "Lesotho Loti",
    currencyCode: "LSL",
    flag: {
      path: "./flags/LS.png",
      url: "https://www.countryflags.io/LS/flat/64.png",
    },
    name: "Lesotho",
  },
  {
    currencyName: "Libyan Dinar",
    currencyCode: "LYD",
    flag: {
      path: "./flags/LY.png",
      url: "https://www.countryflags.io/LY/flat/64.png",
    },
    name: "Libya",
  },
  {
    currencyName: "Moroccan Dirham",
    currencyCode: "MAD",
    flag: {
      path: "./flags/MA.png",
      url: "https://www.countryflags.io/MA/flat/64.png",
    },
    name: "Morocco",
  },
  {
    currencyName: "Moldovan Leu",
    currencyCode: "MDL",
    flag: {
      path: "./flags/MD.png",
      url: "https://www.countryflags.io/MD/flat/64.png",
    },
    name: "Moldova",
  },
  {
    currencyName: "Malagasy Ariary",
    currencyCode: "MGA",
    flag: {
      path: "./flags/MG.png",
      url: "https://www.countryflags.io/MG/flat/64.png",
    },
    name: "Madagascar",
  },
  {
    currencyName: "Macedonian Denar",
    currencyCode: "MKD",
    flag: {
      path: "./flags/MK.png",
      url: "https://www.countryflags.io/MK/flat/64.png",
    },
    name: "North Macedonia",
  },
  {
    currencyName: "Myanmar Kyat",
    currencyCode: "MMK",
    flag: {
      path: "./flags/MM.png",
      url: "https://www.countryflags.io/MM/flat/64.png",
    },
    name: "Myanmar",
  },
  {
    currencyName: "Mongolian Tugrik",
    currencyCode: "MNT",
    flag: {
      path: "./flags/MN.png",
      url: "https://www.countryflags.io/MN/flat/64.png",
    },
    name: "Mongolia",
  },
  {
    currencyName: "Macanese Pataca",
    currencyCode: "MOP",
    flag: {
      path: "./flags/MO.png",
      url: "https://www.countryflags.io/MO/flat/64.png",
    },
    name: "Macau",
  },
  {
    currencyName: "Mauritanian Ouguiya",
    currencyCode: "MRU",
    flag: {
      path: "./flags/MR.png",
      url: "https://www.countryflags.io/MR/flat/64.png",
    },
    name: "Mauritania",
  },
  {
    currencyName: "Mauritian Rupee",
    currencyCode: "MUR",
    flag: {
      path: "./flags/MU.png",
      url: "https://www.countryflags.io/MU/flat/64.png",
    },
    name: "Mauritius",
  },
  {
    currencyName: "Maldivian rufiyaa",
    currencyCode: "MVR",
    flag: {
      path: "./flags/MV.png",
      url: "https://www.countryflags.io/MV/flat/64.png",
    },
    name: "Maldives",
  },
  {
    currencyName: "Malawian Kwacha",
    currencyCode: "MWK",
    flag: {
      path: "./flags/MW.png",
      url: "https://www.countryflags.io/MW/flat/64.png",
    },
    name: "Malawi",
  },
  {
    currencyName: "Mexican Peso",
    currencyCode: "MXN",
    flag: {
      path: "./flags/MX.png",
      url: "https://www.countryflags.io/MX/flat/64.png",
    },
    name: "Mexico",
  },
  {
    currencyName: "Malaysian Ringgit",
    currencyCode: "MYR",
    flag: {
      path: "./flags/MY.png",
      url: "https://www.countryflags.io/MY/flat/64.png",
    },
    name: "Malaysia",
  },
  {
    currencyName: "Mozambican Metical",
    currencyCode: "MZN",
    flag: {
      path: "./flags/MZ.png",
      url: "https://www.countryflags.io/MZ/flat/64.png",
    },
    name: "Mozambique",
  },
  {
    currencyName: "Namibian Dollar",
    currencyCode: "NAD",
    flag: {
      path: "./flags/NA.png",
      url: "https://www.countryflags.io/NA/flat/64.png",
    },
    name: "Namibia",
  },
  {
    currencyName: "Nigerian Naira",
    currencyCode: "NGN",
    flag: {
      path: "./flags/NG.png",
      url: "https://www.countryflags.io/NG/flat/64.png",
    },
    name: "Nigeria",
  },
  {
    currencyName: "Nicaraguan Córdoba",
    currencyCode: "NIO",
    flag: {
      path: "./flags/NI.png",
      url: "https://www.countryflags.io/NI/flat/64.png",
    },
    name: "Nicaragua",
  },
  {
    currencyName: "Norwegian Krone",
    currencyCode: "NOK",
    flag: {
      path: "./flags/NO.png",
      url: "https://www.countryflags.io/NO/flat/64.png",
    },
    name: "Norway",
  },
  {
    currencyName: "Nepalese Rupee",
    currencyCode: "NPR",
    flag: {
      path: "./flags/NP.png",
      url: "https://www.countryflags.io/NP/flat/64.png",
    },
    name: "Nepal",
  },
  {
    currencyName: "New Zealand Dollar",
    currencyCode: "NZD",
    flag: {
      path: "./flags/NZ.png",
      url: "https://www.countryflags.io/NZ/flat/64.png",
    },
    name: "New Zealand",
  },
  {
    currencyName: "Omani Rial",
    currencyCode: "OMR",
    flag: {
      path: "./flags/OM.png",
      url: "https://www.countryflags.io/OM/flat/64.png",
    },
    name: "Oman",
  },
  {
    currencyName: "Panamanian Balboa",
    currencyCode: "PAB",
    flag: {
      path: "./flags/PA.png",
      url: "https://www.countryflags.io/PA/flat/64.png",
    },
    name: "Panama",
  },
  {
    currencyName: "Peruvian Sol",
    currencyCode: "PEN",
    flag: {
      path: "./flags/PE.png",
      url: "https://www.countryflags.io/PE/flat/64.png",
    },
    name: "Peru",
  },
  {
    currencyName: "Papua New Guinean Kina",
    currencyCode: "PGK",
    flag: {
      path: "./flags/PG.png",
      url: "https://www.countryflags.io/PG/flat/64.png",
    },
    name: "Papua New Guinea",
  },
  {
    currencyName: "Philippine Piso",
    currencyCode: "PHP",
    flag: {
      path: "./flags/PH.png",
      url: "https://www.countryflags.io/PH/flat/64.png",
    },
    name: "Philippines",
  },
  {
    currencyName: "Pakistani Rupee",
    currencyCode: "PKR",
    flag: {
      path: "./flags/PK.png",
      url: "https://www.countryflags.io/PK/flat/64.png",
    },
    name: "Pakistan",
  },
  {
    currencyName: "Polish Zloty",
    currencyCode: "PLN",
    flag: {
      path: "./flags/PL.png",
      url: "https://www.countryflags.io/PL/flat/64.png",
    },
    name: "Poland",
  },
  {
    currencyName: "Paraguayan Guarani",
    currencyCode: "PYG",
    flag: {
      path: "./flags/PY.png",
      url: "https://www.countryflags.io/PY/flat/64.png",
    },
    name: "Paraguay",
  },
  {
    currencyName: "Qatari Rial",
    currencyCode: "QAR",
    flag: {
      path: "./flags/QA.png",
      url: "https://www.countryflags.io/QA/flat/64.png",
    },
    name: "Qatar",
  },
  {
    currencyName: "Romanian Leu",
    currencyCode: "RON",
    flag: {
      path: "./flags/RO.png",
      url: "https://www.countryflags.io/RO/flat/64.png",
    },
    name: "Romania",
  },
  {
    currencyName: "Serbian Dinar",
    currencyCode: "RSD",
    flag: {
      path: "./flags/RS.png",
      url: "https://www.countryflags.io/RS/flat/64.png",
    },
    name: "Serbia",
  },
  {
    currencyName: "Russian Ruble",
    currencyCode: "RUB",
    flag: {
      path: "./flags/RU.png",
      url: "https://www.countryflags.io/RU/flat/64.png",
    },
    name: "Russia",
  },
  {
    currencyName: "Rwandan Franc",
    currencyCode: "RWF",
    flag: {
      path: "./flags/RW.png",
      url: "https://www.countryflags.io/RW/flat/64.png",
    },
    name: "Rwanda",
  },
  {
    currencyName: "Saudi Riyal",
    currencyCode: "SAR",
    flag: {
      path: "./flags/SA.png",
      url: "https://www.countryflags.io/SA/flat/64.png",
    },
    name: "Saudi Arabia",
  },
  {
    currencyName: "Solomon Islands Dollar",
    currencyCode: "SBD",
    flag: {
      path: "./flags/SB.png",
      url: "https://www.countryflags.io/SB/flat/64.png",
    },
    name: "Solomon Islands",
  },
  {
    currencyName: "Seychellois Rupee",
    currencyCode: "SCR",
    flag: {
      path: "./flags/SC.png",
      url: "https://www.countryflags.io/SC/flat/64.png",
    },
    name: "Seychelles",
  },
  {
    currencyName: "Sudanese Pound",
    currencyCode: "SDG",
    flag: {
      path: "./flags/SD.png",
      url: "https://www.countryflags.io/SD/flat/64.png",
    },
    name: "Sudan",
  },
  {
    currencyName: "Swedish Krona",
    currencyCode: "SEK",
    flag: {
      path: "./flags/SE.png",
      url: "https://www.countryflags.io/SE/flat/64.png",
    },
    name: "Sweden",
  },
  {
    currencyName: "Singapore Dollar",
    currencyCode: "SGD",
    flag: {
      path: "./flags/SG.png",
      url: "https://www.countryflags.io/SG/flat/64.png",
    },
    name: "Singapore",
  },
  {
    currencyName: "St. Helena Pound",
    currencyCode: "SHP",
    flag: {
      path: "./flags/SH.png",
      url: "https://www.countryflags.io/SH/flat/64.png",
    },
    name: "Saint Helena, Ascension and Tristan da Cunha",
  },
  {
    currencyName: "Sierra Leonean Leone",
    currencyCode: "SLL",
    flag: {
      path: "./flags/SL.png",
      url: "https://www.countryflags.io/SL/flat/64.png",
    },
    name: "Sierra Leone",
  },
  {
    currencyName: "Somali Shilling",
    currencyCode: "SOS",
    flag: {
      path: "./flags/SO.png",
      url: "https://www.countryflags.io/SO/flat/64.png",
    },
    name: "Somalia",
  },
  {
    currencyName: "Surinamese Dollar",
    currencyCode: "SRD",
    flag: {
      path: "./flags/SR.png",
      url: "https://www.countryflags.io/SR/flat/64.png",
    },
    name: "Suriname",
  },
  {
    currencyName: "South Sudanese Pound",
    currencyCode: "SSP",
    flag: {
      path: "./flags/SS.png",
      url: "https://www.countryflags.io/SS/flat/64.png",
    },
    name: "South Sudan",
  },
  {
    currencyName: "São Tomé & Príncipe Dobra (2018)",
    currencyCode: "STN",
    flag: {
      path: "./flags/ST.png",
      url: "https://www.countryflags.io/ST/flat/64.png",
    },
    name: "São Tomé and Príncipe",
  },
  {
    currencyName: "Syrian Pound",
    currencyCode: "SYP",
    flag: {
      path: "./flags/SY.png",
      url: "https://www.countryflags.io/SY/flat/64.png",
    },
    name: "Syria",
  },
  {
    currencyName: "Swazi Lilangeni",
    currencyCode: "SZL",
    flag: {
      path: "./flags/SZ.png",
      url: "https://www.countryflags.io/SZ/flat/64.png",
    },
    name: "Eswatini (Swaziland)",
  },
  {
    currencyName: "Thai Baht",
    currencyCode: "THB",
    flag: {
      path: "./flags/TH.png",
      url: "https://www.countryflags.io/TH/flat/64.png",
    },
    name: "Thailand",
  },
  {
    currencyName: "Tajikistani Somoni",
    currencyCode: "TJS",
    flag: {
      path: "./flags/TJ.png",
      url: "https://www.countryflags.io/TJ/flat/64.png",
    },
    name: "Tajikistan",
  },
  {
    currencyCode: "TMT",
    flag: {
      path: "./flags/TM.png",
      url: "https://www.countryflags.io/TM/flat/64.png",
    },
    name: "Turkmenistan",
    currencyName: "Turkmenistani Manat",
  },
  {
    currencyName: "Tunisian Dinar",
    currencyCode: "TND",
    flag: {
      path: "./flags/TN.png",
      url: "https://www.countryflags.io/TN/flat/64.png",
    },
    name: "Tunisia",
  },
  {
    currencyName: "Tongan Paʻanga",
    currencyCode: "TOP",
    flag: {
      path: "./flags/TO.png",
      url: "https://www.countryflags.io/TO/flat/64.png",
    },
    name: "Tonga",
  },
  {
    currencyName: "Turkish Lira",
    currencyCode: "TRY",
    flag: {
      path: "./flags/TR.png",
      url: "https://www.countryflags.io/TR/flat/64.png",
    },
    name: "Turkey",
  },
  {
    currencyName: "Trinidad & Tobago Dollar",
    currencyCode: "TTD",
    flag: {
      path: "./flags/TT.png",
      url: "https://www.countryflags.io/TT/flat/64.png",
    },
    name: "Trinidad and Tobago",
  },
  {
    currencyCode: "TVD",
    flag: {
      path: "./flags/TV.png",
      url: "https://www.countryflags.io/TV/flat/64.png",
    },
    name: "Tuvalu",
    currencyName: "Tuvaluan Dollar",
  },
  {
    currencyName: "New Taiwan Dollar",
    currencyCode: "TWD",
    flag: {
      path: "./flags/TW.png",
      url: "https://www.countryflags.io/TW/flat/64.png",
    },
    name: "Taiwan",
  },
  {
    currencyName: "Tanzanian Shilling",
    currencyCode: "TZS",
    flag: {
      path: "./flags/TZ.png",
      url: "https://www.countryflags.io/TZ/flat/64.png",
    },
    name: "Tanzania",
  },
  {
    currencyName: "Ukrainian Hryvnia",
    currencyCode: "UAH",
    flag: {
      path: "./flags/UA.png",
      url: "https://www.countryflags.io/UA/flat/64.png",
    },
    name: "Ukraine",
  },
  {
    currencyName: "Ugandan Shilling",
    currencyCode: "UGX",
    flag: {
      path: "./flags/UG.png",
      url: "https://www.countryflags.io/UG/flat/64.png",
    },
    name: "Uganda",
  },
  {
    currencyName: "US Dollar",
    currencyCode: "USD",
    flag: {
      path: "./flags/US.png",
      url: "https://www.countryflags.io/US/flat/64.png",
    },
    name: "United States",
  },
  {
    currencyName: "Uruguayan Peso",
    currencyCode: "UYU",
    flag: {
      path: "./flags/UY.png",
      url: "https://www.countryflags.io/UY/flat/64.png",
    },
    name: "Uruguay",
  },
  {
    currencyName: "Uzbekistani Som",
    currencyCode: "UZS",
    flag: {
      path: "./flags/UZ.png",
      url: "https://www.countryflags.io/UZ/flat/64.png",
    },
    name: "Uzbekistan",
  },
  {
    currencyName: "Venezuelan Bolívar",
    currencyCode: "VES",
    flag: {
      path: "./flags/VE.png",
      url: "https://www.countryflags.io/VE/flat/64.png",
    },
    name: "Venezuela",
  },
  {
    currencyName: "Vietnamese Dong",
    currencyCode: "VND",
    flag: {
      path: "./flags/VN.png",
      url: "https://www.countryflags.io/VN/flat/64.png",
    },
    name: "Vietnam",
  },
  {
    currencyName: "Vanuatu Vatu",
    currencyCode: "VUV",
    flag: {
      path: "./flags/VU.png",
      url: "https://www.countryflags.io/VU/flat/64.png",
    },
    name: "Vanuatu",
  },
  {
    currencyName: "Samoan Tala",
    currencyCode: "WST",
    flag: {
      path: "./flags/WS.png",
      url: "https://www.countryflags.io/WS/flat/64.png",
    },
    name: "Samoa",
  },
  {
    currencyName: "Yemeni Rial",
    currencyCode: "YER",
    flag: {
      path: "./flags/YE.png",
      url: "https://www.countryflags.io/YE/flat/64.png",
    },
    name: "Yemen",
  },
  {
    currencyName: "South African Rand",
    currencyCode: "ZAR",
    flag: {
      path: "./flags/ZA.png",
      url: "https://www.countryflags.io/ZA/flat/64.png",
    },
    name: "South Africa",
  },
  {
    currencyName: "Zambian Kwacha",
    currencyCode: "ZMW",
    flag: {
      path: "./flags/ZM.png",
      url: "https://www.countryflags.io/ZM/flat/64.png",
    },
    name: "Zambia",
  },
];

export default currencies;
