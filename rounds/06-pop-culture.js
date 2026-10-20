// Pop Culture rounds. The round format is explained above Rd() in index.html.
// Each category file adds itself to CATS; index.html loads them in number order.
CATS.push(
{n:"Pop Culture",a:"المشاهير والتريند",e:"🔥",r:[
 Rd(["WHO IS THE","YOUNGEST CELEBRITY",Q],["مين","أصغر مشهور",QA],"max",[
  ["Elon Musk",1971,"إيلون ماسك"],["Kim Kardashian",1980,"كيم كارداشيان"],["PewDiePie",1989,"بيوديباي"],["KSI",1993,"كيه إس آي"],
  ["Timothée Chalamet",1995,"تيموثي شالاميه"],["Zendaya",1996,"زندايا"],["Kylie Jenner",1997,"كايلي جينر"],["MrBeast",1998,"مستر بيست"],
  ["Charli D'Amelio",2004,"تشارلي داميليو"]],{h:"celebrity",k:BORN,g:"p",s:"celebs",m:"w",d:2}),
 Rd(["WHO IS THE","OLDEST MARVEL STAR",Q],["مين","أكبر نجم مارفل في السن",QA],"min",[
  ["Robert Downey Jr",1965,"روبرت داوني جونيور","Robert Downey Jr."],["Mark Ruffalo",1967,"مارك روفالو"],["Paul Rudd",1969,"بول رود"],["Benedict Cumberbatch",1976,"بنديكت كامبرباتش"],
  ["Chris Pratt",1979,"كريس برات"],["Chris Evans",1981,"كريس إيفانز","Chris Evans (actor)"],["Chris Hemsworth",1983,"كريس هيمسورث"],["Scarlett Johansson",1984,"سكارليت جوهانسون"],
  ["Tom Holland",1996,"توم هولاند"]],{h:"actor",k:BORN,g:"p",s:"actors",m:"w",d:2}),
 Rd(["WHICH IS THE","OLDEST CARTOON",Q],["إيه","أقدم كرتون",QA],"min",[
  ["Mickey Mouse",1928,"ميكي ماوس"],["Bugs Bunny",1940,"باجز باني"],["Tom and Jerry",1940,"توم وجيري"],["Scooby-Doo",1969,"سكوبي دو"],
  ["The Simpsons",1987,"عيلة سيمبسون"],["SpongeBob",1999,"سبونج بوب","SpongeBob SquarePants"],["Shrek",2001,"شريك"],["Peppa Pig",2004,"بيبا بيج"],
  ["Bluey",2018,"بلوي","Bluey (2018 TV series)"]],{h:"cartoon",k:["FIRST SHOWN","أول ظهور"],dt:["Cartoon first shown", "أول ظهور للكرتون"],g:"y",s:"celebs",m:"w",d:1}),
 Rd(["WHICH CHILDHOOD ICON","CAME OUT FIRST",Q],["إيه","أقدم حاجة من أيام الطفولة",QA],"min",[
  ["Samir Magazine",1956,"مجلة سمير","Samir (magazine)"],["Bogy & Tamtam",1983,"بوجي وطمطم"],["Bakkar",1998,"بكار","Bakkar"],["Alam Simsim",2000,"عالم سمسم"],
  ["Super Henedy",2007,"سوبر هنيدي"],["Abla Fahita",2010,"أبلة فاهيتا"],["Qesas El Hayawan fel Quran",2011,"قصص الحيوان في القرآن","Qesas El Hayawan fel Quran"],["The Knight and the Princess",2019,"الفارس والأميرة"],
  ["Ye7ia w konooz",2022,"يحيى وكنوز","Yehia w Kenooz"]],{h:"Egyptian cartoon",k:["DEBUT","أول ظهور"],dt:["First appeared", "أول ظهور"],g:"y",s:"celebs",m:"eg",d:2}),
 Rd(["WHO IS THE","OLDEST TV PERSONALITY",Q],["مين","أكبر نجم تليفزيون في السن",QA],"min",[
  ["Mofeed Fawzy",1933,"مفيد فوزي"],["Amr Adib",1963,"عمرو أديب"],["Hamdi Qandil",1936,"حمدي قنديل"],["Lamees El-Hadidi",1969,"لميس الحديدي","Lamis Elhadidy"],
  ["Amr El-Leithy",1970,"عمرو الليثي","Amr el-Leithy"],["Tamer Amin",1971,"تامر أمين"],["Ramez Galal",1973,"رامز جلال"],["Bassem Youssef",1974,"باسم يوسف"],
  ["Ahmed El-Ghandour (Da7ee7)",1994,"أحمد الغندور (الدحيح)","Ahmed El-Ghandour"]],{h:"Egyptian TV presenter",k:BORN,g:"p",s:"celebs",m:"eg",d:3}),
 Rd(["WHO IS THE","TALLEST ATHLETE",Q],["مين","أطول رياضي",QA],"max",[
  ["Shaquille O'Neal",216,"شاكيل أونيل"],["LeBron James",206,"ليبرون جيمس"],["Michael Jordan",198,"مايكل جوردان"],["Kobe Bryant",198,"كوبي براينت"],["Usain Bolt",195,"يوسين بولت"],["Novak Djokovic",188,"نوفاك ديوكوفيتش"],["Roger Federer",185,"روجر فيدرر"],["Mike Tyson",178,"مايك تايسون"],["Simone Biles",142,"سيمون بايلز"]],
  {h:"athlete",k:["HEIGHT","الطول"],suf:[" cm"," سم"],s:"celebs",m:"w",d:1}),
 Rd(["WHO HAS THE","MOST OLYMPIC GOLDS",Q],["مين","كسب دهب في الأولمبياد أكتر",QA],"max",[
  ["Michael Phelps",23,"مايكل فيلبس"],["Carl Lewis",9,"كارل لويس"],["Katie Ledecky",9,"كاتي ليديكي"],["Usain Bolt",8,"يوسين بولت"],["Simone Biles",7,"سيمون بايلز"],["Serena Williams",4,"سيرينا ويليامز"],["Mo Farah",4,"مو فرح"],["LeBron James",3,"ليبرون جيمس"],["Rafael Nadal",2,"رافاييل نادال"]],
  {h:"athlete",k:["OLYMPIC GOLDS","ميداليات دهب"],suf:TRA,s:"celebs",m:"w",d:1}),
 Rd(["WHO IS THE","YOUNGEST INTERNET STAR",Q],["مين","أصغر نجم إنترنت",QA],"max",[
  ["Joe Rogan",1967,"جو روجان"],["PewDiePie",1989,"بيوديباي"],["Ninja",1991,"نينجا","Ninja (gamer)"],
  ["KSI",1993,"كيه إس آي"],["Logan Paul",1995,"لوجان بول"],["Jake Paul",1997,"جيك بول"],
  ["Khaby Lame",2000,"خابي لام"],["Kai Cenat",2001,"كاي سينات"],["IShowSpeed",2005,"آي شو سبيد"]],
  {h:"internet celebrity",k:BORN,g:"p",s:"celebs",m:"w",d:2}),
 Rd(["WHO IS THE","OLDEST TECH BILLIONAIRE",Q],["مين","أكبر ملياردير تكنولوجيا في السن",QA],"min",[
  ["Larry Ellison",1944,"لاري إليسون"],["Bill Gates",1955,"بيل جيتس"],["Jensen Huang",1963,"جنسن هوانج"],
  ["Jeff Bezos",1964,"جيف بيزوس"],["Elon Musk",1971,"إيلون ماسك"],["Larry Page",1973,"لاري بيدج"],
  ["Mark Zuckerberg",1984,"مارك زوكربيرج"],["Sam Altman",1985,"سام ألتمان"],["Evan Spiegel",1990,"إيفان شبيجل"]],
  {h:"businessman",k:BORN,g:"p",s:"celebs",m:"w",d:2}),
 Rd(["WHICH CARTOON CHARACTER","APPEARED FIRST",Q],["مين","أقدم شخصية كرتون",QA],"min",[
  ["Popeye",1929,"باباي"],["Betty Boop",1930,"بيتي بوب"],["Goofy",1932,"بندق"],
  ["Donald Duck",1934,"بطوط"],["Woody Woodpecker",1940,"نقار الخشب"],["Pink Panther",1963,"النمر الوردي","Pink Panther (character)"],
  ["Garfield",1978,"جارفيلد"],["Pikachu",1996,"بيكاتشو"],["SpongeBob",1999,"سبونج بوب","SpongeBob SquarePants"]],
  {h:"cartoon character",k:["FIRST APPEARED","أول ظهور"],s:"celebs",m:"w",d:3}),
 Rd(["WHICH SUPERHERO","APPEARED FIRST",Q],["مين","أقدم بطل خارق",QA],"min",[
  ["Superman",1938,"سوبرمان"],["Batman",1939,"باتمان"],["The Flash",1940,"فلاش","Jay Garrick"],
  ["Wonder Woman",1941,"وندر وومان"],["Spider-Man",1962,"سبايدر مان"],["Hulk",1962,"هالك"],
  ["Wolverine",1974,"وولفرين","Wolverine (character)"],["Venom",1984,"فينوم","Venom (character)"],["Deadpool",1991,"ديدبول"]],
  {h:"comic character",k:["FIRST COMIC","أول ظهور في الكوميكس"],s:"celebs",m:"w",d:2}),
 Rd(["WHO HAS THE","MOST TENNIS GRAND SLAMS",Q],["مين","كسب جراند سلام أكتر",QA],"max",[
  ["Novak Djokovic",24,"نوفاك ديوكوفيتش"],["Rafael Nadal",22,"رافاييل نادال"],["Roger Federer",20,"روجر فيدرر"],
  ["Pete Sampras",14,"بيت سامبراس"],["Björn Borg",11,"بيورن بورج"],["Andre Agassi",8,"أندريه أغاسي"],
  ["Boris Becker",6,"بوريس بيكر"],["Andy Murray",3,"آندي موراي"],["Stan Wawrinka",3,"ستان فافرينكا"]],
  {suf:TRA,h:"tennis player",k:["GRAND SLAM TITLES","بطولات جراند سلام"],s:"celebs",m:"w",d:1}),
 Rd(["WHO RAN THE","FASTEST 100 METRES",Q],["مين","جري المية متر في أقل وقت",QA],"min",[
  ["Usain Bolt",9.58,"يوسين بولت"],["Tyson Gay",9.69,"تايسون جاي"],["Yohan Blake",9.69,"يوهان بليك"],
  ["Asafa Powell",9.72,"أسافا باول"],["Justin Gatlin",9.74,"جاستن جاتلين"],["Noah Lyles",9.79,"نوح لايلز"],
  ["Maurice Greene",9.79,"موريس جرين","Maurice Greene (sprinter)"],["Carl Lewis",9.86,"كارل لويس"],["Florence Griffith-Joyner",10.49,"فلورنس جريفيث جوينر"]],
  {dp:2,suf:[" s"," ثانية"],h:"athlete",k:["BEST 100 m TIME","أحسن زمن في المية متر"],s:"celebs",m:"w",d:1}),
 Rd(["WHO IS THE","YOUNGEST SPORTS LEGEND",Q],["مين","أصغر أسطورة رياضية",QA],"max",[
  ["Muhammad Ali",1942,"محمد علي كلاي"],["Tiger Woods",1975,"تايجر وودز"],["Serena Williams",1981,"سيرينا ويليامز"],
  ["LeBron James",1984,"ليبرون جيمس"],["Lewis Hamilton",1985,"لويس هاميلتون"],["Usain Bolt",1986,"يوسين بولت"],
  ["Simone Biles",1997,"سيمون بايلز"],["Carlos Alcaraz",2003,"كارلوس ألكاراز"],["Victor Wembanyama",2004,"فيكتور ويمبانياما"]],
  {h:"athlete",k:BORN,g:"p",s:"celebs",m:"w",d:3}),
 Rd(["WHO HAS THE","MOST F1 TITLES",Q],["مين","كسب بطولة فورمولا 1 أكتر",QA],"max",[
  ["Michael Schumacher",7,"مايكل شوماخر"],["Juan Manuel Fangio",5,"خوان مانويل فانجيو"],["Alain Prost",4,"آلان بروست"],
  ["Sebastian Vettel",4,"سيباستيان فيتل"],["Max Verstappen",4,"ماكس فيرستابن"],["Ayrton Senna",3,"آيرتون سينا"],
  ["Niki Lauda",3,"نيكي لاودا"],["Fernando Alonso",2,"فرناندو ألونسو"],["Lando Norris",1,"لاندو نوريس"]],
  {suf:TRA,h:"racing driver",k:["F1 WORLD TITLES","بطولات العالم"],s:"celebs",m:"w",d:1}),
 Rd(["WHO HAS THE","MOST NBA TITLES",Q],["مين","كسب بطولة NBA أكتر",QA],"max",[
  ["Bill Russell",11,"بيل راسل"],["Robert Horry",7,"روبرت هوري"],["Michael Jordan",6,"مايكل جوردان"],
  ["Kobe Bryant",5,"كوبي براينت"],["Tim Duncan",5,"تيم دنكان"],["LeBron James",4,"ليبرون جيمس"],
  ["Stephen Curry",4,"ستيفن كاري"],["Shaquille O'Neal",4,"شاكيل أونيل"],["Kevin Durant",2,"كيفن ديورانت"]],
  {suf:TRA,h:"basketball player",k:["NBA TITLES","بطولات NBA"],s:"celebs",m:"w",d:2}),
 Rd(["WHO IS THE","OLDEST SUPERMODEL",Q],["مين","أكبر سوبر موديل في السن",QA],"min",[
  ["Cindy Crawford",1966,"سيندي كروفورد"],["Naomi Campbell",1970,"ناعومي كامبل"],["Heidi Klum",1973,"هايدي كلوم"],
  ["Kate Moss",1974,"كيت موس"],["Gisele Bündchen",1980,"جيزيل بوندشن"],["Adriana Lima",1981,"أدريانا ليما"],
  ["Kendall Jenner",1995,"كيندال جينر"],["Bella Hadid",1996,"بيلا حديد"],["Hailey Bieber",1996,"هايلي بيبر"]],
  {h:"model",k:BORN,g:"p",s:"celebs",m:"w",d:2}),
 Rd(["WHO IS THE","YOUNGEST ROYAL",Q],["مين","أصغر واحد في العيلة المالكة",QA],"max",[
  ["Queen Elizabeth II",1926,"الملكة إليزابيث التانية","Elizabeth II"],["King Charles III",1948,"الملك تشارلز التالت","Charles III"],["Princess Diana",1961,"الأميرة ديانا","Diana, Princess of Wales"],
  ["Meghan Markle",1981,"ميجان ماركل","Meghan, Duchess of Sussex"],["Prince William",1982,"الأمير ويليام","William, Prince of Wales"],["Prince Harry",1984,"الأمير هاري","Prince Harry, Duke of Sussex"],
  ["Prince George",2013,"الأمير جورج","Prince George of Wales"],["Princess Charlotte",2015,"الأميرة شارلوت","Princess Charlotte of Wales"],["Prince Louis",2018,"الأمير لويس","Prince Louis of Wales"]],
  {h:"British royal family",k:BORN,g:"p",s:"celebs",m:"w",d:1}),
 Rd(["WHO IS THE","YOUNGEST EGYPTIAN CHAMPION",Q],["مين","أصغر بطل مصري",QA],"max",[
  ["Amr Shabana",1979,"عمرو شبانة"],["Ramy Ashour",1987,"رامي عاشور"],["Mohamed El Shorbagy",1991,"محمد الشوربجي"],
  ["Ali Farag",1992,"علي فرج"],["Hedaya Malak",1993,"هداية ملاك"],["Nour El Sherbini",1995,"نور الشربيني"],
  ["Farida Osman",1995,"فريدة عثمان"],["Feryal Abdelaziz",1999,"فريال أشرف","Feryal Abdelaziz"],["Ahmed Elgendy",2000,"أحمد الجندي","Ahmed Elgendy"]],
  {h:"Egyptian athlete",k:BORN,g:"p",s:"celebs",m:"eg",d:3}),
 Rd(["WHO WON AN","OLYMPIC MEDAL FIRST",Q],["مين","كسب ميدالية أولمبية الأول",QA],"min",[
  ["El Sayed Nosseir",1928,"السيد نصير"],["Khadr El Touni",1936,"خضر التوني"],["Mohamed Rashwan",1984,"محمد رشوان"],
  ["Karam Gaber",2004,"كرم جابر"],["Hesham Mesbah",2008,"هشام مصباح"],["Hedaya Malak",2016,"هداية ملاك"],
  ["Feryal Abdelaziz",2021,"فريال أشرف","Feryal Abdelaziz"],["Ahmed Elgendy",2024,"أحمد الجندي","Ahmed Elgendy"],["Mohamed Ihab",2016,"محمد إيهاب","Mohamed Ihab (weightlifter)"]],
  {h:"Egyptian athlete",k:["FIRST OLYMPIC MEDAL","أول ميدالية أولمبية"],s:"celebs",m:"eg",d:3}),
 Rd(["WHO IS THE","OLDEST EGYPTIAN CHAMPION",Q],["مين","أكبر بطل مصري في السن",QA],"min",[
  ["Khadr El Touni",1915,"خضر التوني"],["Abdel Latif Abou Heif",1929,"عبد اللطيف أبو هيف"],["Mohamed Rashwan",1956,"محمد رشوان"],
  ["Rania Elwani",1977,"رانيا علواني"],["Karam Gaber",1979,"كرم جابر"],["Hesham Mesbah",1982,"هشام مصباح"],
  ["Mohamed Salah",1992,"محمد صلاح"],["Farida Osman",1995,"فريدة عثمان"],["Ahmed Elgendy",2000,"أحمد الجندي","Ahmed Elgendy"]],
  {h:"Egyptian athlete",k:BORN,g:"p",s:"celebs",m:"eg",d:3}),
Rd(["WHO IS THE","OLDEST EGYPTIAN IN HOLLYWOOD",Q],["مين","أكبر مصري في هوليوود في السن",QA],"min",[
  ["Omar Sharif",1932,"عمر الشريف"],["Khaled Abol Naga",1966,"خالد أبو النجا","Kal Naga"],["Amr Waked",1973,"عمرو واكد"],
  ["Mohamed Diab",1978,"محمد دياب"],["Rami Malek",1981,"رامي مالك"],["May Calamawy",1986,"مي القلماوي"],
  ["Amir El-Masry",1990,"أمير المصري"],["Mena Massoud",1991,"مينا مسعود"],["Ramy Youssef",1991,"رامي يوسف"]],
  {h:"actor",k:BORN,g:"p",s:"celebs",m:"eg",d:1}),
 Rd(["WHO IS THE","OLDEST WORLD-FAMOUS EGYPTIAN",Q],["مين","أكبر مصري مشهور في العالم في السن",QA],"min",[
  ["Boutros Boutros-Ghali",1922,"بطرس بطرس غالي"],["Mohamed Al-Fayed",1929,"محمد الفايد"],["Mostafa El-Sayed",1933,"مصطفى السيد","Mostafa El-Sayed"],
  ["Magdi Yacoub",1935,"مجدي يعقوب"],["Farouk El-Baz",1938,"فاروق الباز"],["Mohamed ElBaradei",1942,"محمد البرادعي"],
  ["Ahmed Zewail",1946,"أحمد زويل"],["Naguib Sawiris",1954,"نجيب ساويرس"],["Mohamed Salah",1992,"محمد صلاح"]],
  {h:"Egyptian",k:BORN,g:"p",s:"celebs",m:"eg",d:3})]}
);
