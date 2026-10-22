// World Football rounds. The round format is explained above Rd() in index.html.
// Each category file adds itself to CATS; index.html loads them in number order.
CATS.push(
{n:"World Football",a:"الكورة العالمية",e:"🌍 ⚽",r:[
 // African football is international: it lives under World so Egypt mode stays Egyptian-only.
 Rd(["WHICH CLUB HAS THE","MOST CAF CHAMPIONS LEAGUES",Q],["أنهي نادي","كسب دوري أبطال أفريقيا أكتر",QA],"max",[
  ["Al Ahly",12,"الأهلي","Al Ahly SC"],["Zamalek",5,"الزمالك","Zamalek SC"],["TP Mazembe",5,"مازيمبي"],["Espérance de Tunis",4,"الترجي التونسي","Espérance Sportive de Tunis"],
  ["Wydad Casablanca",3,"الوداد البيضاوي","Wydad AC"],["Raja Casablanca",3,"الرجاء البيضاوي","Raja CA"],["Enyimba",2,"إنيمبا","Enyimba F.C."],["ES Sétif",2,"وفاق سطيف"],
  ["Mamelodi Sundowns",2,"صن داونز","Mamelodi Sundowns F.C."]],{suf:TRA,h:"football club",k:["CAF TITLES","بطولات أفريقيا"],s:"trophies",m:"w",d:1}),
 Rd(["WHICH TEAM HAS THE","MOST AFRICA CUP TITLES",Q],["أنهي منتخب","كسب كاس الأمم الأفريقية أكتر",QA],"max",[
  ["Egypt",7,"مصر"],["Cameroon",5,"الكاميرون"],["Ghana",4,"غانا"],["Nigeria",3,"نيجيريا"],["Ivory Coast",3,"كوت ديفوار"],
  ["Algeria",2,"الجزائر"],["DR Congo",2,"الكونغو الديمقراطية","Democratic Republic of the Congo"],["Tunisia",1,"تونس"],["Zambia",1,"زامبيا"]],{suf:TRA,h:"country",k:["AFRICA CUPS","كاسات أفريقيا"],s:"trophies",m:"w",d:1}),
 Rd(["WHICH CLUB WON THE","CAF CHAMPIONS LEAGUE FIRST",Q],["مين","كسب دوري أبطال أفريقيا الأول",QA],"min",[
   ["Ismaily",1969,"الإسماعيلي","Ismaily SC"],["Al Ahly",1982,"الأهلي","Al Ahly SC"],["Zamalek",1984,"الزمالك","Zamalek SC"],["Raja Casablanca",1989,"الرجاء البيضاوي","Raja CA"],
   ["Wydad Casablanca",1992,"الوداد البيضاوي","Wydad AC"],["Espérance de Tunis",1994,"الترجي التونسي","Espérance Sportive de Tunis"],["Enyimba",2003,"إنيمبا","Enyimba F.C."],
   ["Mamelodi Sundowns",2016,"صن داونز","Mamelodi Sundowns F.C."],["Pyramids FC",2025,"بيراميدز"]],{h:"football club",k:["FIRST CAF TITLE","أول بطولة أفريقيا"],s:"trophies",m:"w",d:2}),
 Rd(["WHO IS THE","YOUNGEST STAR",Q],["مين","أصغر نجم",QA],"max",[
  ["Neymar Jr",1992,"نيمار","Neymar"],["Kylian Mbappé",1998,"كيليان مبابي"],["Erling Haaland",2000,"إيرلينج هالاند"],["Rodrygo Goes",2001,"رودريجو","Rodrygo"],
  ["Pedri González",2002,"بيدري","Pedri"],["Jude Bellingham",2003,"جود بيلينجهام"],["Pablo 'Gavi' Páez",2004,"جافي","Gavi (footballer, born 2004)"],["Endrick Felipe",2006,"إندريك","Endrick (footballer)"],
  ["Lamine Yamal",2007,"لامين يامال"]],{h:"footballer",k:BORN,g:"p",s:"players",m:"w",d:2}),
 Rd(["WHO IS THE","OLDEST LEGEND",Q],["مين","أكبر أسطورة في السن",QA],"min",[
  ["Zinedine Zidane",1972,"زين الدين زيدان"],["David Beckham",1975,"ديفيد بيكهام"],["Ronaldo Nazário",1976,"رونالدو الظاهرة","Ronaldo (Brazilian footballer)"],["Thierry Henry",1977,"تييري هنري"],
  ["Ronaldinho Gaúcho",1980,"رونالدينيو","Ronaldinho"],["Zlatan Ibrahimović",1981,"زلاتان إبراهيموفيتش"],["Ricardo Kaká",1982,"كاكا","Kaká"],["Cristiano Ronaldo",1985,"كريستيانو رونالدو"],
  ["Lionel Messi",1987,"ليونيل ميسي"]],{h:"footballer",k:BORN,g:"p",s:"players",m:"w",d:2}),
 Rd(["WHO HAS WON THE","MOST BALLON D'ORS",Q],["مين","كسب البالون دور أكتر",QA],"max",[
  ["Lionel Messi",8,"ليونيل ميسي"],["Cristiano Ronaldo",5,"كريستيانو رونالدو"],["Johan Cruyff",3,"يوهان كرويف"],["Michel Platini",3,"ميشيل بلاتيني"],
  ["Marco van Basten",3,"ماركو فان باستن"],["Ronaldo Nazário",2,"رونالدو الظاهرة","Ronaldo (Brazilian footballer)"],["Franz Beckenbauer",2,"فرانز بيكنباور"],
  ["Zinedine Zidane",1,"زين الدين زيدان"],["Ronaldinho Gaúcho",1,"رونالدينيو","Ronaldinho"]],{suf:TRA,h:"footballer",k:["BALLON D'ORS","كور دهبية"],s:"players",m:"w",d:1}),
 Rd(["WHICH COUNTRY HAS THE","MOST WORLD CUPS",Q],["مين","كسب كاس العالم أكتر",QA],"max",[
  ["Brazil",5,"البرازيل"],["Germany",4,"ألمانيا"],["Italy",4,"إيطاليا"],
  ["Argentina",3,"الأرجنتين"],["France",2,"فرنسا"],["Uruguay",2,"أوروجواي"],
  ["Spain",2,"إسبانيا"],["England",1,"إنجلترا"],["Netherlands",0,"هولندا"]],{suf:TRA,h:"country",k:["WORLD CUPS","كاسات عالم"],s:"trophies",m:"w",d:1}),
 Rd(["WHICH CLUB HAS THE","MOST CHAMPIONS LEAGUES",Q],["مين","كسب دوري أبطال أوروبا أكتر",QA],"max",[
  ["Real Madrid",15,"ريال مدريد","Real Madrid CF"],["AC Milan",7,"ميلان"],["Bayern Munich",6,"بايرن ميونخ","FC Bayern Munich"],
  ["Liverpool",6,"ليفربول","Liverpool F.C."],["FC Barcelona",5,"برشلونة"],["Ajax",4,"أياكس","AFC Ajax"],
  ["Inter Milan",3,"الإنتر"],["Manchester United",3,"مانشستر يونايتد","Manchester United F.C."],["Paris Saint-Germain",2,"باريس سان جيرمان","Paris Saint-Germain F.C."]],{suf:TRA,h:"football club",k:["EUROPEAN CUPS","دوري أبطال"],s:"trophies",m:"w",d:1}),
 Rd(["WHO IS THE","YOUNGEST MANAGER",Q],["مين","أصغر مدرب",QA],"max",[
  ["Alex Ferguson",1941,"أليكس فيرجسون"],["Arsène Wenger",1949,"أرسين فينجر"],["Carlo Ancelotti",1959,"كارلو أنشيلوتي"],
  ["José Mourinho",1963,"جوزيه مورينيو"],["Jürgen Klopp",1967,"يورجن كلوب"],["Antonio Conte",1969,"أنطونيو كونتي"],
  ["Diego Simeone",1970,"دييجو سيميوني"],["Pep Guardiola",1971,"بيب جوارديولا"],["Mikel Arteta",1982,"ميكيل أرتيتا"]],{h:"football manager",k:BORN,g:"p",s:"players",m:"w",d:1}),
 Rd(["WHO HAS THE","MOST WORLD CUP GOALS",Q],["مين","جاب أكتر أهداف في كاس العالم",QA],"max",[
  ["Kylian Mbappé",22,"كيليان مبابي"],["Lionel Messi",21,"ليونيل ميسي"],["Miroslav Klose",16,"ميروسلاف كلوزه"],["Ronaldo Nazário",15,"رونالدو الظاهرة","Ronaldo (Brazilian footballer)"],["Harry Kane",14,"هاري كين"],["Pelé",12,"بيليه"],["Cristiano Ronaldo",11,"كريستيانو رونالدو"],["Neymar Jr",9,"نيمار","Neymar"],["Diego Maradona",8,"دييجو مارادونا"]],
  {h:"footballer",k:["WORLD CUP GOALS","أهداف المونديال"],s:"players",m:"w",d:3}),
 Rd(["WHO IS THE","TALLEST",Q],["مين","أطول لاعب",QA],"max",[
  ["Peter Crouch",201,"بيتر كراوتش"],["Zlatan Ibrahimović",195,"زلاتان إبراهيموفيتش"],["Erling Haaland",195,"إيرلينج هالاند"],["Virgil van Dijk",193,"فيرجيل فان دايك"],["Paul Pogba",191,"بول بوجبا"],["Cristiano Ronaldo",187,"كريستيانو رونالدو"],["Mohamed Salah",175,"محمد صلاح"],["Neymar Jr",175,"نيمار","Neymar"],["Lionel Messi",170,"ليونيل ميسي"]],
  {h:"footballer",k:["HEIGHT","الطول"],suf:[" cm"," سم"],s:"players",m:"w",d:2}),
 Rd(["WHO SCORED THE","MOST CHAMPIONS LEAGUE GOALS",Q],["مين","جاب أكتر أهداف في دوري الأبطال",QA],"max",[
  ["Cristiano Ronaldo",140,"كريستيانو رونالدو"],["Lionel Messi",129,"ليونيل ميسي"],["Karim Benzema",90,"كريم بنزيما"],
  ["Raúl González",71,"راؤول","Raúl (footballer)"],["Ruud van Nistelrooy",56,"رود فان نيستلروي"],["Thierry Henry",50,"تييري هنري"],
  ["Zlatan Ibrahimović",48,"زلاتان إبراهيموفيتش"],["Didier Drogba",44,"ديدييه دروجبا"],["Ricardo Kaká",30,"كاكا","Kaká"]],
  {h:"footballer",k:["UCL GOALS","أهداف دوري الأبطال"],suf:[" goals"," هدف"],s:"players",m:"w",d:1}),
 Rd(["WHO IS THE","OLDEST GOALKEEPER",Q],["مين","أكبر حارس مرمى في السن",QA],"min",[
  ["Oliver Kahn",1969,"أوليفر كان"],["Gianluigi Buffon",1978,"جيانلويجي بوفون"],["Iker Casillas",1981,"إيكر كاسياس"],
  ["Petr Čech",1982,"بيتر تشيك"],["Manuel Neuer",1986,"مانويل نوير"],["Yassine Bounou",1991,"ياسين بونو"],
  ["Thibaut Courtois",1992,"تيبو كورتوا"],["Jan Oblak",1993,"يان أوبلاك"],["Gianluigi Donnarumma",1999,"جيانلويجي دوناروما"]],
  {h:"footballer",k:BORN,g:"p",s:"players",m:"w",d:2}),
 Rd(["WHO WON THE","BALLON D'OR MOST RECENTLY",Q],["مين","آخر واحد كسب البالون دور",QA],"max",[
  ["Ronaldo Nazário",2002,"رونالدو الظاهرة","Ronaldo (Brazilian footballer)"],["Zinedine Zidane",1998,"زين الدين زيدان"],["Ronaldinho Gaúcho",2005,"رونالدينيو","Ronaldinho"],
  ["Ricardo Kaká",2007,"كاكا","Kaká"],["Cristiano Ronaldo",2017,"كريستيانو رونالدو"],["Lionel Messi",2023,"ليونيل ميسي"],
  ["Luka Modrić",2018,"لوكا مودريتش"],["Karim Benzema",2022,"كريم بنزيما"],["Ousmane Dembélé",2025,"عثمان ديمبلي"]],
  {h:"footballer",k:["LATEST BALLON D'OR","آخر كورة دهبية"],s:"players",m:"w",d:2}),
 Rd(["WHO SCORED THE","MOST PREMIER LEAGUE GOALS",Q],["مين","جاب أكتر أهداف في البريميرليج",QA],"max",[
  ["Alan Shearer",260,"آلان شيرر","Alan Shearer"],["Harry Kane",213,"هاري كين"],["Wayne Rooney",208,"واين روني"],
  ["Andrew Cole",187,"آندي كول","Andrew Cole"],["Sergio Agüero",184,"سيرجيو أجويرو"],["Frank Lampard",177,"فرانك لامبارد"],
  ["Thierry Henry",175,"تييري هنري"],["Robbie Fowler",163,"روبي فاولر"],["Jermain Defoe",162,"جيرماين ديفو"]],
  {h:"footballer",k:["PREMIER LEAGUE GOALS","أهداف البريميرليج"],suf:[" goals"," هدف"],s:"players",m:"w",d:2}),
 Rd(["WHO IS THE","YOUNGEST AFRICAN STAR",Q],["مين","أصغر نجم أفريقي",QA],"max",[
  ["Didier Drogba",1978,"ديدييه دروجبا"],["Samuel Eto'o",1981,"صامويل إيتو"],["Yaya Touré",1983,"يايا توريه"],
  ["Pierre-Emerick Aubameyang",1989,"أوباميانج"],["Riyad Mahrez",1991,"رياض محرز"],["Sadio Mané",1992,"ساديو ماني"],
  ["Achraf Hakimi",1998,"أشرف حكيمي"],["Victor Osimhen",1998,"فيكتور أوسيمين"],["Mohammed Kudus",2000,"محمد قدوس"]],
  {h:"footballer",k:BORN,g:"p",s:"players",m:"w",d:3}),
 Rd(["WHICH CLUB HAS THE","MOST PREMIER LEAGUE TITLES",Q],["مين","كسب البريميرليج أكتر",QA],"max",[
  ["Manchester United",13,"مانشستر يونايتد","Manchester United F.C."],["Manchester City",8,"مانشستر سيتي","Manchester City F.C."],["Chelsea",5,"تشيلسي","Chelsea F.C."],
  ["Arsenal",4,"آرسنال","Arsenal F.C."],["Liverpool",2,"ليفربول","Liverpool F.C."],["Blackburn Rovers",1,"بلاكبيرن","Blackburn Rovers F.C."],
  ["Leicester City",1,"ليستر سيتي","Leicester City F.C."],["Tottenham Hotspur",0,"توتنهام","Tottenham Hotspur F.C."],["Newcastle United",0,"نيوكاسل","Newcastle United F.C."]],
  {suf:TRA,h:"football club",k:["PREMIER LEAGUES (SINCE 1992)","بريميرليج (من 1992)"],s:"trophies",m:"w",d:1}),
 Rd(["WHICH CLUB HAS THE","MOST LA LIGA TITLES",Q],["مين","كسب الدوري الإسباني أكتر",QA],"max",[
  ["Real Madrid",36,"ريال مدريد","Real Madrid CF"],["FC Barcelona",29,"برشلونة"],["Atlético Madrid",11,"أتلتيكو مدريد"],
  ["Athletic Bilbao",8,"أتلتيك بلباو","Athletic Club"],["Valencia",6,"فالنسيا","Valencia CF"],["Real Sociedad",2,"ريال سوسيداد"],
  ["Deportivo La Coruña",1,"ديبورتيفو لاكورونيا"],["Sevilla",1,"إشبيلية","Sevilla FC"],["Real Betis",1,"ريال بيتيس"]],
  {suf:TRA,h:"football club",k:["LA LIGA TITLES","دوري إسباني"],s:"trophies",m:"w",d:1}),
 Rd(["WHICH EUROPEAN CLUB","WAS FOUNDED FIRST",Q],["مين","أقدم نادي أوروبي",QA],"min",[
  ["Nottingham Forest",1865,"نوتنجهام فورست","Nottingham Forest F.C."],["Aston Villa",1874,"أستون فيلا","Aston Villa F.C."],["Manchester United",1878,"مانشستر يونايتد","Manchester United F.C."],
  ["Arsenal",1886,"آرسنال","Arsenal F.C."],["Liverpool",1892,"ليفربول","Liverpool F.C."],["Juventus",1897,"يوفنتوس","Juventus FC"],
  ["FC Barcelona",1899,"برشلونة"],["Bayern Munich",1900,"بايرن ميونخ","FC Bayern Munich"],["Real Madrid",1902,"ريال مدريد","Real Madrid CF"]],
  {h:"football club",k:["FOUNDED","اتأسس سنة"],dt:["Club founded","تأسيس النادي"],g:"y",s:"trophies",m:"w",d:3}),
 Rd(["WHICH COUNTRY HAS HOSTED","THE MOST WORLD CUPS",Q],["فين","اتلعب كاس العالم أكتر",QA],"max",[
  ["Mexico",3,"المكسيك"],["United States",2,"أمريكا"],["Brazil",2,"البرازيل"],["Germany",2,"ألمانيا"],["France",2,"فرنسا"],
  ["Italy",2,"إيطاليا"],["England",1,"إنجلترا"],["Canada",1,"كندا"],["Qatar",1,"قطر"]],
  {h:"country",k:["WORLD CUPS HOSTED","مونديالات نظّمتها"],s:"trophies",m:"w",d:3}),
 Rd(["WHICH TEAM WON","THE EUROS MOST RECENTLY",Q],["مين","آخر منتخب كسب اليورو",QA],"max",[
  ["Spain",2024,"إسبانيا"],["Italy",2021,"إيطاليا"],["Portugal",2016,"البرتغال"],["Greece",2004,"اليونان"],["France",2000,"فرنسا"],
  ["Germany",1996,"ألمانيا"],["Denmark",1992,"الدنمارك"],["Netherlands",1988,"هولندا"],["Soviet Union",1960,"الاتحاد السوفيتي"]],
  {h:"country",k:["LAST EURO WON","آخر يورو كسبه"],s:"trophies",m:"w",d:1}),
 Rd(["WHICH TEAM HAS THE","MOST COPA AMÉRICA TITLES",Q],["مين","كسب كوبا أمريكا أكتر",QA],"max",[
  ["Argentina",16,"الأرجنتين"],["Uruguay",15,"أوروجواي"],["Brazil",9,"البرازيل"],["Chile",2,"تشيلي"],["Paraguay",2,"باراجواي"],
  ["Peru",2,"بيرو"],["Colombia",1,"كولومبيا"],["Bolivia",1,"بوليفيا"],["Ecuador",0,"الإكوادور"]],
  {suf:TRA,h:"country",k:["COPA AMÉRICAS","كوبا أمريكا"],s:"trophies",m:"w",d:3}),
 Rd(["WHICH CLUB WON THE","EUROPA LEAGUE FIRST",Q],["مين","كسب الدوري الأوروبي الأول",QA],"min",[
  ["Tottenham Hotspur",1972,"توتنهام","Tottenham Hotspur F.C."],["Liverpool",1973,"ليفربول","Liverpool F.C."],["Juventus",1977,"يوفنتوس","Juventus FC"],
  ["Real Madrid",1985,"ريال مدريد","Real Madrid CF"],["Inter Milan",1991,"الإنتر"],["Sevilla",2006,"إشبيلية","Sevilla FC"],
  ["Atlético Madrid",2010,"أتلتيكو مدريد"],["Chelsea",2013,"تشيلسي","Chelsea F.C."],["Manchester United",2017,"مانشستر يونايتد","Manchester United F.C."]],
  {h:"football club",k:["FIRST UEFA CUP / EUROPA LEAGUE","أول دوري أوروبي"],s:"trophies",m:"w",d:3}),
 Rd(["WHICH STADIUM","OPENED FIRST",Q],["أنهي استاد","اتفتح الأول",QA],"min",[
  ["Anfield",1884,"آنفيلد"],["Old Trafford",1910,"أولد ترافورد"],["San Siro",1926,"سان سيرو"],
  ["Santiago Bernabéu",1947,"سانتياجو برنابيو","Santiago Bernabéu Stadium"],["Camp Nou",1957,"كامب نو"],["Signal Iduna Park",1974,"سيجنال إيدونا بارك","Westfalenstadion"],
  ["Allianz Arena",2005,"أليانز أرينا"],["Emirates Stadium",2006,"استاد الإمارات"],["Tottenham Hotspur Stadium",2019,"استاد توتنهام"]],
  {h:"stadium",k:["OPENED","اتفتح سنة"],s:"trophies",m:"w",d:2}),
 Rd(["WHICH ARAB CLUB WAS","FOUNDED LAST",Q],["أنهي نادي عربي","أجدد",QA],"max",[
  ["Al Ahly",1907,"الأهلي","Al Ahly SC"],["Zamalek",1911,"الزمالك","Zamalek SC"],["Espérance de Tunis",1919,"الترجي التونسي","Espérance Sportive de Tunis"],
  ["Al Ittihad (Jeddah)",1927,"الاتحاد السعودي","Ittihad Club"],["Wydad Casablanca",1937,"الوداد البيضاوي","Wydad AC"],["Raja Casablanca",1949,"الرجاء البيضاوي","Raja CA"],
  ["Al Nassr",1955,"النصر","Al Nassr FC"],["Al Hilal",1957,"الهلال","Al Hilal SFC"],["Al Sadd",1969,"السد","Al Sadd SC"]],
  {h:"football club",k:["FOUNDED","اتأسس سنة"],s:"trophies",m:"w",d:3}),
 Rd(["WHICH CLUB HAS THE","MOST SERIE A TITLES",Q],["مين","كسب الدوري الإيطالي أكتر",QA],"max",[
  ["Juventus",36,"يوفنتوس","Juventus FC"],["Inter Milan",21,"الإنتر"],["AC Milan",19,"ميلان"],
  ["Genoa",9,"جنوى","Genoa CFC"],["Torino",7,"تورينو","Torino FC"],["Bologna",7,"بولونيا","Bologna FC 1909"],
  ["Napoli",4,"نابولي","SSC Napoli"],["Roma",3,"روما","AS Roma"],["Lazio",2,"لاتسيو","SS Lazio"]],
  {suf:TRA,h:"football club",k:["SERIE A TITLES","دوري إيطالي"],s:"trophies",m:"w",d:1}),

 // same year: the answer is the only card from that year (same:, see above Rd() in index.html)
 Rd(["WHAT CAME OUT IN","THE YEAR HAALAND WAS BORN","ON THIS LIST"],["إيه اللي نزل في نفس السنة","اللي هالاند اتولد فيها","في القايمة دي؟"],"odd",[
  ["Titanic",1997,"تايتانيك","Titanic (1997 film)"],["Google",1998,"جوجل"],["The Matrix",1999,"ذا ماتريكس"],
  ["SpongeBob",1999,"سبونج بوب","SpongeBob SquarePants"],["Gladiator",2000,"المصارع","Gladiator (2000 film)"],["Monsters, Inc.",2001,"مونسترز إنك"],
  ["Philosopher's Stone",2001,"حجر الفيلسوف","Harry Potter and the Philosopher's Stone (film)"],["Wikipedia",2001,"ويكيبيديا"],["Xbox",2001,"إكس بوكس","Xbox (console)"]],
  {h:"film",s:"players",m:"w",d:2,k:["YEAR","سنة"],same:2000})]}
);
