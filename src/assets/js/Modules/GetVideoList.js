export default function GetVideoList() {
    let impactTheoryList = [
        {
            id: 1,
            title: 'Impact Theory -  Danica Patrick',
            url: 'https://www.youtube.com/embed/eoZlLYbHjZI',
        },
        {
            id: 2,
            title: 'Impact Theory -  Radhanath Swami',
            url: 'https://www.youtube.com/embed/ml8J0tQm0rU',
        },
        {
            id: 3,
            title: 'Impact Theory -  Nick Santonastasso',
            url: 'https://www.youtube.com/embed/rc8offk7Mho',
        },
        {
            id: 4,
            title: 'Impact Theory -  Ramit Sethi',
            url: 'https://www.youtube.com/embed/sNK-9_Zp7wU',
        },
        {
            id: 5,
            title: 'Impact Theory -  Doug Bopst',
            url: 'https://www.youtube.com/embed/PF2OhoSmHSc',
        },
        {
            id: 6,
            title: 'Impact Theory -  Randy Jackson',
            url: 'https://www.youtube.com/embed/_vJ4DSjT7IM',
        },
        {
            id: 7,
            title: "Impact Theory -  Colin O'Brady",
            url: 'https://www.youtube.com/embed/Amt5qR3BP98',
        },
        {
            id: 8,
            title: 'Impact Theory -  Everette Taylor',
            url: 'https://www.youtube.com/embed/gvuqBX-9NvE',
        },
        {
            id: 9,
            title: 'Impact Theory -  Trent Shelton',
            url: 'https://www.youtube.com/embed/BI1P14gjqKI',
        },
        {
            id: 10,
            title: 'Impact Theory -  Tim Storey',
            url: 'https://www.youtube.com/embed/3qZXJhEiELI',
        },
        {
            id: 11,
            title: 'Impact Theory -  Sam Harris',
            url: 'https://www.youtube.com/embed/StzNlYXnCm4',
        },
        {
            id: 12,
            title: 'Impact Theory -  Cal Newport',
            url: 'https://www.youtube.com/embed/ROKQHRfh2mA',
        },
        {
            id: 13,
            title: 'Impact Theory -  Patrick Bet David',
            url: 'https://www.youtube.com/embed/Mj8kr-wZqlM',
        },
        {
            id: 14,
            title: 'Impact Theory -  George Mumford',
            url: 'https://www.youtube.com/embed/mBfNpMdJf2M',
        },
        {
            id: 15,
            title: 'Impact Theory -  Sadhguru',
            url: 'https://www.youtube.com/embed/Gw1I7fqmxmA',
        },
        {
            id: 16,
            title: 'Impact Theory -  Mark Manson',
            url: 'https://www.youtube.com/embed/5m81Qsw0gLw',
        },
        {
            id: 17,
            title: 'Impact Theory -  Irwin Winkler',
            url: 'https://www.youtube.com/embed/u4gHq9LVgJ4',
        },
        {
            id: 18,
            title: 'Impact Theory -  Meagan Good',
            url: 'https://www.youtube.com/embed/PyAUvtTXgDI',
        },
        {
            id: 19,
            title: 'Impact Theory -  Talib Kweli',
            url: 'https://www.youtube.com/embed/JNbUb6FOEKw',
        },
        {
            id: 20,
            title: 'Impact Theory -  Robin Sharma',
            url: 'https://www.youtube.com/embed/i3_HQIUoM6E',
        },
        {
            id: 21,
            title: 'Impact Theory -  Amanda Nguyen',
            url: 'https://www.youtube.com/embed/oZXdPkU1mwU',
        },
        {
            id: 22,
            title: 'Impact Theory -  Ajit Nawalkha',
            url: 'https://www.youtube.com/embed/p0XjlRb1Y_s',
        },
        {
            id: 23,
            title: 'Impact Theory -  Dan Schawbel',
            url: 'https://www.youtube.com/embed/hi7FOwnbYro',
        },
        {
            id: 24,
            title: 'Impact Theory -  Rachel Hollis',
            url: 'https://www.youtube.com/embed/tG6jr3K2s88',
        },
        {
            id: 25,
            title: 'Impact Theory -  Laura Vanderkam',
            url: 'https://www.youtube.com/embed/c1ApIb7_mHY',
        },
        {
            id: 26,
            title: 'Impact Theory -  Hal Elrod',
            url: 'https://www.youtube.com/embed/g9yg5cDagJ0',
        },
        {
            id: 27,
            title: 'Impact Theory -  James Altucher',
            url: 'https://www.youtube.com/embed/FySDgubp1qY',
        },
        {
            id: 28,
            title: 'Impact Theory -  Allison Maslan',
            url: 'https://www.youtube.com/embed/Xhw6loEFvk4',
        },
        {
            id: 29,
            title: 'Impact Theory -  Marie Forleo',
            url: 'https://www.youtube.com/embed/1-go0xQZ89w',
        },
        {
            id: 30,
            title: 'Impact Theory -  Chip Conley',
            url: 'https://www.youtube.com/embed/hiUz8nZkig4',
        },
        {
            id: 31,
            title: 'Impact Theory -  Dame Dash',
            url: 'https://www.youtube.com/embed/QmdHJ4I5Vmg',
        },
        {
            id: 32,
            title: 'Impact Theory -  Lauren Zander',
            url: 'https://www.youtube.com/embed/LcskACdYUys',
        },
        {
            id: 33,
            title: 'Impact Theory -  Tim Sykes',
            url: 'https://www.youtube.com/embed/Zetsm0aTdME',
        },
        {
            id: 34,
            title: 'Impact Theory -  John Assaraf',
            url: 'https://www.youtube.com/embed/UMmOQCf98-k',
        },
        {
            id: 35,
            title: 'Impact Theory -  Wim Hof',
            url: 'https://www.youtube.com/embed/TM6WKeZ43s4',
        },
        {
            id: 36,
            title: 'Impact Theory -  Robert Greene',
            url: 'https://www.youtube.com/embed/LjGqpic7pS4',
        },
        {
            id: 37,
            title: 'Impact Theory -  David Goggins',
            url: 'https://www.youtube.com/embed/dIM7E8e9JKY',
        },
        {
            id: 38,
            title: 'Impact Theory -  Kai-Fu Lee',
            url: 'https://www.youtube.com/embed/pHQ16ZZcpQc',
        },
        {
            id: 39,
            title: 'Impact Theory -  Nia Jax',
            url: 'https://www.youtube.com/embed/IahmGf_Gulk',
        },
        {
            id: 40,
            title: 'Impact Theory -  Kyle Cease',
            url: 'https://www.youtube.com/embed/Vc1hCpbkRz4',
        },
        {
            id: 41,
            title: 'Impact Theory -  Yuval Noah Harari',
            url: 'https://www.youtube.com/embed/x6tMLAjPVyo',
        },
        {
            id: 42,
            title: 'Impact Theory -  Vishen Lakhiani',
            url: 'https://www.youtube.com/embed/Mer5BJzYVG0',
        },
        {
            id: 43,
            title: 'Impact Theory -  Rich Roll',
            url: 'https://www.youtube.com/embed/k7iq2Z2D1Zs',
        },
        {
            id: 44,
            title: 'Impact Theory -  Caspar Craven',
            url: 'https://www.youtube.com/embed/rdiVxYjRI7k',
        },
        {
            id: 45,
            title: 'Impact Theory -  Scott Harrison',
            url: 'https://www.youtube.com/embed/D3E9wPFYOS8',
        },
        {
            id: 46,
            title: 'Impact Theory -  Aubrey Marcus',
            url: 'https://www.youtube.com/embed/2R_BKlb_Y8k',
        },
        {
            id: 47,
            title: 'Impact Theory -  Michael Ovitz',
            url: 'https://www.youtube.com/embed/SPkCj1TK4fg',
        },
        {
            id: 48,
            title: 'Impact Theory -  Dean Graziosi',
            url: 'https://www.youtube.com/embed/7Jye1ZwgxaM',
        },
        {
            id: 49,
            title: 'Impact Theory -  LeVar Burton',
            url: 'https://www.youtube.com/embed/Grs4bNzV0HM',
        },
        {
            id: 50,
            title: 'Impact Theory -  Rodney Mullen',
            url: 'https://www.youtube.com/embed/cmA55DOJrB8',
        },
        {
            id: 51,
            title: 'Impact Theory -  Donald Suxho',
            url: 'https://www.youtube.com/embed/JfOPDN1aY6k',
        },
        {
            id: 52,
            title: 'Impact Theory -  Will Adams',
            url: 'https://www.youtube.com/embed/Yan229QalsE',
        },
        {
            id: 53,
            title: 'Impact Theory -  Lilly Singh',
            url: 'https://www.youtube.com/embed/iHcnt-xubTI',
        },
        {
            id: 54,
            title: 'Impact Theory -  Garrain Jones',
            url: 'https://www.youtube.com/embed/6Y2dxMT4K7o',
        },
        {
            id: 55,
            title: 'Impact Theory -  David Meltzer',
            url: 'https://www.youtube.com/embed/yT98z1iTHnU',
        },
        {
            id: 56,
            title: 'Impact Theory -  Rushion McDonald',
            url: 'https://www.youtube.com/embed/1QdMfSTMYoU',
        },
        {
            id: 57,
            title: 'Impact Theory -  Ed Mylett',
            url: 'https://www.youtube.com/embed/na7RfQ5NBC8',
        },
        {
            id: 58,
            title: 'Impact Theory -  Ray Kurzweil',
            url: 'https://www.youtube.com/embed/_ryxuehnp8k',
        },
        {
            id: 59,
            title: 'Impact Theory -  Alex Banayan',
            url: 'https://www.youtube.com/embed/nXoU5ItqlkM',
        },
        {
            id: 60,
            title: 'Impact Theory -  Dr. Michael Gervais',
            url: 'https://www.youtube.com/embed/TYudsPrEGjg',
        },
        {
            id: 61,
            title: 'Impact Theory -  Dr. Joe Dispenza',
            url: 'https://www.youtube.com/embed/La9oLLoI5Rc',
        },
        {
            id: 62,
            title: 'Impact Theory -  Lori Harder',
            url: 'https://www.youtube.com/embed/1dg0lZcVj3A',
        },
        {
            id: 63,
            title: 'Impact Theory -  Jordan Harbinger',
            url: 'https://www.youtube.com/embed/Rx-TNupNU8Q',
        },
        {
            id: 64,
            title: 'Impact Theory -  Jesse Itzler',
            url: 'https://www.youtube.com/embed/jeOWjeY7XOM',
        },
        {
            id: 65,
            title: 'Impact Theory -  Bedros Keuilian',
            url: 'https://www.youtube.com/embed/0z2Kio2xlGI',
        },
        {
            id: 66,
            title: 'Impact Theory -  Kevin Kelly',
            url: 'https://www.youtube.com/embed/AWRx6f4blzM',
        },
        {
            id: 67,
            title: 'Impact Theory -  Judah Smith',
            url: 'https://www.youtube.com/embed/XOpNhODjRTo',
        },
        {
            id: 68,
            title: 'Impact Theory -  Michio Kaku',
            url: 'https://www.youtube.com/embed/tGulK44YaOM',
        },
        {
            id: 69,
            title: 'Impact Theory -  Dean Kamen',
            url: 'https://www.youtube.com/embed/kPyDQINmJ8Y',
        },
        {
            id: 70,
            title: 'Impact Theory -  Isaac Lidsky',
            url: 'https://www.youtube.com/embed/ttPkHABdyZY',
        },
        {
            id: 71,
            title: 'Impact Theory -  Kerri Walsh Jennings',
            url: 'https://www.youtube.com/embed/OMmjB1On05I',
        },
        {
            id: 72,
            title: 'Impact Theory -  Bryan Johnson',
            url: 'https://www.youtube.com/embed/uUc0Yil-6gs',
        },
        {
            id: 73,
            title: 'Impact Theory -  Seth Godin',
            url: 'https://www.youtube.com/embed/F80WmftF5YY',
        },
        {
            id: 74,
            title: 'Impact Theory -  Devon Still',
            url: 'https://www.youtube.com/embed/0-kvH8Zv8Bs',
        },
        {
            id: 75,
            title: 'Impact Theory -  Bob Hariri',
            url: 'https://www.youtube.com/embed/mJNM7iLAibU',
        },
        {
            id: 76,
            title: 'Impact Theory -  Jay Shetty',
            url: 'https://www.youtube.com/embed/GXoErccq0vw',
        },
        {
            id: 77,
            title: 'Impact Theory -  Nastia Liukin',
            url: 'https://www.youtube.com/embed/OlOPYiaYdng',
        },
        {
            id: 78,
            title: 'Impact Theory -  Tony Hawk',
            url: 'https://www.youtube.com/embed/oDt9JCOKxEA',
        },
        {
            id: 79,
            title: 'Impact Theory -  Mike Posner',
            url: 'https://www.youtube.com/embed/C6U8-736aGM',
        },
        {
            id: 80,
            title: 'Impact Theory -  Rob Dyrdek',
            url: 'https://www.youtube.com/embed/z1fXr4ORF54',
        },
        {
            id: 81,
            title: 'Impact Theory -  Ryan Holiday',
            url: 'https://www.youtube.com/embed/QqaU5TQw_i4',
        },
        {
            id: 82,
            title: 'Impact Theory -  Tucker Max',
            url: 'https://www.youtube.com/embed/RJaczGjkS3w',
        },
        {
            id: 83,
            title: 'Impact Theory -  Wesley Chapman',
            url: 'https://www.youtube.com/embed/X5T6qXpWXIA',
        },
        {
            id: 84,
            title: 'Impact Theory -  James Lawrence',
            url: 'https://www.youtube.com/embed/cgU7abzvSQk',
        },
        {
            id: 85,
            title: `Impact Theory -  Titus O'Neil`,
            url: 'https://www.youtube.com/embed/uEoXKSrvhBM',
        },
        {
            id: 86,
            title: 'Impact Theory -  Taylor Wilson',
            url: 'https://www.youtube.com/embed/Ggn6P-6USr4',
        },
        {
            id: 87,
            title: 'Impact Theory -  Brendon Burchard',
            url: 'https://www.youtube.com/embed/ugT5VkFl4Xo',
        },
        {
            id: 88,
            title: 'Impact Theory -  Tai Lopez',
            url: 'https://www.youtube.com/embed/jX5eajzLJMU',
        },
        {
            id: 89,
            title: 'Impact Theory -  Darryl McDaniels',
            url: 'https://www.youtube.com/embed/-SCGyfB_fNA',
        },
        {
            id: 90,
            title: 'Impact Theory -  Leila Janah',
            url: 'https://www.youtube.com/embed/0gVTnivW2lE',
        },
        {
            id: 91,
            title: 'Impact Theory -  Lewis Howes',
            url: 'https://www.youtube.com/embed/YZ9kfXw9H54',
        },
        {
            id: 92,
            title: 'Impact Theory -  Crystal Dilworth',
            url: 'https://www.youtube.com/embed/gFjBKAglykQ',
        },
        {
            id: 93,
            title: 'Impact Theory -  Sarah Robb',
            url: 'https://www.youtube.com/embed/Ud437cfWhEM',
        },
        {
            id: 94,
            title: 'Impact Theory -  Mastin Kipp',
            url: 'https://www.youtube.com/embed/ZMQ3dk3TU3s',
        },
        {
            id: 95,
            title: 'Impact Theory -  Gary Davis',
            url: 'https://www.youtube.com/embed/g3ZHDt8vuSI',
        },
        {
            id: 96,
            title: 'Impact Theory -  Maria Sharapova',
            url: 'https://www.youtube.com/embed/PB7L8x0oA7c',
        },
        {
            id: 97,
            title: 'Impact Theory -  Olympia LePoint',
            url: 'https://www.youtube.com/embed/GhAak7eBdcU',
        },
        {
            id: 98,
            title: 'Impact Theory -  Preston Smiles',
            url: 'https://www.youtube.com/embed/7O_yR9WVSFw',
        },
        {
            id: 99,
            title: 'Impact Theory -  Dr. Shefali',
            url: 'https://www.youtube.com/embed/8HnOYn1CUzo',
        },
        {
            id: 100,
            title: 'Impact Theory -  Bassem Youssef',
            url: 'https://www.youtube.com/embed/QXLL-Z-8rDM',
        },
        {
            id: 101,
            title: 'Impact Theory -  Eric Barker',
            url: 'https://www.youtube.com/embed/p5A6Q1GHw1s',
        },
        {
            id: 102,
            title: 'Impact Theory -  Noah Galloway',
            url: 'https://www.youtube.com/embed/4lih9mwmD24',
        },
        {
            id: 103,
            title: 'Impact Theory -  Vanessa Van Edwards',
            url: 'https://www.youtube.com/embed/X8CD2QEYo6Q',
        },
        {
            id: 104,
            title: 'Impact Theory -  Jason Mayden',
            url: 'https://www.youtube.com/embed/664QJQ90-sM',
        },
        {
            id: 105,
            title: 'Impact Theory -  Jay Williams',
            url: 'https://www.youtube.com/embed/lbFQ_GCdwgk',
        },
        {
            id: 106,
            title: 'Impact Theory -  Naveen Jain',
            url: 'https://www.youtube.com/embed/Y_itHlMwrFA',
        },
        {
            id: 107,
            title: 'Impact Theory -  Gerard Adams',
            url: 'https://www.youtube.com/embed/TRY-aPC1MUs',
        },
        {
            id: 108,
            title: 'Impact Theory -  Jim Kwik',
            url: 'https://www.youtube.com/embed/EjdDnCN9yyE',
        },
        {
            id: 109,
            title: 'Impact Theory -  Dr. Andy Walshe',
            url: 'https://www.youtube.com/embed/r5fuWJP1AOk',
        },
        {
            id: 110,
            title: 'Impact Theory -  Peter Diamandis',
            url: 'https://www.youtube.com/embed/f6qdAwENFRk',
        },
        {
            id: 111,
            title: 'Impact Theory -  Gary Vaynerchuk',
            url: 'https://www.youtube.com/embed/-lITalyctN4',
        },
        {
            id: 112,
            title: 'Impact Theory -  David Goggins',
            url: 'https://www.youtube.com/embed/78I9dTB9vqM',
        },
        {
            id: 113,
            title: 'Impact Theory -  Dr. Drew',
            url: 'https://www.youtube.com/embed/fHkGv1HqJYI',
        },
        {
            id: 114,
            title: 'Impact Theory -  Laila Ali',
            url: 'https://www.youtube.com/embed/dI16IP32pzU',
        },
        {
            id: 115,
            title: 'Impact Theory -  John Paul DeJoria',
            url: 'https://www.youtube.com/embed/aIVCyp_7Cqc',
        },
        {
            id: 116,
            title: 'Impact Theory -  David Eagleman',
            url: 'https://www.youtube.com/embed/0SDJxOwsq_k',
        },
        {
            id: 117,
            title: 'Impact Theory -  Jarrett Adams',
            url: 'https://www.youtube.com/embed/9x_IqV0G5sI',
        },
        {
            id: 118,
            title: 'Impact Theory -  Vishen Lakhiani',
            url: 'https://www.youtube.com/embed/BvpAeRGnkJ4',
        },
        {
            id: 119,
            title: 'Impact Theory -  Jay Samit',
            url: 'https://www.youtube.com/embed/uuvhPkgYS68',
        },
        {
            id: 120,
            title: 'Impact Theory -  Chase Jarvis',
            url: 'https://www.youtube.com/embed/FGEnCn15i2s',
        },
        {
            id: 121,
            title: 'Impact Theory -  Jessica O. Matthews',
            url: 'https://www.youtube.com/embed/TVG8EebEt_M',
        },
        {
            id: 122,
            title: 'Impact Theory -  Amelia Boone',
            url: 'https://www.youtube.com/embed/_J49oG5MnN4',
        },
        {
            id: 123,
            title: 'Impact Theory -  Jamie Wheal',
            url: 'https://www.youtube.com/embed/M2pL-hQyKds',
        },
        {
            id: 124,
            title: 'Impact Theory -  Wyclef Jean',
            url: 'https://www.youtube.com/embed/8fxYyOcEs6w',
        },
        {
            id: 125,
            title: 'Impact Theory -  Shaun White',
            url: 'https://www.youtube.com/embed/ULPE3_nPNL0',
        },
        {
            id: 126,
            title: 'Impact Theory -  Jason Silva',
            url: 'https://www.youtube.com/embed/UD40iEzGvaQ',
        },
        {
            id: 127,
            title: 'Impact Theory -  Mel Robbins',
            url: 'https://www.youtube.com/embed/LCHPSo79rB4',
        },
        {
            id: 128,
            title: 'Impact Theory -  Terrell Owens',
            url: 'https://www.youtube.com/embed/7EM0efQt3PU',
        },
        {
            id: 129,
            title: 'Impact Theory -  Tim Ferriss',
            url: 'https://www.youtube.com/embed/Kd06uvinqLI',
        },
        {
            id: 130,
            title: 'Impact Theory -  Moran Cerf',
            url: 'https://www.youtube.com/embed/PE0TedFPgH8',
        },
        {
            id: 131,
            title: 'Impact Theory -  V.S. Ramachandran',
            url: 'https://www.youtube.com/embed/CtoaGaSs7W8',
        },
        {
            id: 132,
            title: 'Impact Theory -  Evan Puschak',
            url: 'https://www.youtube.com/embed/PYzGv6Tfu_0',
        },
        {
            id: 133,
            title: 'Impact Theory -  Michael Strahan',
            url: 'https://www.youtube.com/embed/FUU0nvIhf8U',
        },
        {
            id: 134,
            title: 'Impact Theory -  Marie Forleo',
            url: 'https://www.youtube.com/embed/kk5NTcwbdBE',
        },
    ];

    const getAllList = () => {
        return impactTheoryList;
    };

    const searchFromList = (value) => {
        let results = [];
        let lists = getAllList();

        lists.map((listItem) => {
            if (listItem.title.search(value) > -1) {
                results.push(listItem);
            }
        });

        return results;
    };

    return {
        getAllList,
        searchFromList,
    };
}
