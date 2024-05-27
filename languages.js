const languages = [
    {
      no: "0",
      name: "Auto",
      native: "Detect",
      code: "auto",
    },
    {
      no: "1",
      name: "Afrikaans",
      native: "Afrikaans",
      code: "af",
    },
    {
      no: "2",
      name: "Albanian",
      native: "Shqip",
      code: "sq",
    },
    {
      no: "3",
      name: "Arabic",
      native: "عربي",
      code: "ar",
    },
    {
      no: "4",
      name: "Armenian",
      native: "Հայերէն",
      code: "hy",
    },
    {
      no: "5",
      name: "Azerbaijani",
      native: "آذربایجان دیلی",
      code: "az",
    },
    {
      no: "6",
      name: "Basque",
      native: "Euskara",
      code: "eu",
    },
    {
      no: "7",
      name: "Belarusian",
      native: "Беларуская",
      code: "be",
    },
    {
      no: "8",
      name: "Bulgarian",
      native: "Български",
      code: "bg",
    },
    {
      no: "9",
      name: "Catalan",
      native: "Català",
      code: "ca",
    },
    {
      no: "10",
      name: "Chinese (Simplified)",
      native: "中文简体",
      code: "zh-CN",
    },
    {
      no: "11",
      name: "Chinese (Traditional)",
      native: "中文繁體",
      code: "zh-TW",
    },
    {
      no: "12",
      name: "Croatian",
      native: "Hrvatski",
      code: "hr",
    },
    {
      no: "13",
      name: "Czech",
      native: "Čeština",
      code: "cs",
    },
    {
      no: "14",
      name: "Danish",
      native: "Dansk",
      code: "da",
    },
    {
      no: "15",
      name: "Dutch",
      native: "Nederlands",
      code: "nl",
    },
    {
      no: "16",
      name: "English",
      native: "English",
      code: "en",
    },
    {
      no: "17",
      name: "Estonian",
      native: "Eesti keel",
      code: "et",
    },
    {
      no: "18",
      name: "Filipino",
      native: "Filipino",
      code: "tl",
    },
    {
      no: "19",
      name: "Finnish",
      native: "Suomi",
      code: "fi",
    },
    {
      no: "20",
      name: "French",
      native: "Français",
      code: "fr",
    },
    {
      no: "21",
      name: "Galician",
      native: "Galego",
      code: "gl",
    },
    {
      no: "22",
      name: "Georgian",
      native: "ქართული",
      code: "ka",
    },
    {
      no: "23",
      name: "German",
      native: "Deutsch",
      code: "de",
    },
    {
      no: "24",
      name: "Greek",
      native: "Ελληνικά",
      code: "el",
    },
    {
      no: "25",
      name: "Haitian Creole",
      native: "Kreyòl ayisyen",
      code: "ht",
    },
    {
      no: "26",
      name: "Hebrew",
      native: "עברית",
      code: "iw",
    },
    {
      no: "27",
      name: "Hindi",
      native: "हिन्दी",
      code: "hi",
    },
    {
      no: "28",
      name: "Hungarian",
      native: "Magyar",
      code: "hu",
    },
    {
      no: "29",
      name: "Icelandic",
      native: "Íslenska",
      code: "is",
    },
    {
      no: "30",
      name: "Indonesian",
      native: "Bahasa Indonesia",
      code: "id",
    },
    {
      no: "31",
      name: "Irish",
      native: "Gaeilge",
      code: "ga",
    },
    {
      no: "32",
      name: "Italian",
      native: "Italiano",
      code: "it",
    },
    {
      no: "33",
      name: "Japanese",
      native: "日本語",
      code: "ja",
    },
    {
      no: "34",
      name: "Korean",
      native: "한국어",
      code: "ko",
    },
    {
      no: "35",
      name: "Latvian",
      native: "Latviešu",
      code: "lv",
    },
    {
      no: "36",
      name: "Lithuanian",
      native: "Lietuvių kalba",
      code: "lt",
    },
    {
      no: "37",
      name: "Macedonian",
      native: "Македонски",
      code: "mk",
    },
    {
      no: "38",
      name: "Malay",
      native: "Malay",
      code: "ms",
    },
    {
      no: "39",
      name: "Maltese",
      native: "Malti",
      code: "mt",
    },
    {
      no: "40",
      name: "Norwegian",
      native: "Norsk",
      code: "no",
    },
    {
      no: "41",
      name: "Persian",
      native: "فارسی",
      code: "fa",
    },
    {
      no: "42",
      name: "Polish",
      native: "Polski",
      code: "pl",
    },
    {
      no: "43",
      name: "Portuguese",
      native: "Português",
      code: "pt",
    },
    {
      no: "44",
      name: "Romanian",
      native: "Română",
      code: "ro",
    },
    {
      no: "45",
      name: "Russian",
      native: "Русский",
      code: "ru",
    },
    {
      no: "46",
      name: "Serbian",
      native: "Српски",
      code: "sr",
    },
    {
      no: "47",
      name: "Slovak",
      native: "Slovenčina",
      code: "sk",
    },
    {
      no: "48",
      name: "Slovenian",
      native: "Slovensko",
      code: "sl",
    },
    {
      no: "49",
      name: "Spanish",
      native: "Español",
      code: "es",
    },
    {
      no: "50",
      name: "Swahili",
      native: "Kiswahili",
      code: "sw",
    },
    {
      no: "51",
      name: "Swedish",
      native: "Svenska",
      code: "sv",
    },
    {
      no: "52",
      name: "Thai",
      native: "ไทย",
      code: "th",
    },
    {
      no: "53",
      name: "Turkish",
      native: "Türkçe",
      code: "tr",
    },
    {
      no: "54",
      name: "Ukrainian",
      native: "Українська",
      code: "uk",
    },
    {
      no: "55",
      name: "Urdu",
      native: "اردو",
      code: "ur",
    },
    {
      no: "56",
      name: "Vietnamese",
      native: "Tiếng Việt",
      code: "vi",
    },
    {
      no: "57",
      name: "Welsh",
      native: "Cymraeg",
      code: "cy",
    },
    {
      no: "58",
      name: "Yiddish",
      native: "ייִדיש",
      code: "yi",
    },
  ];

// const language = {
//   "am-ET": "Amharic",
//   "ar-SA": "Arabic",
//   "be-BY": "Bielarus",
//   "bem-ZM": "Bemba",
//   "bi-VU": "Bislama",
//   "bjs-BB": "Bajan",
//   "bn-IN": "Bengali",
//   "bo-CN": "Tibetan",
//   "br-FR": "Breton",
//   "bs-BA": "Bosnian",
//   "ca-ES": "Catalan",
//   "cop-EG": "Coptic",
//   "cs-CZ": "Czech",
//   "cy-GB": "Welsh",
//   "da-DK": "Danish",
//   "dz-BT": "Dzongkha",
//   "de-DE": "German",
//   "dv-MV": "Maldivian",
//   "el-GR": "Greek",
//   "en-GB": "English",
//   "es-ES": "Spanish",
//   "et-EE": "Estonian",
//   "eu-ES": "Basque",
//   "fa-IR": "Persian",
//   "fi-FI": "Finnish",
//   "fn-FNG": "Fanagalo",
//   "fo-FO": "Faroese",
//   "fr-FR": "French",
//   "gl-ES": "Galician",
//   "gu-IN": "Gujarati",
//   "ha-NE": "Hausa",
//   "he-IL": "Hebrew",
//   "hi-IN": "Hindi",
//   "hr-HR": "Croatian",
//   "hu-HU": "Hungarian",
//   "id-ID": "Indonesian",
//   "is-IS": "Icelandic",
//   "it-IT": "Italian",
//   "ja-JP": "Japanese",
//   "kk-KZ": "Kazakh",
//   "km-KM": "Khmer",
//   "kn-IN": "Kannada",
//   "ko-KR": "Korean",
//   "ku-TR": "Kurdish",
//   "ky-KG": "Kyrgyz",
//   "la-VA": "Latin",
//   "lo-LA": "Lao",
//   "lv-LV": "Latvian",
//   "men-SL": "Mende",
//   "mg-MG": "Malagasy",
//   "mi-NZ": "Maori",
//   "ms-MY": "Malay",
//   "mt-MT": "Maltese",
//   "my-MM": "Burmese",
//   "ne-NP": "Nepali",
//   "niu-NU": "Niuean",
//   "nl-NL": "Dutch",
//   "no-NO": "Norwegian",
//   "ny-MW": "Nyanja",
//   "ur-PK": "Pakistani",
//   "pau-PW": "Palauan",
//   "pa-IN": "Panjabi",
//   "ps-PK": "Pashto",
//   "pis-SB": "Pijin",
//   "pl-PL": "Polish",
//   "pt-PT": "Portuguese",
//   "rn-BI": "Kirundi",
//   "ro-RO": "Romanian",
//   "ru-RU": "Russian",
//   "sg-CF": "Sango",
//   "si-LK": "Sinhala",
//   "sk-SK": "Slovak",
//   "sm-WS": "Samoan",
//   "sn-ZW": "Shona",
//   "so-SO": "Somali",
//   "sq-AL": "Albanian",
//   "sr-RS": "Serbian",
//   "sv-SE": "Swedish",
//   "sw-SZ": "Swahili",
//   "ta-LK": "Tamil",
//   "te-IN": "Telugu",
//   "tet-TL": "Tetum",
//   "tg-TJ": "Tajik",
//   "th-TH": "Thai",
//   "ti-TI": "Tigrinya",
//   "tk-TM": "Turkmen",
//   "tl-PH": "Tagalog",
//   "tn-BW": "Tswana",
//   "to-TO": "Tongan",
//   "tr-TR": "Turkish",
//   "uk-UA": "Ukrainian",
//   "uz-UZ": "Uzbek",
//   "vi-VN": "Vietnamese",
//   "wo-SN": "Wolof",
//   "xh-ZA": "Xhosa",
//   "yi-YD": "Yiddish",
//   "zu-ZA": "Zulu"
// }