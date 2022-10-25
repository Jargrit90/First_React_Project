import {Y2014, Y2017, Y2018, Y2019} from '../components/band/years';
export const variables = {
    isVisible: false,
    yearArr: [Y2014, Y2017, Y2018, Y2019],
	active_year: Y2014,
	active_num: 0,
    subPhotoSrc: '',
    member_num: 0,
    gallery_active: false,
    num_of_photo: 0,
    song_num: 0,
    s: 0,
    m: 0,
    play: false,
    percent_bar: 0,
    timer: 0,
    discName: '',
    discsImage: [
        {url:"/First_React_Project/images/discography/disc1.png", title: "Nightmare", path: "/First_React_Project/dyskografia/nightmare", active: true},
        {url:"/First_React_Project/images/discography/disc2.png", title: "Fall asleep in the mirror", path: "/First_React_Project/dyskografia", active: false},
        {url:"/First_React_Project/images/discography/disc3.png", title: "Prequel", path: "/First_React_Project/dyskografia", active: false},
        {url:"/First_React_Project/images/discography/disc4.png", title: "Full Moon", path: "/First_React_Project/dyskografia", active: false},
        {url:"/First_React_Project/images/discography/disc5.png", title: "Escape the ERA", path: "/First_React_Project/dyskografia", active: false},
        {url:"/First_React_Project/images/discography/disc6.png", title: "Alone In The City", path: "/First_React_Project/dyskografia", active: false},
        {url:"/First_React_Project/images/discography/disc7.png", title: "Over the Sky", path: "/First_React_Project/dyskografia", active: false},
        {url:"/First_React_Project/images/discography/disc8.png", title: "The End of Nightmare", path: "/First_React_Project/dyskografia", active: false},
        {url:"/First_React_Project/images/discography/disc9.png", title: "Raid of Dream", path: "/First_React_Project/dyskografia/raid_of_dream", active: false},
        {url:"/First_React_Project/images/discography/disc10.png", title: "Dystopia: The Tree of Language", path: "/First_React_Project/dyskografia", active: false},
        {url:"/First_React_Project/images/discography/disc11.png", title: "Dystopia : Lose Myself", path: "/First_React_Project/dyskografia", active: false},
        {url:"/First_React_Project/images/discography/disc12.png", title: "Dystopia : Road to Utopia", path: "/First_React_Project/dyskografia", active: false},
        {url:"/First_React_Project/images/discography/disc13.png", title: "Apocalypse: Save Us", path: "/First_React_Project/dyskografia", active: false},
    ],
    Nightmare: {
        name: 'Nightmare',
        arr: [
            {
                title: "Welcome to Dream",
                song_length: "0:40",
                song_length_s: 40,
                song_file: "/First_React_Project/music/welcome_to_dream_intro.mp3"
            },
            {
                title: "Chase Me",
                song_length: "3:09",
                song_length_s: 189,
                song_file: "/First_React_Project/music/chase_me.mp3"
            },
            {
                title: "Emotion",
                song_length: "3:43",
                song_length_s: 223,
                song_file: "/First_React_Project/music/emotion.mp3"
            },
            {
                title: "Chase Me (instrumental)",
                song_length: "3:09",
                song_length_s: 189,
                song_file: "/First_React_Project/music/chase_me_instrumental.mp3"
            }
        ]
    },
    FAITM: {
        name: 'FAITM',
        arr: [
            {
                title: "My Toys",
                song_length: "1:06",
                song_length_s: 66,
                song_file: ""
            },
            {
                title: "Good Night",
                song_length: "2:54",
                song_length_s: 174,
                song_file: ""
            },
            {
                title: "Lullaby",
                song_length: "3:18",
                song_length_s: 198,
                song_file: ""
            },
            {
                title: "Good Night (instrumental)",
                song_length: "2:54",
                song_length_s: 174,
                song_file: ""
            }
        ]
    },
    members: [
        {
            nick: "JiU",
            name: "Kim Min-ji (kor. 김민지)",
            english_name: "Lily Kim",
            position: "Leader, Lead Dancer, Lead Vocalist, Visual",
            birth_date: "17 Maj 1994",
            birth_place: "Daejeon, Korea Południowa",
            height: "167cm (5’6″)",
            weight: "49 kg (108 lbs)",
            blood_type: "B",
            zodiac_sign: "Byk",
            nightmare_role: "Reprezentuje koszmar bycia ściganym przez nieznajomego",
            photos: ["/First_React_Project/images/jiu/img1.png","/First_React_Project/images/jiu/img2.png", "/First_React_Project/images/jiu/img3.png", "/First_React_Project/images/jiu/img4.png", "/First_React_Project/images/jiu/img5.png", "/First_React_Project/images/jiu/img6.png", 
            "/First_React_Project/images/jiu/img7.png", "/First_React_Project/images/jiu/img8.png", "/First_React_Project/images/jiu/img9.png", "/First_React_Project/images/jiu/img10.png", "/First_React_Project/images/jiu/img11.png", "/First_React_Project/images/jiu/img12.png", 
            "/First_React_Project/images/jiu/img13.png", "/First_React_Project/images/jiu/img14.png", "/First_React_Project/images/jiu/img15.png"]
        },
        {
            nick: "SuA",
            name: "Kim Bo-ra (김보라)",
            english_name: "Alice",
            position: "Main Vocalist",
            birth_date: "10 Sierpień 1994",
            birth_place: "Masanhappo-gu, Changwon, Gyeongsangnam-do, Korea Południowa",
            height: "162cm (5’4″)",
            weight: "43 kg (95 lbs)",
            blood_type: "0",
            zodiac_sign: "Lew",
            nightmare_role: "Reprezentuje koszmar bycia związanym",
            photos: ["/First_React_Project/images/sua/img1.png","/First_React_Project/images/sua/img2.png", "/First_React_Project/images/sua/img3.png", "/First_React_Project/images/sua/img4.png", "/First_React_Project/images/sua/img5.png", 
            "/First_React_Project/images/sua/img6.png", "/First_React_Project/images/sua/img7.png", "/First_React_Project/images/sua/img8.png", "/First_React_Project/images/sua/img9.png", "/First_React_Project/images/sua/img10.png", 
            "/First_React_Project/images/sua/img11.png", "/First_React_Project/images/sua/img12.png", "/First_React_Project/images/sua/img13.png", "/First_React_Project/images/sua/img14.png", "/First_React_Project/images/sua/img15.png", "/First_React_Project/images/sua/img16.png"]
        },
        {
            nick: "Siyeon",
            name: "Lee Si Yeon (이시연)",
            english_name: "Monica Lee",
            position: "Singer, rapper",
            birth_date: "1 Październik 1995",
            birth_place: "Daegu, Korea Południowa",
            height: "166cm (5’5″)",
            weight: "49 kg (108 lbs)",
            blood_type: "A",
            zodiac_sign: "Waga",
            nightmare_role: "Reprezentuje koszmar bycia zamkniętym w ciasnej przestrzeni",
            photos: ["/First_React_Project/images/siyeon/img1.png","/First_React_Project/images/siyeon/img2.png", "/First_React_Project/images/siyeon/img3.png", "/First_React_Project/images/siyeon/img4.png", "/First_React_Project/images/siyeon/img5.png", 
            "/First_React_Project/images/siyeon/img6.png", "/First_React_Project/images/siyeon/img7.png", "/First_React_Project/images/siyeon/img8.png", "/First_React_Project/images/siyeon/img9.png", "/First_React_Project/images/siyeon/img10.png", 
            "/First_React_Project/images/siyeon/img11.png", "/First_React_Project/images/siyeon/img12.png"]
        },
        {
            nick: "Handong",
            name: "Han Dong (韓東)",
            english_name: "Della",
            position: "Vocalist, Dancer",
            birth_date: "26 Marzec 1996",
            birth_place: "Wuhan, Chiny",
            height: "165cm (5’5″)",
            weight: "46 kg (101 lbs)",
            blood_type: "0",
            zodiac_sign: "Baran",
            nightmare_role: "Reprezentuje koszmar bycia obserwowanym",
            photos: ["/First_React_Project/images/handong/img1.png","/First_React_Project/images/handong/img2.png", "../../images/handong/img3.png", "../../images/handong/img4.png", "../../images/handong/img5.png", 
            "/First_React_Project/images/handong/img6.png", "/First_React_Project/images/handong/img7.png", "/First_React_Project/images/handong/img8.png", "/First_React_Project/images/handong/img9.png", "/First_React_Project/images/handong/img10.png", 
            "/First_React_Project/images/handong/img11.png"]
        },
        {
            nick: "Yoohyeon",
            name: "Kim Yoo Hyeon (김유현)",
            english_name: "Rachel Kim",
            position: "Lead Vocalist",
            birth_date: "7 Styczeń 1997",
            birth_place: "Incheon, Korea Południowa",
            height: "168cm (5’6″)",
            weight: "49 kg (108 lbs)",
            blood_type: "0",
            zodiac_sign: "Koziorożec",
            nightmare_role: "Reprezentuje koszmar zgubienia się w nieznanym miejscu",
            photos: ["/First_React_Project/images/yoohyeon/img1.png","/First_React_Project/images/yoohyeon/img2.png", "/First_React_Project/images/yoohyeon/img3.png", "/First_React_Project/images/yoohyeon/img4.png", "/First_React_Project/images/yoohyeon/img5.png", 
            "/First_React_Project/images/yoohyeon/img6.png", "/First_React_Project/images/yoohyeon/img7.png", "/First_React_Project/images/yoohyeon/img8.png", "/First_React_Project/images/yoohyeon/img9.png", "/First_React_Project/images/yoohyeon/img10.png", 
            "/First_React_Project/images/yoohyeon/img11.png", "/First_React_Project/images/yoohyeon/img12.png", "/First_React_Project/images/yoohyeon/img13.png", "/First_React_Project/images/yoohyeon/img14.png"]
        },
        {
            nick: "Dami",
            name: "Lee Yu Bin (이유빈)",
            english_name: "Emma Lee",
            position: "Main Rapper, Lead Dancer, Sub Vocalist",
            birth_date: "7 Marzec 1997",
            birth_place: "Seoul, Korea Południowa",
            height: "163cm (5’4″)",
            weight: "44 kg (97 lbs)",
            blood_type: "A",
            zodiac_sign: "Ryby",
            nightmare_role: "Reprezentuje koszmar posiadania blizn na całym ciele",
            photos: ["/First_React_Project/images/dami/img1.png","/First_React_Project/images/dami/img2.png", "/First_React_Project/images/dami/img3.png", "/First_React_Project/images/dami/img4.png", "/First_React_Project/images/dami/img5.png", 
            "/First_React_Project/images/dami/img6.png", "/First_React_Project/images/dami/img7.png", "/First_React_Project/images/dami/img8.png", "/First_React_Project/images/dami/img9.png", "/First_React_Project/images/dami/img10.png", 
            "/First_React_Project/images/dami/img11.png"]
        },
        {
            nick: "Gahyeon",
            name: "Lee Ga Hyeon (이가현)",
            english_name: "Lucy Lee",
            position: "Lead Rapper, Vocalist, Maknae",
            birth_date: "3 Luty 1999",
            birth_place: "Seongnam, Korea Południowa",
            height: "160cm (5’3″)",
            weight: "57 kg (126 lbs)",
            zodiac_sign: "Wodnik",
            nightmare_role: "Reprezentuje koszmar spadania z wielkiej wysokości",
            photos: ["/First_React_Project/images/gahyeon/img1.png","/First_React_Project/images/gahyeon/img2.png", "/First_React_Project/images/gahyeon/img3.png", "/First_React_Project/images/gahyeon/img4.png", "/First_React_Project/images/gahyeon/img5.png", 
            "/First_React_Project/images/gahyeon/img6.png", "/First_React_Project/images/gahyeon/img7.png", "/First_React_Project/images/gahyeon/img8.png", "/First_React_Project/images/gahyeon/img9.png", "/First_React_Project/images/gahyeon/img10.png", 
            "/First_React_Project/images/gahyeon/img11.png", "/First_React_Project/images/gahyeon/img12.png"]
        }
    ]
}

