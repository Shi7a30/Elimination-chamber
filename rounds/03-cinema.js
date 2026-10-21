// Cinema rounds. The round format is explained above Rd() in index.html.
// Each category file adds itself to CATS; index.html loads them in number order.
CATS.push(
{n:"Cinema",a:"السينما",e:"🎬",r:[
 Rd(["WHO IS THE","OLDEST MOVIE STAR",Q],["مين","أكبر نجم سينما في السن",QA],"min",[
  ["Clint Eastwood",1930,"كلينت إيستوود"],["Dustin Hoffman",1937,"داستن هوفمان"],["Al Pacino",1940,"آل باتشينو"],["Harrison Ford",1942,"هاريسون فورد"],
  ["Robert De Niro",1943,"روبرت دي نيرو"],["Sylvester Stallone",1946,"سيلفستر ستالون"],["Arnold Schwarzenegger",1947,"أرنولد شوارزنيجر"],["Meryl Streep",1949,"ميريل ستريب"],
  ["Jackie Chan",1954,"جاكي شان"]],{h:"actor",k:BORN,g:"p",s:"actors",m:"w",d:1}),
 Rd(["WHO IS THE","OLDEST EGYPTIAN STAR",Q],["مين","أكبر نجم مصري في السن",QA],"min",[
  ["Omar Sharif",1932,"عمر الشريف"],["Adel Imam",1940,"عادل إمام","Adel Emam"],["Mahmoud Yassin",1941,"محمود ياسين"],["Ahmed Zaki",1949,"أحمد زكي","Ahmed Zaki (actor)"],
  ["Mohamed Henedy",1965,"محمد هنيدي","Mohamed Henedi"],["Ahmed Helmy",1969,"أحمد حلمي"],["Ahmed El-Sakka",1973,"أحمد السقا","Ahmed El Sakka"],["Karim Abdel Aziz",1975,"كريم عبد العزيز"],
  ["Mohamed Ramadan",1988,"محمد رمضان","Mohamed Ramadan (actor)"]],{h:"Egyptian actor",k:BORN,g:"p",s:"actors",m:"eg",d:1}),
 Rd(["WHICH IS THE","BIGGEST BLOCKBUSTER",Q],["أنهي فيلم","جاب أكتر إيرادات",QA],"max",[
  ["Avatar",2.923,"أفاتار","Avatar (2009 film)"],["Avengers: Endgame",2.799,"أفنجرز: إند جيم"],["Titanic",2.264,"تايتانيك","Titanic (1997 film)"],["Star Wars: The Force Awakens",2.071,"حرب النجوم: صحوة القوة"],
  ["Avengers: Infinity War",2.052,"أفنجرز: إنفينيتي وور"],["Spider-Man: No Way Home",1.921,"سبايدر مان: نو واي هوم"],["Jurassic World",1.671,"جوراسيك وورلد"],["The Lion King (2019)",1.662,"الأسد الملك (2019)","The Lion King (2019 film)"],
  ["Frozen II",1.453,"فروزن 2"]],{pre:["$",""],suf:["B"," مليار دولار"],dp:2,h:"film",k:["BOX OFFICE","الإيرادات"],s:"films",m:"w",d:2}),
 Rd(["WHICH IS THE","OLDEST MOVIE",Q],["إيه","أقدم فيلم",QA],"min",[
  ["The Godfather",1972,"الأب الروحي"],["Jaws",1975,"الفك المفترس","Jaws (film)"],["Star Wars",1977,"حرب النجوم","Star Wars (film)"],["E.T.",1982,"إي تي","E.T. the Extra-Terrestrial"],
  ["Back to the Future",1985,"العودة للمستقبل"],["Jurassic Park",1993,"جوراسيك بارك","Jurassic Park (film)"],["Pulp Fiction",1994,"بالب فيكشن"],["Titanic",1997,"تايتانيك","Titanic (1997 film)"],
  ["The Matrix",1999,"ذا ماتريكس"]],{h:"film",k:["RELEASED","نزل سنة"],dt:["Film released", "نزول الفيلم"],g:"y",s:"films",m:"w",d:2}),
 Rd(["WHICH IS THE","OLDEST EGYPTIAN FILM",Q],["أنهي فيلم مصري","أقدم",QA],"min",[
  ["Bab el 7adid",1958,"باب الحديد","Cairo Station"],["Do3a2 el karawan",1959,"دعاء الكروان","The Nightingale's Prayer"],["Khally balak men zouzou",1972,"خلي بالك من زوزو","Watch Out for Zouzou"],
  ["El erhab wel kabab",1992,"الإرهاب والكباب","Terrorism and Kebab"],["Ismailia Rayeh Gai",1997,"إسماعيلية رايح جاي","Round Trip to Ismailia"],["El limby",2002,"اللمبي","El-Limby"],
  ["3omaret ya3koubian",2006,"عمارة يعقوبيان","The Yacoubian Building (film)"],["El feel el azra2",2014,"الفيل الأزرق","The Blue Elephant (film)"],
  ["Kira wel gin",2022,"كيرة والجن","Kira & El Gin"]],{h:"Egyptian film",k:["RELEASED","نزل سنة"],dt:["Film released", "نزول الفيلم"],g:"y",s:"films",m:"eg",d:3}),
  Rd(["WHO IS THE","OLDEST GOLDEN-ERA STAR",Q],["مين","أكبر نجم من الزمن الجميل",QA],"min",[
   ["Anwar Wagdi",1904,"أنور وجدي"],["Ismail Yassine",1912,"إسماعيل ياسين"],["Ahmed Mazhar",1917,"أحمد مظهر"],["Farid Shawqi",1920,"فريد شوقي"],
   ["Fouad El-Mohandes",1924,"فؤاد المهندس","Fouad el-Mohandes"],["Shoukry Sarhan",1925,"شكري سرحان"],["Rushdy Abaza",1926,"رشدي أباظة"],
   ["Emad Hamdy",1909,"عماد حمدي"],["Mahmoud el-Meliguy",1910,"محمود المليجي"]],{h:"Egyptian actor",k:BORN,g:"p",s:"actors",m:"eg",d:3}),
  Rd(["WHO IS THE","YOUNGEST NEW STAR",Q],["مين","أصغر نجم في الجيل الجديد",QA],"max",[
   ["Mohamed Saad",1968,"محمد سعد","Mohamed Saad (actor)"],["Ahmed Ezz",1971,"أحمد عز","Ahmed Ezz (actor)"],["Amir Karara",1977,"أمير كرارة"],["Ahmed Mekky",1980,"أحمد مكي"],
   ["Asser Yassin",1981,"آسر ياسين"],["Mohamed Farrag",1982,"محمد فراج"],["Karim Mahmoud Abdel Aziz",1985,"كريم محمود عبد العزيز"],
   ["Ahmed Hatem",1987,"أحمد حاتم","Ahmed Hatem (actor)"],["Ahmed Malek",1995,"أحمد مالك"]],{h:"Egyptian actor",k:BORN,g:"p",s:"actors",m:"eg",d:1}),
  Rd(["WHICH HIT FILM","CAME OUT FIRST",Q],["أنهي فيلم","نزل الأول",QA],"min",[
   ["Se3idy fel gam3a el amrekia",1998,"صعيدي في الجامعة الأمريكية","Saidi fil Gamaa el Amrikia"],["Hammam fi amsterdam",1999,"همام في أمستردام","Hammam fi Amsterdam"],["El nazer",2000,"الناظر","El Nazer (film)"],
   ["Africano",2001,"أفريكانو","Africano (film)"],["Mafia",2002,"مافيا","Mafia (2002 film)"],["Tito",2004,"تيتو","Tito (2004 film)"],["El gezira",2007,"الجزيرة","The Island (2007 film)"],
   ["Welad rizk",2015,"ولاد رزق","Sons of Rizk"],["El mamar",2019,"الممر","El Mamar (film)"]],{h:"Egyptian film",k:["RELEASED","نزل سنة"],dt:["Film released", "نزول الفيلم"],g:"y",s:"films",m:"eg",d:2}),
  Rd(["WHICH IS THE","OLDEST CLASSIC",Q],["إيه","أقدم فيلم من الكلاسيكيات",QA],"min",[
   ["Ghazal el banat",1949,"غزل البنات","The Flirtation of Girls"],["Ebn 7amido",1957,"ابن حميدو","Hamido's Son"],["El 7aram",1965,"الحرام","The Sin (1965 film)"],
   ["El zoga el tanya",1967,"الزوجة الثانية","The Second Wife (1967 film)"],["Shei2 men el khof",1969,"شيء من الخوف","A Taste of Fear"],["El karnak",1975,"الكرنك","Karnak (film)"],
   ["Sawa2 el otobees",1982,"سواق الأتوبيس","Sawwak El Otobees (film)"],["El bari2",1986,"البريء","The Innocent (1986 film)"],["El kit kat",1991,"الكيت كات","The Kit Kat"]],
   {h:"Egyptian film",k:["RELEASED","نزل سنة"],dt:["Film released", "نزول الفيلم"],g:"y",s:"films",m:"eg",d:2}),
 Rd(["WHO IS THE","OLDEST COMEDIAN",Q],["مين","أكبر كوميديان في السن",QA],"min",[
  ["Samir Ghanem",1937,"سمير غانم"],["Mohamed Sobhi",1948,"محمد صبحي","Mohamed Sobhi (actor)"],["Talaat Zakaria",1960,"طلعت زكريا"],
  ["Ashraf Abdel Baky",1963,"أشرف عبد الباقي"],["Bayoumi Fouad",1965,"بيومي فؤاد"],["Maged El Kedwany",1967,"ماجد الكدواني"],
  ["Hisham Maged",1980,"هشام ماجد"],["Mostafa Khater",1985,"مصطفى خاطر"],["Ali Rabie",1989,"علي ربيع"]],{h:"Egyptian actor",k:BORN,g:"p",s:"actors",m:"eg",d:1}),
 Rd(["WHICH COMEDY","CAME OUT LAST",Q],["إيه","أجدد فيلم كوميدي",QA],"max",[
  ["7arameya fi kg2",2001,"حرامية في كي جي تو","Thieves in KG2"],["Mido mashakel",2003,"ميدو مشاكل","Mido Mashakel"],["Zaki chan",2005,"زكي شان","Zaki Chan"],
  ["Keda reda",2007,"كده رضا","Keda Reda"],["1000 mabrouk",2009,"ألف مبروك","1000 Mabrouk"],["3asal eswed",2010,"عسل إسود","Asal Eswed"],
  ["X-large",2011,"إكس لارج","X-Large (film)"],["El badla",2018,"البدلة","El Badla"],["Wahed tany",2022,"واحد تاني","Wahed Tany"]],{h:"Egyptian film",k:["RELEASED","نزل سنة"],dt:["Film released", "نزول الفيلم"],g:"y",s:"films",m:"eg",d:2}),
 Rd(["WHO IS THE","YOUNGEST OSCAR WINNER",Q],["مين","أصغر واحد كسب أوسكار",QA],"max",[
  ["Anthony Hopkins",1937,"أنتوني هوبكنز"],["Denzel Washington",1954,"دينزل واشنطن"],["Tom Hanks",1956,"توم هانكس"],
  ["Matthew McConaughey",1969,"ماثيو ماكونهي"],["Leonardo DiCaprio",1974,"ليوناردو دي كابريو"],["Cillian Murphy",1976,"كيليان مورفي"],
  ["Natalie Portman",1981,"ناتالي بورتمان"],["Emma Stone",1988,"إيما ستون"],["Jennifer Lawrence",1990,"جينيفر لورانس"]],{h:"actor",k:BORN,g:"p",s:"actors",m:"w",d:3}),
 Rd(["WHICH PIXAR FILM","CAME OUT FIRST",Q],["أنهي فيلم بيكسار","نزل الأول",QA],"min",[
  ["Toy Story",1995,"توي ستوري"],["Monsters, Inc.",2001,"مونسترز إنك"],["Finding Nemo",2003,"البحث عن نيمو"],
  ["The Incredibles",2004,"ذا إنكريديبلز"],["Cars",2006,"كارز","Cars (film)"],["Ratatouille",2007,"راتاتوي","Ratatouille (film)"],
  ["Up",2009,"أب","Up (2009 film)"],["Inside Out",2015,"إنسايد آوت","Inside Out (2015 film)"],["Coco",2017,"كوكو","Coco (2017 film)"]],{h:"film",k:["RELEASED","نزل سنة"],dt:["Film released", "نزول الفيلم"],g:"y",s:"films",m:"w",d:1}),
 Rd(["WHO HAS THE MOST","OSCAR NOMINATIONS FOR ACTING",Q],["مين","عنده أكتر ترشيحات أوسكار",QA],"max",[
  ["Meryl Streep",21,"ميريل ستريب"],["Jack Nicholson",12,"جاك نيكلسون"],["Denzel Washington",9,"دينزل واشنطن"],["Al Pacino",9,"آل باتشينو"],["Robert De Niro",8,"روبرت دي نيرو"],["Cate Blanchett",8,"كيت بلانشيت"],["Leonardo DiCaprio",7,"ليوناردو دي كابريو"],["Tom Hanks",6,"توم هانكس"],["Brad Pitt",4,"براد بيت"]],
  {h:"actor",k:["ACTING NOMINATIONS","ترشيحات تمثيل"],s:"actors",m:"w",d:1}),
 Rd(["WHO IS THE","TALLEST ACTOR",Q],["مين","أطول ممثل",QA],"max",[
  ["Dwayne Johnson",196,"دواين جونسون (ذا روك)"],["Liam Neeson",193,"ليام نيسون"],["Chris Hemsworth",190,"كريس هيمسورث"],
  ["Hugh Jackman",188,"هيو جاكمان"],["Keanu Reeves",186,"كيانو ريفز"],["Leonardo DiCaprio",183,"ليوناردو دي كابريو"],
  ["Brad Pitt",180,"براد بيت"],["Tom Cruise",170,"توم كروز"],["Danny DeVito",147,"داني ديفيتو"]],
  {pre:["~","~"],suf:[" cm"," سم"],h:"actor",k:["HEIGHT","الطول"],s:"actors",m:"w",d:2}),
 Rd(["WHO PLAYED A","SUPERHERO FIRST",Q],["مين","لعب دور بطل خارق الأول",QA],"min",[
  ["Christopher Reeve",1978,"كريستوفر ريف"],["Michael Keaton",1989,"مايكل كيتون"],["Hugh Jackman",2000,"هيو جاكمان"],
  ["Tobey Maguire",2002,"توبي ماجواير"],["Robert Downey Jr",2008,"روبرت داوني جونيور","Robert Downey Jr."],["Chris Hemsworth",2011,"كريس هيمسورث"],
  ["Gal Gadot",2016,"جال جادوت"],["Tom Holland",2016,"توم هولاند"],["Robert Pattinson",2022,"روبرت باتينسون"]],
  {h:"actor",k:["FIRST SUPERHERO FILM","أول فيلم بطل خارق"],s:"actors",m:"w",d:2}),
 Rd(["WHO IS THE","OLDEST ACTION STAR",Q],["مين","أكبر نجم أكشن في السن",QA],"min",[
  ["Chuck Norris",1940,"تشاك نوريس"],["Liam Neeson",1952,"ليام نيسون"],["Jackie Chan",1954,"جاكي شان"],
  ["Bruce Willis",1955,"بروس ويليس"],["Jean-Claude Van Damme",1960,"جان كلود فان دام"],["Tom Cruise",1962,"توم كروز"],
  ["Keanu Reeves",1964,"كيانو ريفز"],["Jason Statham",1967,"جيسون ستاثام"],["Dwayne Johnson",1972,"دواين جونسون (ذا روك)"]],
  {h:"actor",k:BORN,g:"p",s:"actors",m:"w",d:1}),
 Rd(["WHO IS THE","YOUNGEST HOLLYWOOD STAR",Q],["مين","أصغر نجم في هوليوود",QA],"max",[
  ["Johnny Depp",1963,"جوني ديب"],["Will Smith",1968,"ويل سميث"],["Ryan Reynolds",1976,"رايان رينولدز"],
  ["Ryan Gosling",1980,"رايان جوسلينج"],["Anne Hathaway",1982,"آن هاثاواي"],["Margot Robbie",1990,"مارجو روبي"],
  ["Florence Pugh",1996,"فلورنس بيو"],["Sydney Sweeney",1997,"سيدني سويني"],["Jenna Ortega",2002,"جينا أورتيجا"]],
  {h:"actor",k:BORN,g:"p",s:"actors",m:"w",d:2}),
 Rd(["WHO IS THE","OLDEST LEADING LADY",Q],["مين","أكبر نجمة في السن",QA],"min",[
  ["Sophia Loren",1934,"صوفيا لورين"],["Jane Fonda",1937,"جين فوندا"],["Michelle Pfeiffer",1958,"ميشيل فايفر"],
  ["Sandra Bullock",1964,"ساندرا بولوك"],["Halle Berry",1966,"هالي بيري"],["Julia Roberts",1967,"جوليا روبرتس"],
  ["Angelina Jolie",1975,"أنجلينا جولي"],["Natalie Portman",1981,"ناتالي بورتمان"],["Zendaya",1996,"زندايا"]],
  {h:"actress",k:BORN,g:"p",s:"actors",m:"w",d:2}),
 Rd(["WHO HAS WON THE","MOST ACTING OSCARS",Q],["مين","كسب أوسكار تمثيل أكتر",QA],"max",[
  ["Katharine Hepburn",4,"كاثرين هيبورن"],["Jack Nicholson",3,"جاك نيكلسون"],["Daniel Day-Lewis",3,"دانيال داي لويس"],
  ["Meryl Streep",3,"ميريل ستريب"],["Tom Hanks",2,"توم هانكس"],["Denzel Washington",2,"دينزل واشنطن"],
  ["Emma Stone",2,"إيما ستون"],["Anthony Hopkins",2,"أنتوني هوبكنز"],["Leonardo DiCaprio",1,"ليوناردو دي كابريو"]],
  {suf:[" 🏆"," 🏆"],h:"actor",k:["ACTING OSCARS","أوسكارات تمثيل"],s:"actors",m:"w",d:2}),
 Rd(["WHO IS THE","YOUNGEST HARRY POTTER STAR",Q],["مين","أصغر نجم في هاري بوتر",QA],"max",[
  ["Maggie Smith",1934,"ماجي سميث"],["Michael Gambon",1940,"مايكل جامبون"],["Alan Rickman",1946,"آلان ريكمان"],
  ["Robbie Coltrane",1950,"روبي كولترين"],["Gary Oldman",1958,"جاري أولدمان"],["Ralph Fiennes",1962,"رالف فاينس"],
  ["Rupert Grint",1988,"روبرت جرينت"],["Daniel Radcliffe",1989,"دانيال رادكليف"],["Emma Watson",1990,"إيما واتسون"]],
  {h:"actor",k:BORN,g:"p",s:"actors",m:"w",d:2}),
 Rd(["WHO IS THE","OLDEST CLASSIC ACTRESS",Q],["مين","أكبر فنانة من زمان في السن",QA],"min",[
  ["Amina Rizk",1910,"أمينة رزق"],["Madiha Yousri",1921,"مديحة يسري"],["Hind Rostom",1929,"هند رستم"],
  ["Faten Hamama",1931,"فاتن حمامة"],["Nadia Lutfi",1937,"نادية لطفي"],["Soad Hosny",1943,"سعاد حسني"],
  ["Nabila Ebeid",1945,"نبيلة عبيد"],["Mervat Amin",1946,"ميرفت أمين"],["Yousra",1955,"يسرا"]],
  {h:"Egyptian actress",k:BORN,g:"p",s:"actors",m:"eg",d:2}),
 Rd(["WHO IS THE","YOUNGEST LEADING LADY",Q],["مين","أصغر نجمة",QA],"max",[
  ["Elham Shahin",1961,"إلهام شاهين"],["Laila Elwi",1962,"ليلى علوي"],["Ghada Abdel Razek",1965,"غادة عبد الرازق"],
  ["Hend Sabry",1979,"هند صبري"],["Ruby",1981,"روبي","Ruby (Egyptian singer)"],["Menna Shalaby",1982,"منة شلبي","Menna Shalabi"],
  ["Donia Samir Ghanem",1985,"دنيا سمير غانم"],["Amina Khalil",1988,"أمينة خليل"],["Hana El Zahed",1994,"هنا الزاهد"]],
  {h:"Egyptian actress",k:BORN,g:"p",s:"actors",m:"eg",d:2}),
 Rd(["WHO IS THE","YOUNGEST LEADING MAN",Q],["مين","أصغر فتى أول",QA],"max",[
  ["Ezzat El Alaily",1934,"عزت العلايلي"],["Hussein Fahmy",1940,"حسين فهمي"],["Nour El-Sherif",1946,"نور الشريف"],
  ["Ahmed Zaki",1949,"أحمد زكي","Ahmed Zaki (actor)"],["Mamdouh Abdel-Alim",1956,"ممدوح عبد العليم"],["Khaled Saleh",1964,"خالد صالح"],
  ["Amr Waked",1973,"عمرو واكد"],["Asser Yassin",1981,"آسر ياسين"],["Ahmed El-Fishawy",1980,"أحمد الفيشاوي"]],
  {h:"Egyptian actor",k:BORN,g:"p",s:"actors",m:"eg",d:3}),
 Rd(["WHICH DIRECTOR","WAS BORN FIRST",Q],["مين من المخرجين","اتولد الأول",QA],"min",[
  ["Henry Barakat",1914,"هنري بركات"],["Salah Abu Seif",1915,"صلاح أبو سيف"],["Kamal El Sheikh",1919,"كمال الشيخ"],
  ["Youssef Chahine",1926,"يوسف شاهين"],["Mohamed Khan",1942,"محمد خان","Mohamed Khan (director)"],["Daoud Abdel Sayed",1946,"داود عبد السيد"],
  ["Atef El Tayeb",1947,"عاطف الطيب"],["Sherif Arafa",1960,"شريف عرفة"],["Marwan Hamed",1977,"مروان حامد"]],
  {h:"Egyptian film director",k:BORN,g:"p",s:"actors",m:"eg",d:3}),
 Rd(["WHICH SINGER-ACTOR","WAS BORN FIRST",Q],["مين من المطربين الممثلين","اتولد الأول",QA],"min",[
  ["Mohamed Fawzi",1918,"محمد فوزي","Mohamed Fawzi (singer)"],["Abdel Halim Hafez",1929,"عبد الحليم حافظ"],["Shadia",1931,"شادية"],
  ["Mohamed Mounir",1954,"محمد منير"],["Amr Diab",1961,"عمرو دياب"],["Mohamed Fouad",1961,"محمد فؤاد"],
  ["Tamer Hosny",1977,"تامر حسني"],["Ruby",1981,"روبي","Ruby (Egyptian singer)"],["Mohamed Ramadan",1988,"محمد رمضان","Mohamed Ramadan (actor)"]],
  {h:"Egyptian singer",k:BORN,g:"p",s:"actors",m:"eg",d:2}),
 Rd(["WHICH MARVEL FILM","CAME OUT FIRST",Q],["إيه","أقدم فيلم مارفل",QA],"min",[
  ["Iron Man",2008,"آيرون مان","Iron Man (2008 film)"],["Thor",2011,"ثور","Thor (film)"],["Captain America",2011,"كابتن أمريكا","Captain America: The First Avenger"],
  ["The Avengers",2012,"ذا أفنجرز","The Avengers (2012 film)"],["Guardians of the Galaxy",2014,"حراس المجرة","Guardians of the Galaxy (film)"],["Black Panther",2018,"بلاك بانثر","Black Panther (film)"],
  ["Avengers: Infinity War",2018,"أفنجرز: إنفينيتي وور"],["Avengers: Endgame",2019,"أفنجرز: إند جيم"],["Spider-Man: No Way Home",2021,"سبايدر مان: نو واي هوم"]],
  {h:"film",k:["RELEASED","نزل سنة"],dt:["Film released","نزول الفيلم"],g:"y",s:"films",m:"w",d:1}),
 Rd(["WHICH WIZARDING WORLD FILM","CAME OUT LAST",Q],["إيه","أجدد فيلم من عالم هاري بوتر",QA],"max",[
  ["Philosopher's Stone",2001,"حجر الفيلسوف","Harry Potter and the Philosopher's Stone (film)"],["Chamber of Secrets",2002,"حجرة الأسرار","Harry Potter and the Chamber of Secrets (film)"],
  ["Prisoner of Azkaban",2004,"سجين أزكابان","Harry Potter and the Prisoner of Azkaban (film)"],["Goblet of Fire",2005,"كأس النار","Harry Potter and the Goblet of Fire (film)"],
  ["Order of the Phoenix",2007,"جماعة العنقاء","Harry Potter and the Order of the Phoenix (film)"],["Half-Blood Prince",2009,"الأمير الهجين","Harry Potter and the Half-Blood Prince (film)"],
  ["Deathly Hallows Part 1",2010,"مقدسات الموت 1","Harry Potter and the Deathly Hallows – Part 1"],["Deathly Hallows Part 2",2011,"مقدسات الموت 2","Harry Potter and the Deathly Hallows – Part 2"],
  ["Fantastic Beasts",2016,"الوحوش المذهلة","Fantastic Beasts and Where to Find Them (film)"]],
  {h:"film",k:["RELEASED","نزل سنة"],dt:["Film released","نزول الفيلم"],g:"y",s:"films",m:"w",d:1}),
 Rd(["WHICH DISNEY CLASSIC","CAME OUT FIRST",Q],["أنهي فيلم ديزني","نزل الأول",QA],"min",[
  ["Snow White",1937,"سنو وايت","Snow White and the Seven Dwarfs (1937 film)"],["Cinderella",1950,"سندريلا","Cinderella (1950 film)"],["The Little Mermaid",1989,"عروسة البحر","The Little Mermaid (1989 film)"],
  ["Beauty and the Beast",1991,"الجميلة والوحش","Beauty and the Beast (1991 film)"],["Aladdin",1992,"علاء الدين","Aladdin (1992 Disney film)"],["The Lion King",1994,"الأسد الملك","The Lion King"],
  ["Tangled",2010,"تانجلد (ربانزل)"],["Frozen",2013,"فروزن","Frozen (2013 film)"],["Moana",2016,"موانا","Moana (2016 film)"]],
  {h:"film",k:["RELEASED","نزل سنة"],dt:["Film released","نزول الفيلم"],g:"y",s:"films",m:"w",d:1}),
 Rd(["WHICH CARTOON FILM MADE","THE MOST MONEY",Q],["أنهي فيلم كرتون","جاب أكتر إيرادات",QA],"max",[
  ["Inside Out 2",1.699,"إنسايد آوت 2"],["Frozen II",1.453,"فروزن 2"],["The Super Mario Bros. Movie",1.361,"فيلم سوبر ماريو"],
  ["Frozen",1.290,"فروزن","Frozen (2013 film)"],["Incredibles 2",1.243,"ذا إنكريديبلز 2"],["Minions",1.159,"المينيونز","Minions (film)"],
  ["Toy Story 4",1.073,"توي ستوري 4"],["Moana 2",1.059,"موانا 2"],["Despicable Me 3",1.034,"ديسبيكابل مي 3"]],
  {pre:["$",""],suf:["B"," مليار دولار"],dp:2,h:"film",k:["BOX OFFICE","الإيرادات"],s:"films",m:"w",d:2}),
 Rd(["WHICH FILM IS","THE LONGEST",Q],["إيه","أطول فيلم",QA],"max",[
  ["Gone with the Wind",238,"ذهب مع الريح","Gone with the Wind (film)"],["Killers of the Flower Moon",206,"قتلة زهرة القمر","Killers of the Flower Moon (film)"],["The Return of the King",201,"عودة الملك","The Lord of the Rings: The Return of the King"],
  ["Titanic",195,"تايتانيك","Titanic (1997 film)"],["Avengers: Endgame",181,"أفنجرز: إند جيم"],["Oppenheimer",180,"أوبنهايمر","Oppenheimer (film)"],
  ["The Godfather",175,"الأب الروحي"],["Interstellar",169,"إنترستيلار","Interstellar (film)"],["The Dark Knight",152,"فارس الظلام","The Dark Knight"]],
  {suf:[" min"," دقيقة"],h:"film",k:["RUNNING TIME","مدة الفيلم"],s:"films",m:"w",d:2}),
 Rd(["WHICH BEST PICTURE WINNER","CAME OUT FIRST",Q],["أنهي فيلم من اللي كسبوا أوسكار أحسن فيلم","نزل الأول",QA],"min",[
  ["Casablanca",1942,"كازابلانكا","Casablanca (film)"],["The Godfather",1972,"الأب الروحي"],["Rocky",1976,"روكي"],
  ["Forrest Gump",1994,"فورست جامب"],["Titanic",1997,"تايتانيك","Titanic (1997 film)"],["Gladiator",2000,"المصارع","Gladiator (2000 film)"],
  ["Slumdog Millionaire",2008,"المليونير المتشرد"],["Parasite",2019,"باراسايت","Parasite (2019 film)"],["Oppenheimer",2023,"أوبنهايمر","Oppenheimer (film)"]],
  {h:"film",k:["RELEASED","نزل سنة"],dt:["Film released","نزول الفيلم"],g:"y",s:"films",m:"w",d:1}),
 Rd(["WHICH FILM WON","THE MOST OSCARS",Q],["مين","كسب أوسكارات أكتر",QA],"max",[
  ["Titanic",11,"تايتانيك","Titanic (1997 film)"],["West Side Story (1961)",10,"قصة الحي الغربي","West Side Story (1961 film)"],["The English Patient",9,"المريض الإنجليزي","The English Patient (film)"],
  ["Slumdog Millionaire",8,"المليونير المتشرد"],["Oppenheimer",7,"أوبنهايمر","Oppenheimer (film)"],["Forrest Gump",6,"فورست جامب"],
  ["Gladiator",5,"المصارع","Gladiator (2000 film)"],["Parasite",4,"باراسايت","Parasite (2019 film)"],["The Godfather",3,"الأب الروحي"]],
  {suf:[" 🏆"," 🏆"],h:"film",k:["OSCARS WON","أوسكارات"],s:"films",m:"w",d:2}),
 Rd(["WHICH ADEL IMAM FILM","CAME OUT FIRST",Q],["إيه","أقدم فيلم لعادل إمام",QA],"min",[
  ["E7na betou3 el otobees",1979,"إحنا بتوع الأتوبيس","Ehna Btoo El Otobees"],["El Halfout",1985,"الهلفوت","El Halfout"],["Shams el zanati",1991,"شمس الزناتي","Shams El Zanati"],
  ["El mansy",1993,"المنسي","El Mansy"],["Toyour el zalam",1995,"طيور الظلام","Toyour El Zalam"],["El noum fel 3asal",1996,"النوم في العسل","El Noum fil Asal"],
  ["Amir el zalam",2002,"أمير الظلام","Amir El Zalam"],["El sefara fel 3emara",2005,"السفارة في العمارة","The Embassy in the Building"],["7assan we morcos",2008,"حسن ومرقص","Hassan and Morcos"]],
  {h:"Egyptian film",k:["RELEASED","نزل سنة"],dt:["Film released","نزول الفيلم"],g:"y",s:"films",m:"eg",d:2}),
 Rd(["WHICH HENEDY FILM","CAME OUT LAST",Q],["أنهي فيلم لهنيدي","أجدد",QA],"max",[
  ["Ismailia Rayeh Gai",1997,"إسماعيلية رايح جاي","Round Trip to Ismailia"],["Se3idy fel gam3a el amrekia",1998,"صعيدي في الجامعة الأمريكية","Saidi fil Gamaa el Amrikia"],["Hammam fi amsterdam",1999,"همام في أمستردام","Hammam fi Amsterdam"],
  ["Belya w demagho el 3alya",2000,"بليه ودماغه العالية","Belya wa Demagho El Alya"],["Ga2na el bayan el taly",2001,"جاءنا البيان التالي","Ga'ana El Bayan El Taly"],["Sa7eb sa7bo",2002,"صاحب صاحبه","Sahib Sahbo"],
  ["Fool el seen el 3azim",2004,"فول الصين العظيم","Fool El Seen El Azim"],["Ramadan Mabrouk Abul Alamein Hamouda",2008,"رمضان مبروك أبو العلمين حمودة","Ramadan Mabrouk Abul Alamein Hamouda"],["Teta rahiba",2012,"تيتة رهيبة","Teta Rahiba"]],
  {h:"Egyptian film",k:["RELEASED","نزل سنة"],dt:["Film released","نزول الفيلم"],g:"y",s:"films",m:"eg",d:2}),
 Rd(["WHICH GOLDEN-AGE FILM","CAME OUT LAST",Q],["إيه","أجدد فيلم من الزمن الجميل",QA],"max",[
  ["El 3azima",1939,"العزيمة","Determination (1939 film)"],["Lak yom ya zalem",1951,"لك يوم يا ظالم","Lak Yawm Ya Zalim"],["Shabab emra2a",1956,"شباب امرأة","A Woman's Youth"],
  ["Rodda Qalbi",1957,"رد قلبي","Rodda Qalbi"],["Ana 7orra",1959,"أنا حرة","I Am Free (film)"],["El Mummia",1969,"المومياء","The Night of Counting the Years"],
  ["Imbaratoriyet Meem",1972,"إمبراطورية ميم","Imbaratoriyet Meem"],["El karnak",1975,"الكرنك","Karnak (film)"],["Ahl El Qemma",1981,"أهل القمة","Ahl El Qemma"]],
  {h:"Egyptian film",k:["RELEASED","نزل سنة"],dt:["Film released","نزول الفيلم"],g:"y",s:"films",m:"eg",d:3}),
 Rd(["WHICH CHAHINE FILM","CAME OUT FIRST",Q],["أنهي فيلم ليوسف شاهين","نزل الأول",QA],"min",[
  ["Baba amin",1950,"بابا أمين","Baba Amin"],["Sera3 fel wadi",1954,"صراع في الوادي","The Blazing Sun"],["Bab el 7adid",1958,"باب الحديد","Cairo Station"],
  ["El naser salah el din",1963,"الناصر صلاح الدين","Saladin the Victorious"],["El ard",1969,"الأرض","The Land (1969 film)"],["Eskendereya... leh?",1979,"إسكندرية ليه","Alexandria... Why?"],
  ["El mohager",1994,"المهاجر","The Emigrant (1994 film)"],["El massir",1997,"المصير","Destiny (1997 film)"],["Heya fawda",2007,"هي فوضى","Chaos (2007 film)"]],
  {h:"Egyptian film",k:["RELEASED","نزل سنة"],dt:["Film released","نزول الفيلم"],g:"y",s:"films",m:"eg",d:3}),
 Rd(["WHICH NEW FILM","CAME OUT LAST",Q],["أنهي فيلم من الجداد","أجدد",QA],"max",[
  ["Ibrahim el abyad",2009,"إبراهيم الأبيض","Ibrahim El Abyad"],["Asma2",2011,"أسماء","Asmaa (film)"],["El 7arb el 3alameya el talta",2014,"الحرب العالمية الثالثة","The Third World War (2014 film)"],
  ["Hepta",2016,"هيبتا","Hepta: The Last Lecture"],["El kenz",2017,"الكنز","The Treasure (2017 film)"],["El feel el azra2 2",2019,"الفيل الأزرق 2","The Blue Elephant 2"],
  ["Sahib El Maqam",2020,"صاحب المقام","Sahib El Maqam"],["Kira wel gin",2022,"كيرة والجن","Kira & El Gin"],["Welad rizk 3",2024,"ولاد رزق 3","Sons of Rizk 3"]],
  {h:"Egyptian film",k:["RELEASED","نزل سنة"],dt:["Film released","نزول الفيلم"],g:"y",s:"films",m:"eg",d:2}),
 Rd(["WHICH AHMED ZAKI FILM","CAME OUT FIRST",Q],["إيه","أقدم فيلم لأحمد زكي",QA],"min",[
  ["El bari2",1986,"البريء","The Innocent (1986 film)"],["El beh el bawwab",1987,"البيه البواب","El Beh El Bawab"],["Kaboria",1990,"كابوريا","Kaboria"],
  ["Nasser 56",1996,"ناصر 56","Nasser 56"],["E7dak el sora tetla3 7elwa",1998,"اضحك الصورة تطلع حلوة","Edhak El Sora Tetla' Helwa"],["Ard el khof",2000,"أرض الخوف","Land of Fear"],
  ["Ayam el sadat",2001,"أيام السادات","Days of Sadat"],["Ma3aly el wazir",2002,"معالي الوزير","Mo'ali El Wazir"],["7alim",2006,"حليم","Halim (film)"]],
  {h:"Egyptian film",k:["RELEASED","نزل سنة"],dt:["Film released","نزول الفيلم"],g:"y",s:"films",m:"eg",d:3})]}
);
