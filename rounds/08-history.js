// History rounds. The round format is explained above Rd() in index.html.
// Each category file adds itself to CATS; index.html loads them in number order.
CATS.push(
{n:"History",a:"التاريخ",e:"🏛️",r:[
 Rd(["WHICH PHARAOH","RULED FIRST",Q],["أنهي فرعون","حكم الأول",QA],"max",[
  ["Narmer",3100,"نارمر (مينا)"],["Djoser",2670,"زوسر"],["Khufu",2589,"خوفو"],["Hatshepsut",1479,"حتشبسوت"],["Akhenaten",1353,"إخناتون"],
  ["Tutankhamun",1332,"توت عنخ آمون"],["Ramesses II",1279,"رمسيس التاني"],["Ptolemy I",305,"بطليموس الأول","Ptolemy I Soter"],["Cleopatra",51,"كليوباترا"]],
  {pre:["c. ",""],suf:[" BC"," ق.م"],h:"pharaoh",k:["CAME TO POWER","بدأ يحكم"],s:"history",m:"eg",d:2}),
 Rd(["WHICH PHARAOH","RULED THE LONGEST",Q],["أنهي فرعون","حكم أطول مدة",QA],"max",[
  ["Ramesses II",66,"رمسيس التاني"],["Thutmose III",54,"تحتمس التالت"],["Amenhotep III",38,"أمنحتب التالت"],
  ["Khufu",23,"خوفو"],["Hatshepsut",21,"حتشبسوت"],["Cleopatra",21,"كليوباترا"],
  ["Akhenaten",17,"إخناتون"],["Seti I",11,"سيتي الأول"],["Tutankhamun",9,"توت عنخ آمون"]],
  {pre:["~","~"],suf:[" years"," سنة"],h:"pharaoh",k:["YEARS ON THE THRONE","سنين الحكم"],s:"history",m:"eg",d:2}),
  Rd(["WHAT","HAPPENED FIRST",Q],["أنهي حدث","حصل الأول",QA],"min",[
   ["Suez Canal opens",1869,"افتتاح قناة السويس","Suez Canal"],["Cairo University founded",1908,"تأسيس جامعة القاهرة","Cairo University"],["1919 Revolution",1919,"ثورة 1919","Egyptian revolution of 1919"],
   ["Tutankhamun's tomb found",1922,"اكتشاف مقبرة توت عنخ آمون","KV62"],["July Revolution",1952,"ثورة 23 يوليو","Egyptian revolution of 1952"],["High Dam completed",1970,"اكتمال السد العالي","Aswan Dam"],
   ["October War",1973,"حرب أكتوبر","Yom Kippur War"],["Mahfouz wins the Nobel",1988,"نجيب محفوظ ياخد نوبل","Naguib Mahfouz"],["Grand Egyptian Museum opens",2025,"افتتاح المتحف المصري الكبير","Grand Egyptian Museum"]],
   {h:"Egypt",k:["YEAR","السنة"],dt:["Event in Egypt", "حدث في مصر"],g:"y",s:"history",m:"eg",d:2}),
  Rd(["WHO","RULED EGYPT FIRST",Q],["مين","حكم مصر الأول",QA],"min",[
   ["Muhammad Ali Pasha",1805,"محمد علي باشا","Muhammad Ali of Egypt"],["Khedive Ismail",1863,"الخديوي إسماعيل","Isma'il Pasha"],["King Fuad I",1917,"الملك فؤاد الأول","Fuad I of Egypt"],
   ["King Farouk",1936,"الملك فاروق","Farouk of Egypt"],["Mohamed Naguib",1953,"محمد نجيب"],["Gamal Abdel Nasser",1954,"جمال عبد الناصر"],["Anwar Sadat",1970,"أنور السادات"],
   ["Hosni Mubarak",1981,"حسني مبارك"],["Abdel Fattah el-Sisi",2014,"عبد الفتاح السيسي"]],{h:"ruler of Egypt",k:["CAME TO POWER","بدأ يحكم"],s:"history",m:"eg",d:1}),
 Rd(["WHICH WORLD EVENT","HAPPENED FIRST",Q],["أنهي حدث عالمي","حصل الأول",QA],"min",[
  ["Columbus reaches America",1492,"كولومبوس يوصل أمريكا","Voyages of Christopher Columbus"],["French Revolution",1789,"الثورة الفرنسية"],
  ["Titanic sinks",1912,"غرق تايتانيك","Sinking of the Titanic"],["World War I begins",1914,"بداية الحرب العالمية الأولى","World War I"],
  ["World War II ends",1945,"نهاية الحرب العالمية التانية","World War II"],["Moon landing",1969,"أول نزول على القمر","Apollo 11"],
  ["Chernobyl disaster",1986,"كارثة تشيرنوبل"],["Fall of the Berlin Wall",1989,"سقوط سور برلين"],["9/11 attacks",2001,"أحداث 11 سبتمبر","September 11 attacks"]],
  {h:"history",k:["YEAR","السنة"],dt:["World event", "حدث عالمي"],g:"y",s:"history",m:"w",d:1}),
 Rd(["WHICH INVENTION","CAME FIRST",Q],["أنهي اختراع","ظهر الأول",QA],"min",[
  ["Telescope",1608,"التلسكوب"],["Steam train",1804,"قطر البخار","Steam locomotive"],["Telephone",1876,"التليفون"],
  ["Light bulb",1879,"اللمبة","Incandescent light bulb"],["Car (Benz patent)",1886,"العربية (براءة بنز)","Benz Patent-Motorwagen"],["Airplane",1903,"الطيارة","Wright Flyer"],
  ["Penicillin",1928,"البنسلين"],["World Wide Web",1989,"الويب (الإنترنت)"],["iPhone",2007,"آيفون","iPhone (1st generation)"]],
  {h:"invention",k:["INVENTED","اتخترع سنة"],dt:["Invented", "الاختراع"],g:"y",s:"history",m:"w",d:1}),
 Rd(["WHICH LANDMARK","IS THE OLDEST",Q],["أنهي","أقدم معلم",QA],"min",[
  ["Amr ibn al-As Mosque",642,"جامع عمرو بن العاص"],["Mosque of Ibn Tulun",879,"جامع ابن طولون"],["Al-Azhar Mosque",972,"الجامع الأزهر"],
  ["Sultan Hassan Mosque",1363,"جامع السلطان حسن","Mosque–Madrasa of Sultan Hasan"],["Qaitbay Citadel",1479,"قلعة قايتباي","Citadel of Qaitbay"],["Egyptian Museum",1902,"المتحف المصري"],
  ["Baron Empain Palace",1911,"قصر البارون"],["Cairo Tower",1961,"برج القاهرة"],["Cairo Opera House",1988,"دار الأوبرا"]],
  {h:"Egypt landmark",k:["COMPLETED","خلص بناؤه سنة"],dt:["Building completed", "خلص بناؤه"],g:"y",s:"history",m:"eg",d:2}),
 Rd(["WHICH PIONEER WAS","BORN FIRST",Q],["مين من الرواد","اتولد الأول",QA],"min",[
  ["Rifa'a al-Tahtawi",1801,"رفاعة الطهطاوي"],["Ahmed Orabi",1841,"أحمد عرابي","Ahmed Urabi"],["Talaat Harb",1867,"طلعت حرب"],
  ["Mostafa Kamel",1874,"مصطفى كامل","Mustafa Kamil Pasha"],["Ali Moustafa Mosharafa",1898,"علي مصطفى مشرفة"],["Samira Moussa",1917,"سميرة موسى"],
  ["Magdi Yacoub",1935,"مجدي يعقوب"],["Farouk El-Baz",1938,"فاروق الباز"],["Ahmed Zewail",1946,"أحمد زويل"]],
  {h:"Egyptian historical figure",k:BORN,g:"p",s:"history",m:"eg",d:3}),
 Rd(["WHICH WRITER WAS","BORN LAST",Q],["مين من الكتّاب","أصغر",QA],"max",[
  ["Taha Hussein",1889,"طه حسين"],["Naguib Mahfouz",1911,"نجيب محفوظ"],["Ihsan Abdel Quddous",1919,"إحسان عبد القدوس"],
  ["Youssef Idris",1927,"يوسف إدريس","Yusuf Idris"],["Salah Jahin",1930,"صلاح جاهين"],["Abdel Rahman el-Abnudi",1938,"عبد الرحمن الأبنودي"],
  ["Alaa Al Aswany",1957,"علاء الأسواني"],["Ahmed Khaled Tawfik",1962,"أحمد خالد توفيق"],["Ahmed Mourad",1978,"أحمد مراد"]],
  {h:"Egyptian writer",k:BORN,g:"p",s:"history",m:"eg",d:2}),
 Rd(["WHICH ERA","BEGAN FIRST",Q],["أنهي عصر","بدأ الأول",QA],"min",[
  ["Tulunid era",868,"الدولة الطولونية","Tulunid dynasty"],["Fatimid era",969,"الدولة الفاطمية","Fatimid Caliphate"],["Ayyubid era",1171,"الدولة الأيوبية","Ayyubid dynasty"],
  ["Mamluk era",1250,"دولة المماليك","Mamluk Sultanate"],["Ottoman rule",1517,"الحكم العثماني","Ottoman Egypt"],["French campaign",1798,"الحملة الفرنسية","French campaign in Egypt and Syria"],
  ["Muhammad Ali dynasty",1805,"أسرة محمد علي","Muhammad Ali dynasty"],["British occupation",1882,"الاحتلال الإنجليزي","History of Egypt under the British"],["Republic declared",1953,"إعلان الجمهورية","Republic of Egypt (1953–1958)"]],
  {h:"Egypt history",k:["BEGAN IN EGYPT","بدأ في مصر سنة"],dt:["Era began in Egypt", "بداية العصر في مصر"],g:"y",s:"history",m:"eg",d:3}),
 Rd(["WHICH PROJECT","OPENED LAST",Q],["أنهي","آخر مشروع اتفتح",QA],"max",[
  ["Suez Canal",1869,"قناة السويس"],["Aswan Low Dam",1902,"خزان أسوان"],["Cairo International Stadium",1960,"استاد القاهرة"],
  ["Cairo International Airport",1963,"مطار القاهرة الدولي"],["Cairo Metro (Line 1)",1987,"مترو الأنفاق (الخط الأول)","Cairo Metro Line 1"],["Bibliotheca Alexandrina",2002,"مكتبة الإسكندرية"],
  ["Al-Azhar Park",2005,"حديقة الأزهر"],["New Suez Canal",2015,"قناة السويس الجديدة"],["Rod El Farag Axis",2019,"محور روض الفرج","Rod El Farag Axis Bridge"]],
  {h:"Egypt landmark",k:["OPENED","اتفتح سنة"],dt:["Project opened", "افتتاح المشروع"],g:"y",s:"history",m:"eg",d:3}),
 Rd(["WHICH LANDMARK WAS","FINISHED FIRST",Q],["أنهي معلم","خلص بناؤه الأول",QA],"min",[
  ["Leaning Tower of Pisa",1372,"برج بيزا المايل"],["Forbidden City",1420,"المدينة المحرمة"],["St. Peter's Basilica",1626,"كنيسة القديس بطرس"],
  ["Big Ben",1859,"بيج بن"],["Statue of Liberty",1886,"تمثال الحرية"],["Eiffel Tower",1889,"برج إيفل"],
  ["Empire State Building",1931,"مبنى إمباير ستيت"],["Golden Gate Bridge",1937,"كوبري الجولدن جيت"],["Sydney Opera House",1973,"دار أوبرا سيدني"]],
  {h:"landmark",k:["COMPLETED","خلص بناؤه سنة"],dt:["Building completed", "خلص بناؤه"],g:"y",s:"history",m:"w",d:3}),
 Rd(["WHICH GENIUS WAS","BORN FIRST",Q],["مين من العباقرة","اتولد الأول",QA],"min",[
  ["Leonardo da Vinci",1452,"ليوناردو دافنشي"],["Galileo Galilei",1564,"جاليليو"],["Charles Darwin",1809,"تشارلز داروين"],
  ["Louis Pasteur",1822,"لويس باستير"],["Thomas Edison",1847,"توماس إديسون"],["Nikola Tesla",1856,"نيكولا تيسلا"],
  ["Marie Curie",1867,"ماري كوري"],["Albert Einstein",1879,"ألبرت أينشتاين"],["Stephen Hawking",1942,"ستيفن هوكينج"]],
  {h:"scientist",k:BORN,g:"p",s:"history",m:"w",d:1}),
 Rd(["WHICH COUNTRY BECAME","INDEPENDENT LAST",Q],["أنهي","آخر دولة استقلت",QA],"max",[
  ["USA",1776,"أمريكا","United States"],["Brazil",1822,"البرازيل"],["Finland",1917,"فنلندا"],
  ["India",1947,"الهند"],["Libya",1951,"ليبيا"],["Morocco",1956,"المغرب"],
  ["Kuwait",1961,"الكويت"],["Algeria",1962,"الجزائر"],["UAE",1971,"الإمارات","United Arab Emirates"]],
  {h:"country flag",k:["INDEPENDENCE","استقلت سنة"],dt:["Independence", "الاستقلال"],g:"y",s:"history",m:"w",d:3}),
 Rd(["WHICH SPACE MOMENT","HAPPENED LAST",Q],["أنهي حدث في الفضاء","أجدد",QA],"max",[
  ["Sputnik launched",1957,"إطلاق سبوتنيك","Sputnik 1"],["Gagarin, first man in space",1961,"جاجارين أول إنسان في الفضاء","Yuri Gagarin"],["Tereshkova, first woman in space",1963,"تيريشكوفا أول ست في الفضاء","Valentina Tereshkova"],
  ["Voyager 1 launched",1977,"إطلاق فوياجر 1","Voyager 1"],["First Space Shuttle flight",1981,"أول رحلة لمكوك الفضاء","STS-1"],["Hubble launched",1990,"إطلاق تلسكوب هابل","Hubble Space Telescope"],
  ["First ISS module launched",1998,"أول جزء من محطة الفضاء الدولية","Zarya"],["First photo of a black hole",2019,"أول صورة لثقب أسود","Event Horizon Telescope"],["James Webb launched",2021,"إطلاق تلسكوب جيمس ويب","James Webb Space Telescope"]],
  {h:"space",k:["YEAR","السنة"],dt:["Space milestone", "حدث في الفضاء"],g:"y",s:"history",m:"w",d:2}),
 Rd(["WHICH CITY HOSTED","THE OLYMPICS FIRST",Q],["أنهي مدينة","استضافت الأولمبياد الأول",QA],"min",[
  ["Paris",1900,"باريس"],["London",1908,"لندن"],["Los Angeles",1932,"لوس أنجلوس"],
  ["Berlin",1936,"برلين"],["Rome",1960,"روما"],["Tokyo",1964,"طوكيو"],
  ["Barcelona",1992,"برشلونة"],["Sydney",2000,"سيدني"],["Rio de Janeiro",2016,"ريو دي جانيرو"]],
  {h:"city",k:["FIRST HOSTED","أول أولمبياد سنة"],dt:["First hosted the Olympics", "أول أولمبياد فيها"],g:"y",s:"history",m:"w",d:2}),
 Rd(["WHICH MUSEUM","OPENED FIRST",Q],["أنهي متحف","اتفتح الأول",QA],"min",[
  ["Greco-Roman Museum",1892,"المتحف اليوناني الروماني","Graeco-Roman Museum"],["Egyptian Museum",1902,"المتحف المصري"],["Museum of Islamic Art",1903,"متحف الفن الإسلامي","Museum of Islamic Art, Cairo"],
  ["Coptic Museum",1910,"المتحف القبطي"],["Luxor Museum",1975,"متحف الأقصر"],["Nubian Museum",1997,"متحف النوبة"],
  ["Alexandria National Museum",2003,"متحف الإسكندرية القومي"],["Museum of Egyptian Civilization",2021,"متحف الحضارة","National Museum of Egyptian Civilization"],["Grand Egyptian Museum",2025,"المتحف المصري الكبير"]],
  {h:"museum",k:["OPENED","اتفتح سنة"],s:"history",m:"eg",d:3}),
 Rd(["WHICH US PRESIDENT","TOOK OFFICE FIRST",Q],["أنهي رئيس أمريكي","مسك الحكم الأول",QA],"min",[
  ["George Washington",1789,"جورج واشنطن"],["Abraham Lincoln",1861,"أبراهام لينكولن"],["Theodore Roosevelt",1901,"تيودور روزفلت"],
  ["Franklin D. Roosevelt",1933,"فرانكلين روزفلت"],["John F. Kennedy",1961,"جون كينيدي"],["Richard Nixon",1969,"ريتشارد نيكسون"],
  ["Ronald Reagan",1981,"رونالد ريجان"],["Barack Obama",2009,"باراك أوباما"],["Donald Trump",2017,"دونالد ترامب"]],
  {h:"president",k:["TOOK OFFICE","مسك الحكم سنة"],s:"history",m:"w",d:1}),
 Rd(["WHICH HISTORIC FIGURE","WAS BORN FIRST",Q],["أنهي شخصية تاريخية","اتولدت الأول",QA],"min",[
  ["Ibn Battuta",1304,"ابن بطوطة"],["Christopher Columbus",1451,"كريستوفر كولومبس"],["William Shakespeare",1564,"وليام شكسبير"],
  ["Isaac Newton",1643,"إسحاق نيوتن"],["Napoleon",1769,"نابليون بونابرت"],["Queen Victoria",1819,"الملكة فيكتوريا"],
  ["Mahatma Gandhi",1869,"المهاتما غاندي"],["Winston Churchill",1874,"ونستون تشرشل"],["Nelson Mandela",1918,"نيلسون مانديلا"]],
  {h:"historical figure",k:BORN,s:"history",m:"w",d:2}),
 Rd(["WHICH CITY","WAS FOUNDED FIRST",Q],["أنهي مدينة","اتأسست الأول",QA],"min",[
  ["Baghdad",762,"بغداد"],["Cairo",969,"القاهرة"],["Moscow",1147,"موسكو"],
  ["Berlin",1237,"برلين"],["Amsterdam",1275,"أمستردام"],["New York City",1624,"نيويورك"],
  ["Sydney",1788,"سيدني"],["Washington, D.C.",1790,"واشنطن"],["Brasília",1960,"برازيليا"]],
  {h:"city",k:["FOUNDED","اتأسست سنة"],s:"history",m:"w",d:2})]}
);
