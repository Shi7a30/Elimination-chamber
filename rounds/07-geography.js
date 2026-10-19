// Geography rounds. The round format is explained above Rd() in index.html.
// Each category file adds itself to CATS; index.html loads them in number order.
CATS.push(
{n:"Geography",a:"الجغرافيا",e:"🗺️",r:[
 Rd(["WHICH IS THE","BIGGEST COUNTRY",Q],["أنهي","دولة مساحتها أكبر",QA],"max",[
  ["Russia",17.1,"روسيا"],["Canada",9.98,"كندا"],["United States",9.83,"أمريكا"],["China",9.6,"الصين"],["Brazil",8.52,"البرازيل"],
  ["Australia",7.69,"أستراليا"],["India",3.29,"الهند"],["Saudi Arabia",2.15,"السعودية"],["Argentina",2.78,"الأرجنتين"]],{suf:["M km²"," مليون كم²"],dp:2,h:"country",k:["AREA","المساحة"],s:"geo",m:"w",d:1}),
 Rd(["WHICH IS THE","TALLEST MOUNTAIN",Q],["أنهي","أعلى جبل",QA],"max",[
  ["Mount Everest",8849,"جبل إيفرست"],["K2",8611,"كي 2"],["Kangchenjunga",8586,"كانشينجونجا"],["Aconcagua",6961,"أكونكاجوا"],["Denali",6190,"دينالي"],
  ["Kilimanjaro",5895,"كليمنجارو","Mount Kilimanjaro"],["Mont Blanc",4806,"مون بلان"],["Mount Fuji",3776,"جبل فوجي"],["Matterhorn",4478,"الماترهورن"]],{suf:[" m"," متر"],h:"mountain",k:["HEIGHT","الارتفاع"],s:"geo",m:"w",d:1}),
 Rd(["WHICH IS THE","SMALLEST COUNTRY",Q],["أنهي","دولة مساحتها أصغر",QA],"min",[
  ["Vatican City",0.44,"الفاتيكان"],["Monaco",2.08,"موناكو"],["Nauru",21,"ناورو"],["Tuvalu",26,"توفالو"],["San Marino",61,"سان مارينو"],
  ["Liechtenstein",160,"ليختنشتاين"],["Maldives",298,"المالديف"],["Malta",316,"مالطا"],["Singapore",735,"سنغافورة"]],{suf:[" km²"," كم²"],h:"country",k:["AREA","المساحة"],s:"geo",m:"w",d:1}),
  Rd(["WHICH CITY IS","FURTHEST SOUTH",Q],["أنهي مدينة","في أقصى الجنوب",QA],"min",[
   ["Abu Simbel",22.3,"أبو سمبل","Abu Simbel temples"],["Aswan",24.1,"أسوان"],["Marsa Alam",25.1,"مرسى علم"],["Luxor",25.7,"الأقصر"],["Hurghada",27.3,"الغردقة"],
   ["Sharm El Sheikh",27.9,"شرم الشيخ"],["Siwa",29.2,"سيوة","Siwa Oasis"],["Cairo",30,"القاهرة"],["Alexandria",31.2,"إسكندرية"]],
   {suf:["° N","° شمال"],dp:1,h:"Egypt",k:["LATITUDE","خط العرض"],s:"geo",m:"eg",d:2}),
  Rd(["WHICH IS THE","TALLEST LANDMARK",Q],["أنهي","أعلى معلم",QA],"max",[
   ["Iconic Tower",394,"البرج الأيقوني","Iconic Tower (Egypt)"],["Cairo Tower",187,"برج القاهرة"],["Great Pyramid",138.5,"الهرم الأكبر (خوفو)","Great Pyramid of Giza"],
   ["Pyramid of Khafre",136.4,"هرم خفرع"],["Red Pyramid",105,"الهرم الأحمر"],["Step Pyramid",62.5,"الهرم المدرج (زوسر)","Pyramid of Djoser"],["Pyramid of Menkaure",61,"هرم منكاورع"],
   ["Pompey's Pillar",27,"عمود السواري"],["Great Sphinx",20,"أبو الهول","Great Sphinx of Giza"]],{suf:[" m"," متر"],h:"landmark",k:["HEIGHT","الارتفاع"],s:"geo",m:"eg",d:2}),
 Rd(["WHICH CITY IS","FURTHEST FROM CAIRO",Q],["أنهي","أبعد مدينة عن القاهرة",QA],"max",[
  ["Suez",130,"السويس"],["Port Said",170,"بورسعيد"],["Alexandria",180,"إسكندرية"],["El Arish",270,"العريش","Arish"],["Sharm El Sheikh",380,"شرم الشيخ"],
  ["Hurghada",400,"الغردقة"],["Luxor",500,"الأقصر"],["Siwa",560,"سيوة","Siwa Oasis"],["Aswan",680,"أسوان"]],
  {pre:["~","~"],suf:[" km"," كم"],h:"Egypt",k:["STRAIGHT-LINE DISTANCE","المسافة في خط مستقيم"],s:"geo",m:"eg",d:1}),
 Rd(["WHICH CITY IS","FURTHEST EAST",Q],["أنهي مدينة","في أقصى الشرق",QA],"max",[
  ["Taba",34.9,"طابا"],["Dahab",34.5,"دهب"],["El Arish",33.8,"العريش","Arish"],["Ismailia",32.3,"الإسماعيلية"],["Cairo",31.2,"القاهرة"],
  ["Fayoum",30.8,"الفيوم","Faiyum"],["Alexandria",29.9,"إسكندرية"],["Marsa Matrouh",27.2,"مرسى مطروح","Mersa Matruh"],["Siwa",25.5,"سيوة","Siwa Oasis"]],
  {suf:["° E","° شرق"],dp:1,h:"Egypt",k:["LONGITUDE","خط الطول"],s:"geo",m:"eg",d:3}),
 Rd(["WHICH IS THE","TALLEST BUILDING",Q],["أنهي","أطول برج",QA],"max",[
  ["Burj Khalifa",828,"برج خليفة"],["Shanghai Tower",632,"برج شنغهاي"],["Makkah Clock Tower",601,"برج الساعة في مكة","Abraj Al-Bait"],
  ["Lotte World Tower",555,"برج لوتي"],["One World Trade Center",541,"وان ورلد تريد سنتر"],["Taipei 101",508,"تايبيه 101"],
  ["Petronas Towers",452,"برجين بتروناس"],["Willis Tower",442,"برج ويليس"],["Burj Al Arab",321,"برج العرب"]],
  {suf:[" m"," متر"],h:"building",k:["HEIGHT","الارتفاع"],s:"geo",m:"w",d:1}),
 Rd(["WHICH GOVERNORATE HAS","THE MOST PEOPLE",Q],["أنهي محافظة","فيها أكتر سكان",QA],"max",[
  ["Cairo",9.5,"القاهرة","Cairo Governorate"],["Giza",8.6,"الجيزة","Giza Governorate"],["Sharqia",7.2,"الشرقية","Sharqia Governorate"],
  ["Dakahlia",6.5,"الدقهلية","Dakahlia Governorate"],["Beheira",6.2,"البحيرة","Beheira Governorate"],["Qalyubia",5.6,"القليوبية","Qalyubia Governorate"],
  ["Alexandria",5.2,"إسكندرية","Alexandria Governorate"],["Gharbia",5.0,"الغربية","Gharbia Governorate"],["Monufia",4.3,"المنوفية","Monufia Governorate"]],
  {suf:[" M"," مليون"],dp:1,h:"Egypt governorate",k:["2017 CENSUS","تعداد 2017"],s:"geo",m:"eg",d:2}),
 Rd(["WHICH NATURE RESERVE","WAS PROTECTED FIRST",Q],["أنهي محمية","اتعملت الأول",QA],"min",[
  ["Ras Mohammed",1983,"رأس محمد","Ras Muhammad National Park"],["Saint Catherine",1988,"سانت كاترين","Saint Catherine, Egypt"],["Wadi El Rayan",1989,"وادي الريان"],
  ["Lake Qarun",1989,"بحيرة قارون","Lake Moeris"],["Nabq",1992,"نبق","Nabq Protected Area"],["Wadi Degla",1999,"وادي دجلة","Wadi Degla Protected Area"],
  ["White Desert",2002,"الصحرا البيضا","White Desert National Park"],["Wadi El Gemal",2003,"وادي الجمال","Wadi El Gemal National Park"],["Gilf Kebir",2007,"الجلف الكبير"]],
  {h:"Egypt nature reserve",k:["DECLARED A RESERVE","بقت محمية سنة"],dt:["Declared a reserve", "إعلانها محمية"],g:"y",s:"geo",m:"eg",d:3}),
 Rd(["WHAT IN EGYPT","IS THE LONGEST",Q],["إيه","أطول حاجة في مصر",QA],"max",[
  ["Cairo–Alexandria Desert Road",220,"الطريق الصحراوي (القاهرة–إسكندرية)","Cairo–Alexandria desert road"],["Suez Canal",193.3,"قناة السويس"],
  ["New Suez Canal (2015)",72,"قناة السويس الجديدة (2015)","New Suez Canal"],["Cairo Metro Line 1",44.3,"الخط الأول للمترو"],["6th October Bridge",20.5,"كوبري 6 أكتوبر"],
  ["Aswan High Dam",3.83,"السد العالي"],["Avenue of Sphinxes (Luxor)",2.7,"طريق الكباش","Avenue of Sphinxes"],
  ["Ahmed Hamdi Tunnel",1.63,"نفق الشهيد أحمد حمدي"],["Great Pyramid (one side of base)",0.23,"الهرم الأكبر (ضلع القاعدة)","Great Pyramid of Giza"]],
  {pre:["~","~"],suf:[" km"," كم"],h:"Egypt landmark",k:["LENGTH","الطول"],s:"geo",m:"eg",d:3}),
 Rd(["WHICH CITY WAS","BUILT FIRST",Q],["أنهي مدينة","اتبنت الأول",QA],"min",[
  ["Port Said",1859,"بورسعيد"],["Ismailia",1863,"الإسماعيلية"],["Heliopolis",1905,"مصر الجديدة","Heliopolis, Cairo"],
  ["10th of Ramadan City",1977,"العاشر من رمضان","10th of Ramadan"],["6th of October City",1979,"6 أكتوبر","6th of October (city)"],
  ["Sheikh Zayed City",1995,"الشيخ زايد"],["New Cairo",2000,"القاهرة الجديدة"],["New Administrative Capital",2015,"العاصمة الإدارية الجديدة"],
  ["New Alamein",2018,"العلمين الجديدة"]],
  {h:"Egyptian city",k:["FOUNDED","اتأسست سنة"],dt:["City founded", "تأسيس المدينة"],g:"y",s:"geo",m:"eg",d:3}),
 Rd(["WHICH IS THE","BIGGEST ISLAND",Q],["أنهي","أكبر جزيرة",QA],"max",[
  ["Greenland",2130,"جرينلاند"],["New Guinea",786,"غينيا الجديدة"],["Borneo",748,"بورنيو"],["Madagascar",587,"مدغشقر"],
  ["Sumatra",443,"سومطرة"],["Great Britain",209,"بريطانيا العظمى"],["Cuba",105,"كوبا"],["Iceland",102,"أيسلندا"],["Sicily",26,"صقلية"]],
  {pre:["~","~"],suf:[" K km²"," ألف كم²"],h:"island",k:["AREA","المساحة"],s:"geo",m:"w",d:1}),
 Rd(["WHICH IS THE","DEEPEST LAKE",Q],["أنهي","أعمق بحيرة",QA],"max",[
  ["Lake Baikal",1642,"بحيرة بايكال"],["Lake Tanganyika",1470,"بحيرة تنجانيقا"],["Caspian Sea",1025,"بحر قزوين"],["Lake Malawi",706,"بحيرة ملاوي"],
  ["Crater Lake",594,"كريتر ليك"],["Lake Tahoe",501,"بحيرة تاهو"],["Lake Superior",406,"بحيرة سوبيريور"],["Lake Geneva",310,"بحيرة جنيف"],["Loch Ness",230,"بحيرة لوخ نيس"]],
  {pre:["~","~"],suf:[" m"," متر"],h:"lake",k:["MAX DEPTH","أقصى عمق"],s:"geo",m:"w",d:2}),
 Rd(["WHICH IS THE","HIGHEST WATERFALL",Q],["أنهي","أعلى شلال",QA],"max",[
  ["Angel Falls",979,"شلالات أنجل"],["Yosemite Falls",739,"شلالات يوسمايت"],["Sutherland Falls",580,"شلالات ساذرلاند"],["Kaieteur Falls",226,"شلالات كايتور"],
  ["Multnomah Falls",189,"شلالات مولتنوما"],["Victoria Falls",108,"شلالات فيكتوريا"],["Iguazu Falls",82,"شلالات إجوازو"],["Niagara Falls",51,"شلالات نياجرا"],["Rhine Falls",23,"شلالات الراين"]],
  {pre:["~","~"],suf:[" m"," متر"],h:"waterfall",k:["HEIGHT","الارتفاع"],s:"geo",m:"w",d:2}),
 Rd(["WHICH COUNTRY HAS THE","MOST NEIGHBOURS",Q],["أنهي دولة","ليها أكتر جيران",QA],"max",[
  ["China",14,"الصين"],["Brazil",10,"البرازيل"],["Germany",9,"ألمانيا"],["Turkey",8,"تركيا"],["Saudi Arabia",7,"السعودية"],
  ["Italy",6,"إيطاليا"],["Argentina",5,"الأرجنتين"],["Portugal",1,"البرتغال"],["Australia",0,"أستراليا"]],
  {h:"country",k:["LAND NEIGHBOURS","دول على حدودها"],s:"geo",m:"w",d:2}),
 Rd(["WHICH CAPITAL IS","HIGHEST ABOVE SEA LEVEL",Q],["أنهي","أعلى عاصمة فوق سطح البحر",QA],"max",[
  ["Quito",2850,"كيتو"],["Bogotá",2600,"بوجوتا"],["Addis Ababa",2350,"أديس أبابا"],["Mexico City",2240,"مكسيكو سيتي"],["Nairobi",1700,"نيروبي"],
  ["Brasília",1100,"برازيليا"],["Ankara",900,"أنقرة"],["Madrid",650,"مدريد"],["Rome",20,"روما"]],
  {pre:["~","~"],suf:[" m"," متر"],h:"city",k:["ELEVATION","الارتفاع عن البحر"],s:"geo",m:"w",d:3}),
 Rd(["WHICH GOVERNORATE IS","THE BIGGEST",Q],["أنهي محافظة","مساحتها أكبر",QA],"max",[
  ["New Valley",440,"الوادي الجديد","New Valley Governorate"],["Matrouh",167,"مطروح","Matrouh Governorate"],["Red Sea",119,"البحر الأحمر","Red Sea Governorate"],
  ["Aswan",63,"أسوان"],["Minya",32,"المنيا","Minya Governorate"],["South Sinai",31,"جنوب سينا","South Sinai Governorate"],
  ["North Sinai",28,"شمال سينا","North Sinai Governorate"],["Cairo",3.1,"القاهرة"],["Alexandria",2.3,"إسكندرية"]],
  {pre:["~","~"],suf:["K km²"," ألف كم²"],h:"Egypt",k:["AREA","المساحة"],s:"geo",m:"eg",d:2}),
 Rd(["WHICH CITY IS","FURTHEST NORTH",Q],["أنهي مدينة","في أقصى الشمال",QA],"max",[
  ["Baltim",31.55,"بلطيم"],["Damietta",31.42,"دمياط"],["Rosetta",31.4,"رشيد"],
  ["Marsa Matrouh",31.35,"مرسى مطروح","Mersa Matruh"],["Rafah",31.28,"رفح","Rafah, Egypt"],["Port Said",31.26,"بورسعيد"],
  ["Alexandria",31.2,"إسكندرية"],["Mansoura",31.04,"المنصورة","Mansoura, Egypt"],["Tanta",30.79,"طنطا"]],
  {suf:["°N","° شمال"],dp:2,h:"Egypt",k:["LATITUDE","خط العرض"],s:"geo",m:"eg",d:3}),
 Rd(["WHICH RIVER IS","THE LONGEST",Q],["أنهي","أطول نهر",QA],"max",[
  ["Nile",6650,"النيل"],["Yangtze",6300,"اليانجتسي"],["Congo River",4700,"نهر الكونغو"],
  ["Mekong",4350,"الميكونج"],["Niger River",4180,"نهر النيجر"],["Volga",3530,"الفولجا","Volga River"],
  ["Danube",2850,"الدانوب"],["Rhine",1230,"الراين"],["Thames",346,"التايمز","River Thames"]],
  {pre:["~","~"],suf:[" km"," كم"],h:"river",k:["LENGTH","الطول"],s:"geo",m:"w",d:1})]}
);
