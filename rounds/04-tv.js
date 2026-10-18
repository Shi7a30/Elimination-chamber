// TV rounds. The round format is explained above Rd() in index.html.
// Each category file adds itself to CATS; index.html loads them in number order.
CATS.push(
{n:"TV",a:"التليفزيون",e:"📺",r:[
 Rd(["WHO IS THE","YOUNGEST GAME OF THRONES STAR",Q],["مين","أصغر نجم في جيم أوف ثرونز",QA],"max",[
  ["Sean Bean",1959,"شون بين"],["Iain Glen",1961,"إيان جلين"],["Peter Dinklage",1969,"بيتر دينكليدج"],["Nikolaj Coster-Waldau",1970,"نيكولاي كوستر والداو"],
  ["Lena Headey",1973,"لينا هيدي"],["Gwendoline Christie",1978,"جويندولين كريستي"],["Emilia Clarke",1986,"إميليا كلارك"],["Sophie Turner",1996,"صوفي تيرنر"],
  ["Maisie Williams",1997,"ميزي ويليامز"]],{h:"actor",k:BORN,g:"p",s:"tv",m:"w"}),
 Rd(["WHO IS THE","OLDEST SITCOM STAR",Q],["مين","أكبر نجم سيتكوم في السن",QA],"min",[
  ["Lisa Kudrow",1963,"ليزا كودرو"],["Courteney Cox",1964,"كورتني كوكس"],["David Schwimmer",1966,"ديفيد شويمر"],["Matt LeBlanc",1967,"مات لوبلان"],
  ["Jennifer Aniston",1969,"جينيفر أنيستون"],["Jim Parsons",1973,"جيم بارسونز"],["Johnny Galecki",1975,"جوني جاليكي"],["Kunal Nayyar",1981,"كونال نايار"],
  ["Kaley Cuoco",1985,"كايلي كوكو"]],{h:"actor",k:BORN,g:"p",s:"tv",m:"w"}),
 Rd(["WHICH SHOW HAS","THE MOST EPISODES",Q],["أنهي مسلسل","عنده أكتر حلقات",QA],"max",[
  ["The Big Bang Theory",279,"ذا بيج بانج ثيوري"],["Two and a Half Men",262,"اتنين ونص راجل"],["Friends",236,"فريندز"],["How I Met Your Mother",208,"هاو آي مت يور ماذر"],["The Office (US)",201,"ذا أوفيس","The Office (American TV series)"],
  ["Seinfeld",180,"ساينفيلد"],["The Sopranos",86,"ذا سوبرانوز"],["Game of Thrones",73,"جيم أوف ثرونز"],["Breaking Bad",62,"بريكنج باد"]],{suf:[" eps"," حلقة"],h:"TV series",k:["EPISODES","عدد الحلقات"],s:"tv",m:"w"}),
  Rd(["WHICH RAMADAN SHOW","CAME OUT FIRST",Q],["أنهي مسلسل رمضان","نزل الأول",QA],"min",[
   ["Layali El Helmeya",1987,"ليالي الحلمية","Al Helmeya Nights"],["Lan Aish fi Gilbab Abi",1996,"لن أعيش في جلباب أبي","Lan Aish fi Gilbab Abi (TV series)"],["Bakkar",1998,"بكار"],
   ["El Kabeer Awy",2010,"الكبير أوي"],["Grand Hotel",2016,"جراند أوتيل","Grand Hotel (Egyptian TV series)"],["El Ostoura",2016,"الأسطورة"],
   ["El Ikhtiyar",2020,"الاختيار","El Ikhtiyar (TV series)"],["Gaafar El Omda",2023,"جعفر العمدة"],["El Hashashin",2024,"الحشاشين","El Hashashin (TV series)"]],
   {h:"Egyptian TV series",k:["FIRST AIRED","أول عرض"],dt:["Series first aired", "أول عرض للمسلسل"],g:"y",s:"tv",m:"eg"}),
 Rd(["WHO IS THE","OLDEST SERIES STAR",Q],["مين","أكبر نجم مسلسلات في السن",QA],"min",[
  ["Yehia El-Fakharany",1945,"يحيى الفخراني"],["Mohamed Sobhi",1948,"محمد صبحي","Mohamed Sobhi (actor)"],["Mahmoud Hemida",1953,"محمود حميدة"],
  ["Ashraf Abdel Baky",1963,"أشرف عبد الباقي"],["Khaled El Nabawy",1966,"خالد النبوي"],["Yasser Galal",1969,"ياسر جلال"],
  ["Mostafa Shaban",1970,"مصطفى شعبان"],["Youssef El Sherif",1978,"يوسف الشريف"],["Mohamed Ramadan",1988,"محمد رمضان","Mohamed Ramadan (actor)"]],{h:"Egyptian actor",k:BORN,g:"p",s:"tv",m:"eg"}),
 Rd(["WHICH SERIES","CAME OUT LAST",Q],["أنهي مسلسل","أجدد",QA],"max",[
  ["Raafat El Haggan",1988,"رأفت الهجان"],["Arabesque",1994,"أرابيسك"],["Hadeeth El Sabah wel Masaa",2001,"حديث الصباح والمساء"],
  ["Ragel W Set Settat",2006,"راجل وست ستات"],["Taht El Saytara",2015,"تحت السيطرة"],["Nelly & Sherihan",2016,"نيللي وشريهان"],
  ["Sabe' Gar",2017,"سابع جار"],["Paranormal",2020,"ما وراء الطبيعة","Paranormal (TV series)"],["Ashghal Shaqqa",2024,"أشغال شقة"]],{h:"Egyptian TV series",k:["FIRST AIRED","أول عرض"],dt:["Series first aired", "أول عرض للمسلسل"],g:"y",s:"tv",m:"eg"}),
 Rd(["WHICH INTERNATIONAL SERIES","CAME OUT LAST",Q],["أنهي مسلسل أجنبي","أجدد",QA],"max",[
  ["Friends",1994,"فريندز"],["The Sopranos",1999,"ذا سوبرانوز"],["Prison Break",2005,"بريزون بريك"],
  ["Breaking Bad",2008,"بريكنج باد"],["Game of Thrones",2011,"جيم أوف ثرونز"],["Peaky Blinders",2013,"بيكي بلايندرز"],
  ["Stranger Things",2016,"سترينجر ثينجز"],["Money Heist",2017,"لا كاسا دي بابيل"],["Squid Game",2021,"لعبة الحبار"]],{h:"TV series",k:["FIRST AIRED","أول عرض"],dt:["Series first aired", "أول عرض للمسلسل"],g:"y",s:"tv",m:"w"}),
 Rd(["WHICH SITCOM","CAME OUT FIRST",Q],["أنهي سيتكوم","نزل الأول",QA],"min",[
  ["I Love Lucy",1951,"آي لوف لوسي"],["Seinfeld",1989,"ساينفيلد"],["The Fresh Prince of Bel-Air",1990,"فريش برينس"],
  ["Friends",1994,"فريندز"],["Everybody Loves Raymond",1996,"الكل يحب رايموند"],["Two and a Half Men",2003,"اتنين ونص راجل"],
  ["The Office (US)",2005,"ذا أوفيس","The Office (American TV series)"],["The Big Bang Theory",2007,"ذا بيج بانج ثيوري"],["Modern Family",2009,"مودرن فاميلي"]],
  {h:"TV series",k:["FIRST AIRED","أول عرض"],dt:["Series first aired","أول عرض للمسلسل"],g:"y",s:"tv",m:"w"}),
 Rd(["WHICH TURKISH SERIES","CAME OUT FIRST",Q],["أنهي مسلسل تركي","نزل الأول",QA],"min",[
  ["Kurtlar Vadisi",2003,"وادي الذئاب","Valley of the Wolves (TV series)"],["Gümüş (Noor)",2005,"نور","Gümüş (TV series)"],["Aşk-ı Memnu",2008,"العشق الممنوع","Aşk-ı Memnu (TV series)"],
  ["Fatmagül",2010,"ما ذنب فاطمة جول","Fatmagül'ün Suçu Ne?"],["Muhteşem Yüzyıl",2011,"حريم السلطان","Muhteşem Yüzyıl"],["Diriliş: Ertuğrul",2014,"قيامة أرطغرل","Diriliş: Ertuğrul"],
  ["Kara Sevda",2015,"حب أعمى","Kara Sevda"],["Kuruluş: Osman",2019,"المؤسس عثمان","Kuruluş: Osman"],["Sen Çal Kapımı",2020,"أنت اطرق بابي","Sen Çal Kapımı"]],
  {h:"Turkish TV series",k:["FIRST AIRED","أول عرض"],dt:["Series first aired","أول عرض للمسلسل"],g:"y",s:"tv",m:"w"}),
 Rd(["WHICH NETFLIX HIT","CAME OUT LAST",Q],["أنهي مسلسل نتفليكس","أجدد",QA],"max",[
  ["House of Cards",2013,"هاوس أوف كاردز","House of Cards (American TV series)"],["Narcos",2015,"ناركوس"],["The Crown",2016,"ذا كراون","The Crown (TV series)"],
  ["Dark",2017,"دارك","Dark (TV series)"],["The Witcher",2019,"ذا ويتشر","The Witcher (TV series)"],["Bridgerton",2020,"بريدجرتون"],
  ["Squid Game",2021,"لعبة الحبار"],["Wednesday",2022,"وينزداي","Wednesday (TV series)"],["Adolescence",2025,"أدوليسنس","Adolescence (TV series)"]],
  {h:"TV series",k:["FIRST AIRED","أول عرض"],dt:["Series first aired","أول عرض للمسلسل"],g:"y",s:"tv",m:"w"}),
 Rd(["WHO IS THE","YOUNGEST STREAMING STAR",Q],["مين","أصغر نجم مسلسلات أونلاين",QA],"max",[
  ["Bryan Cranston",1956,"براين كرانستون"],["Bob Odenkirk",1962,"بوب أودنكيرك"],["Lee Jung-jae",1972,"لي جونج جاي"],
  ["Pedro Pascal",1975,"بيدرو باسكال"],["Cillian Murphy",1976,"كيليان مورفي"],["Henry Cavill",1983,"هنري كافيل"],
  ["Úrsula Corberó",1989,"أورسولا كوربيرو (طوكيو)"],["Finn Wolfhard",2002,"فين وولفهارد"],["Millie Bobby Brown",2004,"ميلي بوبي براون"]],
  {h:"actor",k:BORN,g:"p",s:"tv",m:"w"}),
 Rd(["WHICH TV FORMAT","STARTED FIRST",Q],["أنهي برنامج","بدأ الأول",QA],"min",[
  ["Wheel of Fortune",1975,"عجلة الحظ","Wheel of Fortune (American game show)"],["Who Wants to Be a Millionaire?",1998,"من سيربح المليون","Who Wants to Be a Millionaire? (British game show)"],["Big Brother",1999,"الأخ الأكبر","Big Brother (franchise)"],
  ["Survivor",2000,"سيرفايفر","Survivor (American TV series)"],["American Idol",2002,"أمريكان أيدول"],["The X Factor",2004,"إكس فاكتور","The X Factor (British TV series)"],
  ["Britain's Got Talent",2007,"بريتنز جوت تالنت"],["The Voice",2010,"ذا فويس","The Voice of Holland"],["Arab Idol",2011,"أراب أيدول"]],
  {h:"TV show",k:["FIRST AIRED","أول عرض"],s:"tv",m:"w"}),
 Rd(["WHICH DRAMA HAS","THE MOST EPISODES",Q],["أنهي مسلسل دراما","عدد حلقاته أكتر",QA],"max",[
  ["Dallas",357,"دالاس","Dallas (1978 TV series)"],["ER",331,"إي آر","ER (TV series)"],["Supernatural",327,"سوبرناتشورال","Supernatural (American TV series)"],
  ["House",177,"دكتور هاوس","House (TV series)"],["Lost",121,"لوست","Lost (TV series)"],["Dexter",96,"ديكستر","Dexter (TV series)"],
  ["Mad Men",92,"ماد مين"],["Prison Break",90,"بريزون بريك"],["Peaky Blinders",36,"بيكي بلايندرز","Peaky Blinders (TV series)"]],
  {suf:[" eps"," حلقة"],h:"TV series",k:["EPISODES","عدد الحلقات"],s:"tv",m:"w"}),
 Rd(["WHICH SERIES","ENDED FIRST",Q],["أنهي مسلسل","خلص الأول",QA],"min",[
  ["Seinfeld",1998,"ساينفيلد"],["Friends",2004,"فريندز"],["The Sopranos",2007,"ذا سوبرانوز"],
  ["Lost",2010,"لوست","Lost (TV series)"],["Breaking Bad",2013,"بريكنج باد"],["How I Met Your Mother",2014,"هاو آي مت يور ماذر"],
  ["Mad Men",2015,"ماد مين"],["Game of Thrones",2019,"جيم أوف ثرونز"],["Stranger Things",2025,"سترينجر ثينجز"]],
  {h:"TV series",k:["LAST EPISODE","آخر حلقة"],s:"tv",m:"w"}),
 Rd(["WHO IS THE","OLDEST TV HOST",Q],["مين","أكبر مذيع في السن",QA],"min",[
  ["David Letterman",1947,"ديفيد ليترمان"],["Jay Leno",1950,"جاي لينو"],["Oprah Winfrey",1954,"أوبرا وينفري"],
  ["Ellen DeGeneres",1958,"إلين دي جينيرس"],["Simon Cowell",1959,"سايمون كاول"],["Conan O'Brien",1963,"كونان أوبراين"],
  ["Jimmy Kimmel",1967,"جيمي كيميل"],["Jimmy Fallon",1974,"جيمي فالون"],["James Corden",1978,"جيمس كوردن"]],
  {h:"TV presenter",k:BORN,g:"p",s:"tv",m:"w"}),
 Rd(["WHICH CLASSIC SERIES","AIRED FIRST",Q],["أنهي مسلسل قديم","اتعرض الأول",QA],"min",[
  ["Abna'i Al-Aaza'a Shokran",1979,"أبنائي الأعزاء شكراً"],["El Raya El Bayda",1988,"الراية البيضا"],["Bawabet El Halawany",1992,"بوابة الحلواني"],
  ["El Mal wal Banoun",1993,"المال والبنون"],["Zizinia",1997,"زيزينيا"],["El Daw' El Shared",1998,"الضوء الشارد"],
  ["Ailet El Hajj Metwalli",2001,"عائلة الحاج متولي"],["Yetraboh Fi Ezzo",2007,"يتربى في عزو"],["El Kabeer Awy",2010,"الكبير أوي"]],
  {h:"Egyptian TV series",k:["FIRST AIRED","أول عرض"],dt:["Series first aired","أول عرض للمسلسل"],g:"y",s:"tv",m:"eg"}),
 Rd(["WHICH RECENT RAMADAN HIT","AIRED FIRST",Q],["أنهي مسلسل رمضاني جديد","اتعرض الأول",QA],"min",[
  ["Nesr El Saeed",2018,"نسر الصعيد"],["El Ikhtiyar",2020,"الاختيار","El Ikhtiyar (TV series)"],["Lo'bet Newton",2021,"لعبة نيوتن","Newton's Game"],
  ["Fatin Amal Harby",2022,"فاتن أمل حربي"],["Kamel El Adad",2023,"كامل العدد"],["Masar Egbari",2024,"مسار إجباري"],
  ["Haqq Arab",2024,"حق عرب"],["El Hashashin",2024,"الحشاشين","El Hashashin (TV series)"],["Lam Shamseya",2025,"لام شمسية"]],
  {h:"Egyptian TV series",k:["FIRST AIRED","أول عرض"],dt:["Series first aired","أول عرض للمسلسل"],g:"y",s:"tv",m:"eg"}),
 Rd(["WHO IS THE","YOUNGEST SERIES STAR",Q],["مين","أصغر نجم مسلسلات",QA],"max",[
  ["Nour El-Sherif",1946,"نور الشريف"],["Yousra",1955,"يسرا"],["Ghada Abdel Razek",1965,"غادة عبد الرازق"],
  ["Yasser Galal",1969,"ياسر جلال"],["Nelly Karim",1974,"نيللي كريم"],["Amir Karara",1977,"أمير كرارة"],
  ["Dina El Sherbiny",1985,"دينا الشربيني"],["Amina Khalil",1988,"أمينة خليل"],["Ahmed Malek",1995,"أحمد مالك"]],
  {h:"Egyptian actor",k:BORN,g:"p",s:"tv",m:"eg"}),
 Rd(["WHICH ADULT CARTOON","CAME OUT FIRST",Q],["أنهي كرتون للكبار","نزل الأول",QA],"min",[
  ["The Flintstones",1960,"عائلة فلينستون"],["The Jetsons",1962,"عائلة جيتسون"],["South Park",1997,"ساوث بارك"],
  ["Family Guy",1999,"فاميلي جاي"],["Futurama",1999,"فيوتشراما"],["American Dad!",2005,"أمريكان داد"],
  ["Bob's Burgers",2011,"بوبز برجرز"],["Rick and Morty",2013,"ريك ومورتي"],["BoJack Horseman",2014,"بوجاك هورسمان"]],
  {h:"animated series",k:["FIRST AIRED","أول عرض"],dt:["Series first aired","أول عرض للمسلسل"],g:"y",s:"tv",m:"w"}),
 Rd(["WHICH KOREAN DRAMA","CAME OUT FIRST",Q],["أنهي مسلسل كوري","نزل الأول",QA],"min",[
  ["Winter Sonata",2002,"سوناتا الشتاء"],["Dae Jang Geum",2003,"جوهرة القصر","Dae Jang Geum"],["Boys Over Flowers",2009,"أولاد فوق الزهور","Boys Over Flowers (TV series)"],
  ["Descendants of the Sun",2016,"أحفاد الشمس"],["Goblin",2016,"جوبلن","Guardian: The Lonely and Great God"],["Crash Landing on You",2019,"هبوط اضطراري للحب"],
  ["Itaewon Class",2020,"إيتايوان كلاس"],["The Glory",2022,"ذا جلوري","The Glory (TV series)"],["Queen of Tears",2024,"ملكة الدموع"]],
  {h:"South Korean TV series",k:["FIRST AIRED","أول عرض"],dt:["Series first aired","أول عرض للمسلسل"],g:"y",s:"tv",m:"w"})]}
);
