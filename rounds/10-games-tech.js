// Games & Tech rounds. The round format is explained above Rd() in index.html.
// Each category file adds itself to CATS; index.html loads them in number order.
CATS.push(
{n:"Games & Tech",a:"الألعاب والتكنولوجيا",e:"🎮",r:[
 Rd(["WHICH IS THE","OLDEST VIDEO GAME",Q],["أنهي","لعبة فيديو أقدم واحدة",QA],"min",[
  ["Pac-Man",1980,"باك مان"],["Tetris",1984,"تتريس"],["Super Mario Bros.",1985,"سوبر ماريو"],["The Legend of Zelda",1986,"أسطورة زيلدا","The Legend of Zelda (video game)"],["Pokémon Red & Green",1996,"بوكيمون ريد وجرين","Pokémon Red and Blue"],
  ["Grand Theft Auto",1997,"جراند ثفت أوتو","Grand Theft Auto (video game)"],["Minecraft",2011,"ماينكرافت"],["Fortnite",2017,"فورتنايت"],["Among Us",2018,"أمونج أس"]],{h:"video game",k:["RELEASED","نزلت سنة"],dt:["Game released", "نزول اللعبة"],g:"y",s:"games",m:"w"}),
 Rd(["WHICH IS THE","OLDEST CONSOLE",Q],["أنهي","جهاز ألعاب أقدم واحد",QA],"min",[
  ["Atari 2600",1977,"أتاري 2600"],["NES / Famicom",1983,"إن إي إس / فاميكوم","Nintendo Entertainment System"],["Game Boy",1989,"جيم بوي"],["PlayStation",1994,"بلايستيشن 1","PlayStation (console)"],["Nintendo 64",1996,"نينتندو 64"],
  ["Xbox",2001,"إكس بوكس","Xbox (console)"],["Wii",2006,"وي"],["PlayStation 4",2013,"بلايستيشن 4"],["Nintendo Switch",2017,"نينتندو سويتش"]],{h:"video game console",k:["RELEASED","نزل سنة"],dt:["Console released", "نزول الجهاز"],g:"y",s:"games",m:"w"}),
 Rd(["WHICH IS THE","OLDEST COMPANY",Q],["أنهي","شركة أقدم واحدة",QA],"min",[
  ["Nintendo",1889,"نينتندو"],["Ford",1903,"فورد","Ford Motor Company"],["IBM",1911,"آي بي إم"],["Disney",1923,"ديزني","The Walt Disney Company"],["Toyota",1937,"تويوتا"],["Samsung",1938,"سامسونج"],
  ["Sony",1946,"سوني"],["Apple",1976,"أبل","Apple Inc."],["Google",1998,"جوجل"]],{h:"company",k:["FOUNDED","اتأسست سنة"],dt:["Company founded", "تأسيس الشركة"],g:"y",s:"brands",m:"w"}),
 Rd(["WHICH APP","LAUNCHED LAST",Q],["أنهي أبلكيشن","أجدد",QA],"max",[
  ["Facebook",2004,"فيسبوك"],["YouTube",2005,"يوتيوب"],["Twitter",2006,"تويتر"],["WhatsApp",2009,"واتساب"],["Instagram",2010,"إنستجرام"],["Snapchat",2011,"سناب شات"],["TikTok",2016,"تيك توك"],["ChatGPT",2022,"شات جي بي تي"],
  ["Threads",2023,"ثريدز","Threads (social network)"]],{h:"app",k:["LAUNCHED","نزل سنة"],dt:["App launched", "نزول الأبلكيشن"],g:"y",s:"brands",m:"w"}),
  Rd(["WHICH IS THE","OLDEST EGYPTIAN BRAND",Q],["أنهي","براند مصري أقدم واحد",QA],"min",[
   ["Al-Ahram",1875,"الأهرام"],["National Bank of Egypt",1898,"البنك الأهلي المصري"],["Banque Misr",1920,"بنك مصر"],["EgyptAir",1932,"مصر للطيران"],
   ["Juhayna",1983,"جهينة","Juhayna Food Industries"],["Edita",1996,"إيديتا","Edita Food Industries"],["Vodafone Egypt",1998,"فودافون مصر"],["Fawry",2008,"فوري"],["Swvl",2017,"سويفل"]],
   {h:"company",k:["FOUNDED","اتأسس سنة"],dt:["Brand founded", "تأسيس البراند"],g:"y",s:"brands",m:"eg"}),
 Rd(["WHICH MOBILE GAME","CAME OUT FIRST",Q],["أنهي لعبة موبايل","نزلت الأول",QA],"min",[
  ["Snake (Nokia)",1997,"التعبان (سنيك)","Snake (video game genre)"],["Angry Birds",2009,"أنجري بيردز","Angry Birds (video game)"],["Fruit Ninja",2010,"فروت نينجا"],
  ["Temple Run",2011,"تمبل رن"],["Subway Surfers",2012,"صبواي سيرفرز"],["Flappy Bird",2013,"فلابي بيرد"],["Pokémon Go",2016,"بوكيمون جو"],
  ["Free Fire",2017,"فري فاير","Free Fire (video game)"],["PUBG Mobile",2018,"ببجي موبايل"]],
  {h:"video game",k:["RELEASED","نزلت سنة"],dt:["Game released", "نزول اللعبة"],g:"y",s:"games",m:"w"}),
 Rd(["WHICH STARTUP","WAS FOUNDED FIRST",Q],["أنهي ستارتب","اتأسست الأول",QA],"min",[
  ["Fawry",2008,"فوري"],["Elmenus",2011,"المنيوز"],["Vezeeta",2012,"فيزيتا"],["Paymob",2015,"باي موب"],["Swvl",2017,"سويفل"],
  ["Breadfast",2017,"بريدفاست"],["MaxAB",2018,"ماكس أب"],["Khazna",2019,"خزنة"],["Rabbit Mart",2021,"رابيت"]],
  {h:"app",k:["FOUNDED","اتأسست سنة"],dt:["Startup founded", "تأسيس الشركة"],g:"y",s:"brands",m:"eg"}),
 Rd(["WHICH BRAND","STARTED MOST RECENTLY",Q],["أنهي براند","اتأسس آخر واحد",QA],"max",[
  ["Elsewedy Electric",1938,"السويدي"],["Bisco Misr",1957,"بسكو مصر","BiscoMisr"],["Felfela",1959,"فلفلة"],["Elaraby",1964,"العربي","Elaraby Group"],
  ["Mo'men",1988,"مؤمن"],["Cook Door",1988,"كوك دور"],["Edita",1996,"إيديتا","Edita Food Industries"],["Buffalo Burger",2008,"بافلو برجر"],["Zooba",2012,"زووبا"]],
  {h:"company",k:["FOUNDED","اتأسس سنة"],dt:["Brand founded", "تأسيس البراند"],g:"y",s:"brands",m:"eg"}),
 Rd(["WHICH CYBER-CAFÉ CLASSIC","CAME OUT FIRST",Q],["أنهي لعبة من بتوع السايبر","نزلت الأول",QA],"min",[
  ["Crash Bandicoot",1996,"كراش","Crash Bandicoot (video game)"],["Age of Empires II",1999,"إيدج أوف إمباير 2","Age of Empires II: The Age of Kings"],
  ["GTA Vice City",2002,"جاتا فايس سيتي","Grand Theft Auto: Vice City"],["Counter-Strike 1.6",2003,"كاونتر سترايك 1.6","Counter-Strike (video game)"],
  ["GTA San Andreas",2004,"جاتا سان أندرياس","Grand Theft Auto: San Andreas"],["Need for Speed: Most Wanted",2005,"نيد فور سبيد موست وانتد","Need for Speed: Most Wanted (2005 video game)"],
  ["Call of Duty 4",2007,"كول أوف ديوتي 4","Call of Duty 4: Modern Warfare"],["GTA IV",2008,"جاتا 4","Grand Theft Auto IV"],["League of Legends",2009,"ليج أوف ليجندز"]],
  {h:"video game",k:["RELEASED","نزلت سنة"],dt:["Game released", "نزول اللعبة"],g:"y",s:"games",m:"eg"}),
 Rd(["WHICH FOOTBALL GAME","CAME OUT FIRST",Q],["أنهي لعبة كورة","نزلت الأول",QA],"min",[
  ["FIFA International Soccer",1993,"فيفا إنترناشونال سوكر"],["FIFA 98",1997,"فيفا 98","FIFA: Road to World Cup 98"],["Pro Evolution Soccer",2001,"بيس 1","Pro Evolution Soccer (video game)"],
  ["PES 5",2005,"بيس 5","Pro Evolution Soccer 5"],["PES 6",2006,"بيس 6","Pro Evolution Soccer 6"],["FIFA 10",2009,"فيفا 10"],
  ["PES 2013",2012,"بيس 2013","Pro Evolution Soccer 2013"],["FIFA 18",2017,"فيفا 18"],["eFootball",2021,"إي فوتبول","eFootball (video game)"]],
  {h:"video game",k:["RELEASED","نزلت سنة"],dt:["Game released", "نزول اللعبة"],g:"y",s:"games",m:"eg"}),
 Rd(["WHICH CONSOLE","CAME OUT LAST",Q],["أنهي جهاز ألعاب","أجدد",QA],"max",[
  ["Sega Mega Drive",1988,"سيجا","Sega Genesis"],["Game Boy Color",1998,"جيم بوي كالر"],["PlayStation 2",2000,"بلايستيشن 2"],
  ["Game Boy Advance",2001,"جيم بوي أدفانس"],["PSP",2004,"بي إس بي","PlayStation Portable"],["Xbox 360",2005,"إكس بوكس 360"],
  ["PlayStation 3",2006,"بلايستيشن 3"],["PS Vita",2011,"بي إس فيتا","PlayStation Vita"],["PlayStation 5",2020,"بلايستيشن 5"]],
  {h:"video game console",k:["RELEASED","نزل سنة"],dt:["Console released", "نزول الجهاز"],g:"y",s:"games",m:"eg"}),
 Rd(["WHICH NINTENDO GAME","CAME OUT LAST",Q],["أنهي لعبة نينتندو","أجدد",QA],"max",[
  ["Donkey Kong",1981,"دونكي كونج","Donkey Kong (video game)"],["Super Mario Bros.",1985,"سوبر ماريو"],["Zelda: Ocarina of Time",1998,"زيلدا: أوكارينا أوف تايم","The Legend of Zelda: Ocarina of Time"],
  ["Super Smash Bros.",1999,"سوبر سماش براذرز","Super Smash Bros. (video game)"],["Mario Kart Wii",2008,"ماريو كارت وي"],["Super Mario Odyssey",2017,"سوبر ماريو أوديسي"],
  ["Animal Crossing: New Horizons",2020,"أنيمال كروسينج"],["Zelda: Tears of the Kingdom",2023,"زيلدا: تيرز أوف ذا كينجدم","The Legend of Zelda: Tears of the Kingdom"],["Mario Kart World",2025,"ماريو كارت وورلد"]],
  {h:"video game",k:["RELEASED","نزلت سنة"],dt:["Game released","نزول اللعبة"],g:"y",s:"games",m:"w"}),
 Rd(["WHICH CONSOLE","SOLD THE MOST",Q],["أنهي جهاز ألعاب","اتباع أكتر",QA],"max",[
  ["PlayStation 2",160,"بلايستيشن 2"],["Game Boy",119,"جيم بوي"],["PlayStation 4",117,"بلايستيشن 4"],
  ["PlayStation",102,"بلايستيشن 1","PlayStation (console)"],["Wii",102,"وي"],["PlayStation 3",87,"بلايستيشن 3"],
  ["Xbox 360",84,"إكس بوكس 360"],["Game Boy Advance",82,"جيم بوي أدفانس"],["Sega Mega Drive",34,"سيجا ميجا درايف"]],
  {pre:["~","~"],suf:["M"," مليون"],h:"video game console",k:["UNITS SOLD","اتباع منه"],s:"games",m:"w"}),
 Rd(["WHICH VIDEO GAME","SOLD THE MOST",Q],["أنهي لعبة فيديو","اتباعت أكتر",QA],"max",[
  ["Minecraft",350,"ماينكرافت"],["GTA V",215,"جاتا 5","Grand Theft Auto V"],["Wii Sports",83,"وي سبورتس"],
  ["Red Dead Redemption 2",77,"ريد ديد ريدمبشن 2"],["Mario Kart 8 Deluxe",68,"ماريو كارت 8"],["The Witcher 3",60,"ذا ويتشر 3","The Witcher 3: Wild Hunt"],
  ["Super Mario Bros.",58,"سوبر ماريو"],["Pokémon Red & Green",31,"بوكيمون ريد وجرين","Pokémon Red and Blue"],["Elden Ring",30,"إلدن رينج"]],
  {pre:["~","~"],suf:["M"," مليون"],h:"video game",k:["COPIES SOLD","اتباع منها"],s:"games",m:"w"}),
 Rd(["WHICH GAME SERIES","STARTED FIRST",Q],["أنهي سلسلة ألعاب","بدأت الأول",QA],"min",[
  ["Space Invaders",1978,"سبيس إنفيدرز"],["Final Fantasy",1987,"فاينال فانتسي"],["Sonic the Hedgehog",1991,"سونيك","Sonic the Hedgehog (1991 video game)"],
  ["Mortal Kombat",1992,"مورتال كومبات","Mortal Kombat (1992 video game)"],["Resident Evil",1996,"ريزدنت إيفل","Resident Evil (1996 video game)"],["The Sims",2000,"ذا سيمز","The Sims (video game)"],
  ["Halo",2001,"هيلو","Halo: Combat Evolved"],["Call of Duty",2003,"كول أوف ديوتي","Call of Duty (video game)"],["Assassin's Creed",2007,"أساسنز كريد","Assassin's Creed (video game)"]],
  {h:"video game",k:["FIRST GAME","أول لعبة سنة"],dt:["Game released","نزول اللعبة"],g:"y",s:"games",m:"w"}),
 Rd(["WHICH GAME","CAME OUT LAST",Q],["أنهي لعبة","أجدد",QA],"max",[
  ["Red Dead Redemption 2",2018,"ريد ديد ريدمبشن 2"],["Among Us",2018,"أمونج أس"],["Valorant",2020,"فالورانت"],
  ["Genshin Impact",2020,"جينشن إمباكت"],["Elden Ring",2022,"إلدن رينج"],["Hogwarts Legacy",2023,"هوجورتس ليجاسي"],
  ["Baldur's Gate 3",2023,"بلدرز جيت 3"],["Black Myth: Wukong",2024,"بلاك ميث: ووكونج"],["Hollow Knight: Silksong",2025,"هولو نايت: سيلك سونج"]],
  {h:"video game",k:["RELEASED","نزلت سنة"],dt:["Game released","نزول اللعبة"],g:"y",s:"games",m:"w"}),
 Rd(["WHICH GAME HERO","APPEARED FIRST",Q],["أنهي بطل ألعاب","ظهر الأول",QA],"min",[
  ["Mario",1981,"ماريو"],["Link",1986,"لينك (زيلدا)","Link (The Legend of Zelda)"],["Mega Man",1987,"ميجا مان","Mega Man (character)"],
  ["Sonic",1991,"سونيك","Sonic the Hedgehog (character)"],["Kirby",1992,"كيربي","Kirby (character)"],["Lara Croft",1996,"لارا كروفت"],
  ["Pikachu",1996,"بيكاتشو"],["Master Chief",2001,"ماستر تشيف","Master Chief (Halo)"],["Kratos",2005,"كريتوس","Kratos (God of War)"]],
  {h:"video game character",k:["FIRST SEEN","أول ظهور سنة"],dt:["First appearance","أول ظهور"],g:"y",s:"games",m:"w"}),
 Rd(["WHICH HANDHELD","CAME OUT LAST",Q],["أنهي جهاز ألعاب محمول","أجدد",QA],"max",[
  ["Game Boy",1989,"جيم بوي"],["Sega Game Gear",1990,"سيجا جيم جير","Game Gear"],["Game Boy Color",1998,"جيم بوي كولور"],
  ["Nintendo DS",2004,"نينتندو دي إس"],["PSP",2004,"بي إس بي"],["Nintendo 3DS",2011,"نينتندو ثري دي إس"],
  ["PS Vita",2011,"بي إس فيتا"],["Steam Deck",2022,"ستيم ديك"],["Nintendo Switch 2",2025,"نينتندو سويتش 2"]],
  {h:"video game console",k:["RELEASED","نزل سنة"],dt:["Console released","نزول الجهاز"],g:"y",s:"games",m:"w"}),
 Rd(["WHICH PLAYSTATION 1 GAME","CAME OUT FIRST",Q],["أنهي لعبة بلايستيشن 1","نزلت الأول",QA],"min",[
  ["Tekken",1995,"تيكن","Tekken (video game)"],["Crash Bandicoot",1996,"كراش"],["Resident Evil",1996,"ريزدنت إيفل","Resident Evil (1996 video game)"],
  ["Spyro the Dragon",1998,"سبايرو","Spyro the Dragon (1998 video game)"],["Metal Gear Solid",1998,"ميتال جير سوليد","Metal Gear Solid (1998 video game)"],["Crash Team Racing",1999,"كراش العربيات"],
  ["Tony Hawk's Pro Skater",1999,"توني هوك","Tony Hawk's Pro Skater (video game)"],["Digimon World",1999,"ديجيمون وورلد"],["Yu-Gi-Oh! Forbidden Memories",1999,"يو جي أوه فوربيدن ميموريز"]],
  {h:"video game",k:["RELEASED","نزلت سنة"],dt:["Game released","نزول اللعبة"],g:"y",s:"games",m:"eg"}),
 Rd(["WHICH PC GAME","CAME OUT LAST",Q],["أنهي لعبة كمبيوتر","أجدد",QA],"max",[
  ["Prince of Persia",1989,"برنس أوف بيرشا","Prince of Persia (1989 video game)"],["Doom",1993,"دووم","Doom (1993 video game)"],["Red Alert",1996,"ريد أليرت","Command & Conquer: Red Alert"],
  ["Age of Empires",1997,"إيدج أوف إمبايرز","Age of Empires (video game)"],["StarCraft",1998,"ستاركرافت","StarCraft (video game)"],["Half-Life",1998,"هاف لايف","Half-Life (video game)"],
  ["Max Payne",2001,"ماكس باين","Max Payne (video game)"],["Mafia: City of Lost Heaven",2002,"مافيا","Mafia (video game)"],["Hitman: Blood Money",2006,"هيتمان: بلود موني"]],
  {h:"video game",k:["RELEASED","نزلت سنة"],dt:["Game released","نزول اللعبة"],g:"y",s:"games",m:"eg"}),
 Rd(["WHICH PHONE GAME","CAME OUT LAST",Q],["أنهي لعبة موبايل","أجدد",QA],"max",[
  ["8 Ball Pool",2010,"البلياردو (8 بول بول)"],["Candy Crush Saga",2012,"كاندي كراش"],["Clash of Clans",2012,"كلاش أوف كلانس"],
  ["Hay Day",2012,"هاي داي"],["Clash Royale",2016,"كلاش رويال"],["Ludo King",2016,"لودو كينج"],
  ["Free Fire",2017,"فري فاير","Free Fire (video game)"],["PUBG Mobile",2018,"ببجي موبايل"],["Call of Duty: Mobile",2019,"كول أوف ديوتي موبايل"]],
  {h:"mobile game",k:["RELEASED","نزلت سنة"],dt:["Game released","نزول اللعبة"],g:"y",s:"games",m:"eg"}),
 Rd(["WHICH 'ATARI' TAPE GAME","CAME OUT FIRST",Q],["أنهي لعبة شريط أتاري","نزلت الأول",QA],"min",[
  ["Donkey Kong",1981,"دونكي كونج","Donkey Kong (video game)"],["Mario Bros.",1983,"ماريو براذرز"],["Excitebike",1984,"الموتوسيكلات (إكسايت بايك)"],
  ["Duck Hunt",1984,"صيد البط"],["Super Mario Bros.",1985,"سوبر ماريو"],["Battle City",1985,"الدبابة (باتل سيتي)","Battle City (video game)"],
  ["Adventure Island",1986,"أدفنشر أيلاند","Adventure Island (video game)"],["Contra",1987,"كونترا","Contra (video game)"],["Chip 'n Dale Rescue Rangers",1990,"تشيب وديل","Chip 'n Dale: Rescue Rangers (video game)"]],
  {h:"video game",k:["RELEASED","نزلت سنة"],dt:["Game released","نزول اللعبة"],g:"y",s:"games",m:"eg"}),
 Rd(["WHICH WRESTLING GAME","CAME OUT LAST",Q],["أنهي لعبة مصارعة","أجدد",QA],"max",[
  ["WWF SmackDown!",2000,"سماك داون","WWF SmackDown! (video game)"],["SmackDown! Just Bring It",2001,"سماك داون جست برينج إت","WWF SmackDown! Just Bring It"],["Here Comes the Pain",2003,"هير كامز ذا بين","WWE SmackDown! Here Comes the Pain"],
  ["SmackDown! vs. Raw",2004,"سماك داون ضد رو","WWE SmackDown! vs. Raw"],["SmackDown vs. Raw 2007",2006,"سماك داون ضد رو 2007","WWE SmackDown vs. Raw 2007"],["SmackDown vs. Raw 2011",2010,"سماك داون ضد رو 2011","WWE SmackDown vs. Raw 2011"],
  ["WWE 2K14",2013,"دبليو دبليو إي 2K14"],["WWE 2K22",2022,"دبليو دبليو إي 2K22"],["WWE 2K24",2024,"دبليو دبليو إي 2K24"]],
  {h:"video game",k:["RELEASED","نزلت سنة"],dt:["Game released","نزول اللعبة"],g:"y",s:"games",m:"eg"}),
 Rd(["WHICH FIGHTING GAME","CAME OUT FIRST",Q],["أنهي لعبة ضرب","نزلت الأول",QA],"min",[
  ["Street Fighter II",1991,"ستريت فايتر 2"],["Mortal Kombat",1992,"مورتال كومبات","Mortal Kombat (1992 video game)"],["Tekken 3",1997,"تيكن 3"],
  ["Budokai Tenkaichi 3",2007,"دراجون بول تينكايتشي 3","Dragon Ball Z: Budokai Tenkaichi 3"],["Naruto Ultimate Ninja Storm",2008,"ناروتو ألتميت نينجا ستورم","Naruto: Ultimate Ninja Storm"],["Tekken 7",2015,"تيكن 7"],
  ["Dragon Ball FighterZ",2018,"دراجون بول فايترز"],["Mortal Kombat 11",2019,"مورتال كومبات 11"],["Street Fighter 6",2023,"ستريت فايتر 6"]],
  {h:"video game",k:["RELEASED","نزلت سنة"],dt:["Game released","نزول اللعبة"],g:"y",s:"games",m:"eg"}),
 Rd(["WHICH GTA GAME","CAME OUT LAST",Q],["أنهي لعبة جاتا","أجدد",QA],"max",[
  ["Grand Theft Auto",1997,"جاتا 1","Grand Theft Auto (video game)"],["GTA 2",1999,"جاتا 2","Grand Theft Auto 2"],["GTA III",2001,"جاتا 3","Grand Theft Auto III"],
  ["GTA Vice City",2002,"جاتا فايس سيتي","Grand Theft Auto: Vice City"],["GTA San Andreas",2004,"جاتا سان أندرياس","Grand Theft Auto: San Andreas"],["GTA Liberty City Stories",2005,"جاتا ليبرتي سيتي ستوريز","Grand Theft Auto: Liberty City Stories"],
  ["GTA IV",2008,"جاتا 4","Grand Theft Auto IV"],["GTA Chinatown Wars",2009,"جاتا تشايناتاون وورز","Grand Theft Auto: Chinatown Wars"],["GTA V",2013,"جاتا 5","Grand Theft Auto V"]],
  {h:"video game",k:["RELEASED","نزلت سنة"],dt:["Game released","نزول اللعبة"],g:"y",s:"games",m:"eg"}),
 Rd(["WHICH CAR BRAND","WAS FOUNDED FIRST",Q],["أنهي ماركة عربيات","اتأسست الأول",QA],"min",[
  ["Peugeot",1810,"بيجو"],["Opel",1862,"أوبل"],["Fiat",1899,"فيات","Fiat Automobiles"],
  ["Ford",1903,"فورد","Ford Motor Company"],["BMW",1916,"بي إم دبليو"],["Toyota",1937,"تويوتا"],
  ["Kia",1944,"كيا"],["Hyundai",1967,"هيونداي","Hyundai Motor Company"],["Tesla",2003,"تيسلا","Tesla, Inc."]],
  {h:"car brand",k:["FOUNDED","اتأسست سنة"],dt:["Company founded","تأسيس الشركة"],g:"y",s:"brands",m:"w"}),
 Rd(["WHICH SPORTSWEAR BRAND","WAS FOUNDED LAST",Q],["أنهي ماركة رياضية","أجدد",QA],"max",[
  ["New Balance",1906,"نيو بالانس"],["Kappa",1916,"كابا","Kappa (company)"],["Umbro",1924,"أمبرو"],
  ["Puma",1948,"بوما","Puma (brand)"],["Adidas",1949,"أديداس"],["Reebok",1958,"ريبوك"],
  ["Nike",1964,"نايكي","Nike, Inc."],["Under Armour",1996,"أندر آرمر"],["Lululemon",1998,"لولوليمون","Lululemon Athletica"]],
  {h:"sportswear brand",k:["FOUNDED","اتأسست سنة"],dt:["Company founded","تأسيس الشركة"],g:"y",s:"brands",m:"w"}),
 Rd(["WHICH TECH COMPANY","WAS FOUNDED LAST",Q],["أنهي شركة تكنولوجيا","أجدد",QA],"max",[
  ["Microsoft",1975,"مايكروسوفت"],["Apple",1976,"أبل","Apple Inc."],["Oracle",1977,"أوراكل","Oracle Corporation"],
  ["Nvidia",1993,"إنفيديا"],["Amazon",1994,"أمازون","Amazon (company)"],["Netflix",1997,"نتفليكس"],
  ["Google",1998,"جوجل"],["Tesla",2003,"تيسلا","Tesla, Inc."],["OpenAI",2015,"أوبن إيه آي"]],
  {h:"company",k:["FOUNDED","اتأسست سنة"],dt:["Company founded","تأسيس الشركة"],g:"y",s:"brands",m:"w"}),
 Rd(["WHICH LUXURY BRAND","WAS FOUNDED FIRST",Q],["أنهي ماركة فخمة","اتأسست الأول",QA],"min",[
  ["Hermès",1837,"هيرميس"],["Cartier",1847,"كارتييه"],["Louis Vuitton",1854,"لوي فيتون"],
  ["Burberry",1856,"بربري"],["Rolex",1905,"رولكس"],["Chanel",1910,"شانيل"],
  ["Prada",1913,"برادا"],["Gucci",1921,"جوتشي"],["Dior",1946,"ديور"]],
  {h:"brand",k:["FOUNDED","اتأسست سنة"],dt:["Company founded","تأسيس الشركة"],g:"y",s:"brands",m:"w"}),
 Rd(["WHICH PHONE BRAND","WAS FOUNDED LAST",Q],["أنهي ماركة موبايلات","أجدد",QA],"max",[
  ["Nokia",1865,"نوكيا"],["Motorola",1928,"موتورولا"],["Samsung",1938,"سامسونج"],
  ["Sony",1946,"سوني"],["LG",1947,"إل جي","LG Corporation"],["BlackBerry",1984,"بلاك بيري","BlackBerry Limited"],
  ["Huawei",1987,"هواوي"],["Oppo",2004,"أوبو"],["Xiaomi",2010,"شاومي"]],
  {h:"company",k:["FOUNDED","اتأسست سنة"],dt:["Company founded","تأسيس الشركة"],g:"y",s:"brands",m:"w"}),
 Rd(["WHICH TOY BRAND","STARTED FIRST",Q],["أنهي ماركة لعب","بدأت الأول",QA],"min",[
  ["Hasbro",1923,"هاسبرو"],["Fisher-Price",1930,"فيشر برايس"],["Lego",1932,"ليجو","The Lego Group"],
  ["Mattel",1945,"ماتيل"],["Bandai",1950,"بانداي"],["Barbie",1959,"باربي"],
  ["Hot Wheels",1968,"هوت ويلز"],["Nerf",1969,"نيرف"],["Playmobil",1974,"بلايموبيل"]],
  {h:"toy brand",k:["STARTED","بدأت سنة"],dt:["Brand launched","بداية البراند"],g:"y",s:"brands",m:"w"}),
 Rd(["WHICH AIRLINE","WAS FOUNDED FIRST",Q],["أنهي شركة طيران","اتأسست الأول",QA],"min",[
  ["KLM",1919,"كي إل إم"],["Qantas",1920,"كانتاس"],["Aeroflot",1923,"إيروفلوت"],
  ["EgyptAir",1932,"مصر للطيران"],["Air France",1933,"إير فرانس"],["Turkish Airlines",1933,"التركية"],
  ["Saudia",1945,"السعودية"],["Emirates",1985,"طيران الإمارات","Emirates (airline)"],["Qatar Airways",1993,"القطرية"]],
  {h:"airline",k:["FOUNDED","اتأسست سنة"],dt:["Company founded","تأسيس الشركة"],g:"y",s:"brands",m:"w"}),
 Rd(["WHICH WEBSITE","LAUNCHED FIRST",Q],["أنهي موقع","نزل الأول",QA],"min",[
  ["Yahoo!",1994,"ياهو"],["eBay",1995,"إيباي"],["Hotmail",1996,"هوتميل","Outlook.com"],
  ["Wikipedia",2001,"ويكيبيديا"],["Skype",2003,"سكايب"],["LinkedIn",2003,"لينكد إن"],
  ["Reddit",2005,"ريديت"],["Telegram",2013,"تيليجرام","Telegram (software)"],["Discord",2015,"ديسكورد"]],
  {h:"website",k:["LAUNCHED","نزل سنة"],dt:["Site launched","نزول الموقع"],g:"y",s:"brands",m:"w"}),
 Rd(["WHICH APPLE PRODUCT","CAME OUT LAST",Q],["أنهي منتج من أبل","أجدد",QA],"max",[
  ["Macintosh",1984,"ماكنتوش","Macintosh 128K"],["iMac",1998,"آي ماك","iMac G3"],["iPod",2001,"آي بود","iPod Classic"],
  ["iPhone",2007,"آيفون"],["iPad",2010,"آي باد","iPad (1st generation)"],["Apple Watch",2015,"أبل ووتش"],
  ["AirPods",2016,"إير بودز"],["Apple Pencil",2015,"قلم أبل"],["Apple Vision Pro",2024,"أبل فيجن برو"]],
  {h:"Apple product",k:["RELEASED","نزل سنة"],dt:["Product released","نزول المنتج"],g:"y",s:"brands",m:"w"}),
 Rd(["WHICH GOOGLE PRODUCT","LAUNCHED FIRST",Q],["أنهي منتج من جوجل","نزل الأول",QA],"min",[
  ["Google Search",1998,"بحث جوجل"],["Gmail",2004,"جيميل"],["Google Maps",2005,"خرايط جوجل"],
  ["Google Translate",2006,"ترجمة جوجل"],["Google Chrome",2008,"جوجل كروم"],["Android",2008,"أندرويد","Android (operating system)"],
  ["Google Drive",2012,"جوجل درايف"],["Google Photos",2015,"صور جوجل"],["Gemini",2023,"جيميناي","Google Gemini"]],
  {h:"Google product",k:["LAUNCHED","نزل سنة"],dt:["Product launched","نزول المنتج"],g:"y",s:"brands",m:"w"}),
 Rd(["WHICH GAME COMPANY","WAS FOUNDED LAST",Q],["أنهي شركة ألعاب","أجدد",QA],"max",[
  ["Nintendo",1889,"نينتندو"],["Konami",1969,"كونامي"],["Capcom",1979,"كابكوم"],
  ["EA",1982,"إي إيه","Electronic Arts"],["Ubisoft",1986,"يوبيسوفت"],["Epic Games",1991,"إيبك جيمز"],
  ["Valve",1996,"فالف","Valve Corporation"],["Rockstar Games",1998,"روكستار"],["Riot Games",2006,"رايوت جيمز"]],
  {h:"company",k:["FOUNDED","اتأسست سنة"],dt:["Company founded","تأسيس الشركة"],g:"y",s:"brands",m:"w"}),
 Rd(["WHICH EGYPTIAN COMPANY","WAS FOUNDED LAST",Q],["أنهي شركة مصرية","أجدد",QA],"max",[
  ["Misr Spinning and Weaving",1927,"غزل المحلة (مصر للغزل والنسيج)","Misr Spinning and Weaving Company"],["Elsewedy Electric",1938,"السويدي"],["Orascom",1950,"أوراسكوم","Orascom Construction"],
  ["Arab Contractors Company",1955,"شركة المقاولون العرب","Arab Contractors (company)"],["Oriental Weavers",1979,"النساجون الشرقيون"],["Juhayna",1983,"جهينة","Juhayna Food Industries"],
  ["Ezz Steel",1994,"حديد عز"],["SODIC",1996,"سوديك"],["Palm Hills",2005,"بالم هيلز","Palm Hills Developments"]],
  {h:"company",k:["FOUNDED","اتأسست سنة"],dt:["Company founded","تأسيس الشركة"],g:"y",s:"brands",m:"eg"}),
 Rd(["WHICH NEWSPAPER","STARTED LAST",Q],["أنهي جرنال","أجدد",QA],"max",[
  ["Al-Ahram",1875,"الأهرام"],["Al-Akhbar",1952,"الأخبار","Al-Akhbar (Egypt)"],["Al-Gomhuria",1953,"الجمهورية"],
  ["Al-Wafd",1984,"الوفد","Al-Wafd (newspaper)"],["Al-Dostour",1995,"الدستور","Al-Dustour (Egypt)"],["Al-Masry Al-Youm",2004,"المصري اليوم"],
  ["Youm7",2008,"اليوم السابع"],["Al-Shorouk",2009,"الشروق","Al-Shorouk (Egypt)"],["El-Watan",2012,"الوطن","El Watan (Egypt)"]],
  {h:"newspaper",k:["FIRST ISSUE","أول عدد سنة"],dt:["First issue","أول عدد"],g:"y",s:"brands",m:"eg"}),
 Rd(["WHICH EGYPTIAN SATELLITE","LAUNCHED LAST",Q],["أنهي قمر صناعي مصري","أجدد",QA],"max",[
  ["Nilesat 101",1998,"نايل سات 101"],["Nilesat 102",2000,"نايل سات 102"],["EgyptSat 1",2007,"إيجيبت سات 1"],
  ["Nilesat 201",2010,"نايل سات 201"],["EgyptSat 2",2014,"إيجيبت سات 2"],["EgyptSat-A",2019,"إيجيبت سات إيه"],
  ["Tiba-1",2019,"طيبة 1"],["Nilesat 301",2022,"نايل سات 301"],["MisrSat 2",2023,"مصر سات 2"]],
  {h:"satellite",k:["LAUNCHED","اتطلق سنة"],dt:["Satellite launched","إطلاق القمر"],g:"y",s:"brands",m:"eg"}),
 Rd(["WHICH STREAMING APP","LAUNCHED FIRST",Q],["أنهي أبلكيشن مشاهدة أو سماع","نزل الأول",QA],"min",[
  ["YouTube",2005,"يوتيوب"],["Spotify",2008,"سبوتيفاي"],["Shahid",2011,"شاهد","Shahid (streaming service)"],
  ["Twitch",2011,"تويتش","Twitch (service)"],["Anghami",2012,"أنغامي"],["Disney+",2019,"ديزني بلس"],
  ["Apple TV+",2019,"أبل تي في بلس"],["Watch It",2019,"ووتش إت","Watch It (streaming service)"],["HBO Max",2020,"إتش بي أو ماكس"]],
  {h:"app",k:["LAUNCHED","نزل سنة"],dt:["App launched","نزول الأبلكيشن"],g:"y",s:"brands",m:"eg"})]}
);
