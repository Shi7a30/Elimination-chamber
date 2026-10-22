// Food & Drinks rounds. The round format is explained above Rd() in index.html.
// Each category file adds itself to CATS; index.html loads them in number order.
CATS.push(
{n:"Food & Drinks",a:"أكل وشرب",e:"🍲",r:[
 Rd(["WHICH EGYPTIAN BRAND","WAS FOUNDED FIRST",Q],["أنهي براند مصري","اتأسس الأول",QA],"min",[
  ["El Rashidi El Mizan",1889,"الرشيدي الميزان"],["Corona",1919,"كورونا"],["Spiro Spathis",1920,"سبيرو سباتس"],["Bisco Misr",1957,"بسكو مصر","BiscoMisr"],["Faragello",1973,"فرجللو"],["Vitrac",1982,"فيتراك"],["Juhayna",1983,"جهينة","Juhayna Food Industries"],["Regina",1986,"ريجينا"],["Edita",1996,"إيديتا"]],
  {h:"Egyptian food brand",k:["FOUNDED","اتأسس سنة"],g:"y",dt:["Company founded","تأسيس الشركة"],s:"snacks",m:"eg",d:2}),
 Rd(["WHICH DRINK OR DAIRY BRAND","WAS FOUNDED LAST",Q],["إيه","أجدد براند عصير أو ألبان",QA],"max",[
  ["Spiro Spathis",1920,"سبيرو سباتس"],["Faragello",1973,"فرجللو"],["Juhayna",1983,"جهينة","Juhayna Food Industries"],["Panda (Arab Dairy)",1985,"باندا"],["Dina Farms",1987,"دينا فارمز"],["Domty",1990,"دومتي"],["Greenland",1995,"جرينلاند"],["Obour Land",1997,"عبور لاند"],["Beyti",1998,"بيتي"]],
  {h:"Egyptian drink or dairy brand",k:["FOUNDED","اتأسس سنة"],g:"y",dt:["Company founded","تأسيس الشركة"],s:"snacks",m:"eg",d:3}),
 Rd(["WHICH SUPERMARKET","STARTED IN EGYPT LAST",Q],["أنهي سوبرماركت","أجدد في مصر",QA],"max",[
  ["Seoudi",1938,"سعودي ماركت"],["Awlad Ragab",1970,"أولاد رجب"],["Metro Market",1998,"مترو ماركت"],["Carrefour",2002,"كارفور"],["Hyper One",2005,"هايبر وان"],["Gourmet",2006,"جورميه"],["Kheir Zaman",2006,"خير زمان"],["LuLu Hypermarket",2015,"لولو هايبر ماركت"],["Kazyon",2014,"كازيون"]],
  {h:"supermarket chain in Egypt",k:["STARTED IN EGYPT","بدأ في مصر سنة"],g:"y",dt:["Started in Egypt","البداية في مصر"],s:"snacks",m:"eg",d:2}),
 Rd(["WHICH GLOBAL GIANT","CAME TO EGYPT FIRST",Q],["أنهي شركة عالمية","دخلت مصر الأول",QA],"min",[
  ["Nestlé",1900,"نستله"],["Coca-Cola",1942,"كوكاكولا"],["Heinz",1989,"هاينز"],["Afia (Savola)",1995,"عافية","Savola Group"],["Heineken",2002,"هاينكن"],["Hero",2005,"هيرو","Hero Group"],["Danone",2006,"دانون"],["Almarai",2009,"المراعي"],["Kellogg's",2015,"كيلوجز"]],
  {h:"food company in Egypt",k:["CAME TO EGYPT","دخلت مصر سنة"],g:"y",dt:["Arrived in Egypt","دخول مصر"],s:"snacks",m:"eg",d:2}),
 Rd(["WHICH CAFÉ","OPENED IN EGYPT FIRST",Q],["إيه","أقدم قهوة أو كافيه في مصر",QA],"min",[
  ["El Fishawy",1797,"قهوة الفيشاوي","El-Fishawy Café"],["Simonds",1898,"سيموندس"],["Café Riche",1908,"كافيه ريش"],["Brazilian Coffee Stores",1929,"البن البرازيلي"],["El Horreya Café",1936,"قهوة الحرية"],["Naguib Mahfouz Café",1989,"قهوة نجيب محفوظ"],["Cilantro",2000,"سيلانترو"],["Costa Coffee",2004,"كوستا"],["Starbucks",2006,"ستاربكس"]],
  {h:"café in Egypt",k:["OPENED IN EGYPT","اتفتح في مصر سنة"],g:"y",dt:["Café opened in Egypt","افتتاح الكافيه في مصر"],s:"eats",m:"eg",d:1}),
 Rd(["WHICH PATISSERIE","OPENED LAST",Q],["أنهي محل حلويات","أجدد",QA],"max",[
  ["Groppi",1891,"جروبي"],["Simonds",1898,"سيموندس"],["El Malky",1917,"المالكي"],["Mandarine Koueider",1928,"مندرين قويدر"],["El Abd",1974,"العبد"],["La Poire",1975,"لابوار"],["Salé Sucré",1999,"ساليه سكريه"],["Sedra",2003,"سيدرا"],["TBS",2008,"تي بي إس"]],
  {h:"Egyptian patisserie",k:["FOUNDED","اتأسس سنة"],g:"y",dt:["Patisserie founded","تأسيس محل الحلويات"],s:"eats",m:"eg",d:3}),
 Rd(["WHICH CHAIN","CAME TO EGYPT LAST",Q],["إيه","أجدد سلسلة مطاعم في مصر",QA],"max",[
  ["KFC",1973,"كنتاكي"],["McDonald's",1994,"ماكدونالدز"],["TGI Fridays",1997,"تي جي آي فرايديز"],["Starbucks",2006,"ستاربكس"],["Burger King",2007,"برجر كينج"],["Fatburger",2013,"فات برجر"],["Dunkin'",2015,"دانكن"],["Arby's",2018,"آربيز"],["Krispy Kreme",2021,"كريسبي كريم"]],
  {h:"international restaurant chain",k:["CAME TO EGYPT","دخلت مصر سنة"],g:"y",dt:["Arrived in Egypt","دخول مصر"],s:"eats",m:"eg",d:2}),
 Rd(["WHICH RESTAURANT","IS THE OLDEST",Q],["أنهي مطعم","أقدم",QA],"min",[
  ["Café Riche",1908,"كافيه ريش"],["Abou Shakra",1947,"أبو شقرة"],["Abou Tarek",1950,"أبو طارق"],["Mohamed Ahmed",1957,"محمد أحمد"],["Felfela",1959,"فلفلة"],["Gad",1969,"جاد"],["Mo'men",1988,"مؤمن"],["Abou El Sid",1999,"أبو السيد"],["Zooba",2012,"زووبا"]],
  {h:"Egyptian restaurant",k:["OPENED","اتفتح سنة"],g:"y",dt:["Restaurant opened","افتتاح المطعم"],s:"eats",m:"eg",d:2}),
 Rd(["WHICH SOFT DRINK","WAS CREATED FIRST",Q],["إيه","أقدم حاجة ساقعة",QA],"min",[
  ["Schweppes",1783,"شويبس"],["Dr Pepper",1885,"دكتور بيبر"],["Coca-Cola",1886,"كوكاكولا"],
  ["Pepsi",1893,"بيبسي"],["Spiro Spathis",1920,"سبيرو سباتس"],["7 Up",1929,"سفن أب"],
  ["Fanta",1940,"فانتا"],["Mirinda",1959,"ميرندا"],["Sprite",1961,"سبرايت","Sprite (drink)"]],
  {h:"soft drink",k:["CREATED","اتعملت سنة"],s:"snacks",m:"w",d:2}),
 Rd(["WHICH CHOCOLATE BAR","CAME OUT FIRST",Q],["أنهي شوكولاتة","نزلت الأول",QA],"min",[
  ["Cadbury Dairy Milk",1905,"كادبوري ديري ميلك"],["Toblerone",1908,"توبليرون"],["Snickers",1930,"سنيكرز"],
  ["Mars bar",1932,"مارس","Mars (chocolate bar)"],["Kit Kat",1935,"كيت كات"],["Bounty",1951,"باونتي","Bounty (chocolate bar)"],
  ["Galaxy",1960,"جالاكسي","Galaxy (chocolate)"],["Twix",1967,"تويكس"],["Kinder Bueno",1990,"كيندر بوينو"]],
  {h:"chocolate bar",k:["LAUNCHED","نزلت سنة"],g:"y",dt:["Launched","نزول المنتج"],s:"snacks",m:"w",d:3}),
 Rd(["WHICH FOOD HAS","THE MOST CALORIES",Q],["إيه","أكتر أكل فيه سعرات",QA],"max",[
  ["Walnuts",654,"عين الجمل","Walnut"],["Almonds",579,"اللوز","Almond"],["Peanuts",567,"السوداني","Peanut"],
  ["Potato chips",536,"الشيبسي","Potato chip"],["Milk chocolate",535,"شوكولاتة باللبن"],["Popcorn",387,"الفشار"],
  ["Dates",282,"البلح","Date palm"],["Banana",89,"الموز"],["Guava",68,"الجوافة"]],
  {suf:[" kcal"," سعر"],h:"food",k:["PER 100 g","في كل 100 جرام"],s:"snacks",m:"eg",d:3}),
 Rd(["WHICH FRUIT HAS","THE MOST VITAMIN C",Q],["أنهي فاكهة","فيها فيتامين سي أكتر",QA],"max",[
  ["Guava",228,"الجوافة"],["Kiwi",93,"الكيوي","Kiwifruit"],["Strawberry",59,"الفراولة"],
  ["Orange",53,"البرتقان","Orange (fruit)"],["Lemon",53,"اللمون"],["Pineapple",48,"الأناناس"],
  ["Mango",36,"المانجا"],["Banana",9,"الموز"],["Watermelon",8,"البطيخ"]],
  {suf:[" mg"," مجم"],h:"fruit",k:["PER 100 g","في كل 100 جرام"],s:"snacks",m:"eg",d:2}),
 Rd(["WHICH DRINK HAS","THE MOST CAFFEINE",Q],["إيه","أكتر مشروب فيه كافيين",QA],"max",[
  ["Monster Energy",160,"مونستر","Monster Energy"],["Filter coffee",95,"قهوة فلتر","Drip coffee"],["Red Bull",80,"ريد بول"],
  ["Espresso",63,"إسبريسو"],["Instant coffee",62,"نسكافيه (قهوة سريعة)"],["Black tea",47,"شاي"],
  ["Pepsi",38,"بيبسي"],["Coca-Cola",34,"كوكاكولا"],["Green tea",28,"شاي أخضر"]],
  {pre:["~","~"],suf:[" mg"," مجم"],h:"drink",k:["PER CUP OR CAN","في الكوباية أو الكانز"],s:"snacks",m:"eg",d:2}),
 Rd(["WHICH SNACK BRAND","CAME OUT FIRST",Q],["أنهي براند سناكس","نزل الأول",QA],"min",[
  ["Oreo",1912,"أوريو"],["Lay's",1932,"ليز"],["M&M's",1941,"إم آند إمز"],
  ["Cheetos",1948,"شيتوس"],["Nutella",1964,"نوتيلا"],["Doritos",1966,"دوريتوس"],
  ["Pringles",1968,"برينجلز"],["Tic Tac",1969,"تيك تاك"],["Kinder Surprise",1974,"كيندر سربرايز"]],
  {h:"snack brand",k:["LAUNCHED","نزل سنة"],g:"y",dt:["Launched","نزول المنتج"],s:"snacks",m:"w",d:2}),
 Rd(["WHICH TEA OR COFFEE BRAND","WAS FOUNDED FIRST",Q],["أنهي براند شاي أو قهوة","اتأسس الأول",QA],"min",[
  ["Twinings",1706,"توايننجز"],["Tetley",1837,"تيتلي"],["Lipton",1890,"ليبتون"],
  ["Lavazza",1895,"لافاتزا"],["Illy",1933,"إيلي","Illycaffè"],["Nescafé",1938,"نسكافيه"],
  ["Ahmad Tea",1986,"أحمد تي"],["Nespresso",1986,"نسبريسو"],["Dilmah",1988,"ديلما"]],
  {h:"tea or coffee brand",k:["FOUNDED","اتأسس سنة"],g:"y",dt:["Brand founded","تأسيس البراند"],s:"snacks",m:"w",d:3}),
 Rd(["WHICH FOOD HAS","THE MOST PROTEIN",Q],["أنهي أكل","فيه بروتين أكتر",QA],"max",[
  ["Chicken breast",31,"صدور الفراخ"],["Beef",26,"اللحمة","Beef"],["Cheddar",25,"جبنة شيدر","Cheddar cheese"],
  ["Peanut butter",25,"زبدة الفول السوداني"],["Canned tuna",24,"التونة","Tuna as food"],["Eggs",13,"البيض","Egg as food"],
  ["Lentils",9,"العدس","Lentil"],["Ful medames",8,"الفول المدمس"],["Rice",2.7,"الرز"]],
  {pre:["~","~"],suf:[" g"," جرام"],h:"food",k:["PER 100 g (COOKED)","في كل 100 جرام (مطبوخ)"],s:"snacks",m:"eg",d:2}),
 Rd(["WHICH CANDY","CAME OUT LAST",Q],["إيه","أجدد حلويات",QA],"max",[
  ["Haribo Goldbears",1922,"هاريبو","Gummy bear"],["Maltesers",1936,"مالتيزرز"],["Smarties",1937,"سمارتيز"],
  ["Mentos",1948,"منتوس"],["Chupa Chups",1958,"تشوبا تشوبس"],["Skittles",1974,"سكيتلز","Skittles (confectionery)"],
  ["Lion bar",1976,"لايون","Lion (chocolate bar)"],["Ferrero Rocher",1982,"فيريرو روشيه"],["Kinder Joy",2001,"كيندر جوي"]],
  {h:"candy",k:["LAUNCHED","نزلت سنة"],g:"y",dt:["Launched","نزول المنتج"],s:"snacks",m:"w",d:2}),
 Rd(["WHICH FOOD HAS","THE MOST SUGAR",Q],["إيه","أكتر أكل فيه سكر",QA],"max",[
  ["Honey",82,"العسل"],["Dates",63,"البلح","Date palm"],["Raisins",59,"الزبيب","Raisin"],
  ["Milk chocolate",52,"شوكولاتة باللبن"],["Ketchup",22,"الكاتشب"],["Grapes",16,"العنب","Grape"],
  ["Mango",14,"المانجا"],["Banana",12,"الموز"],["Orange",9,"البرتقان","Orange (fruit)"]],
  {pre:["~","~"],suf:[" g"," جرام"],h:"food",k:["PER 100 g","في كل 100 جرام"],s:"snacks",m:"eg",d:2}),
 Rd(["WHICH FOOD GIANT","WAS FOUNDED FIRST",Q],["أنهي شركة أكل عالمية","اتأسست الأول",QA],"min",[
  ["Cadbury",1824,"كادبوري"],["Nestlé",1866,"نستله"],["Heinz",1869,"هاينز","Heinz"],
  ["Hershey's",1894,"هيرشيز","The Hershey Company"],["Kraft",1903,"كرافت","Kraft Foods"],["Kellogg's",1906,"كيلوجز"],
  ["Mars",1911,"مارس","Mars Inc."],["Danone",1919,"دانون"],["Ferrero",1946,"فيريرو","Ferrero SpA"]],
  {h:"food company",k:["FOUNDED","اتأسست سنة"],s:"snacks",m:"w",d:3}),
 Rd(["WHICH BISCUIT","CAME OUT FIRST",Q],["إيه","أقدم بسكوت",QA],"min",[
  ["Marie biscuit",1874,"بسكوت ماري"],["Petit Beurre",1886,"بيتي بير"],["Digestive",1892,"دايجستيف","Digestive biscuit"],
  ["Oreo",1912,"أوريو"],["Jaffa Cakes",1927,"جافا كيك"],["Lotus Biscoff",1932,"لوتس"],
  ["Ritz crackers",1934,"ريتز","Ritz Crackers"],["Prince",1950,"برنس","Prince (cookie)"],["TUC",1958,"توك","TUC (cracker)"]],
  {h:"biscuit",k:["LAUNCHED","نزل سنة"],g:"y",dt:["Launched","نزول المنتج"],s:"snacks",m:"w",d:3}),
 Rd(["WHICH CHEESE BRAND","CAME OUT FIRST",Q],["أنهي براند جبنة","نزل الأول",QA],"min",[
  ["Philadelphia",1872,"فيلادلفيا","Philadelphia (cream cheese)"],["Almarai",1977,"المراعي"],["La Vache qui rit",1921,"البقرة الضاحكة","The Laughing Cow"],
  ["Babybel",1952,"بيبي بيل","Mini Babybel"],["Kiri",1966,"كيري","Kiri (cheese)"],["Président",1968,"بريزيدون","Président (brand)"],
  ["Juhayna",1983,"جهينة","Juhayna Food Industries"],["Panda (Arab Dairy)",1985,"باندا"],["Domty",1990,"دومتي"]],
  {h:"cheese brand",k:["LAUNCHED","نزل سنة"],s:"snacks",m:"eg",d:3}),
 Rd(["WHICH SAUCE OR SPREAD","CAME OUT FIRST",Q],["أنهي صوص أو كريمة","نزلت الأول",QA],"min",[
  ["Knorr",1838,"كنور"],["Tabasco",1868,"تاباسكو","Tabasco sauce"],["Heinz Ketchup",1876,"كاتشب هاينز","Heinz Tomato Ketchup"],
  ["Maggi",1884,"ماجي"],["Hellmann's",1913,"هيلمانز","Hellmann's and Best Foods"],["Vegemite",1923,"فيجيمايت"],
  ["Nutella",1964,"نوتيلا"],["Sriracha",1980,"سيراتشا","Huy Fong Foods"],["Lotus spread",2007,"كريمة لوتس","Lotus Bakeries"]],
  {h:"food brand",k:["LAUNCHED","نزل سنة"],g:"y",dt:["Launched","نزول المنتج"],s:"snacks",m:"w",d:3}),
 Rd(["WHICH COUNTRY GROWS","THE MOST DATES",Q],["فين","بيتزرع بلح أكتر",QA],"max",[
  ["Egypt",1.9,"مصر"],["Saudi Arabia",1.6,"السعودية"],["Algeria",1.2,"الجزائر"],
  ["Iran",1.1,"إيران"],["Iraq",0.75,"العراق"],["Pakistan",0.5,"باكستان"],
  ["Sudan",0.47,"السودان"],["Oman",0.38,"عمان"],["Tunisia",0.35,"تونس"]],
  {pre:["~","~"],suf:["M tonnes"," مليون طن"],dp:2,h:"dates",k:["DATES A YEAR","بلح في السنة"],s:"snacks",m:"eg",d:2}),
 Rd(["WHICH ICE CREAM BRAND","STARTED FIRST",Q],["أنهي براند آيس كريم","بدأ الأول",QA],"min",[
  ["Wall's",1922,"والز","Wall's (ice cream)"],["Carvel",1934,"كارفل","Carvel (franchise)"],["Dairy Queen",1940,"ديري كوين"],
  ["Baskin-Robbins",1945,"باسكن روبنز"],["Cornetto",1959,"كورنيتو"],["Häagen-Dazs",1960,"هاجن داز"],
  ["Ben & Jerry's",1978,"بن آند جيريز"],["Cold Stone Creamery",1988,"كولد ستون"],["Magnum",1989,"ماجنوم","Magnum (ice cream)"]],
  {h:"ice cream brand",k:["STARTED","بدأ سنة"],g:"y",dt:["Brand launched","بداية البراند"],s:"snacks",m:"w",d:3}),
 Rd(["WHICH BURGER CHAIN","WAS FOUNDED FIRST",Q],["إيه","أقدم سلسلة برجر",QA],"min",[
  ["A&W",1919,"إيه آند دبليو","A&W Restaurants"],["White Castle",1921,"وايت كاسل","White Castle (restaurant)"],["McDonald's",1940,"ماكدونالدز"],
  ["Carl's Jr.",1941,"كارلز جونيور"],["In-N-Out",1948,"إن آند أوت","In-N-Out Burger"],["Burger King",1953,"برجر كينج"],
  ["Hardee's",1960,"هارديز"],["Wendy's",1969,"ويندي"],["Five Guys",1986,"فايف جايز"]],
  {h:"restaurant chain",k:["FOUNDED","اتأسست سنة"],s:"eats",m:"w",d:3}),
 Rd(["WHICH PIZZA CHAIN","WAS FOUNDED LAST",Q],["أنهي سلسلة بيتزا","أجدد",QA],"max",[
  ["Sbarro",1956,"سبارو"],["Pizza Hut",1958,"بيتزا هت"],["Pizza Inn",1958,"بيتزا إن"],
  ["Little Caesars",1959,"ليتل سيزرز"],["Domino's",1960,"دومينوز","Domino's Pizza"],["PizzaExpress",1965,"بيتزا إكسبريس"],
  ["Chuck E. Cheese",1977,"تشاك إي تشيز"],["Papa Murphy's",1981,"بابا مرفيز"],["Papa John's",1984,"بابا جونز","Papa John's Pizza"]],
  {h:"restaurant chain",k:["FOUNDED","اتأسست سنة"],g:"y",dt:["Chain founded","تأسيس السلسلة"],s:"eats",m:"w",d:3}),
 Rd(["WHICH COFFEE CHAIN","WAS FOUNDED FIRST",Q],["أنهي سلسلة قهوة","اتأسست الأول",QA],"min",[
  ["Dunkin'",1950,"دانكن"],["Coffee Bean & Tea Leaf",1963,"كوفي بين","The Coffee Bean & Tea Leaf"],["Tim Hortons",1964,"تيم هورتنز"],
  ["Peet's Coffee",1966,"بيتس كوفي"],["Costa Coffee",1971,"كوستا"],["Starbucks",1971,"ستاربكس"],
  ["Second Cup",1975,"سكند كب"],["Gloria Jean's",1979,"جلوريا جينز","Gloria Jean's Coffees"],["Caribou Coffee",1992,"كاريبو"]],
  {h:"coffee chain",k:["FOUNDED","اتأسست سنة"],s:"eats",m:"w",d:3}),
 Rd(["WHICH CHICKEN CHAIN","WAS FOUNDED LAST",Q],["إيه","أجدد سلسلة فراخ",QA],"max",[
  ["KFC",1952,"كنتاكي"],["Chick-fil-A",1967,"تشيك فيل إيه"],["Popeyes",1972,"بوبايز"],
  ["Al Baik",1974,"البيك"],["Bojangles",1977,"بوجانجلز"],["Nando's",1987,"ناندوز"],
  ["Cook Door",1988,"كوك دور"],["Wingstop",1994,"وينج ستوب"],["Raising Cane's",1996,"ريزينج كينز","Raising Cane's Chicken Fingers"]],
  {h:"restaurant chain",k:["FOUNDED","اتأسست سنة"],s:"eats",m:"w",d:3}),
 Rd(["WHICH CHAIN HAS","THE MOST BRANCHES",Q],["أنهي سلسلة","ليها فروع أكتر",QA],"max",[
  ["McDonald's",43,"ماكدونالدز"],["Starbucks",40,"ستاربكس"],["Subway",37,"صب واي","Subway (restaurant)"],
  ["KFC",31,"كنتاكي"],["Domino's",21,"دومينوز","Domino's Pizza"],["Pizza Hut",20,"بيتزا هت"],
  ["Burger King",19,"برجر كينج"],["Dunkin'",13,"دانكن"],["Papa John's",6,"بابا جونز","Papa John's Pizza"]],
  {pre:["~","~"],suf:["K"," ألف"],h:"restaurant chain",k:["BRANCHES WORLDWIDE","فرع حوالين العالم"],s:"eats",m:"w",d:2}),
 Rd(["WHICH DESSERT CHAIN","WAS FOUNDED FIRST",Q],["أنهي سلسلة حلويات","اتأسست الأول",QA],"min",[
  ["Krispy Kreme",1937,"كريسبي كريم"],["Dairy Queen",1940,"ديري كوين"],["Baskin-Robbins",1945,"باسكن روبنز"],
  ["Dunkin'",1950,"دانكن"],["Cinnabon",1985,"سينابون"],["Auntie Anne's",1988,"أنتي آنز"],
  ["Cold Stone Creamery",1988,"كولد ستون"],["Pinkberry",2005,"بينك بيري"],["Crumbl",2017,"كرامبل","Crumbl Cookies"]],
  {h:"dessert chain",k:["FOUNDED","اتأسست سنة"],s:"eats",m:"w",d:3}),
 Rd(["WHICH McDONALD'S ITEM","CAME OUT FIRST",Q],["إيه","أقدم حاجة في ماكدونالدز",QA],"min",[
  ["Filet-O-Fish",1962,"فيليه أو فيش"],["Big Mac",1967,"بيج ماك"],["Quarter Pounder",1971,"كوارتر باوندر"],
  ["Egg McMuffin",1971,"إيج ماك مافن"],["Happy Meal",1979,"هابي ميل"],["McChicken",1980,"ماك تشيكن"],
  ["Chicken McNuggets",1983,"ماك ناجتس"],["McCafé",1993,"ماك كافيه"],["McFlurry",1995,"ماك فلوري"]],
  {h:"McDonald's",k:["LAUNCHED","نزلت سنة"],g:"y",dt:["Launched","نزول المنتج"],s:"eats",m:"w",d:3}),
 Rd(["WHICH SANDWICH OR TACO CHAIN","WAS FOUNDED LAST",Q],["أنهي سلسلة ساندوتشات أو تاكو","أجدد",QA],"max",[
  ["Jersey Mike's",1956,"جيرسي مايكس","Jersey Mike's Subs"],["Taco Bell",1962,"تاكو بيل"],["Arby's",1964,"آربيز"],
  ["Subway",1965,"صب واي","Subway (restaurant)"],["Quiznos",1981,"كويزنوز"],["Jimmy John's",1983,"جيمي جونز"],
  ["Pret A Manger",1986,"بريه أ مونجيه"],["Panera Bread",1987,"بانيرا"],["Chipotle",1993,"تشيبوتلي","Chipotle Mexican Grill"]],
  {h:"restaurant chain",k:["FOUNDED","اتأسست سنة"],s:"eats",m:"w",d:3}),
 Rd(["WHICH RESTAURANT CHAIN","WAS FOUNDED FIRST",Q],["أنهي سلسلة مطاعم","اتأسست الأول",QA],"min",[
  ["Benihana",1964,"بينيهانا"],["TGI Fridays",1965,"تي جي آي فرايديز"],["Hard Rock Cafe",1971,"هارد روك كافيه"],
  ["Chili's",1975,"تشيليز"],["The Cheesecake Factory",1978,"تشيز كيك فاكتوري"],["Applebee's",1980,"أبلبيز"],
  ["Olive Garden",1982,"أوليف جاردن"],["Outback Steakhouse",1988,"أوت باك"],["Wagamama",1992,"واجاماما"]],
  {h:"restaurant chain",k:["FOUNDED","اتأسست سنة"],s:"eats",m:"w",d:3}),
 Rd(["WHICH COUNTRY DRINKS","THE MOST COFFEE",Q],["فين","بيشربوا قهوة أكتر",QA],"max",[
  ["Finland",12,"فنلندا"],["Norway",9.9,"النرويج"],["Iceland",9,"أيسلندا"],
  ["Denmark",8.7,"الدنمارك"],["Netherlands",8.4,"هولندا"],["Sweden",8.2,"السويد"],
  ["Italy",5.9,"إيطاليا"],["Brazil",5.8,"البرازيل"],["United States",4.2,"أمريكا"]],
  {pre:["~","~"],suf:[" kg"," كيلو"],h:"coffee",k:["PER PERSON A YEAR","للفرد في السنة"],s:"eats",m:"w",d:3}),
 Rd(["WHICH COUNTRY DRINKS","THE MOST TEA",Q],["فين","بيشربوا شاي أكتر",QA],"max",[
  ["Turkey",3.2,"تركيا"],["Ireland",2.2,"أيرلندا"],["United Kingdom",1.9,"بريطانيا"],
  ["Iran",1.5,"إيران"],["Russia",1.4,"روسيا"],["Morocco",1.2,"المغرب"],
  ["New Zealand",1.2,"نيوزيلندا"],["Egypt",1,"مصر"],["Poland",1,"بولندا"]],
  {pre:["~","~"],suf:[" kg"," كيلو"],h:"tea",k:["PER PERSON A YEAR","للفرد في السنة"],s:"eats",m:"eg",d:2}),
 Rd(["WHICH FOOD","WAS INVENTED FIRST",Q],["إيه","أقدم أكلة",QA],"min",[
  ["Sandwich",1762,"الساندوتش"],["Potato chips",1853,"الشيبسي","Potato chip"],["Pizza Margherita",1889,"بيتزا مارجريتا"],
  ["Ice cream cone",1904,"كوز الآيس كريم"],["Popsicle",1905,"المصاصة الساقعة (آيس لولي)","Ice pop"],["Caesar salad",1924,"سلطة سيزر"],
  ["Nachos",1943,"ناتشوز"],["Buffalo wings",1964,"أجنحة بافلو"],["Chicken McNuggets",1983,"ماك ناجتس"]],
  {h:"food",k:["INVENTED","اتخترعت سنة"],g:"y",dt:["Invented","الاختراع"],s:"eats",m:"w",d:1}),
 Rd(["WHICH FAMOUS CAFÉ","OPENED FIRST",Q],["أنهي كافيه مشهور","اتفتح الأول",QA],"min",[
  ["Café Procope",1686,"كافيه بروكوب","Café Procope"],["Caffè Florian",1720,"كافيه فلوريان"],["Antico Caffè Greco",1760,"كافيه جريكو"],
  ["El Fishawy",1797,"قهوة الفيشاوي"],["Café Tortoni",1858,"كافيه تورتوني"],["Café Central",1876,"كافيه سنترال"],
  ["Les Deux Magots",1885,"لي دو ماجو"],["Café de Flore",1887,"كافيه دو فلور"],["Café Riche",1908,"كافيه ريش"]],
  {h:"café",k:["OPENED","اتفتح سنة"],s:"eats",m:"w",d:3}),
 Rd(["WHICH FOOD DELIVERY APP","STARTED FIRST",Q],["أنهي أبلكيشن دليفري","بدأ الأول",QA],"min",[
  ["Otlob",1999,"اطلب"],["Talabat",2004,"طلبات"],["Grubhub",2004,"جراب هاب"],
  ["Elmenus",2011,"المنيوز"],["Deliveroo",2013,"ديليفرو"],["DoorDash",2013,"دور داش"],
  ["Uber Eats",2014,"أوبر إيتس"],["Instashop",2015,"إنستاشوب"],["Breadfast",2017,"بريدفاست"]],
  {h:"delivery app",k:["STARTED","بدأ سنة"],g:"y",dt:["App started","بداية الأبلكيشن"],s:"eats",m:"eg",d:2}),
 Rd(["WHICH BAKERY","OPENED FIRST",Q],["أنهي مخبز أو حلواني","اتفتح الأول",QA],"min",[
  ["Ladurée",1862,"لادوريه"],["Paul",1889,"بول","Paul (bakery)"],["Groppi",1891,"جروبي"],
  ["Mandarine Koueider",1928,"مندرين قويدر"],["Brioche Dorée",1976,"بريوش دوريه"],["Cinnabon",1985,"سينابون"],
  ["Le Pain Quotidien",1990,"لو بان كوتيديان"],["Magnolia Bakery",1996,"ماجنوليا"],["TBS",2008,"تي بي إس"]],
  {h:"bakery",k:["OPENED","اتفتح سنة"],g:"y",dt:["Patisserie founded","تأسيس محل الحلويات"],s:"eats",m:"eg",d:3}),
 Rd(["WHICH INSTANT FOOD","CAME OUT FIRST",Q],["إيه","أقدم أكل سريع التحضير",QA],"min",[
  ["Kraft Mac & Cheese",1937,"مكرونة كرافت بالجبنة","Kraft Dinner"],["Nescafé",1938,"نسكافيه"],["TV dinner",1953,"وجبة التليفزيون"],
  ["Instant noodles",1958,"النودلز السريعة"],["Pop-Tarts",1964,"بوب تارتس"],["Cup Noodles",1971,"كب نودلز"],
  ["Indomie",1972,"إندومي"],["Microwave popcorn",1981,"فشار الميكروويف"],["Lunchables",1988,"لانشبلز"]],
  {h:"food",k:["CAME OUT","نزل سنة"],g:"y",dt:["Launched","نزول المنتج"],s:"eats",m:"w",d:3}),

 // odd one out: knock out the cards that belong; the one that doesn't is the answer (best "odd", see above Rd() in index.html)
 Rd(["WHICH SNACK","ISN'T FROM THE 1930s","ON THIS LIST"],["أنهي سناك","مش من التلاتينات","في القايمة دي؟"],"odd",[
  ["Snickers",1930,"سنيكرز"],["Mars bar",1932,"مارس","Mars (chocolate bar)"],["Lay's",1932,"ليز"],
  ["Lotus Biscoff",1932,"لوتس"],["M&M's",1941,"إم آند إمز"],["Ritz crackers",1934,"ريتز","Ritz Crackers"],
  ["Kit Kat",1935,"كيت كات"],["Maltesers",1936,"مالتيزرز"],["Smarties",1937,"سمارتيز"]],
  {h:"snack",k:["LAUNCHED","نزل سنة"],s:"snacks",m:"w",d:3,odd:[1930,1939]}),
 Rd(["WHICH CHAIN","ISN'T AMERICAN","ON THIS LIST"],["أنهي مطعم أو كافيه","مش أمريكي","في القايمة دي؟"],"odd",[
  ["McDonald's",0,"ماكدونالدز"],["KFC",0,"كنتاكي"],["Burger King",0,"برجر كينج"],
  ["Pizza Hut",0,"بيتزا هت"],["Domino's",0,"دومينوز","Domino's Pizza"],["Costa Coffee",1,"كوستا"],
  ["Subway",0,"صب واي","Subway (restaurant)"],["Hardee's",0,"هارديز"],["Starbucks",0,"ستاربكس"]],
  {h:"restaurant chain",k:["FROM","من"],s:"eats",m:"w",d:1,lab:[["USA","أمريكا"],["UK","إنجلترا"]]}),
 Rd(["WHICH BRAND","ISN'T EGYPTIAN","ON THIS LIST"],["أنهي براند","مش مصري","في القايمة دي؟"],"odd",[
  ["Juhayna",0,"جهينة","Juhayna Food Industries"],["Edita",0,"إيديتا","Edita Food Industries"],["Domty",0,"دومتي"],
  ["Faragello",0,"فرجللو"],["Bisco Misr",0,"بسكو مصر","BiscoMisr"],["La Vache qui rit",1,"البقرة الضاحكة","The Laughing Cow"],
  ["Beyti",0,"بيتي"],["Obour Land",0,"عبور لاند"],["Vitrac",0,"فيتراك"]],
  {h:"Egyptian food brand",k:["FROM","من"],s:"snacks",m:"eg",d:1,lab:[["EGYPT","مصر"],["FRANCE","فرنسا"]]})]}
);
