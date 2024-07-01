import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { CitiesState } from "./citiesTypes";

const initialState: CitiesState = {
  cities: [
    {
      value: "ishimbay",
      name: "Ишимбай",
    },
    {
      value: "kumertau",
      name: "Кумертау",
    },
    {
      value: "mezhgorye",
      name: "Межгорье",
    },
    {
      value: "meleuz",
      name: "Мелеуз",
    },
    {
      value: "neftekamsk",
      name: "Нефтекамск",
    },
    {
      value: "oktyabrsky",
      name: "Октябрьский",
    },
    {
      value: "salavat",
      name: "Салават",
    },
    {
      value: "sibay",
      name: "Сибай",
    },
    {
      value: "sterlitamak",
      name: "Стерлитамак",
    },
    {
      value: "tuymazy",
      name: "Туймазы",
    },
    {
      value: "ufa",
      name: "Уфа",
    },
    {
      value: "uchaly",
      name: "Учалы",
    },
    {
      value: "yanaul",
      name: "Янаул",
    },
    {
      value: "babushkin",
      name: "Бабушкин",
    },
    {
      value: "gusinoozyorsk",
      name: "Гусиноозёрск",
    },
    {
      value: "zakamensk",
      name: "Закаменск",
    },
    {
      value: "kyakhta",
      name: "Кяхта",
    },
    {
      value: "severobaykalsk",
      name: "Северобайкальск",
    },
    {
      value: "ulan_ude",
      name: "Улан-Удэ",
    },
    {
      value: "gorno_altaysk",
      name: "Горно-Алтайск",
    },
    {
      value: "maykop",
      name: "Майкоп",
    },
    {
      value: "adygeysk",
      name: "Адыгейск",
    },
    {
      value: "agidel",
      name: "Агидель",
    },
    {
      value: "baymak",
      name: "Баймак",
    },
    {
      value: "belebey",
      name: "Белебей",
    },
    {
      value: "beloretsk",
      name: "Белорецк",
    },
    {
      value: "birsk",
      name: "Бирск",
    },
    {
      value: "blagoveshchensk_bashkortostan",
      name: "Благовещенск",
    },
    {
      value: "davlekanovo",
      name: "Давлеканово",
    },
    {
      value: "dyurtyuli",
      name: "Дюртюли",
    },
    {
      value: "buynaksk",
      name: "Буйнакск",
    },
    {
      value: "dagestanskiye_ogni",
      name: "Дагестанские Огни",
    },
    {
      value: "derbent",
      name: "Дербент",
    },
    {
      value: "izberbash",
      name: "Избербаш",
    },
    {
      value: "kaspiysk",
      name: "Каспийск",
    },
    {
      value: "kizilyurt",
      name: "Кизилюрт",
    },
    {
      value: "kizlyar",
      name: "Кизляр",
    },
    {
      value: "makhachkala",
      name: "Махачкала",
    },
    {
      value: "khasavyurt",
      name: "Хасавюрт",
    },
    {
      value: "yuzhno_sukhokumsk",
      name: "Южно-Сухокумск",
    },
    {
      value: "karabulak",
      name: "Карабулак",
    },
    {
      value: "magas",
      name: "Магас",
    },
    {
      value: "malgobek",
      name: "Малгобек",
    },
    {
      value: "nazran",
      name: "Назрань",
    },
    {
      value: "sunzha",
      name: "Сунжа",
    },
    {
      value: "baksan",
      name: "Баксан",
    },
    {
      value: "maysky",
      name: "Майский",
    },
    {
      value: "nalchik",
      name: "Нальчик",
    },
    {
      value: "nartkala",
      name: "Нарткала",
    },
    {
      value: "prokhladny",
      name: "Прохладный",
    },
    {
      value: "terek",
      name: "Терек",
    },
    {
      value: "tyrnyauz",
      name: "Тырныауз",
    },
    {
      value: "chegem",
      name: "Чегем",
    },
    {
      value: "elista",
      name: "Элиста",
    },
    {
      value: "lagan",
      name: "Лагань",
    },
    {
      value: "gorodovikovsk",
      name: "Городовиковск",
    },
    {
      value: "karachayevsk",
      name: "Карачаевск",
    },
    {
      value: "teberda",
      name: "Теберда",
    },
    {
      value: "ust_dzheguta",
      name: "Усть-Джегута",
    },
    {
      value: "cherkessk",
      name: "Черкесск",
    },
    {
      value: "petrozavodsk",
      name: "Петрозаводск",
    },
    {
      value: "kondopoga",
      name: "Кондопога",
    },
    {
      value: "segezha",
      name: "Сегежа",
    },
    {
      value: "kostomuksha",
      name: "Костомукша",
    },
    {
      value: "sortavala",
      name: "Сортавала",
    },
    {
      value: "medvezhyegorsk",
      name: "Медвежьегорск",
    },
    {
      value: "kem",
      name: "Кемь",
    },
    {
      value: "pitkyaranta",
      name: "Питкяранта",
    },
    {
      value: "belomorsk",
      name: "Беломорск",
    },
    {
      value: "suoyarvi",
      name: "Суоярви",
    },
    {
      value: "pudozh",
      name: "Пудож",
    },
    {
      value: "olonets",
      name: "Олонец",
    },
    {
      value: "lakhdenpokhya",
      name: "Лахденпохья",
    },
    {
      value: "syktyvkar",
      name: "Сыктывкар",
    },
    {
      value: "ukhta",
      name: "Ухта",
    },
    {
      value: "vorkuta",
      name: "Воркута",
    },
    {
      value: "pechora",
      name: "Печора",
    },
    {
      value: "usinsk",
      name: "Усинск",
    },
    {
      value: "inta",
      name: "Инта",
    },
    {
      value: "sosnogorsk",
      name: "Сосногорск",
    },
    {
      value: "krasnoslobodsk_mordoviya",
      name: "Краснослободск",
    },
    {
      value: "ardatov",
      name: "Ардатов",
    },
    {
      value: "insar",
      name: "Инсар",
    },
    {
      value: "temnikov",
      name: "Темников",
    },
    {
      value: "aldan",
      name: "Алдан",
    },
    {
      value: "verkhoyansk",
      name: "Верхоянск",
    },
    {
      value: "vilyuysk",
      name: "Вилюйск",
    },
    {
      value: "lensk",
      name: "Ленск",
    },
    {
      value: "mirny",
      name: "Мирный",
    },
    {
      value: "neryungri",
      name: "Нерюнгри",
    },
    {
      value: "nyurba",
      name: "Нюрба",
    },
    {
      value: "olyokminsk",
      name: "Олёкминск",
    },
    {
      value: "pokrovsk",
      name: "Покровск",
    },
    {
      value: "srednekolymsk",
      name: "Среднеколымск",
    },
    {
      value: "tommot",
      name: "Томмот",
    },
    {
      value: "udachny",
      name: "Удачный",
    },
    {
      value: "yakutsk",
      name: "Якутск",
    },
    {
      value: "alagir",
      name: "Алагир",
    },
    {
      value: "ardon",
      name: "Ардон",
    },
    {
      value: "beslan",
      name: "Беслан",
    },
    {
      value: "yemva",
      name: "Емва",
    },
    {
      value: "vuktyl",
      name: "Вуктыл",
    },
    {
      value: "mikun",
      name: "Микунь",
    },
    {
      value: "yoshkar_ola",
      name: "Йошкар-Ола",
    },
    {
      value: "volzhsk",
      name: "Волжск",
    },
    {
      value: "kozmodemyansk",
      name: "Козьмодемьянск",
    },
    {
      value: "zvenigovo",
      name: "Звенигово",
    },
    {
      value: "saransk",
      name: "Саранск",
    },
    {
      value: "ruzayevka",
      name: "Рузаевка",
    },
    {
      value: "kovylkino",
      name: "Ковылкино",
    },
    {
      value: "vladikavkaz",
      name: "Владикавказ",
    },
    {
      value: "digora",
      name: "Дигора",
    },
    {
      value: "mozdok",
      name: "Моздок",
    },
    {
      value: "agryz",
      name: "Агрыз",
    },
    {
      value: "aznakayevo",
      name: "Азнакаево",
    },
    {
      value: "almetyevsk",
      name: "Альметьевск",
    },
    {
      value: "arsk",
      name: "Арск",
    },
    {
      value: "bavly",
      name: "Бавлы",
    },
    {
      value: "bolgar",
      name: "Болгар",
    },
    {
      value: "bugulma",
      name: "Бугульма",
    },
    {
      value: "buinsk",
      name: "Буинск",
    },
    {
      value: "yelabuga",
      name: "Елабуга",
    },
    {
      value: "zainsk",
      name: "Заинск",
    },
    {
      value: "zelenodolsk",
      name: "Зеленодольск",
    },
    {
      value: "innopolis",
      name: "Иннополис",
    },
    {
      value: "kazan",
      name: "Казань",
    },
    {
      value: "kukmor",
      name: "Кукмор",
    },
    {
      value: "laishevo",
      name: "Лаишево",
    },
    {
      value: "leninogorsk",
      name: "Лениногорск",
    },
    {
      value: "mamadysh",
      name: "Мамадыш",
    },
    {
      value: "chadan",
      name: "Чадан",
    },
    {
      value: "shagonar",
      name: "Шагонар",
    },
    {
      value: "izhevsk",
      name: "Ижевск",
    },
    {
      value: "sarapul",
      name: "Сарапул",
    },
    {
      value: "votkinsk",
      name: "Воткинск",
    },
    {
      value: "glazov",
      name: "Глазов",
    },
    {
      value: "mozhga",
      name: "Можга",
    },
    {
      value: "kambarka",
      name: "Камбарка",
    },
    {
      value: "abaza",
      name: "Абаза",
    },
    {
      value: "abakan",
      name: "Абакан",
    },
    {
      value: "sayanogorsk",
      name: "Саяногорск",
    },
    {
      value: "sorsk",
      name: "Сорск",
    },
    {
      value: "chernogorsk",
      name: "Черногорск",
    },
    {
      value: "cheboksary",
      name: "Чебоксары",
    },
    {
      value: "novocheboksarsk",
      name: "Новочебоксарск",
    },
    {
      value: "kanash",
      name: "Канаш",
    },
    {
      value: "alatyr",
      name: "Алатырь",
    },
    {
      value: "shumerlya",
      name: "Шумерля",
    },
    {
      value: "tsivilsk",
      name: "Цивильск",
    },
    {
      value: "kozlovka",
      name: "Козловка",
    },
    {
      value: "mendeleyevsk",
      name: "Менделеевск",
    },
    {
      value: "menzelinsk",
      name: "Мензелинск",
    },
    {
      value: "naberezhnye_chelny",
      name: "Набережные Челны",
    },
    {
      value: "nizhnekamsk",
      name: "Нижнекамск",
    },
    {
      value: "nurlat",
      name: "Нурлат",
    },
    {
      value: "tetyushi",
      name: "Тетюши",
    },
    {
      value: "chistopol",
      name: "Чистополь",
    },
    {
      value: "ak_dovurak",
      name: "Ак-Довурак",
    },
    {
      value: "kyzyl",
      name: "Кызыл",
    },
    {
      value: "turan",
      name: "Туран",
    },
    {
      value: "yadrin",
      name: "Ядрин",
    },
    {
      value: "mariinsky_posad",
      name: "Мариинский Посад",
    },
    {
      value: "aleysk",
      name: "Алейск",
    },
    {
      value: "barnaul",
      name: "Барнаул",
    },
    {
      value: "belokurikha",
      name: "Белокуриха",
    },
    {
      value: "biysk",
      name: "Бийск",
    },
    {
      value: "gornyak",
      name: "Горняк",
    },
    {
      value: "zarinsk",
      name: "Заринск",
    },
    {
      value: "zmeinogorsk",
      name: "Змеиногорск",
    },
    {
      value: "kamen_na_obi",
      name: "Камень-на-Оби",
    },
    {
      value: "novoaltaysk",
      name: "Новоалтайск",
    },
    {
      value: "rubtsovsk",
      name: "Рубцовск",
    },
    {
      value: "slavgorod",
      name: "Славгород",
    },
    {
      value: "yarovoye",
      name: "Яровое",
    },
    {
      value: "krasnodar",
      name: "Краснодар",
    },
    {
      value: "sochi",
      name: "Сочи",
    },
    {
      value: "novorossiysk",
      name: "Новороссийск",
    },
    {
      value: "armavir",
      name: "Армавир",
    },
    {
      value: "yeysk",
      name: "Ейск",
    },
    {
      value: "kropotkin",
      name: "Кропоткин",
    },
    {
      value: "slavyansk_na_kubani",
      name: "Славянск-на-Кубани",
    },
    {
      value: "tuapse",
      name: "Туапсе",
    },
    {
      value: "labinsk",
      name: "Лабинск",
    },
    {
      value: "anapa",
      name: "Анапа",
    },
    {
      value: "tikhoretsk",
      name: "Тихорецк",
    },
    {
      value: "krymsk",
      name: "Крымск",
    },
    {
      value: "gelendzhik",
      name: "Геленджик",
    },
    {
      value: "timashevsk",
      name: "Тимашёвск",
    },
    {
      value: "belorechensk",
      name: "Белореченск",
    },
    {
      value: "kurganinsk",
      name: "Курганинск",
    },
    {
      value: "ust_labinsk",
      name: "Усть-Лабинск",
    },
    {
      value: "korenovsk",
      name: "Кореновск",
    },
    {
      value: "apsheronsk",
      name: "Апшеронск",
    },
    {
      value: "temryuk",
      name: "Темрюк",
    },
    {
      value: "abinsk",
      name: "Абинск",
    },
    {
      value: "gulkevichi",
      name: "Гулькевичи",
    },
    {
      value: "novokubansk",
      name: "Новокубанск",
    },
    {
      value: "primorsko_akhtarsk",
      name: "Приморско-Ахтарск",
    },
    {
      value: "goryachy_klyuch",
      name: "Горячий Ключ",
    },
    {
      value: "khadyzhensk",
      name: "Хадыженск",
    },
    {
      value: "artyomovsk",
      name: "Артёмовск",
    },
    {
      value: "achinsk",
      name: "Ачинск",
    },
    {
      value: "bogotol",
      name: "Боготол",
    },
    {
      value: "borodino",
      name: "Бородино",
    },
    {
      value: "divnogorsk",
      name: "Дивногорск",
    },
    {
      value: "dudinka",
      name: "Дудинка",
    },
    {
      value: "yeniseysk",
      name: "Енисейск",
    },
    {
      value: "zheleznogorsk",
      name: "Железногорск",
    },
    {
      value: "zaozyorny",
      name: "Заозёрный",
    },
    {
      value: "zelenogorsk",
      name: "Зеленогорск",
    },
    {
      value: "igarka",
      name: "Игарка",
    },
    {
      value: "ilansky",
      name: "Иланский",
    },
    {
      value: "kansk",
      name: "Канск",
    },
    {
      value: "kodinsk",
      name: "Кодинск",
    },
    {
      value: "krasnoyarsk",
      name: "Красноярск",
    },
    {
      value: "lesosibirsk",
      name: "Лесосибирск",
    },
    {
      value: "minusinsk",
      name: "Минусинск",
    },
    {
      value: "nazarovo",
      name: "Назарово",
    },
    {
      value: "norilsk",
      name: "Норильск",
    },
    {
      value: "sosnovoborsk",
      name: "Сосновоборск",
    },
    {
      value: "nakhodka",
      name: "Находка",
    },
    {
      value: "partizansk",
      name: "Партизанск",
    },
    {
      value: "spassk_dalny",
      name: "Спасск-Дальний",
    },
    {
      value: "ussuriysk",
      name: "Уссурийск",
    },
    {
      value: "fokino",
      name: "Фокино",
    },
    {
      value: "stavropol",
      name: "Ставрополь",
    },
    {
      value: "pyatigorsk",
      name: "Пятигорск",
    },
    {
      value: "kislovodsk",
      name: "Кисловодск",
    },
    {
      value: "nevinnomyssk",
      name: "Невинномысск",
    },
    {
      value: "yessentuki",
      name: "Ессентуки",
    },
    {
      value: "mineralnye_vody",
      name: "Минеральные Воды",
    },
    {
      value: "mikhaylovsk",
      name: "Михайловск",
    },
    {
      value: "georgiyevsk",
      name: "Георгиевск",
    },
    {
      value: "budyonnovsk",
      name: "Будённовск",
    },
    {
      value: "izobilny",
      name: "Изобильный",
    },
    {
      value: "svetlograd",
      name: "Светлоград",
    },
    {
      value: "zelenokumsk",
      name: "Зеленокумск",
    },
    {
      value: "blagodarny",
      name: "Благодарный",
    },
    {
      value: "neftekumsk",
      name: "Нефтекумск",
    },
    {
      value: "novoalexandrovsk",
      name: "Новоалександровск",
    },
    {
      value: "uzhur",
      name: "Ужур",
    },
    {
      value: "uyar",
      name: "Уяр",
    },
    {
      value: "sharypovo",
      name: "Шарыпово",
    },
    {
      value: "vladivostok",
      name: "Владивосток",
    },
    {
      value: "arsenyev",
      name: "Арсеньев",
    },
    {
      value: "artyom",
      name: "Артём",
    },
    {
      value: "bolshoy_kamen",
      name: "Большой Камень",
    },
    {
      value: "dalnegorsk",
      name: "Дальнегорск",
    },
    {
      value: "dalnerechensk",
      name: "Дальнереченск",
    },
    {
      value: "lesozavodsk",
      name: "Лесозаводск",
    },
    {
      value: "novopavlovsk",
      name: "Новопавловск",
    },
    {
      value: "ipatovo",
      name: "Ипатово",
    },
    {
      value: "zheleznovodsk",
      name: "Железноводск",
    },
    {
      value: "lermontov",
      name: "Лермонтов",
    },
    {
      value: "khabarovsk",
      name: "Хабаровск",
    },
    {
      value: "amursk",
      name: "Амурск",
    },
    {
      value: "bikin",
      name: "Бикин",
    },
    {
      value: "vyazemsky",
      name: "Вяземский",
    },
    {
      value: "komsomolsk_on_amur",
      name: "Комсомольск-на-Амуре",
    },
    {
      value: "nikolayevsk_on_amur",
      name: "Николаевск-на-Амуре",
    },
    {
      value: "sovetskaya_gavan",
      name: "Советская Гавань",
    },
    {
      value: "belogorsk",
      name: "Белогорск",
    },
    {
      value: "blagoveshchensk",
      name: "Благовещенск",
    },
    {
      value: "zavitinsk",
      name: "Завитинск",
    },
    {
      value: "zeya",
      name: "Зея",
    },
    {
      value: "raychikhinsk",
      name: "Райчихинск",
    },
    {
      value: "svobodny",
      name: "Свободный",
    },
    {
      value: "skovorodino",
      name: "Сковородино",
    },
    {
      value: "tynda",
      name: "Тында",
    },
    {
      value: "tsiolkovsky",
      name: "Циолковский",
    },
    {
      value: "shimanovsk",
      name: "Шимановск",
    },
    {
      value: "arkhangelsk",
      name: "Архангельск",
    },
    {
      value: "severodvinsk",
      name: "Северодвинск",
    },
    {
      value: "kotlas",
      name: "Котлас",
    },
    {
      value: "novodvinsk",
      name: "Новодвинск",
    },
    {
      value: "koryazhma",
      name: "Коряжма",
    },
    {
      value: "velsk",
      name: "Вельск",
    },
    {
      value: "nyandoma",
      name: "Няндома",
    },
    {
      value: "onega",
      name: "Онега",
    },
    {
      value: "kargopol",
      name: "Каргополь",
    },
    {
      value: "shenkursk",
      name: "Шенкурск",
    },
    {
      value: "mezen",
      name: "Мезень",
    },
    {
      value: "mirny_arhangelskaya",
      name: "Мирный",
    },
    {
      value: "solvychegodsk",
      name: "Сольвычегодск",
    },
    {
      value: "astrakhan",
      name: "Астрахань",
    },
    {
      value: "akhtubinsk",
      name: "Ахтубинск",
    },
    {
      value: "znamensk",
      name: "Знаменск",
    },
    {
      value: "kharabali",
      name: "Харабали",
    },
    {
      value: "kamyzyak",
      name: "Камызяк",
    },
    {
      value: "narimanov",
      name: "Нариманов",
    },
    {
      value: "belgorod",
      name: "Белгород",
    },
    {
      value: "stary_oskol",
      name: "Старый Оскол",
    },
    {
      value: "gubkin",
      name: "Губкин",
    },
    {
      value: "shebekino",
      name: "Шебекино",
    },
    {
      value: "alexeyevka",
      name: "Алексеевка",
    },
    {
      value: "valuyki",
      name: "Валуйки",
    },
    {
      value: "stroitel",
      name: "Строитель",
    },
    {
      value: "novy_oskol",
      name: "Новый Оскол",
    },
    {
      value: "biryuch",
      name: "Бирюч",
    },
    {
      value: "grayvoron",
      name: "Грайворон",
    },
    {
      value: "pochep",
      name: "Почеп",
    },
    {
      value: "trubchevsk",
      name: "Трубчевск",
    },
    {
      value: "fokino_bryanskaya",
      name: "Фокино",
    },
    {
      value: "surazh",
      name: "Сураж",
    },
    {
      value: "mglin",
      name: "Мглин",
    },
    {
      value: "sevsk",
      name: "Севск",
    },
    {
      value: "zlynka",
      name: "Злынка",
    },
    {
      value: "vladimir",
      name: "Владимир",
    },
    {
      value: "kovrov",
      name: "Ковров",
    },
    {
      value: "murom",
      name: "Муром",
    },
    {
      value: "alexandrov",
      name: "Александров",
    },
    {
      value: "gus_khrustalny",
      name: "Гусь-Хрустальный",
    },
    {
      value: "kolchugino",
      name: "Кольчугино",
    },
    {
      value: "vyazniki",
      name: "Вязники",
    },
    {
      value: "kirzhach",
      name: "Киржач",
    },
    {
      value: "yuryev_polsky",
      name: "Юрьев-Польский",
    },
    {
      value: "sobinka",
      name: "Собинка",
    },
    {
      value: "raduzhny_vladimirskaya",
      name: "Радужный",
    },
    {
      value: "pokrov",
      name: "Покров",
    },
    {
      value: "lakinsk",
      name: "Лакинск",
    },
    {
      value: "korocha",
      name: "Короча",
    },
    {
      value: "bryansk",
      name: "Брянск",
    },
    {
      value: "klintsy",
      name: "Клинцы",
    },
    {
      value: "novozybkov",
      name: "Новозыбков",
    },
    {
      value: "dyatkovo",
      name: "Дятьково",
    },
    {
      value: "unecha",
      name: "Унеча",
    },
    {
      value: "karachev",
      name: "Карачев",
    },
    {
      value: "starodub",
      name: "Стародуб",
    },
    {
      value: "zhukovka",
      name: "Жуковка",
    },
    {
      value: "seltso",
      name: "Сельцо",
    },
    {
      value: "melenki",
      name: "Меленки",
    },
    {
      value: "karabanovo",
      name: "Карабаново",
    },
    {
      value: "petushki",
      name: "Петушки",
    },
    {
      value: "strunino",
      name: "Струнино",
    },
    {
      value: "gorokhovets",
      name: "Гороховец",
    },
    {
      value: "kameshkovo",
      name: "Камешково",
    },
    {
      value: "sudogda",
      name: "Судогда",
    },
    {
      value: "suzdal",
      name: "Суздаль",
    },
    {
      value: "kosteryovo",
      name: "Костерёво",
    },
    {
      value: "kurlovo",
      name: "Курлово",
    },
    {
      value: "volgograd",
      name: "Волгоград",
    },
    {
      value: "volzhsky",
      name: "Волжский",
    },
    {
      value: "dubovka",
      name: "Дубовка",
    },
    {
      value: "zhirnovsk",
      name: "Жирновск",
    },
    {
      value: "kalach_na_donu",
      name: "Калач-на-Дону",
    },
    {
      value: "kamyshin",
      name: "Камышин",
    },
    {
      value: "krasnoslobodsk",
      name: "Краснослободск",
    },
    {
      value: "kotelnikovo",
      name: "Котельниково",
    },
    {
      value: "kotovo",
      name: "Котово",
    },
    {
      value: "leninsk",
      name: "Ленинск",
    },
    {
      value: "mikhaylovka",
      name: "Михайловка",
    },
    {
      value: "nikolayevsk",
      name: "Николаевск",
    },
    {
      value: "novoanninsky",
      name: "Новоаннинский",
    },
    {
      value: "pallasovka",
      name: "Палласовка",
    },
    {
      value: "petrov_val",
      name: "Петров Вал",
    },
    {
      value: "serafimovich",
      name: "Серафимович",
    },
    {
      value: "surovikino",
      name: "Суровикино",
    },
    {
      value: "uryupinsk",
      name: "Урюпинск",
    },
    {
      value: "frolovo",
      name: "Фролово",
    },
    {
      value: "babayevo",
      name: "Бабаево",
    },
    {
      value: "belozersk",
      name: "Белозерск",
    },
    {
      value: "veliky_ustyug",
      name: "Великий Устюг",
    },
    {
      value: "vologda",
      name: "Вологда",
    },
    {
      value: "vytegra",
      name: "Вытегра",
    },
    {
      value: "gryazovets",
      name: "Грязовец",
    },
    {
      value: "kadnikov",
      name: "Кадников",
    },
    {
      value: "kirillov",
      name: "Кириллов",
    },
    {
      value: "krasavino",
      name: "Красавино",
    },
    {
      value: "nikolsk_vologodskaya",
      name: "Никольск",
    },
    {
      value: "sokol",
      name: "Сокол",
    },
    {
      value: "totma",
      name: "Тотьма",
    },
    {
      value: "ustyuzhna",
      name: "Устюжна",
    },
    {
      value: "kharovsk",
      name: "Харовск",
    },
    {
      value: "cherepovets",
      name: "Череповец",
    },
    {
      value: "voronezh",
      name: "Воронеж",
    },
    {
      value: "borisoglebsk",
      name: "Борисоглебск",
    },
    {
      value: "rossosh",
      name: "Россошь",
    },
    {
      value: "liski",
      name: "Лиски",
    },
    {
      value: "ostrogozhsk",
      name: "Острогожск",
    },
    {
      value: "novovoronezh",
      name: "Нововоронеж",
    },
    {
      value: "buturlinovka",
      name: "Бутурлиновка",
    },
    {
      value: "semiluki",
      name: "Семилуки",
    },
    {
      value: "pavlovsk",
      name: "Павловск",
    },
    {
      value: "kalach",
      name: "Калач",
    },
    {
      value: "bobrov",
      name: "Бобров",
    },
    {
      value: "povorino",
      name: "Поворино",
    },
    {
      value: "boguchar",
      name: "Богучар",
    },
    {
      value: "ertil",
      name: "Эртиль",
    },
    {
      value: "novokhopyorsk",
      name: "Новохопёрск",
    },
    {
      value: "ivanovo",
      name: "Иваново",
    },
    {
      value: "kineshma",
      name: "Кинешма",
    },
    {
      value: "shuya",
      name: "Шуя",
    },
    {
      value: "vichuga",
      name: "Вичуга",
    },
    {
      value: "furmanov",
      name: "Фурманов",
    },
    {
      value: "teykovo",
      name: "Тейково",
    },
    {
      value: "kokhma",
      name: "Кохма",
    },
    {
      value: "rodniki",
      name: "Родники",
    },
    {
      value: "privolzhsk",
      name: "Приволжск",
    },
    {
      value: "yuzha",
      name: "Южа",
    },
    {
      value: "zavolzhsk",
      name: "Заволжск",
    },
    {
      value: "navoloki",
      name: "Наволоки",
    },
    {
      value: "yuryevets",
      name: "Юрьевец",
    },
    {
      value: "komsomolsk",
      name: "Комсомольск",
    },
    {
      value: "puchezh",
      name: "Пучеж",
    },
    {
      value: "gavrilov_posad",
      name: "Гаврилов Посад",
    },
    {
      value: "plyos",
      name: "Плёс",
    },
    {
      value: "irkutsk",
      name: "Иркутск",
    },
    {
      value: "alzamay",
      name: "Алзамай",
    },
    {
      value: "angarsk",
      name: "Ангарск",
    },
    {
      value: "baykalsk",
      name: "Байкальск",
    },
    {
      value: "biryusinsk",
      name: "Бирюсинск",
    },
    {
      value: "bodaybo",
      name: "Бодайбо",
    },
    {
      value: "bratsk",
      name: "Братск",
    },
    {
      value: "vikhorevka",
      name: "Вихоревка",
    },
    {
      value: "zheleznogorsk_ilimsky",
      name: "Железногорск-Илимский",
    },
    {
      value: "zima",
      name: "Зима",
    },
    {
      value: "kirensk",
      name: "Киренск",
    },
    {
      value: "nizhneudinsk",
      name: "Нижнеудинск",
    },
    {
      value: "sayansk",
      name: "Саянск",
    },
    {
      value: "svirsk",
      name: "Свирск",
    },
    {
      value: "slyudyanka",
      name: "Слюдянка",
    },
    {
      value: "tayshet",
      name: "Тайшет",
    },
    {
      value: "tulun",
      name: "Тулун",
    },
    {
      value: "usolye_sibirskoye",
      name: "Усолье-Сибирское",
    },
    {
      value: "ust_ilimsk",
      name: "Усть-Илимск",
    },
    {
      value: "ust_kut",
      name: "Усть-Кут",
    },
    {
      value: "cheremkhovo",
      name: "Черемхово",
    },
    {
      value: "shelekhov",
      name: "Шелехов",
    },
    {
      value: "bagrationovsk",
      name: "Багратионовск",
    },
    {
      value: "baltiysk",
      name: "Балтийск",
    },
    {
      value: "gvardeysk",
      name: "Гвардейск",
    },
    {
      value: "guryevsk",
      name: "Гурьевск",
    },
    {
      value: "gusev",
      name: "Гусев",
    },
    {
      value: "zelenogradsk",
      name: "Зеленоградск",
    },
    {
      value: "kaliningrad",
      name: "Калининград",
    },
    {
      value: "krasnoznamensk_kaliningradskaya",
      name: "Краснознаменск",
    },
    {
      value: "ladushkin",
      name: "Ладушкин",
    },
    {
      value: "mamonovo",
      name: "Мамоново",
    },
    {
      value: "neman",
      name: "Неман",
    },
    {
      value: "nesterov",
      name: "Нестеров",
    },
    {
      value: "ozyorsk_kaliningradskaya",
      name: "Озёрск",
    },
    {
      value: "pionersky",
      name: "Пионерский",
    },
    {
      value: "polessk",
      name: "Полесск",
    },
    {
      value: "pravdinsk",
      name: "Правдинск",
    },
    {
      value: "primorsk_kaliningradskaya",
      name: "Приморск",
    },
    {
      value: "svetlogorsk",
      name: "Светлогорск",
    },
    {
      value: "svetly",
      name: "Светлый",
    },
    {
      value: "slavsk",
      name: "Славск",
    },
    {
      value: "sovetsk",
      name: "Советск",
    },
    {
      value: "chernyakhovsk",
      name: "Черняховск",
    },
    {
      value: "kaluga",
      name: "Калуга",
    },
    {
      value: "obninsk",
      name: "Обнинск",
    },
    {
      value: "lyudinovo",
      name: "Людиново",
    },
    {
      value: "kirov_kaluzhskaya",
      name: "Киров",
    },
    {
      value: "maloyaroslavets",
      name: "Малоярославец",
    },
    {
      value: "balabanovo",
      name: "Балабаново",
    },
    {
      value: "kozelsk",
      name: "Козельск",
    },
    {
      value: "kondrovo",
      name: "Кондрово",
    },
    {
      value: "sukhinichi",
      name: "Сухиничи",
    },
    {
      value: "borovsk",
      name: "Боровск",
    },
    {
      value: "sosensky",
      name: "Сосенский",
    },
    {
      value: "zhukov",
      name: "Жуков",
    },
    {
      value: "kremyonki",
      name: "Кремёнки",
    },
    {
      value: "yermolino",
      name: "Ермолино",
    },
    {
      value: "tarusa",
      name: "Таруса",
    },
    {
      value: "belousovo",
      name: "Белоусово",
    },
    {
      value: "medyn",
      name: "Медынь",
    },
    {
      value: "yukhnov",
      name: "Юхнов",
    },
    {
      value: "zhizdra",
      name: "Жиздра",
    },
    {
      value: "spas_demensk",
      name: "Спас-Деменск",
    },
    {
      value: "mosalsk",
      name: "Мосальск",
    },
    {
      value: "meshchovsk",
      name: "Мещовск",
    },
    {
      value: "vilyuchinsk",
      name: "Вилючинск",
    },
    {
      value: "yelizovo",
      name: "Елизово",
    },
    {
      value: "petropavlovsk_kamchatsky",
      name: "Петропавловск-Камчатский",
    },
    {
      value: "anzhero_sudzhensk",
      name: "Анжеро-Судженск",
    },
    {
      value: "belovo",
      name: "Белово",
    },
    {
      value: "berezovsky_kemerovskaya",
      name: "Берёзовский",
    },
    {
      value: "kaltan",
      name: "Калтан",
    },
    {
      value: "guryevsk_kemerovskaya",
      name: "Гурьевск",
    },
    {
      value: "kemerovo",
      name: "Кемерово",
    },
    {
      value: "kiselyovsk",
      name: "Киселёвск",
    },
    {
      value: "leninsk_kuznetsky",
      name: "Ленинск-Кузнецкий",
    },
    {
      value: "mariinsk",
      name: "Мариинск",
    },
    {
      value: "mezhdurechensk",
      name: "Междуреченск",
    },
    {
      value: "myski",
      name: "Мыски",
    },
    {
      value: "novokuznetsk",
      name: "Новокузнецк",
    },
    {
      value: "osinniki",
      name: "Осинники",
    },
    {
      value: "polysayevo",
      name: "Полысаево",
    },
    {
      value: "prokopyevsk",
      name: "Прокопьевск",
    },
    {
      value: "salair",
      name: "Салаир",
    },
    {
      value: "tayga",
      name: "Тайга",
    },
    {
      value: "tashtagol",
      name: "Таштагол",
    },
    {
      value: "topki",
      name: "Топки",
    },
    {
      value: "yurga",
      name: "Юрга",
    },
    {
      value: "kirov",
      name: "Киров",
    },
    {
      value: "kirovo_chepetsk",
      name: "Кирово-Чепецк",
    },
    {
      value: "vyatskiye_polyany",
      name: "Вятские Поляны",
    },
    {
      value: "slobodskoy",
      name: "Слободской",
    },
    {
      value: "kotelnich",
      name: "Котельнич",
    },
    {
      value: "omutninsk",
      name: "Омутнинск",
    },
    {
      value: "yaransk",
      name: "Яранск",
    },
    {
      value: "sovetsk_kirovskaya",
      name: "Советск",
    },
    {
      value: "sosnovka",
      name: "Сосновка",
    },
    {
      value: "belaya_kholunitsa",
      name: "Белая Холуница",
    },
    {
      value: "zuyevka",
      name: "Зуевка",
    },
    {
      value: "luza",
      name: "Луза",
    },
    {
      value: "kirs",
      name: "Кирс",
    },
    {
      value: "urzhum",
      name: "Уржум",
    },
    {
      value: "nolinsk",
      name: "Нолинск",
    },
    {
      value: "malmyzh",
      name: "Малмыж",
    },
    {
      value: "orlov",
      name: "Орлов",
    },
    {
      value: "murashi",
      name: "Мураши",
    },
    {
      value: "kostroma",
      name: "Кострома",
    },
    {
      value: "buy",
      name: "Буй",
    },
    {
      value: "sharya",
      name: "Шарья",
    },
    {
      value: "nerekhta",
      name: "Нерехта",
    },
    {
      value: "manturovo",
      name: "Мантурово",
    },
    {
      value: "volgorechensk",
      name: "Волгореченск",
    },
    {
      value: "galich",
      name: "Галич",
    },
    {
      value: "neya",
      name: "Нея",
    },
    {
      value: "makaryev",
      name: "Макарьев",
    },
    {
      value: "soligalich",
      name: "Солигалич",
    },
    {
      value: "chukhloma",
      name: "Чухлома",
    },
    {
      value: "kologriv",
      name: "Кологрив",
    },
    {
      value: "kurgan",
      name: "Курган",
    },
    {
      value: "dalmatovo",
      name: "Далматово",
    },
    {
      value: "kataysk",
      name: "Катайск",
    },
    {
      value: "kurtamysh",
      name: "Куртамыш",
    },
    {
      value: "makushino",
      name: "Макушино",
    },
    {
      value: "petukhovo",
      name: "Петухово",
    },
    {
      value: "shadrinsk",
      name: "Шадринск",
    },
    {
      value: "shumikha",
      name: "Шумиха",
    },
    {
      value: "shchuchye",
      name: "Щучье",
    },
    {
      value: "kursk",
      name: "Курск",
    },
    {
      value: "dmitriyev",
      name: "Дмитриев",
    },
    {
      value: "zheleznogorsk_kurskaya",
      name: "Железногорск",
    },
    {
      value: "kurchatov",
      name: "Курчатов",
    },
    {
      value: "lgov",
      name: "Льгов",
    },
    {
      value: "oboyan",
      name: "Обоянь",
    },
    {
      value: "rylsk",
      name: "Рыльск",
    },
    {
      value: "sudzha",
      name: "Суджа",
    },
    {
      value: "fatezh",
      name: "Фатеж",
    },
    {
      value: "shchigry",
      name: "Щигры",
    },
    {
      value: "boksitogorsk",
      name: "Бокситогорск",
    },
    {
      value: "vsevolozhsk",
      name: "Всеволожск",
    },
    {
      value: "volosovo",
      name: "Волосово",
    },
    {
      value: "volkhov",
      name: "Волхов",
    },
    {
      value: "vyborg",
      name: "Выборг",
    },
    {
      value: "vysotsk",
      name: "Высоцк",
    },
    {
      value: "gatchina",
      name: "Гатчина",
    },
    {
      value: "ivangorod",
      name: "Ивангород",
    },
    {
      value: "kamennogorsk",
      name: "Каменногорск",
    },
    {
      value: "kingisepp",
      name: "Кингисепп",
    },
    {
      value: "kirishi",
      name: "Кириши",
    },
    {
      value: "kirovsk_leningradskaya",
      name: "Кировск",
    },
    {
      value: "kommunar",
      name: "Коммунар",
    },
    {
      value: "koltushi",
      name: "Колтуши",
    },
    {
      value: "kudrovo",
      name: "Кудрово",
    },
    {
      value: "lodeynoye_pole",
      name: "Лодейное Поле",
    },
    {
      value: "luga",
      name: "Луга",
    },
    {
      value: "lyuban",
      name: "Любань",
    },
    {
      value: "murino",
      name: "Мурино",
    },
    {
      value: "nikolskoye",
      name: "Никольское",
    },
    {
      value: "novaya_ladoga",
      name: "Новая Ладога",
    },
    {
      value: "otradnoye",
      name: "Отрадное",
    },
    {
      value: "pikalyovo",
      name: "Пикалёво",
    },
    {
      value: "podporozhye",
      name: "Подпорожье",
    },
    {
      value: "primorsk",
      name: "Приморск",
    },
    {
      value: "priozersk",
      name: "Приозерск",
    },
    {
      value: "saint_petersburg",
      name: "Санкт-Петербург",
    },
    {
      value: "svetogorsk",
      name: "Светогорск",
    },
    {
      value: "sertolovo",
      name: "Сертолово",
    },
    {
      value: "slantsy",
      name: "Сланцы",
    },
    {
      value: "sosnovy_bor",
      name: "Сосновый Бор",
    },
    {
      value: "syasstroy",
      name: "Сясьстрой",
    },
    {
      value: "tikhvin",
      name: "Тихвин",
    },
    {
      value: "tosno",
      name: "Тосно",
    },
    {
      value: "shlisselburg",
      name: "Шлиссельбург",
    },
    {
      value: "lipetsk",
      name: "Липецк",
    },
    {
      value: "yelets",
      name: "Елец",
    },
    {
      value: "gryazi",
      name: "Грязи",
    },
    {
      value: "lebedyan",
      name: "Лебедянь",
    },
    {
      value: "dankov",
      name: "Данков",
    },
    {
      value: "usman",
      name: "Усмань",
    },
    {
      value: "chaplygin",
      name: "Чаплыгин",
    },
    {
      value: "zadonsk",
      name: "Задонск",
    },
    {
      value: "magadan",
      name: "Магадан",
    },
    {
      value: "susuman",
      name: "Сусуман",
    },
    {
      value: "moscow",
      name: "Москва",
    },
    {
      value: "aprelevka",
      name: "Апрелевка",
    },
    {
      value: "balashikha",
      name: "Балашиха",
    },
    {
      value: "beloozyorsky",
      name: "Белоозёрский",
    },
    {
      value: "bronnitsy",
      name: "Бронницы",
    },
    {
      value: "vereya",
      name: "Верея",
    },
    {
      value: "vidnoye",
      name: "Видное",
    },
    {
      value: "volokolamsk",
      name: "Волоколамск",
    },
    {
      value: "voskresensk",
      name: "Воскресенск",
    },
    {
      value: "vysokovsk",
      name: "Высоковск",
    },
    {
      value: "golitsyno",
      name: "Голицыно",
    },
    {
      value: "dedovsk",
      name: "Дедовск",
    },
    {
      value: "dzerzhinsky",
      name: "Дзержинский",
    },
    {
      value: "dmitrov",
      name: "Дмитров",
    },
    {
      value: "dolgoprudny",
      name: "Долгопрудный",
    },
    {
      value: "domodedovo",
      name: "Домодедово",
    },
    {
      value: "drezna",
      name: "Дрезна",
    },
    {
      value: "dubna",
      name: "Дубна",
    },
    {
      value: "yegoryevsk",
      name: "Егорьевск",
    },
    {
      value: "zhukovsky",
      name: "Жуковский",
    },
    {
      value: "zaraysk",
      name: "Зарайск",
    },
    {
      value: "zvenigorod",
      name: "Звенигород",
    },
    {
      value: "ivanteyevka",
      name: "Ивантеевка",
    },
    {
      value: "istra",
      name: "Истра",
    },
    {
      value: "kashira",
      name: "Кашира",
    },
    {
      value: "klin",
      name: "Клин",
    },
    {
      value: "kolomna",
      name: "Коломна",
    },
    {
      value: "korolyov",
      name: "Королёв",
    },
    {
      value: "kotelniki",
      name: "Котельники",
    },
    {
      value: "krasnoarmeysk",
      name: "Красноармейск",
    },
    {
      value: "krasnogorsk",
      name: "Красногорск",
    },
    {
      value: "krasnozavodsk",
      name: "Краснозаводск",
    },
    {
      value: "krasnoznamensk",
      name: "Краснознаменск",
    },
    {
      value: "kubinka",
      name: "Кубинка",
    },
    {
      value: "kurovskoye",
      name: "Куровское",
    },
    {
      value: "likino_dulyovo",
      name: "Ликино-Дулёво",
    },
    {
      value: "lobnya",
      name: "Лобня",
    },
    {
      value: "losino_petrovsky",
      name: "Лосино-Петровский",
    },
    {
      value: "lukhovitsy",
      name: "Луховицы",
    },
    {
      value: "lytkarino",
      name: "Лыткарино",
    },
    {
      value: "lyubertsy",
      name: "Люберцы",
    },
    {
      value: "mozhaysk",
      name: "Можайск",
    },
    {
      value: "mytishchi",
      name: "Мытищи",
    },
    {
      value: "naro_fominsk",
      name: "Наро-Фоминск",
    },
    {
      value: "noginsk",
      name: "Ногинск",
    },
    {
      value: "odintsovo",
      name: "Одинцово",
    },
    {
      value: "ozyory",
      name: "Озёры",
    },
    {
      value: "orekhovo_zuyevo",
      name: "Орехово-Зуево",
    },
    {
      value: "pavlovsky_posad",
      name: "Павловский Посад",
    },
    {
      value: "peresvet",
      name: "Пересвет",
    },
    {
      value: "podolsk",
      name: "Подольск",
    },
    {
      value: "protvino",
      name: "Протвино",
    },
    {
      value: "pushkino",
      name: "Пушкино",
    },
    {
      value: "pushchino",
      name: "Пущино",
    },
    {
      value: "ramenskoye",
      name: "Раменское",
    },
    {
      value: "reutov",
      name: "Реутов",
    },
    {
      value: "roshal",
      name: "Рошаль",
    },
    {
      value: "ruza",
      name: "Руза",
    },
    {
      value: "sergiyev_posad",
      name: "Сергиев Посад",
    },
    {
      value: "serpukhov",
      name: "Серпухов",
    },
    {
      value: "solnechnogorsk",
      name: "Солнечногорск",
    },
    {
      value: "staraya_kupavna",
      name: "Старая Купавна",
    },
    {
      value: "stupino",
      name: "Ступино",
    },
    {
      value: "taldom",
      name: "Талдом",
    },
    {
      value: "fryazino",
      name: "Фрязино",
    },
    {
      value: "khimki",
      name: "Химки",
    },
    {
      value: "khotkovo",
      name: "Хотьково",
    },
    {
      value: "chernogolovka",
      name: "Черноголовка",
    },
    {
      value: "chekhov",
      name: "Чехов",
    },
    {
      value: "shatura",
      name: "Шатура",
    },
    {
      value: "shchyolkovo",
      name: "Щёлково",
    },
    {
      value: "elektrogorsk",
      name: "Электрогорск",
    },
    {
      value: "elektrostal",
      name: "Электросталь",
    },
    {
      value: "elektrougli",
      name: "Электроугли",
    },
    {
      value: "yakhroma",
      name: "Яхрома",
    },
    {
      value: "apatity",
      name: "Апатиты",
    },
    {
      value: "gadzhiyevo",
      name: "Гаджиево",
    },
    {
      value: "zaozyorsk",
      name: "Заозёрск",
    },
    {
      value: "zapolyarny",
      name: "Заполярный",
    },
    {
      value: "kandalaksha",
      name: "Кандалакша",
    },
    {
      value: "kirovsk",
      name: "Кировск",
    },
    {
      value: "kovdor",
      name: "Ковдор",
    },
    {
      value: "kola",
      name: "Кола",
    },
    {
      value: "monchegorsk",
      name: "Мончегорск",
    },
    {
      value: "murmansk",
      name: "Мурманск",
    },
    {
      value: "olenegorsk",
      name: "Оленегорск",
    },
    {
      value: "ostrovnoy",
      name: "Островной",
    },
    {
      value: "polyarnye_zori",
      name: "Полярные Зори",
    },
    {
      value: "polyarny",
      name: "Полярный",
    },
    {
      value: "severomorsk",
      name: "Североморск",
    },
    {
      value: "zavolzhye",
      name: "Заволжье",
    },
    {
      value: "bogorodsk",
      name: "Богородск",
    },
    {
      value: "kulebaki",
      name: "Кулебаки",
    },
    {
      value: "gorodets",
      name: "Городец",
    },
    {
      value: "semyonov",
      name: "Семёнов",
    },
    {
      value: "lyskovo",
      name: "Лысково",
    },
    {
      value: "sergach",
      name: "Сергач",
    },
    {
      value: "shakhunya",
      name: "Шахунья",
    },
    {
      value: "navashino",
      name: "Навашино",
    },
    {
      value: "lukoyanov",
      name: "Лукоянов",
    },
    {
      value: "pervomaysk",
      name: "Первомайск",
    },
    {
      value: "chkalovsk",
      name: "Чкаловск",
    },
    {
      value: "uren",
      name: "Урень",
    },
    {
      value: "vorsma",
      name: "Ворсма",
    },
    {
      value: "volodarsk",
      name: "Володарск",
    },
    {
      value: "perevoz",
      name: "Перевоз",
    },
    {
      value: "vetluga",
      name: "Ветлуга",
    },
    {
      value: "knyaginino",
      name: "Княгинино",
    },
    {
      value: "gorbatov",
      name: "Горбатов",
    },
    {
      value: "veliky_novgorod",
      name: "Великий Новгород",
    },
    {
      value: "snezhnogorsk",
      name: "Снежногорск",
    },
    {
      value: "nizhny_novgorod",
      name: "Нижний Новгород",
    },
    {
      value: "dzerzhinsk",
      name: "Дзержинск",
    },
    {
      value: "arzamas",
      name: "Арзамас",
    },
    {
      value: "sarov",
      name: "Саров",
    },
    {
      value: "bor",
      name: "Бор",
    },
    {
      value: "kstovo",
      name: "Кстово",
    },
    {
      value: "pavlovo",
      name: "Павлово",
    },
    {
      value: "vyksa",
      name: "Выкса",
    },
    {
      value: "balakhna",
      name: "Балахна",
    },
    {
      value: "borovichi",
      name: "Боровичи",
    },
    {
      value: "staraya_russa",
      name: "Старая Русса",
    },
    {
      value: "pestovo",
      name: "Пестово",
    },
    {
      value: "valday",
      name: "Валдай",
    },
    {
      value: "chudovo",
      name: "Чудово",
    },
    {
      value: "malaya_vishera",
      name: "Малая Вишера",
    },
    {
      value: "okulovka",
      name: "Окуловка",
    },
    {
      value: "soltsy",
      name: "Сольцы",
    },
    {
      value: "kholm",
      name: "Холм",
    },
    {
      value: "novosibirsk",
      name: "Новосибирск",
    },
    {
      value: "barabinsk",
      name: "Барабинск",
    },
    {
      value: "berdsk",
      name: "Бердск",
    },
    {
      value: "bolotnoye",
      name: "Болотное",
    },
    {
      value: "iskitim",
      name: "Искитим",
    },
    {
      value: "karasuk",
      name: "Карасук",
    },
    {
      value: "kargat",
      name: "Каргат",
    },
    {
      value: "kuybyshev",
      name: "Куйбышев",
    },
    {
      value: "kupino",
      name: "Купино",
    },
    {
      value: "ob",
      name: "Обь",
    },
    {
      value: "tatarsk",
      name: "Татарск",
    },
    {
      value: "toguchin",
      name: "Тогучин",
    },
    {
      value: "cherepanovo",
      name: "Черепаново",
    },
    {
      value: "chulym",
      name: "Чулым",
    },
    {
      value: "omsk",
      name: "Омск",
    },
    {
      value: "isilkul",
      name: "Исилькуль",
    },
    {
      value: "kalachinsk",
      name: "Калачинск",
    },
    {
      value: "nazyvayevsk",
      name: "Называевск",
    },
    {
      value: "tara",
      name: "Тара",
    },
    {
      value: "tyukalinsk",
      name: "Тюкалинск",
    },
    {
      value: "orenburg",
      name: "Оренбург",
    },
    {
      value: "orsk",
      name: "Орск",
    },
    {
      value: "novotroitsk",
      name: "Новотроицк",
    },
    {
      value: "buzuluk",
      name: "Бузулук",
    },
    {
      value: "buguruslan",
      name: "Бугуруслан",
    },
    {
      value: "sorochinsk",
      name: "Сорочинск",
    },
    {
      value: "sol_iletsk",
      name: "Соль-Илецк",
    },
    {
      value: "gay",
      name: "Гай",
    },
    {
      value: "mednogorsk",
      name: "Медногорск",
    },
    {
      value: "kuvandyk",
      name: "Кувандык",
    },
    {
      value: "abdulino",
      name: "Абдулино",
    },
    {
      value: "yasny",
      name: "Ясный",
    },
    {
      value: "oryol",
      name: "Орёл",
    },
    {
      value: "livny",
      name: "Ливны",
    },
    {
      value: "mtsensk",
      name: "Мценск",
    },
    {
      value: "bolkhov",
      name: "Болхов",
    },
    {
      value: "dmitrovsk_orlovskiy",
      name: "Дмитровск",
    },
    {
      value: "novosil",
      name: "Новосиль",
    },
    {
      value: "maloarkhangelsk",
      name: "Малоархангельск",
    },
    {
      value: "belinsky",
      name: "Белинский",
    },
    {
      value: "gorodishche",
      name: "Городище",
    },
    {
      value: "zarechny",
      name: "Заречный",
    },
    {
      value: "kamenka",
      name: "Каменка",
    },
    {
      value: "kuznetsk",
      name: "Кузнецк",
    },
    {
      value: "nizhny_lomov",
      name: "Нижний Ломов",
    },
    {
      value: "nikolsk",
      name: "Никольск",
    },
    {
      value: "penza",
      name: "Пенза",
    },
    {
      value: "serdobsk",
      name: "Сердобск",
    },
    {
      value: "spassk",
      name: "Спасск",
    },
    {
      value: "sursk",
      name: "Сурск",
    },
    {
      value: "perm",
      name: "Пермь",
    },
    {
      value: "berezniki",
      name: "Березники",
    },
    {
      value: "solikamsk",
      name: "Соликамск",
    },
    {
      value: "chaykovsky",
      name: "Чайковский",
    },
    {
      value: "kungur",
      name: "Кунгур",
    },
    {
      value: "lysva",
      name: "Лысьва",
    },
    {
      value: "krasnokamsk",
      name: "Краснокамск",
    },
    {
      value: "chusovoy",
      name: "Чусовой",
    },
    {
      value: "dobryanka",
      name: "Добрянка",
    },
    {
      value: "chernushka",
      name: "Чернушка",
    },
    {
      value: "kudymkar",
      name: "Кудымкар",
    },
    {
      value: "gubakha",
      name: "Губаха",
    },
    {
      value: "vereshchagino",
      name: "Верещагино",
    },
    {
      value: "osa",
      name: "Оса",
    },
    {
      value: "nytva",
      name: "Нытва",
    },
    {
      value: "kizel",
      name: "Кизел",
    },
    {
      value: "krasnovishersk",
      name: "Красновишерск",
    },
    {
      value: "ochyor",
      name: "Очёр",
    },
    {
      value: "alexandrovsk",
      name: "Александровск",
    },
    {
      value: "gornozavodsk",
      name: "Горнозаводск",
    },
    {
      value: "gremyachinsk",
      name: "Гремячинск",
    },
    {
      value: "okhansk",
      name: "Оханск",
    },
    {
      value: "usolye",
      name: "Усолье",
    },
    {
      value: "cherdyn",
      name: "Чердынь",
    },
    {
      value: "chyormoz",
      name: "Чёрмоз",
    },
    {
      value: "velikiye_luki",
      name: "Великие Луки",
    },
    {
      value: "gdov",
      name: "Гдов",
    },
    {
      value: "dno",
      name: "Дно",
    },
    {
      value: "nevel",
      name: "Невель",
    },
    {
      value: "novorzhev",
      name: "Новоржев",
    },
    {
      value: "novosokolniki",
      name: "Новосокольники",
    },
    {
      value: "opochka",
      name: "Опочка",
    },
    {
      value: "ostrov",
      name: "Остров",
    },
    {
      value: "pechory",
      name: "Печоры",
    },
    {
      value: "porkhov",
      name: "Порхов",
    },
    {
      value: "pskov",
      name: "Псков",
    },
    {
      value: "pustoshka",
      name: "Пустошка",
    },
    {
      value: "pytalovo",
      name: "Пыталово",
    },
    {
      value: "sebezh",
      name: "Себеж",
    },
    {
      value: "rostov_on_don",
      name: "Ростов-на-Дону",
    },
    {
      value: "taganrog",
      name: "Таганрог",
    },
    {
      value: "shakhty",
      name: "Шахты",
    },
    {
      value: "volgodonsk",
      name: "Волгодонск",
    },
    {
      value: "novocherkassk",
      name: "Новочеркасск",
    },
    {
      value: "bataysk",
      name: "Батайск",
    },
    {
      value: "novoshakhtinsk",
      name: "Новошахтинск",
    },
    {
      value: "kamensk_shakhtinsky",
      name: "Каменск-Шахтинский",
    },
    {
      value: "azov",
      name: "Азов",
    },
    {
      value: "gukovo",
      name: "Гуково",
    },
    {
      value: "salsk",
      name: "Сальск",
    },
    {
      value: "donetsk",
      name: "Донецк",
    },
    {
      value: "tsimlyansk",
      name: "Цимлянск",
    },
    {
      value: "ryazan",
      name: "Рязань",
    },
    {
      value: "kasimov",
      name: "Касимов",
    },
    {
      value: "skopin",
      name: "Скопин",
    },
    {
      value: "sasovo",
      name: "Сасово",
    },
    {
      value: "ryazhsk",
      name: "Ряжск",
    },
    {
      value: "novomichurinsk",
      name: "Новомичуринск",
    },
    {
      value: "rybnoye",
      name: "Рыбное",
    },
    {
      value: "korablino",
      name: "Кораблино",
    },
    {
      value: "mikhaylov",
      name: "Михайлов",
    },
    {
      value: "spassk_ryazansky",
      name: "Спасск-Рязанский",
    },
    {
      value: "shatsk",
      name: "Шацк",
    },
    {
      value: "spas_klepiki",
      name: "Спас-Клепики",
    },
    {
      value: "samara",
      name: "Самара",
    },
    {
      value: "tolyatti",
      name: "Тольятти",
    },
    {
      value: "syzran",
      name: "Сызрань",
    },
    {
      value: "novokuybyshevsk",
      name: "Новокуйбышевск",
    },
    {
      value: "chapayevsk",
      name: "Чапаевск",
    },
    {
      value: "zhigulyovsk",
      name: "Жигулёвск",
    },
    {
      value: "otradny",
      name: "Отрадный",
    },
    {
      value: "belaya_kalitva",
      name: "Белая Калитва",
    },
    {
      value: "aksay",
      name: "Аксай",
    },
    {
      value: "krasny_sulin",
      name: "Красный Сулин",
    },
    {
      value: "millerovo",
      name: "Миллерово",
    },
    {
      value: "morozovsk",
      name: "Морозовск",
    },
    {
      value: "zernograd",
      name: "Зерноград",
    },
    {
      value: "semikarakorsk",
      name: "Семикаракорск",
    },
    {
      value: "zverevo",
      name: "Зверево",
    },
    {
      value: "proletarsk",
      name: "Пролетарск",
    },
    {
      value: "konstantinovsk",
      name: "Константиновск",
    },
    {
      value: "kinel",
      name: "Кинель",
    },
    {
      value: "pokhvistnevo",
      name: "Похвистнево",
    },
    {
      value: "oktyabrsk",
      name: "Октябрьск",
    },
    {
      value: "neftegorsk",
      name: "Нефтегорск",
    },
    {
      value: "saratov",
      name: "Саратов",
    },
    {
      value: "engels",
      name: "Энгельс",
    },
    {
      value: "balakovo",
      name: "Балаково",
    },
    {
      value: "balashov",
      name: "Балашов",
    },
    {
      value: "volsk",
      name: "Вольск",
    },
    {
      value: "pugachyov",
      name: "Пугачёв",
    },
    {
      value: "rtishchevo",
      name: "Ртищево",
    },
    {
      value: "marks",
      name: "Маркс",
    },
    {
      value: "petrovsk",
      name: "Петровск",
    },
    {
      value: "atkarsk",
      name: "Аткарск",
    },
    {
      value: "krasnoarmeysk_saratovskaya",
      name: "Красноармейск",
    },
    {
      value: "yershov",
      name: "Ершов",
    },
    {
      value: "novouzensk",
      name: "Новоузенск",
    },
    {
      value: "kalininsk",
      name: "Калининск",
    },
    {
      value: "krasny_kut",
      name: "Красный Кут",
    },
    {
      value: "khvalynsk",
      name: "Хвалынск",
    },
    {
      value: "arkadak",
      name: "Аркадак",
    },
    {
      value: "shikhany",
      name: "Шиханы",
    },
    {
      value: "alexandrovsk_sakhalinsky",
      name: "Александровск-Сахалинский",
    },
    {
      value: "aniva",
      name: "Анива",
    },
    {
      value: "dolinsk",
      name: "Долинск",
    },
    {
      value: "korsakov",
      name: "Корсаков",
    },
    {
      value: "kurilsk",
      name: "Курильск",
    },
    {
      value: "makarov",
      name: "Макаров",
    },
    {
      value: "nevelsk",
      name: "Невельск",
    },
    {
      value: "okha",
      name: "Оха",
    },
    {
      value: "poronaysk",
      name: "Поронайск",
    },
    {
      value: "severo_kurilsk",
      name: "Северо-Курильск",
    },
    {
      value: "tomari",
      name: "Томари",
    },
    {
      value: "uglegorsk",
      name: "Углегорск",
    },
    {
      value: "kholmsk",
      name: "Холмск",
    },
    {
      value: "yuzhno_sakhalinsk",
      name: "Южно-Сахалинск",
    },
    {
      value: "yekaterinburg",
      name: "Екатеринбург",
    },
    {
      value: "alapayevsk",
      name: "Алапаевск",
    },
    {
      value: "aramil",
      name: "Арамиль",
    },
    {
      value: "artyomovsky",
      name: "Артёмовский",
    },
    {
      value: "asbest",
      name: "Асбест",
    },
    {
      value: "berezovsky",
      name: "Берёзовский",
    },
    {
      value: "bogdanovich",
      name: "Богданович",
    },
    {
      value: "verkhny_tagil",
      name: "Верхний Тагил",
    },
    {
      value: "verkhnyaya_pyshma",
      name: "Верхняя Пышма",
    },
    {
      value: "verkhnyaya_salda",
      name: "Верхняя Салда",
    },
    {
      value: "verkhnyaya_tura",
      name: "Верхняя Тура",
    },
    {
      value: "verkhoturye",
      name: "Верхотурье",
    },
    {
      value: "volchansk",
      name: "Волчанск",
    },
    {
      value: "degtyarsk",
      name: "Дегтярск",
    },
    {
      value: "zarechny_sverdlovskaya",
      name: "Заречный",
    },
    {
      value: "ivdel",
      name: "Ивдель",
    },
    {
      value: "irbit",
      name: "Ирбит",
    },
    {
      value: "kamensk_uralsky",
      name: "Каменск-Уральский",
    },
    {
      value: "kamyshlov",
      name: "Камышлов",
    },
    {
      value: "karpinsk",
      name: "Карпинск",
    },
    {
      value: "kachkanar",
      name: "Качканар",
    },
    {
      value: "kirovgrad",
      name: "Кировград",
    },
    {
      value: "krasnoturyinsk",
      name: "Краснотурьинск",
    },
    {
      value: "krasnouralsk",
      name: "Красноуральск",
    },
    {
      value: "krasnoufimsk",
      name: "Красноуфимск",
    },
    {
      value: "kushva",
      name: "Кушва",
    },
    {
      value: "lesnoy",
      name: "Лесной",
    },
    {
      value: "mikhaylovsk_sverdlovskaya",
      name: "Михайловск",
    },
    {
      value: "nevyansk",
      name: "Невьянск",
    },
    {
      value: "nizhniye_sergi",
      name: "Нижние Серги",
    },
    {
      value: "nizhny_tagil",
      name: "Нижний Тагил",
    },
    {
      value: "nizhnyaya_salda",
      name: "Нижняя Салда",
    },
    {
      value: "nizhnyaya_tura",
      name: "Нижняя Тура",
    },
    {
      value: "novaya_lyalya",
      name: "Новая Ляля",
    },
    {
      value: "novouralsk",
      name: "Новоуральск",
    },
    {
      value: "pervouralsk",
      name: "Первоуральск",
    },
    {
      value: "polevskoy",
      name: "Полевской",
    },
    {
      value: "revda",
      name: "Ревда",
    },
    {
      value: "rezh",
      name: "Реж",
    },
    {
      value: "severouralsk",
      name: "Североуральск",
    },
    {
      value: "serov",
      name: "Серов",
    },
    {
      value: "sredneuralsk",
      name: "Среднеуральск",
    },
    {
      value: "sukhoy_log",
      name: "Сухой Лог",
    },
    {
      value: "sysert",
      name: "Сысерть",
    },
    {
      value: "tavda",
      name: "Тавда",
    },
    {
      value: "talitsa",
      name: "Талица",
    },
    {
      value: "turinsk",
      name: "Туринск",
    },
    {
      value: "smolensk",
      name: "Смоленск",
    },
    {
      value: "vyazma",
      name: "Вязьма",
    },
    {
      value: "roslavl",
      name: "Рославль",
    },
    {
      value: "yartsevo",
      name: "Ярцево",
    },
    {
      value: "safonovo",
      name: "Сафоново",
    },
    {
      value: "gagarin",
      name: "Гагарин",
    },
    {
      value: "desnogorsk",
      name: "Десногорск",
    },
    {
      value: "dorogobuzh",
      name: "Дорогобуж",
    },
    {
      value: "yelnya",
      name: "Ельня",
    },
    {
      value: "rudnya",
      name: "Рудня",
    },
    {
      value: "pochinok",
      name: "Починок",
    },
    {
      value: "sychyovka",
      name: "Сычёвка",
    },
    {
      value: "velizh",
      name: "Велиж",
    },
    {
      value: "demidov",
      name: "Демидов",
    },
    {
      value: "dukhovshchina",
      name: "Духовщина",
    },
    {
      value: "tambov",
      name: "Тамбов",
    },
    {
      value: "michurinsk",
      name: "Мичуринск",
    },
    {
      value: "rasskazovo",
      name: "Рассказово",
    },
    {
      value: "morshansk",
      name: "Моршанск",
    },
    {
      value: "kotovsk",
      name: "Котовск",
    },
    {
      value: "uvarovo",
      name: "Уварово",
    },
    {
      value: "kirsanov",
      name: "Кирсанов",
    },
    {
      value: "zherdevka",
      name: "Жердевка",
    },
    {
      value: "tver",
      name: "Тверь",
    },
    {
      value: "rzhev",
      name: "Ржев",
    },
    {
      value: "vyshny_volochyok",
      name: "Вышний Волочёк",
    },
    {
      value: "kimry",
      name: "Кимры",
    },
    {
      value: "torzhok",
      name: "Торжок",
    },
    {
      value: "konakovo",
      name: "Конаково",
    },
    {
      value: "udomlya",
      name: "Удомля",
    },
    {
      value: "bezhetsk",
      name: "Бежецк",
    },
    {
      value: "bologoye",
      name: "Бологое",
    },
    {
      value: "nelidovo",
      name: "Нелидово",
    },
    {
      value: "ostashkov",
      name: "Осташков",
    },
    {
      value: "kashin",
      name: "Кашин",
    },
    {
      value: "kalyazin",
      name: "Калязин",
    },
    {
      value: "toropets",
      name: "Торопец",
    },
    {
      value: "likhoslavl",
      name: "Лихославль",
    },
    {
      value: "kuvshinovo",
      name: "Кувшиново",
    },
    {
      value: "zapadnaya_dvina",
      name: "Западная Двина",
    },
    {
      value: "staritsa",
      name: "Старица",
    },
    {
      value: "andreapol",
      name: "Андреаполь",
    },
    {
      value: "vesyegonsk",
      name: "Весьегонск",
    },
    {
      value: "zubtsov",
      name: "Зубцов",
    },
    {
      value: "krasny_kholm",
      name: "Красный Холм",
    },
    {
      value: "bely",
      name: "Белый",
    },
    {
      value: "tomsk",
      name: "Томск",
    },
    {
      value: "asino",
      name: "Асино",
    },
    {
      value: "kedrovy",
      name: "Кедровый",
    },
    {
      value: "kolpashevo",
      name: "Колпашево",
    },
    {
      value: "seversk",
      name: "Северск",
    },
    {
      value: "strezhevoy",
      name: "Стрежевой",
    },
    {
      value: "tula",
      name: "Тула",
    },
    {
      value: "novomoskovsk",
      name: "Новомосковск",
    },
    {
      value: "donskoy",
      name: "Донской",
    },
    {
      value: "aleksin",
      name: "Алексин",
    },
    {
      value: "shchyokino",
      name: "Щёкино",
    },
    {
      value: "uzlovaya",
      name: "Узловая",
    },
    {
      value: "yefremov",
      name: "Ефремов",
    },
    {
      value: "bogoroditsk",
      name: "Богородицк",
    },
    {
      value: "kimovsk",
      name: "Кимовск",
    },
    {
      value: "kireyevsk",
      name: "Киреевск",
    },
    {
      value: "suvorov",
      name: "Суворов",
    },
    {
      value: "yasnogorsk",
      name: "Ясногорск",
    },
    {
      value: "plavsk",
      name: "Плавск",
    },
    {
      value: "venyov",
      name: "Венёв",
    },
    {
      value: "belyov",
      name: "Белёв",
    },
    {
      value: "bolokhovo",
      name: "Болохово",
    },
    {
      value: "lipki",
      name: "Липки",
    },
    {
      value: "sovetsk_tulskaya",
      name: "Советск",
    },
    {
      value: "chekalin",
      name: "Чекалин",
    },
    {
      value: "zavodoukovsk",
      name: "Заводоуковск",
    },
    {
      value: "ishim",
      name: "Ишим",
    },
    {
      value: "tobolsk",
      name: "Тобольск",
    },
    {
      value: "tyumen",
      name: "Тюмень",
    },
    {
      value: "yalutorovsk",
      name: "Ялуторовск",
    },
    {
      value: "ulyanovsk",
      name: "Ульяновск",
    },
    {
      value: "dimitrovgrad",
      name: "Димитровград",
    },
    {
      value: "inza",
      name: "Инза",
    },
    {
      value: "barysh",
      name: "Барыш",
    },
    {
      value: "novoulyanovsk",
      name: "Новоульяновск",
    },
    {
      value: "sengiley",
      name: "Сенгилей",
    },
    {
      value: "asha",
      name: "Аша",
    },
    {
      value: "bakal",
      name: "Бакал",
    },
    {
      value: "verkhneuralsk",
      name: "Верхнеуральск",
    },
    {
      value: "verkhny_ufaley",
      name: "Верхний Уфалей",
    },
    {
      value: "yemanzhelinsk",
      name: "Еманжелинск",
    },
    {
      value: "zlatoust",
      name: "Златоуст",
    },
    {
      value: "karabash",
      name: "Карабаш",
    },
    {
      value: "kartaly",
      name: "Карталы",
    },
    {
      value: "kasli",
      name: "Касли",
    },
    {
      value: "katav_ivanovsk",
      name: "Катав-Ивановск",
    },
    {
      value: "kopeysk",
      name: "Копейск",
    },
    {
      value: "korkino",
      name: "Коркино",
    },
    {
      value: "kusa",
      name: "Куса",
    },
    {
      value: "kyshtym",
      name: "Кыштым",
    },
    {
      value: "magnitogorsk",
      name: "Магнитогорск",
    },
    {
      value: "miass",
      name: "Миасс",
    },
    {
      value: "minyar",
      name: "Миньяр",
    },
    {
      value: "nyazepetrovsk",
      name: "Нязепетровск",
    },
    {
      value: "ozyorsk",
      name: "Озёрск",
    },
    {
      value: "plast",
      name: "Пласт",
    },
    {
      value: "satka",
      name: "Сатка",
    },
    {
      value: "sim",
      name: "Сим",
    },
    {
      value: "snezhinsk",
      name: "Снежинск",
    },
    {
      value: "troitsk",
      name: "Троицк",
    },
    {
      value: "tryokhgorny",
      name: "Трёхгорный",
    },
    {
      value: "ust_katav",
      name: "Усть-Катав",
    },
    {
      value: "chebarkul",
      name: "Чебаркуль",
    },
    {
      value: "chelyabinsk",
      name: "Челябинск",
    },
    {
      value: "yuzhnouralsk",
      name: "Южноуральск",
    },
    {
      value: "yuryuzan",
      name: "Юрюзань",
    },
    {
      value: "baley",
      name: "Балей",
    },
    {
      value: "borzya",
      name: "Борзя",
    },
    {
      value: "krasnokamensk",
      name: "Краснокаменск",
    },
    {
      value: "mogocha",
      name: "Могоча",
    },
    {
      value: "nerchinsk",
      name: "Нерчинск",
    },
    {
      value: "petrovsk_zabaykalsky",
      name: "Петровск-Забайкальский",
    },
    {
      value: "sretensk",
      name: "Сретенск",
    },
    {
      value: "khilok",
      name: "Хилок",
    },
    {
      value: "chita",
      name: "Чита",
    },
    {
      value: "shilka",
      name: "Шилка",
    },
    {
      value: "yaroslavl",
      name: "Ярославль",
    },
    {
      value: "rybinsk",
      name: "Рыбинск",
    },
    {
      value: "pereslavl_zalessky",
      name: "Переславль-Залесский",
    },
    {
      value: "tutayev",
      name: "Тутаев",
    },
    {
      value: "uglich",
      name: "Углич",
    },
    {
      value: "rostov",
      name: "Ростов",
    },
    {
      value: "gavrilov_yam",
      name: "Гаврилов-Ям",
    },
    {
      value: "danilov",
      name: "Данилов",
    },
    {
      value: "poshekhonye",
      name: "Пошехонье",
    },
    {
      value: "myshkin",
      name: "Мышкин",
    },
    {
      value: "lyubim",
      name: "Любим",
    },
    {
      value: "birobidzhan",
      name: "Биробиджан",
    },
    {
      value: "obluchye",
      name: "Облучье",
    },
    {
      value: "naryan_mar",
      name: "Нарьян-Мар",
    },
    {
      value: "beloyarsky",
      name: "Белоярский",
    },
    {
      value: "kogalym",
      name: "Когалым",
    },
    {
      value: "langepas",
      name: "Лангепас",
    },
    {
      value: "lyantor",
      name: "Лянтор",
    },
    {
      value: "megion",
      name: "Мегион",
    },
    {
      value: "nefteyugansk",
      name: "Нефтеюганск",
    },
    {
      value: "nizhnevartovsk",
      name: "Нижневартовск",
    },
    {
      value: "nyagan",
      name: "Нягань",
    },
    {
      value: "pokachi",
      name: "Покачи",
    },
    {
      value: "pyt_yakh",
      name: "Пыть-Ях",
    },
    {
      value: "sovetsky",
      name: "Советский",
    },
    {
      value: "surgut",
      name: "Сургут",
    },
    {
      value: "raduzhny",
      name: "Радужный",
    },
    {
      value: "uray",
      name: "Урай",
    },
    {
      value: "khanty_mansiysk",
      name: "Ханты-Мансийск",
    },
    {
      value: "yugorsk",
      name: "Югорск",
    },
    {
      value: "anadyr",
      name: "Анадырь",
    },
    {
      value: "bilibino",
      name: "Билибино",
    },
    {
      value: "pevek",
      name: "Певек",
    },
    {
      value: "gubkinsky",
      name: "Губкинский",
    },
    {
      value: "labytnangi",
      name: "Лабытнанги",
    },
    {
      value: "muravlenko",
      name: "Муравленко",
    },
    {
      value: "nadym",
      name: "Надым",
    },
    {
      value: "novy_urengoy",
      name: "Новый Уренгой",
    },
    {
      value: "noyabrsk",
      name: "Ноябрьск",
    },
    {
      value: "salekhard",
      name: "Салехард",
    },
    {
      value: "tarko_sale",
      name: "Тарко-Сале",
    },
    {
      value: "argun",
      name: "Аргун",
    },
    {
      value: "grozny",
      name: "Грозный",
    },
    {
      value: "gudermes",
      name: "Гудермес",
    },
    {
      value: "kurchaloy",
      name: "Курчалой",
    },
    {
      value: "achkhoy_martan",
      name: "Ачхой-Мартан",
    },
    {
      value: "urus_martan",
      name: "Урус-Мартан",
    },
    {
      value: "shali",
      name: "Шали",
    },
  ],
  savedCities: [],
  currentCity: "",
};

const citiesSlice = createSlice({
  name: "cities",
  initialState,
  reducers: {
    setSavedCities: (state, action: PayloadAction<string[]>) => {
      state.savedCities = action.payload;
    },
    addCity: (state, action: PayloadAction<string>) => {
      const newSavedCities = [...state.savedCities, action.payload];
      state.savedCities = newSavedCities;
      localStorage.setItem("savedCities", JSON.stringify(newSavedCities));
    },
    removeCity: (state, action: PayloadAction<string>) => {
      const newSavedCities = state.savedCities.filter((city) => city !== action.payload);
      state.savedCities = newSavedCities;
      localStorage.setItem("savedCities", JSON.stringify(newSavedCities));
    },
    setCurrentCity: (state, action: PayloadAction<string>) => {
      state.currentCity = action.payload;
    },
  },
});

export const { addCity, removeCity, setCurrentCity, setSavedCities } = citiesSlice.actions;

export default citiesSlice.reducer;
