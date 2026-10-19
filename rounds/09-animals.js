// Animals rounds. The round format is explained above Rd() in index.html.
// Each category file adds itself to CATS; index.html loads them in number order.
CATS.push(
{n:"Animals",a:"الحيوانات",e:"🐾",r:[
 Rd(["WHICH IS THE","FASTEST RUNNER",Q],["مين","أسرع واحد في الجري",QA],"max",[
  ["Cheetah",112,"الشيتا"],["Pronghorn",88,"ظبي البرونجهورن"],["Racehorse",70,"حصان السباق","Thoroughbred"],["Lion",80,"الأسد"],["Greyhound",72,"كلب الجراي هاوند"],
  ["Kangaroo",60,"الكنغر","Red kangaroo"],["Ostrich",70,"النعامة","Common ostrich"],["Grizzly Bear",56,"الدب الأشهب","Grizzly bear"],["Usain Bolt",45,"يوسين بولت"]],{suf:[" km/h"," كم/ساعة"],h:"animal",k:["TOP SPEED","أقصى سرعة"],s:"animals",m:"w",d:1}),
 Rd(["WHICH IS THE","HEAVIEST ANIMAL",Q],["أنهي","أتقل حيوان",QA],"max",[
  ["Blue Whale",150000,"الحوت الأزرق","Blue whale"],["African Elephant",6000,"الفيل الأفريقي","African bush elephant"],["White Rhino",2300,"وحيد القرن الأبيض","White rhinoceros"],
  ["Hippo",1500,"فرس النهر","Hippopotamus"],["Giraffe",1200,"الزرافة"],["Saltwater Crocodile",450,"تمساح المية المالحة","Saltwater crocodile"],
  ["Polar Bear",500,"الدب القطبي","Polar bear"],["Gorilla",180,"الغوريلا"],["Lion",190,"الأسد"]],{suf:[" kg"," كيلو"],h:"animal",k:["WEIGHT","الوزن"],s:"animals",m:"w",d:1}),
 Rd(["WHICH ANIMAL","LIVES THE LONGEST",Q],["أنهي حيوان","بيعيش أطول عمر",QA],"max",[
  ["Greenland Shark",400,"قرش جرينلاند","Greenland shark"],["Bowhead Whale",200,"الحوت مقوّس الرأس","Bowhead whale"],["Giant Tortoise",190,"السلحفاة العملاقة","Aldabra giant tortoise"],
  ["Elephant",70,"الفيل"],["Macaw",60,"ببغاء المكاو"],["Horse",40,"الحصان"],["Cat",20,"القطة"],["Dog",16,"الكلب"],["Hamster",3,"الهامستر"]],{suf:[" yrs"," سنة"],h:"animal",k:["LIVES UP TO","بيعيش لحد"],s:"animals",m:"w",d:2}),
 Rd(["WHICH ANIMAL HAS THE","LONGEST PREGNANCY",Q],["أنهي حيوان","حمله بياخد أطول وقت",QA],"max",[
  ["African Elephant",650,"الفيل الأفريقي","African bush elephant"],["Giraffe",430,"الزرافة"],["Camel",390,"الجمل","Dromedary"],
  ["Horse",340,"الحصان"],["Cow",283,"البقرة","Cattle"],["Lion",110,"الأسد"],["Dog",63,"الكلب"],["Rabbit",31,"الأرنب"],["Hamster",16,"الهامستر","Golden hamster"]],
  {pre:["~","~"],suf:[" days"," يوم"],h:"animal",k:["PREGNANCY","مدة الحمل"],s:"animals",m:"w",d:1}),
 Rd(["WHICH ANIMAL","SLEEPS THE MOST",Q],["أنهي حيوان","بينام أكتر",QA],"max",[
  ["Koala",20,"الكوالا"],["Newborn baby",16,"البيبي حديث الولادة","Infant"],["Cat",14,"القطة"],
  ["Dog",12,"الكلب"],["Chimpanzee",10,"الشمبانزي"],["Adult human",8,"الإنسان البالغ","Human"],
  ["Cow",4,"البقرة","Cattle"],["Horse",3,"الحصان"],["Elephant",2,"الفيل","African bush elephant"]],
  {pre:["~","~"],suf:[" hrs"," ساعة"],h:"animal",k:["SLEEP PER DAY","النوم في اليوم"],s:"animals",m:"w",d:2}),
 Rd(["WHICH ANIMAL HAS THE","MOST TEETH",Q],["أنهي حيوان","عنده سنان أكتر",QA],"max",[
  ["Alligator",80,"التمساح الأمريكي (الأليجيتور)","American alligator"],["Pig",44,"الخنزير"],["Dog",42,"الكلب"],
  ["Human",32,"الإنسان"],["Cow",32,"البقرة","Cattle"],["Cat",30,"القطة"],
  ["Rabbit",28,"الأرنب"],["Mouse",16,"الفار","House mouse"],["Giant anteater",0,"آكل النمل"]],
  {suf:[" teeth"," سنّة"],h:"animal",k:["ADULT TEETH","عدد السنان"],s:"animals",m:"w",d:2}),
 Rd(["AT REST, WHOSE HEART","BEATS THE FASTEST",Q],["وهو مرتاح، مين","قلبه بيدق أسرع",QA],"max",[
  ["Mouse",600,"الفار","House mouse"],["Rat",350,"الجرذ","Brown rat"],["Rabbit",250,"الأرنب"],
  ["Cat",130,"القطة"],["Dog",100,"الكلب"],["Human",70,"الإنسان"],
  ["Cow",65,"البقرة","Cattle"],["Horse",35,"الحصان"],["Elephant",30,"الفيل","African bush elephant"]],
  {pre:["~","~"],suf:[" bpm"," نبضة/دقيقة"],h:"animal",k:["RESTING HEART RATE","النبض وهو مرتاح"],s:"animals",m:"w",d:1}),
 Rd(["WHICH BIRD HAS THE","WIDEST WINGSPAN",Q],["أنهي طير","جناحاته أعرض",QA],"max",[
  ["Albatross",300,"القطرس","Wandering albatross"],["Swan",220,"البجعة","Mute swan"],["Bald eagle",200,"النسر الأقرع"],
  ["Flamingo",155,"البشاروش (الفلامنجو)","Greater flamingo"],["Seagull",140,"النورس","European herring gull"],["Crow",100,"الغراب","Carrion crow"],
  ["Pigeon",65,"الحمامة","Rock dove"],["Sparrow",22,"العصفورة","House sparrow"],["Hummingbird",10,"الطائر الطنان","Ruby-throated hummingbird"]],
  {pre:["~","~"],suf:[" cm"," سم"],h:"bird",k:["WINGSPAN","فردة الجناحين"],s:"animals",m:"w",d:2}),
 Rd(["WHICH ANIMAL HAS THE","STRONGEST BITE",Q],["أنهي حيوان","عضته أقوى",QA],"max",[
  ["Saltwater crocodile",3700,"تمساح المية المالحة"],["Hippo",1800,"فرس النهر","Hippopotamus"],["Jaguar",1500,"الجاجوار"],
  ["Gorilla",1300,"الغوريلا"],["Polar bear",1200,"الدب القطبي"],["Tiger",1050,"النمر","Bengal tiger"],
  ["Lion",650,"الأسد"],["Rottweiler",330,"الروت وايلر"],["Human",150,"الإنسان"]],
  {pre:["~","~"],suf:[" PSI"," PSI"],h:"animal",k:["BITE FORCE","قوة العضة"],s:"animals",m:"w",d:2}),
 Rd(["WHICH ANIMAL CAN HAVE","THE MOST LEGS",Q],["أنهي حيوان","ممكن يبقى عنده رجول أكتر",QA],"max",[
  ["Millipede",1306,"أم ألف رجل"],["Centipede",382,"أم أربعة وأربعين"],["Crab",10,"الكابوريا"],
  ["Lobster",10,"الاستاكوزا"],["Spider",8,"العنكبوت"],["Scorpion",8,"العقرب"],
  ["Ant",6,"النملة"],["Butterfly",6,"الفراشة"],["Ostrich",2,"النعامة","Common ostrich"]],
  {pre:["up to ","لحد "],h:"animal",k:["LEGS","عدد الرجول"],s:"animals",m:"w",d:1}),
 Rd(["WHICH ANIMAL HAS THE","HEAVIEST BRAIN",Q],["أنهي حيوان","مخه أتقل",QA],"max",[
  ["Sperm whale",7800,"حوت العنبر"],["Elephant",4800,"الفيل","African bush elephant"],["Dolphin",1600,"الدولفين","Common bottlenose dolphin"],
  ["Human",1350,"الإنسان"],["Horse",530,"الحصان"],["Gorilla",500,"الغوريلا"],
  ["Lion",240,"الأسد"],["Dog",70,"الكلب"],["Cat",30,"القطة"]],
  {pre:["~","~"],suf:[" g"," جرام"],h:"animal",k:["BRAIN WEIGHT","وزن المخ"],s:"animals",m:"w",d:2}),
 Rd(["WHICH SACRED PHARAONIC ANIMAL","IS THE HEAVIEST",Q],["أنهي","أتقل حيوان مقدّس عند الفراعنة",QA],"max",[
  ["Hippo (Taweret)",1500,"فرس النهر (تاورت)","Hippopotamus"],["Crocodile (Sobek)",400,"التمساح (سوبك)","Nile crocodile"],["Lion (Sekhmet)",190,"الأسد (سخمت)","Lion"],
  ["Baboon (Thoth)",20,"القرد البابون (تحوت)","Hamadryas baboon"],["Jackal (Anubis)",10,"ابن آوى (أنوبيس)","Golden jackal"],["Vulture (Nekhbet)",8,"النسر (نخبت)","Griffon vulture"],
  ["Cat (Bastet)",4,"القطة (باستت)","Cat"],["Ibis (Thoth)",1.5,"أبو منجل (تحوت)","African sacred ibis"],["Falcon (Horus)",0.8,"الصقر (حورس)","Peregrine falcon"]],
  {pre:["~","~"],suf:[" kg"," كيلو"],h:"animal",k:["WEIGHT","الوزن"],s:"animals",m:"eg",d:1}),
 Rd(["WHICH ANIMAL OF EGYPT","LIVES THE LONGEST",Q],["أنهي حيوان مصري","بيعيش أطول عمر",QA],"max",[
  ["Nile crocodile",50,"تمساح النيل"],["Donkey",30,"الحمار"],["Arabian horse",27,"الحصان العربي"],
  ["Gamoosa (water buffalo)",25,"الجاموسة","Water buffalo"],["Nubian ibex",15,"الوعل النوبي"],["Egyptian Mau",14,"القطة المصري (الماو)"],
  ["Dorcas gazelle",12,"الغزال المصري"],["Egyptian mongoose",12,"النمس"],["Fennec fox",10,"الفنك (ثعلب الصحرا)"]],
  {pre:["~","~"],suf:[" yrs"," سنة"],h:"animal",k:["TYPICAL LIFESPAN","متوسط العمر"],s:"animals",m:"eg",d:1}),
 Rd(["WHICH DESERT ANIMAL","IS THE HEAVIEST",Q],["أنهي","أتقل حيوان صحراوي",QA],"max",[
  ["Camel",500,"الجمل","Dromedary"],["Barbary sheep",100,"الكبش الأروي"],["Nubian ibex",60,"الوعل النوبي"],
  ["Striped hyena",35,"الضبع المخطط"],["Dorcas gazelle",18,"الغزال المصري"],["African golden wolf",12,"الديب المصري"],
  ["Sand cat",2.5,"قط الرمال"],["Fennec fox",1.2,"الفنك (ثعلب الصحرا)"],["Desert hedgehog",0.4,"القنفد الصحراوي"]],
  {pre:["~","~"],suf:[" kg"," كيلو"],h:"animal",k:["WEIGHT","الوزن"],s:"animals",m:"eg",d:1}),
 Rd(["WHICH SNAKE CAN GROW","THE LONGEST",Q],["أنهي تعبان","ممكن يطول أكتر",QA],"max",[
  ["Reticulated python",7.7,"البايثون الشبكي"],["Green anaconda",6,"الأناكوندا"],["Burmese python",5.8,"البايثون البورمي"],
  ["King cobra",5.6,"الكوبرا الملك"],["Black mamba",4.3,"المامبا السودا"],["Boa constrictor",4,"البوا العاصرة"],
  ["Egyptian cobra",2.5,"الكوبرا المصري"],["Eastern diamondback rattlesnake",2.4,"الأفعى الجرسية"],["Horned viper",0.85,"الأفعى المقرنة","Cerastes cerastes"]],
  {pre:["up to ","لحد "],suf:[" m"," متر"],h:"snake",k:["MAX LENGTH","أقصى طول"],s:"animals",m:"w",d:2}),
 Rd(["WHICH BIRD IS","THE HEAVIEST",Q],["أنهي","أتقل طير",QA],"max",[
  ["Ostrich",120,"النعامة","Common ostrich"],["Southern cassowary",45,"الكاسوار"],["Emu",40,"الإيمو"],
  ["Emperor penguin",30,"البطريق الإمبراطور"],["Swan",12,"البجعة","Mute swan"],["Turkey (bird)",8,"الديك الرومي","Domestic turkey"],
  ["Bald eagle",5,"النسر الأقرع"],["Chicken",2.5,"الفرخة"],["Pigeon",0.35,"الحمامة","Rock dove"]],
  {pre:["~","~"],suf:[" kg"," كيلو"],h:"bird",k:["ADULT WEIGHT","وزن الطير البالغ"],s:"animals",m:"w",d:1}),
 Rd(["WHICH DINOSAUR WAS","THE LONGEST",Q],["أنهي","أطول ديناصور",QA],"max",[
  ["Argentinosaurus",35,"الأرجنتينوصور"],["Diplodocus",26,"الديبلودوكس"],["Brachiosaurus",22,"البراكيوصور"],
  ["Spinosaurus",15,"السبينوصور (المصري)"],["Tyrannosaurus rex",12,"التيرانوصور ركس"],["Iguanodon",10,"الإجوانودون"],
  ["Triceratops",9,"الترايسيراتوبس"],["Stegosaurus",8.5,"الستيجوصور"],["Velociraptor",2,"الفيلوسيرابتور"]],
  {pre:["~","~"],suf:[" m"," متر"],h:"dinosaur",k:["LENGTH","الطول"],s:"animals",m:"w",d:2}),
 Rd(["WHICH RED SEA CREATURE","GROWS THE LONGEST",Q],["أنهي كائن في البحر الأحمر","بيطول أكتر",QA],"max",[
  ["Whale shark",12,"القرش الحوت"],["Tiger shark",5,"قرش النمر"],["Scalloped hammerhead",4.3,"القرش أبو مطرقة","Scalloped hammerhead"],
  ["Dugong",3,"عروس البحر (الأطوم)"],["Napoleon wrasse",2,"سمكة نابليون","Humphead wrasse"],["Spinner dolphin",2,"الدولفين الدوار"],
  ["Green sea turtle",1.5,"السلحفاة الخضرا"],["Lionfish",0.38,"سمكة الأسد","Pterois"],["Clownfish (Nemo)",0.11,"سمكة المهرج (نيمو)","Amphiprioninae"]],
  {pre:["up to ","لحد "],suf:[" m"," متر"],h:"Red Sea",k:["MAX LENGTH","أقصى طول"],s:"animals",m:"eg",d:1}),
 Rd(["WHICH NILE ANIMAL","GROWS THE LONGEST",Q],["أنهي حيوان من النيل","بيطول أكتر",QA],"max",[
  ["Nile crocodile",5.5,"تمساح النيل"],["Egyptian cobra",2.5,"الكوبرا المصري"],["Nile monitor",2.2,"ورل النيل"],
  ["Nile perch",2,"قشر البياض","Nile perch"],["Karmout catfish",1.7,"القرموط","African sharptooth catfish"],["Nile soft-shell turtle",1.2,"الترسة النيلي","African softshell turtle"],
  ["Electric catfish",1.2,"الرعاش","Malapterurus electricus"],["Egyptian goose",0.7,"الوز المصري"],["Nile tilapia",0.6,"البلطي"]],
  {pre:["up to ","لحد "],suf:[" m"," متر"],h:"Nile",k:["MAX LENGTH","أقصى طول"],s:"animals",m:"eg",d:1}),
 Rd(["WHICH FARM ANIMAL HAS","THE LONGEST PREGNANCY",Q],["أنهي حيوان في الغيط","حمله أطول",QA],"max",[
  ["Camel",390,"الجمل","Dromedary"],["Donkey",365,"الحمار"],["Horse",340,"الحصان"],
  ["Gamoosa (water buffalo)",310,"الجاموسة"],["Cow",283,"البقرة","Cattle"],["Goat",150,"المعزة"],
  ["Sheep",147,"الخروف"],["Pig",114,"الخنزير"],["Rabbit",31,"الأرنب"]],
  {pre:["~","~"],suf:[" days"," يوم"],h:"animal",k:["PREGNANCY","مدة الحمل"],s:"animals",m:"eg",d:3})]}
);
