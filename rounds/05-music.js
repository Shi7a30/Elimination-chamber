// Music rounds. The round format is explained above Rd() in index.html.
// Each category file adds itself to CATS; index.html loads them in number order.
CATS.push(
{n:"Music",a:"المزيكا",e:"🎤",r:[
 Rd(["WHO IS THE","OLDEST ICON",Q],["مين","أكبر نجم في السن",QA],"min",[
  ["Bob Dylan",1941,"بوب ديلان"],["Paul McCartney",1942,"بول مكارتني"],["Mick Jagger",1943,"ميك جاجر"],["Rod Stewart",1945,"رود ستيوارت"],
  ["Freddie Mercury",1946,"فريدي ميركوري"],["Elton John",1947,"إلتون جون"],["Ozzy Osbourne",1948,"أوزي أوزبورن"],["Bruce Springsteen",1949,"بروس سبرينجستين"],
  ["Stevie Wonder",1950,"ستيفي وندر"]],{h:"singer",k:BORN,g:"p",s:"singers",m:"w",d:3}),
 Rd(["WHO IS THE","YOUNGEST POP STAR",Q],["مين","أصغر نجم بوب",QA],"max",[
  ["Taylor Swift",1989,"تايلور سويفت"],["The Weeknd",1990,"ذا ويكند"],["Ed Sheeran",1991,"إد شيران"],["Ariana Grande",1993,"أريانا جراندي"],
  ["Harry Styles",1994,"هاري ستايلز"],["Dua Lipa",1995,"دوا ليبا"],["Shawn Mendes",1998,"شون منديز"],["Billie Eilish",2001,"بيلي إيليش"],
  ["Olivia Rodrigo",2003,"أوليفيا رودريجو"]],{h:"singer",k:BORN,g:"p",s:"singers",m:"w",d:2}),
 Rd(["WHO IS THE","OLDEST EGYPTIAN ICON",Q],["مين","أكبر مطرب في السن",QA],"min",[
  ["Abdel Halim Hafez",1929,"عبد الحليم حافظ"],["Hany Shaker",1952,"هاني شاكر"],["Mohamed Mounir",1954,"محمد منير"],["Amr Diab",1961,"عمرو دياب"],
  ["Hakim",1962,"حكيم","Hakim (singer)"],["Angham",1972,"أنغام"],["Mohamed Hamaki",1975,"محمد حماقي"],["Tamer Hosny",1977,"تامر حسني"],
  ["Sherine Abdel Wahab",1980,"شيرين عبد الوهاب","Sherine"]],{h:"Egyptian singer",k:BORN,g:"p",s:"singers",m:"eg",d:1}),
 Rd(["WHICH IS THE","OLDEST SONG",Q],["أنهي","أقدم أغنية",QA],"min",[
  ["Hey Jude",1968,"هاي جود"],["Bohemian Rhapsody",1975,"بوهيميان رابسودي"],["Billie Jean",1983,"بيلي جين"],["Like a Prayer",1989,"لايك أ براير","Like a Prayer (song)"],["Smells Like Teen Spirit",1991,"سميلز لايك تين سبيريت"],
  ["Wannabe",1996,"وانابي","Wannabe (Spice Girls song)"],["Crazy in Love",2003,"كريزي إن لاف"],["Rolling in the Deep",2010,"رولينج إن ذا ديب"],["Blinding Lights",2019,"بلايندنج لايتس"]],{h:"song",k:["RELEASED","نزلت سنة"],dt:["Song released", "نزول الأغنية"],g:"y",s:"songs",m:"w",d:1}),
  Rd(["WHO IS THE","YOUNGEST EGYPTIAN SINGER",Q],["مين","أصغر مطرب",QA],"max",[
   ["Hany Shaker",1952,"هاني شاكر"],["Mohamed Fouad",1961,"محمد فؤاد"],["Hisham Abbas",1963,"هشام عباس"],["Ehab Tawfik",1966,"إيهاب توفيق"],
   ["Moustafa Amar",1966,"مصطفى قمر"],["Ruby",1981,"روبي","Ruby (Egyptian singer)"],["Ahmed Saad",1981,"أحمد سعد","Ahmed Saad (singer)"],["Marwan Pablo",1995,"مروان بابلو"],
   ["Wegz",1998,"ويجز"]],{h:"Egyptian singer",k:BORN,g:"p",s:"singers",m:"eg",d:2}),
  Rd(["WHICH AMR DIAB HIT","CAME OUT FIRST",Q],["أنهي أغنية لعمرو دياب","نزلت الأول",QA],"min",[
   ["Mayal",1988,"ميال","Mayal (album)"],["Nour el 3ein",1996,"نور العين","Nour El Ain"],["Tamally ma3ak",2000,"تملي معاك","Tamally Maak"],["3allem 2alby",2003,"علم قلبي","Allem Alby"],
   ["Leily nahary",2004,"ليلي نهاري","Leily Nahary"],["Wayah",2009,"وياه","Wayah"],["Banadeek ta3ala",2011,"بناديك تعالى","Banadeek Ta'ala"],["Sahran",2020,"سهران","Sahran (album)"],["Khatfoony",2025,"خطفوني","Khatfoony (song)"]],
   {h:"Amr Diab song",k:["RELEASED","نزلت سنة"],dt:["Song released", "نزول الأغنية"],g:"y",s:"songs",m:"eg",d:2}),
 Rd(["WHICH CLASSIC SONG","CAME OUT FIRST",Q],["أنهي أغنية من الزمن الجميل","نزلت الأول",QA],"min",[
  ["Ya msafer wahdak",1942,"يا مسافر وحدك","Ya Msafer Wahdak"],["Ahwak",1957,"أهواك","Ahwak"],["Enta 3omri",1964,"إنت عمري","Enta Omri"],["El atlal",1966,"الأطلال","Al Atlal"],
  ["Alf leila w leila",1969,"ألف ليلة وليلة","Alf Leila wa Leila"],["Qariat al-Fingan",1976,"قارئة الفنجان","Qariat al-Fingan"],["Shababeek",1981,"شبابيك","Shababeek"],["7adouta masreya",1982,"حدوتة مصرية","Hadouta Masreya"],
  ["3alli sotak",1997,"علّي صوتك","Ali Sotak"]],{h:"Egyptian song",k:["RELEASED","نزلت سنة"],dt:["Song released", "نزول الأغنية"],g:"y",s:"songs",m:"eg",d:2}),
 Rd(["WHICH EGYPTIAN HIT","CAME OUT LAST",Q],["أنهي أغنية مصرية","أجدد",QA],"max",[
  ["7abibi dah",2001,"حبيبي ده (ناري نارين)","Habibi Dah (Nari Narain)"],["Garh Tany",2003,"جرح تاني","Garh Tany"],["Leih beydary keda",2004,"ليه بيداري كده","Leih Beydary Keda"],["3enaya bet7ebak",2006,"عينيا بتحبك","Einaya Bethebak"],
  ["Naweeha",2008,"ناويها","Naweeha"],["Yalmidan",2011,"يا الميدان","Ya El Midan"],["Ezzay",2011,"إزاي","Ezzay"],["Number one",2018,"نمبر وان","Number One"],
  ["El bakht",2022,"البخت","El Bakht"]],{h:"Egyptian song",k:["RELEASED","نزلت سنة"],dt:["Song released", "نزول الأغنية"],g:"y",s:"songs",m:"eg",d:2}),
 Rd(["WHICH CLASSIC SINGER","WAS BORN FIRST",Q],["مين من مطربين زمان","اتولد الأول",QA],"min",[
  ["Sayed Darwish",1892,"سيد درويش"],["Mohamed Abdel Muttalib",1910,"محمد عبد المطلب"],["Laila Mourad",1918,"ليلى مراد","Leila Mourad"],["Mohamed Fawzi",1918,"محمد فوزي","Mohamed Fawzi (singer)"],
  ["Mohamed Roshdy",1928,"محمد رشدي"],["Shadia",1931,"شادية"],["Najat Al Saghira",1938,"نجاة الصغيرة","Nagat El-Sagheera"],["Ahmed Adaweya",1945,"أحمد عدوية"],
  ["Ali El Haggar",1954,"علي الحجار"]],{h:"Egyptian singer",k:BORN,g:"p",s:"singers",m:"eg",d:1}),
 Rd(["WHICH WORLD HIT","CAME OUT LAST",Q],["أنهي أغنية عالمية","أجدد",QA],"max",[
  ["Imagine",1971,"إيماجن","Imagine (John Lennon song)"],["Dancing Queen",1976,"دانسينج كوين"],["Careless Whisper",1984,"كيرلس ويسبر"],["My Heart Will Go On",1997,"ماي هارت ويل جو أون"],
  ["Hips Don't Lie",2006,"هيبس دونت لاي"],["Waka Waka",2010,"واكا واكا","Waka Waka (This Time for Africa)"],["Gangnam Style",2012,"جانجنام ستايل"],["Despacito",2017,"ديسباسيتو"],
  ["APT.",2024,"آبت","APT. (song)"]],{h:"song",k:["RELEASED","نزلت سنة"],dt:["Song released", "نزول الأغنية"],g:"y",s:"songs",m:"w",d:1}),
 Rd(["WHO IS THE","YOUNGEST RAPPER",Q],["مين","أصغر رابر",QA],"max",[
  ["Dr. Dre",1965,"دكتور دري"],["Jay-Z",1969,"جاي زي"],["Tupac Shakur",1971,"توباك"],["Snoop Dogg",1971,"سنوب دوج"],
  ["Eminem",1972,"إيمينم"],["50 Cent",1975,"فيفتي سنت"],["Kanye West",1977,"كانيي ويست"],["Drake",1986,"دريك","Drake (musician)"],
  ["Cardi B",1992,"كاردي بي"]],{h:"rapper",k:BORN,g:"p",s:"singers",m:"w",d:2}),
 Rd(["WHO HAS WON THE","MOST GRAMMYS",Q],["مين","كسب أكتر جرامي",QA],"max",[
  ["Beyoncé",35,"بيونسيه"],["Kendrick Lamar",27,"كندريك لامار"],["Jay-Z",25,"جاي زي"],["Stevie Wonder",25,"ستيفي وندر"],["Kanye West",24,"كانيي ويست"],["Adele",16,"أديل"],["Eminem",15,"إيمينم"],["Taylor Swift",14,"تايلور سويفت"],["Rihanna",9,"ريهانا"]],
  {h:"singer",k:["GRAMMYS WON","جوايز جرامي"],suf:TRA,s:"singers",m:"w",d:1}),
 Rd(["WHO HAS THE","MOST US NO. 1 HITS",Q],["مين","عنده أكتر أغاني نمبر وان في أمريكا",QA],"max",[
  ["Mariah Carey",19,"ماريا كاري"],["Drake",14,"دريك","Drake (musician)"],["Rihanna",14,"ريهانا"],["Michael Jackson",13,"مايكل جاكسون"],["Madonna",12,"مادونا"],["Whitney Houston",11,"ويتني هيوستن"],["Stevie Wonder",10,"ستيفي وندر"],["Bruno Mars",10,"برونو مارس"],["Ariana Grande",10,"أريانا جراندي"]],
  {h:"singer",k:["HOT 100 NO. 1s","نمبر وان"],s:"singers",m:"w",d:2}),
 Rd(["WHO IS THE","OLDEST DIVA",Q],["مين","أكبر ديفا في السن",QA],"min",[
  ["Tina Turner",1939,"تينا تيرنر"],["Cher",1946,"شير"],["Madonna",1958,"مادونا"],
  ["Whitney Houston",1963,"ويتني هيوستن"],["Céline Dion",1968,"سيلين ديون"],["Mariah Carey",1969,"ماريا كاري"],
  ["Shakira",1977,"شاكيرا"],["Beyoncé",1981,"بيونسيه"],["Lady Gaga",1986,"ليدي جاجا"]],
  {h:"singer",k:BORN,g:"p",s:"singers",m:"w",d:2}),
 Rd(["WHO IS THE","OLDEST K-POP STAR",Q],["مين","أكبر نجم كي بوب في السن",QA],"min",[
  ["PSY",1977,"ساي","Psy"],["G-Dragon",1988,"جي دراجون"],["Jin",1992,"جين","Jin (singer)"],
  ["Suga",1993,"شوجا","Suga (rapper)"],["RM",1994,"آر إم","RM (rapper)"],["Jisoo",1995,"جيسو"],
  ["Jennie",1996,"جيني","Jennie (singer)"],["Lisa",1997,"ليسا","Lisa (rapper)"],["Jungkook",1997,"جونج كوك"]],
  {h:"singer",k:BORN,g:"p",s:"singers",m:"w",d:1}),
 Rd(["WHICH BAND","FORMED FIRST",Q],["أنهي فرقة","اتكونت الأول",QA],"min",[
  ["The Beatles",1960,"البيتلز"],["The Rolling Stones",1962,"الرولينج ستونز"],["Queen",1970,"كوين","Queen (band)"],
  ["ABBA",1972,"آبا"],["U2",1976,"يو تو"],["Metallica",1981,"ميتاليكا"],
  ["Backstreet Boys",1993,"باكستريت بويز"],["Linkin Park",1996,"لينكين بارك"],["One Direction",2010,"وان دايركشن"]],
  {h:"band",k:["FORMED","اتكونت سنة"],s:"singers",m:"w",d:2}),
 Rd(["WHO IS THE","YOUNGEST LATIN STAR",Q],["مين","أصغر نجم لاتيني",QA],"max",[
  ["Julio Iglesias",1943,"خوليو إجليسياس"],["Gloria Estefan",1957,"جلوريا إستيفان"],["Ricky Martin",1971,"ريكي مارتن"],
  ["Enrique Iglesias",1975,"إنريكي إجليسياس"],["Daddy Yankee",1977,"دادي يانكي"],["Luis Fonsi",1978,"لويس فونسي"],
  ["J Balvin",1985,"جي بالفين"],["Karol G",1991,"كارول جي"],["Bad Bunny",1994,"باد باني"]],
  {h:"singer",k:BORN,g:"p",s:"singers",m:"w",d:2}),
 Rd(["WHO IS THE","OLDEST ARAB LEGEND",Q],["مين","أكبر أسطورة عربية في السن",QA],"min",[
  ["Sabah",1927,"صباح","Sabah (singer)"],["Fairuz",1934,"فيروز"],["Warda",1939,"وردة الجزائرية","Warda Al-Jazairia"],
  ["Mohammed Abdu",1949,"محمد عبده"],["Majida El Roumi",1956,"ماجدة الرومي"],["Kadim Al Sahir",1957,"كاظم الساهر"],
  ["Latifa",1961,"لطيفة","Latifa (singer)"],["Ragheb Alama",1962,"راغب علامة"],["Assala Nasri",1969,"أصالة"]],
  {h:"singer",k:BORN,g:"p",s:"singers",m:"w",d:2}),
 Rd(["WHO IS THE","YOUNGEST ARAB POP STAR",Q],["مين","أصغر نجم بوب عربي",QA],"max",[
  ["Najwa Karam",1966,"نجوى كرم"],["Ahlam",1968,"أحلام","Ahlam (singer)"],["Elissa",1972,"إليسا","Elissa (singer)"],
  ["Wael Kfoury",1974,"وائل كفوري"],["Hussain Al Jassmi",1979,"حسين الجسمي"],["Nancy Ajram",1983,"نانسي عجرم"],
  ["Myriam Fares",1983,"ميريام فارس"],["Saad Lamjarred",1985,"سعد لمجرد"],["Mohammed Assaf",1989,"محمد عساف"]],
  {h:"singer",k:BORN,g:"p",s:"singers",m:"w",d:3}),
 Rd(["WHO IS THE","YOUNGEST ROCK LEGEND",Q],["مين","أصغر أسطورة روك",QA],"max",[
  ["Elvis Presley",1935,"إلفيس بريسلي"],["John Lennon",1940,"جون لينون"],["Jimi Hendrix",1942,"جيمي هندريكس"],
  ["David Bowie",1947,"ديفيد بوي"],["Bono",1960,"بونو"],["Jon Bon Jovi",1962,"جون بون جوفي"],
  ["Kurt Cobain",1967,"كيرت كوبين"],["Chris Martin",1977,"كريس مارتن"],["Alex Turner",1986,"أليكس تيرنر"]],
  {h:"singer",k:BORN,g:"p",s:"singers",m:"w",d:2}),
 Rd(["WHO WON BEST NEW ARTIST","AT THE GRAMMYS FIRST",Q],["مين","خد جرامي أحسن فنان جديد الأول",QA],"min",[
  ["The Beatles",1965,"البيتلز"],["Mariah Carey",1991,"ماريا كاري"],["Christina Aguilera",2000,"كريستينا أجيليرا"],
  ["Norah Jones",2003,"نورا جونز"],["Amy Winehouse",2008,"إيمي واينهاوس"],["Adele",2009,"أديل"],
  ["Sam Smith",2015,"سام سميث"],["Billie Eilish",2020,"بيلي إيليش"],["Olivia Rodrigo",2022,"أوليفيا رودريجو"]],
  {h:"singer",k:["BEST NEW ARTIST GRAMMY","جرامي أحسن فنان جديد"],s:"singers",m:"w",d:1}),
 Rd(["WHO IS THE","OLDEST BOY BAND STAR",Q],["مين","أكبر نجم بوي باند في السن",QA],"min",[
  ["Gary Barlow",1971,"جاري بارلو"],["Robbie Williams",1974,"روبي ويليامز"],["Nick Carter",1980,"نيك كارتر"],
  ["Justin Timberlake",1981,"جاستن تيمبرليك"],["Louis Tomlinson",1991,"لويس توملينسون"],["Nick Jonas",1992,"نيك جوناس"],
  ["Zayn Malik",1993,"زين مالك"],["Niall Horan",1993,"نايل هوران"],["Harry Styles",1994,"هاري ستايلز"]],
  {h:"singer",k:BORN,g:"p",s:"singers",m:"w",d:3}),
 Rd(["WHO IS THE","YOUNGEST DJ",Q],["مين","أصغر دي جي",QA],"max",[
  ["David Guetta",1967,"ديفيد جيتا"],["Tiësto",1969,"تييستو"],["Armin van Buuren",1976,"أرمين فان بيورين"],
  ["Calvin Harris",1984,"كالفن هاريس"],["Avicii",1989,"أفيتشي"],["Kygo",1991,"كايجو"],
  ["Marshmello",1992,"مارشميلو"],["Martin Garrix",1996,"مارتن جاريكس"],["Alan Walker",1997,"آلان ووكر","Alan Walker (music producer)"]],
  {h:"DJ",k:BORN,g:"p",s:"singers",m:"w",d:3}),
 Rd(["WHO IS THE","YOUNGEST R&B STAR",Q],["مين","أصغر نجم آر آند بي",QA],"max",[
  ["Usher",1978,"أشر"],["Alicia Keys",1981,"أليشيا كيز"],["Bruno Mars",1985,"برونو مارس"],
  ["Frank Ocean",1987,"فرانك أوشن"],["Rihanna",1988,"ريهانا"],["Chris Brown",1989,"كريس براون"],
  ["SZA",1989,"سيزا"],["Doja Cat",1995,"دوجا كات"],["Khalid",1998,"خالد","Khalid (singer)"]],
  {h:"singer",k:BORN,g:"p",s:"singers",m:"w",d:3}),
 Rd(["WHICH SONGWRITER","WAS BORN FIRST",Q],["مين من الملحنين والشعرا","اتولد الأول",QA],"min",[
  ["Riad El Sunbati",1906,"رياض السنباطي"],["Morsi Gamil Aziz",1921,"مرسي جميل عزيز"],["Kamal El Taweel",1922,"كمال الطويل"],
  ["Mohamed El Mougy",1923,"محمد الموجي"],["Baligh Hamdi",1932,"بليغ حمدي"],["Hany Shenouda",1943,"هاني شنودة"],
  ["Ammar El Sherei",1948,"عمار الشريعي"],["Salah Jahin",1930,"صلاح جاهين"],["Hamid El Shaeri",1961,"حميد الشاعري"]],
  {h:"Egyptian songwriter",k:BORN,g:"p",s:"singers",m:"eg",d:3}),
 Rd(["WHICH MICHAEL JACKSON ALBUM","CAME OUT FIRST",Q],["أنهي ألبوم لمايكل جاكسون","نزل الأول",QA],"min",[
  ["Got to Be There",1972,"جوت تو بي ذير"],["Music & Me",1973,"ميوزك آند مي"],["Forever, Michael",1975,"فوريفر مايكل"],
  ["Off the Wall",1979,"أوف ذا وول"],["Thriller",1982,"ثريلر","Thriller (album)"],["Bad",1987,"باد","Bad (album)"],
  ["Dangerous",1991,"دينجرس","Dangerous (Michael Jackson album)"],["HIStory",1995,"هيستوري","HIStory: Past, Present and Future, Book I"],["Invincible",2001,"إنفينسيبل","Invincible (Michael Jackson album)"]],
  {h:"album",k:["RELEASED","نزل سنة"],s:"songs",m:"w",d:3}),
 Rd(["WHICH QUEEN SONG","CAME OUT LAST",Q],["أنهي أغنية لفرقة كوين","أجدد",QA],"max",[
  ["Killer Queen",1974,"كيلر كوين"],["Bohemian Rhapsody",1975,"بوهيميان رابسودي"],["Somebody to Love",1976,"سامبودي تو لوف","Somebody to Love (Queen song)"],
  ["We Will Rock You",1977,"وي ويل روك يو"],["Don't Stop Me Now",1979,"دونت ستوب مي ناو"],["Another One Bites the Dust",1980,"أناذر وان بايتس ذا داست"],
  ["Under Pressure",1981,"أندر بريشر"],["Radio Ga Ga",1984,"راديو جا جا"],["The Show Must Go On",1991,"ذا شو ماست جو أون","The Show Must Go On (Queen song)"]],
  {h:"song",k:["RELEASED","نزلت سنة"],dt:["Song released","نزول الأغنية"],g:"y",s:"songs",m:"w",d:2}),
 Rd(["WHICH TAYLOR SWIFT ALBUM","CAME OUT LAST",Q],["أنهي ألبوم لتايلور سويفت","أجدد",QA],"max",[
  ["Fearless",2008,"فيرلس","Fearless (Taylor Swift album)"],["Speak Now",2010,"سبيك ناو"],["Red",2012,"ريد","Red (Taylor Swift album)"],
  ["1989",2014,"1989","1989 (album)"],["Reputation",2017,"ريبيوتيشن","Reputation (album)"],["Lover",2019,"لوفر","Lover (album)"],
  ["Folklore",2020,"فولكلور","Folklore (Taylor Swift album)"],["Midnights",2022,"ميدنايتس"],["The Life of a Showgirl",2025,"ذا لايف أوف أ شوجيرل"]],
  {h:"album",k:["RELEASED","نزل سنة"],s:"songs",m:"w",d:1}),
 Rd(["WHICH BEATLES ALBUM","CAME OUT FIRST",Q],["أنهي ألبوم للبيتلز","نزل الأول",QA],"min",[
  ["Please Please Me",1963,"بليز بليز مي","Please Please Me (album)"],["A Hard Day's Night",1964,"أ هارد دايز نايت","A Hard Day's Night (album)"],["Help!",1965,"هيلب","Help! (album)"],
  ["Revolver",1966,"ريفولفر","Revolver (Beatles album)"],["Sgt. Pepper's",1967,"سارجنت بيبرز","Sgt. Pepper's Lonely Hearts Club Band"],["Magical Mystery Tour",1967,"ماجيكال ميستري تور"],
  ["The White Album",1968,"الألبوم الأبيض","The Beatles (album)"],["Abbey Road",1969,"آبي رود"],["Let It Be",1970,"ليت إت بي","Let It Be (album)"]],
  {h:"album",k:["RELEASED","نزل سنة"],s:"songs",m:"w",d:2}),
 Rd(["WHICH WORLD CUP SONG","CAME OUT FIRST",Q],["أنهي أغنية مونديال","نزلت الأول",QA],"min",[
  ["Un'estate italiana",1990,"أونيستاتي إيتاليانا"],["Gloryland",1994,"جلوري لاند"],["La Copa de la Vida",1998,"لا كوبا دي لا فيدا","The Cup of Life"],
  ["Boom",2002,"بوم","Boom (Anastacia song)"],["The Time of Our Lives",2006,"ذا تايم أوف أور لايفز","The Time of Our Lives (Il Divo and Toni Braxton song)"],["Waka Waka",2010,"واكا واكا","Waka Waka (This Time for Africa)"],
  ["We Are One (Ole Ola)",2014,"وي آر وان"],["Live It Up",2018,"ليف إت أب","Live It Up (Nicky Jam song)"],["Hayya Hayya",2022,"هيا هيا","Hayya Hayya (Better Together)"]],
  {h:"song",k:["RELEASED","نزلت سنة"],dt:["Song released","نزول الأغنية"],g:"y",s:"songs",m:"w",d:3}),
 Rd(["WHICH DISNEY SONG","CAME OUT FIRST",Q],["أنهي أغنية ديزني","نزلت الأول",QA],"min",[
  ["When You Wish Upon a Star",1940,"ويين يو ويش أبون أ ستار"],["Bibbidi-Bobbidi-Boo",1950,"بيبيدي بوبيدي بو"],["Under the Sea",1989,"تحت البحر"],
  ["A Whole New World",1992,"عالم جديد"],["Hakuna Matata",1994,"هاكونا ماتاتا","Hakuna Matata (song)"],["Colors of the Wind",1995,"ألوان الريح"],
  ["Let It Go",2013,"لت إت جو","Let It Go (Disney song)"],["How Far I'll Go",2016,"هاو فار آيل جو"],["Remember Me",2017,"ريممبر مي","Remember Me (Coco song)"]],
  {h:"song",k:["RELEASED","نزلت سنة"],dt:["Song released","نزول الأغنية"],g:"y",s:"songs",m:"w",d:2}),
 Rd(["WHICH 2000s HIT","CAME OUT LAST",Q],["أنهي أغنية من الألفينات","أجدد",QA],"max",[
  ["Oops!... I Did It Again",2000,"أوبس آي ديد إت أجين","Oops!... I Did It Again (song)"],["Can't Get You Out of My Head",2001,"كانت جيت يو أوت أوف ماي هيد"],["Lose Yourself",2002,"لوز يورسيلف"],
  ["In da Club",2003,"إن دا كلوب"],["Yeah!",2004,"ييه","Yeah! (Usher song)"],["Hips Don't Lie",2006,"هيبس دونت لاي"],
  ["Umbrella",2007,"أمبريلا","Umbrella (song)"],["Poker Face",2008,"بوكر فيس"],["I Gotta Feeling",2009,"آي جوتا فيلينج"]],
  {h:"song",k:["RELEASED","نزلت سنة"],dt:["Song released","نزول الأغنية"],g:"y",s:"songs",m:"w",d:3}),
 Rd(["WHICH ARABIC HIT","CAME OUT FIRST",Q],["أنهي أغنية عربية","نزلت الأول",QA],"min",[
  ["Li Beirut",1984,"لبيروت"],["Didi",1992,"ديدي","Didi (song)"],["Aïcha",1996,"عيشة","Aïcha (song)"],
  ["Kalimat",1991,"كلمات","Kalimat (song)"],["Akhasmak Ah",2003,"أخاصمك آه"],["Ah W Noss",2004,"آه ونص"],
  ["Ali El Keffiyeh",2013,"علّي الكوفية"],["Boshret Kheir",2014,"بشرة خير"],["Lm3allem",2015,"لمعلم"]],
  {h:"song",k:["RELEASED","نزلت سنة"],dt:["Song released","نزول الأغنية"],g:"y",s:"songs",m:"w",d:3}),
 Rd(["WHICH HIP-HOP CLASSIC","CAME OUT FIRST",Q],["أنهي أغنية هيب هوب","نزلت الأول",QA],"min",[
  ["Rapper's Delight",1979,"رابرز ديلايت"],["The Message",1982,"ذا ميسدج","The Message (Grandmaster Flash and the Furious Five song)"],["Fight the Power",1989,"فايت ذا باور"],
  ["Juicy",1994,"جوسي","Juicy (The Notorious B.I.G. song)"],["Gangsta's Paradise",1995,"جانجستاز بارادايس"],["Still D.R.E.",1999,"ستيل دري"],
  ["Gold Digger",2005,"جولد ديجر","Gold Digger (Kanye West song)"],["HUMBLE.",2017,"هامبل"],["Not Like Us",2024,"نوت لايك أس"]],
  {h:"song",k:["RELEASED","نزلت سنة"],dt:["Song released","نزول الأغنية"],g:"y",s:"songs",m:"w",d:2}),
 Rd(["WHICH SONG IS","THE LONGEST",Q],["أنهي","أطول أغنية",QA],"max",[
  ["All Too Well (10 Minute Version)",10.2,"أول تو ويل (10 دقايق)","All Too Well"],["Free Bird",9.1,"فري بيرد"],["November Rain",9.0,"نوفمبر رين"],
  ["American Pie",8.6,"أمريكان باي","American Pie (song)"],["Stairway to Heaven",8.0,"ستيرواي تو هيفن"],["Hey Jude",7.2,"هاي جود"],
  ["Hotel California",6.5,"هوتيل كاليفورنيا","Hotel California (Eagles song)"],["Like a Rolling Stone",6.2,"لايك أ رولينج ستون"],["Bohemian Rhapsody",5.9,"بوهيميان رابسودي"]],
  {pre:["~","~"],suf:[" min"," دقيقة"],dp:1,h:"song",k:["LENGTH","مدة الأغنية"],s:"songs",m:"w",d:2}),
 Rd(["WHICH K-POP HIT","CAME OUT FIRST",Q],["أنهي أغنية كي بوب","نزلت الأول",QA],"min",[
  ["Gee",2009,"جي","Gee (Girls' Generation song)"],["Gangnam Style",2012,"جانجنام ستايل"],["DDU-DU DDU-DU",2018,"دودو دودو"],
  ["Boy with Luv",2019,"بوي ويذ لاف"],["Dynamite",2020,"ديناميت","Dynamite (BTS song)"],["Butter",2021,"باتر","Butter (song)"],
  ["Seven",2023,"سيفن","Seven (Jungkook song)"],["APT.",2024,"آبت","APT. (song)"],["Golden",2025,"جولدن","Golden (Huntrix song)"]],
  {h:"song",k:["RELEASED","نزلت سنة"],dt:["Song released","نزول الأغنية"],g:"y",s:"songs",m:"w",d:2}),
 Rd(["WHICH AMR DIAB ALBUM","CAME OUT LAST",Q],["أنهي ألبوم لعمرو دياب","أجدد",QA],"max",[
  ["Ya tari2",1983,"يا طريق","Ya Tareeq"],["Habiby",1991,"حبيبي","Habiby (album)"],["Rag3een",1995,"راجعين","Ragein"],
  ["2amarein",1999,"قمرين","Amarain"],["Aktar wahed",2001,"أكتر واحد","Aktar Wahed"],["Kammel kalamak",2005,"كمل كلامك","Kammel Kalamak"],
  ["El lilady",2007,"الليلة دي","El Lilady"],["El leila",2013,"الليلة","El Leila"],["A7la w a7la",2016,"أحلى وأحلى","Ahla W Ahla"]],
  {h:"Egyptian album",k:["RELEASED","نزل سنة"],s:"songs",m:"eg",d:3}),
 Rd(["WHICH OM KALTHOUM SONG","CAME OUT FIRST",Q],["أنهي أغنية لأم كلثوم","نزلت الأول",QA],"min",[
  ["Ana fi entezarak",1943,"أنا في انتظارك","Ana Fi Entezarak"],["Ghanili shwaya",1944,"غنيلي شوية","Ghanili Shwaya"],["Alf leila w leila",1969,"ألف ليلة وليلة","Alf Leila wa Leila"],
  ["Enta 3omri",1964,"إنت عمري","Enta Omri"],["Amal 7ayati",1965,"أمل حياتي","Amal Hayati"],["El atlal",1966,"الأطلال","Al Atlal"],
  ["Hazihi laylati",1968,"هذه ليلتي","Hathihi Laylati"],["Aghadan al2ak",1971,"أغداً ألقاك","Aghadan Alqak"],["Leilet 7ob",1972,"ليلة حب","Leilet Hob"]],
  {h:"Egyptian song",k:["RELEASED","نزلت سنة"],dt:["Song released","نزول الأغنية"],g:"y",s:"songs",m:"eg",d:3}),
 Rd(["WHICH ADELE SONG","CAME OUT LAST",Q],["أنهي أغنية لأديل","أجدد",QA],"max",[
  ["Hometown Glory",2007,"هومتاون جلوري"],["Chasing Pavements",2008,"تشيسينج بيفمنتس"],["Rolling in the Deep",2010,"رولينج إن ذا ديب"],
  ["Someone Like You",2011,"سام وان لايك يو","Someone Like You (Adele song)"],["Set Fire to the Rain",2011,"سيت فاير تو ذا رين"],["Skyfall",2012,"سكاي فول","Skyfall (Adele song)"],
  ["Hello",2015,"هالو","Hello (Adele song)"],["Send My Love",2016,"سيند ماي لوف","Send My Love (To Your New Lover)"],["Easy on Me",2021,"إيزي أون مي"]],
  {h:"song",k:["RELEASED","نزلت سنة"],dt:["Song released","نزول الأغنية"],g:"y",s:"songs",m:"w",d:1}),
 Rd(["WHICH EUROVISION WINNER","CAME FIRST",Q],["أنهي أغنية كسبت اليوروفيجن","الأول",QA],"min",[
  ["Waterloo",1974,"واترلو","Waterloo (ABBA song)"],["Hold Me Now",1987,"هولد مي ناو","Hold Me Now (Johnny Logan song)"],["Hard Rock Hallelujah",2006,"هارد روك هاليلويا"],
  ["Fairytale",2009,"فيري تيل","Fairytale (Alexander Rybak song)"],["Satellite",2010,"ساتلايت","Satellite (Lena song)"],["Euphoria",2012,"يوفوريا","Euphoria (Loreen song)"],
  ["Arcade",2019,"أركيد","Arcade (Duncan Laurence song)"],["Zitti e buoni",2021,"زيتي إي بووني"],["Tattoo",2023,"تاتو","Tattoo (Loreen song)"]],
  {h:"song",k:["WON EUROVISION","كسبت اليوروفيجن سنة"],s:"songs",m:"w",d:2}),
Rd(["WHO IS THE","YOUNGEST FEMALE SINGER",Q],["مين","أصغر مطربة",QA],"max",[
  ["Laila Mourad",1918,"ليلى مراد","Leila Mourad"],["Simone",1966,"سيمون","Simone Philip Kamel"],["Angham",1972,"أنغام"],
  ["Sherine Abdel Wahab",1980,"شيرين عبد الوهاب","Sherine"],["Ruby",1981,"روبي","Ruby (Egyptian singer)"],["Amal Maher",1985,"آمال ماهر"],
  ["Donia Samir Ghanem",1985,"دنيا سمير غانم"],["Nesma Mahgoub",1989,"نسمة محجوب"],["Carmen Soliman",1994,"كارمن سليمان","Carmen Suleiman"]],
  {h:"Egyptian singer",k:BORN,g:"p",s:"singers",m:"eg",d:2}),
 Rd(["WHO IS THE","YOUNGEST SHAABI SINGER",Q],["مين","أصغر مطرب شعبي",QA],"max",[
  ["Mohamed Roshdy",1928,"محمد رشدي"],["Ahmed Adaweya",1945,"أحمد عدوية"],["Shaaban Abdel Rahim",1957,"شعبان عبد الرحيم"],
  ["Hassan El Asmar",1959,"حسن الأسمر"],["Hakim",1962,"حكيم","Hakim (singer)"],["Ahmed Sheba",1965,"أحمد شيبة"],
  ["Ahmed Saad",1981,"أحمد سعد","Ahmed Saad (singer)"],["Mohamed Ramadan",1988,"محمد رمضان","Mohamed Ramadan (actor)"],["Mohamed Abdel Muttalib",1910,"محمد عبد المطلب"]],
  {h:"Egyptian singer",k:BORN,g:"p",s:"singers",m:"eg",d:2}),
 Rd(["WHO IS THE","OLDEST NEW-GENERATION SINGER",Q],["مين","أكبر مطرب من الجيل الجديد في السن",QA],"min",[
  ["Mohamed Hamaki",1975,"محمد حماقي"],["Tamer Hosny",1977,"تامر حسني"],["Ramy Sabry",1978,"رامي صبري","Ramy Sabry (singer)"],
  ["Hamza Namira",1980,"حمزة نمرة"],["Hamada Helal",1980,"حمادة هلال"],["Amir Eid",1983,"أمير عيد"],
  ["Tamer Ashour",1984,"تامر عاشور"],["Ahmed Gamal",1988,"أحمد جمال","Ahmad Gamal (singer)"],["Marwan Pablo",1995,"مروان بابلو"]],
  {h:"Egyptian singer",k:BORN,g:"p",s:"singers",m:"eg",d:3}),
 Rd(["WHO IS THE","YOUNGEST GOLDEN-ERA SINGER",Q],["مين","أصغر مطرب من الزمن الجميل",QA],"max",[
  ["Mounira El Mahdeya",1885,"منيرة المهدية"],["Mohamed Abdel Muttalib",1910,"محمد عبد المطلب"],["Laila Mourad",1918,"ليلى مراد","Leila Mourad"],
  ["Mohamed Fawzi",1918,"محمد فوزي","Mohamed Fawzi (singer)"],["Karem Mahmoud",1922,"كارم محمود"],["Mohamed Roshdy",1928,"محمد رشدي"],
  ["Abdel Halim Hafez",1929,"عبد الحليم حافظ"],["Fayza Ahmed",1934,"فايزة أحمد"],["Najat Al Saghira",1938,"نجاة الصغيرة","Nagat El-Sagheera"]],
  {h:"Egyptian singer",k:BORN,g:"p",s:"singers",m:"eg",d:3}),
Rd(["WHICH TAMER HOSNY ALBUM","CAME OUT LAST",Q],["أنهي ألبوم لتامر حسني","أجدد",QA],"max",[
  ["Hob",2004,"حب","Hob (album)"],["Ya bent el eih",2007,"يا بنت الإيه"],["2arrab kaman",2008,"قرب كمان"],
  ["Ha3eesh 7ayaty",2009,"هعيش حياتي"],["Ekhtart sa7",2010,"اخترت صح"],["Elly gai a7la",2011,"اللي جاي أحلى"],
  ["Ba7ebak enta",2013,"بحبك انت"],["3omry ebtada",2016,"عمري ابتدا"],["Khaleek folazy",2020,"خليك فولاذي"]],
  {h:"Tamer Hosny album",k:["RELEASED","نزل سنة"],s:"songs",m:"eg",d:2}),
 Rd(["WHICH MOHAMED MOUNIR ALBUM","CAME OUT LAST",Q],["أنهي ألبوم لمحمد منير","أجدد",QA],"max",[
  ["Shokolata",1989,"شيكولاتة"],["Meshwar",1991,"مشوار"],["Eftah 2albak",1994,"افتح قلبك"],
  ["El far7a",1999,"الفرحة"],["Fi 3eshg el banat",2000,"في عشق البنات"],["A7mar shafayef",2003,"أحمر شفايف"],
  ["Embare7 kan 3omry 3eshreen",2005,"امبارح كان عمري عشرين"],["Ta3m el beyout",2008,"طعم البيوت"],["Watan",2018,"وطن"]],
  {h:"Mohamed Mounir album",k:["RELEASED","نزل سنة"],s:"songs",m:"eg",d:3}),
 Rd(["WHICH HAMAKI ALBUM","CAME OUT FIRST",Q],["أنهي ألبوم لحماقي","نزل الأول",QA],"min",[
  ["Khallina ne3eesh",2003,"خلينا نعيش"],["Ya ana ya enta",2005,"يا أنا يا انت"],["Kheles el kalam",2006,"خلص الكلام"],
  ["Ba7ebak kol youm aktar",2007,"بحبك كل يوم أكتر"],["7aga mesh tabe3eya",2010,"حاجة مش طبيعية"],["Men 2alby baghanny",2012,"من قلبي بغني"],
  ["3omro ma yegheeb",2015,"عمره ما يغيب"],["Kol youm men dah",2019,"كل يوم من ده"],["Ya fatenny",2021,"يا فاتني"]],
  {h:"Mohamed Hamaki album",k:["RELEASED","نزل سنة"],s:"songs",m:"eg",d:3}),
 Rd(["WHICH SHERINE ALBUM","CAME OUT LAST",Q],["أنهي ألبوم لشيرين","أجدد",QA],"max",[
  ["Garh Tany",2003,"جرح تاني"],["Lazem a3eesh",2005,"لازم أعيش"],["Tamer w shereen",2002,"تامر وشيرين"],
  ["7abeit",2009,"حبيت"],["Es2al 3alaya",2012,"اسأل عليا"],["Ana keteer",2014,"أنا كتير"],
  ["Tare2y",2015,"طريقي"],["Nassay",2018,"نساي"],["Batmanna ansak",2025,"بتمنى أنساك"]],
  {h:"Sherine album",k:["RELEASED","نزل سنة"],s:"songs",m:"eg",d:2}),
 Rd(["WHICH ABDEL HALIM FILM SONG","CAME OUT FIRST",Q],["أنهي أغنية لحليم من أفلامه","نزلت الأول",QA],"min",[
  ["Ahwak",1957,"أهواك","Ahwak"],["We7yat 2alby",1962,"وحياة قلبي"],["2olly 7aga",1962,"قولي حاجة"],
  ["7aga ghareeba",1967,"حاجة غريبة"],["Gabbar",1967,"جبار"],["Balash 3etab",1967,"بلاش عتاب"],
  ["Gana el hawa",1969,"جانا الهوى"],["El hawa hawaya",1969,"الهوى هوايا"],["A7dan el 7abayeb",1969,"أحضان الحبايب"]],
  {h:"Abdel Halim Hafez song",k:["RELEASED","نزلت سنة"],dt:["Song released","نزول الأغنية"],g:"y",s:"songs",m:"eg",d:3})]}
);
