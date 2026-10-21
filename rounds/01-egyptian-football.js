// Egyptian Football rounds. The round format is explained above Rd() in index.html.
// Each category file adds itself to CATS; index.html loads them in number order.
CATS.push(
{n:"Egyptian Football",a:"الكورة المصرية",e:"🇪🇬 ⚽",r:[
 Rd(["WHO IS THE","YOUNGEST PLAYER",Q],["مين","أصغر لاعب",QA],"max",[
  ["Ahmed Hegazi",1991,"أحمد حجازي"],["Mohamed Salah",1992,"محمد صلاح"],["Mahmoud 'Trezeguet' Hassan",1994,"محمود حسن (تريزيجيه)","Trézéguet (Egyptian footballer)"],
  ["Mahmoud Hamdy 'El Wensh'",1995,"محمود حمدي (الونش)","Mahmoud Hamdy"],["Ahmed Sayed 'Zizo'",1996,"أحمد سيد (زيزو)","Zizo (footballer)"],["Mostafa Mohamed",1997,"مصطفى محمد","Mostafa Mohamed (footballer)"],
  ["Ahmed Fatouh",1998,"أحمد فتوح"],["Omar Marmoush",1999,"عمر مرموش"],["Hamza Abdel Karim",2008,"حمزة عبد الكريم","Hamza Abdelkarim"]],{h:"Egyptian footballer",k:BORN,g:"p",s:"players",m:"eg",d:1}),
 Rd(["WHO IS THE","OLDEST LEGEND",Q],["مين","أكبر أسطورة في السن",QA],"min",[
  ["Hassan Shehata",1949,"حسن شحاتة"],["Mahmoud 'Bibo' El Khatib",1954,"محمود الخطيب (بيبو)","Mahmoud El Khatib"],["Hossam Hassan",1966,"حسام حسن"],
  ["Hany Ramzy",1969,"هاني رمزي"],["Essam El-Hadary",1973,"عصام الحضري","Essam El Hadary"],["Ahmed Hassan",1975,"أحمد حسن","Ahmed Hassan (footballer, born 1975)"],
  ["Mohamed Aboutrika",1978,"محمد أبو تريكة"],["Mohamed Zidan",1981,"محمد زيدان"],["Ahmed 'Mido' Hossam",1983,"أحمد حسام (ميدو)","Mido (footballer)"]],{h:"Egyptian footballer",k:BORN,g:"p",s:"players",m:"eg",d:1}),
 
 Rd(["WHICH IS THE","OLDEST CLUB",Q],["مين","أقدم نادي",QA],"min",[
  ["Al Ahly",1907,"الأهلي","Al Ahly SC"],["Zamalek",1911,"الزمالك","Zamalek SC"],["Al Ittihad Alexandria",1914,"الاتحاد السكندري","Al Ittihad Alexandria Club"],
  ["Al Masry",1920,"المصري","Al Masry SC"],["Ismaily",1924,"الإسماعيلي","Ismaily SC"],["Smouha",1949,"سموحة","Smouha SC"],
  ["Arab Contractors",1973,"المقاولون العرب","Al Mokawloon Al Arab SC"],["ENPPI",1985,"إنبي","ENPPI SC"],["Pyramids FC",2008,"بيراميدز"]],{h:"Egyptian football club",k:["FOUNDED","اتأسس سنة"],dt:["Club founded", "تأسيس النادي"],g:"y",s:"trophies",m:"eg",d:1}),
 
  Rd(["WHO IS THE","YOUNGEST GOALKEEPER",Q],["مين","أصغر حارس مرمى",QA],"max",[
   ["Ahmed Shobeir",1960,"أحمد شوبير","Ahmed Shobair"],["Nader El-Sayed",1972,"نادر السيد"],["Essam El-Hadary",1973,"عصام الحضري","Essam El Hadary"],
   ["Sherif Ekramy",1983,"شريف إكرامي"],["Mohamed El Shenawy",1988,"محمد الشناوي"],["Mohamed 'Gabaski' Abou Gabal",1989,"محمد أبو جبل (جباسكي)","Mohamed Abou Gabal"],
   ["Ahmed El Shenawy",1991,"أحمد الشناوي"],["Mohamed Sobhy",1999,"محمد صبحي","Mohamed Sobhy (footballer, born 1999)"],["Mostafa Shobeir",2000,"مصطفى شوبير"]],{h:"Egyptian footballer",k:BORN,g:"p",s:"players",m:"eg",d:3}),
  Rd(["WHO PLAYED IN THE","PREMIER LEAGUE FIRST",Q],["مين","أول واحد لعب في الدوري الإنجليزي",QA],"min",[
   ["Ahmed 'Mido' Hossam",2005,"أحمد حسام (ميدو)","Mido (footballer)"],["Hossam Ghaly",2006,"حسام غالي"],["Amr Zaki",2008,"عمرو زكي"],["Ahmed Elmohamady",2010,"أحمد المحمدي"],
   ["Mohamed Salah",2014,"محمد صلاح"],["Mohamed Elneny",2016,"محمد النني"],["Ahmed Hegazi",2017,"أحمد حجازي"],["Mahmoud 'Trezeguet' Hassan",2019,"محمود حسن (تريزيجيه)","Trézéguet (Egyptian footballer)"],
   ["Omar Marmoush",2025,"عمر مرموش"]],{h:"Egyptian footballer",k:["JOINED THE PREMIER LEAGUE","دخل البريميرليج سنة"],s:"players",m:"eg",d:2}),
 Rd(["WHICH CLUB HAS THE","MOST LEAGUE TITLES",Q],["مين","كسب الدوري المصري أكتر",QA],"max",[
  ["Al Ahly",45,"الأهلي","Al Ahly SC"],["Zamalek",15,"الزمالك","Zamalek SC"],["Ismaily",3,"الإسماعيلي","Ismaily SC"],
  ["Olympic Club",1,"الأوليمبي","Olympic Club (Egypt)"],["Tersana",1,"الترسانة","Tersana SC"],["Ghazl El Mahalla",1,"غزل المحلة","Ghazl El Mahalla SC"],
  ["Arab Contractors",1,"المقاولون العرب","Al Mokawloon Al Arab SC"],["Al Masry",0,"المصري","Al Masry SC"],["Pyramids FC",0,"بيراميدز"]],{suf:TRA,h:"Egyptian football club",k:["LEAGUE TITLES","بطولات دوري"],s:"trophies",m:"eg",d:1}),
 Rd(["WHICH CLUB HAS THE","MOST EGYPT CUPS",Q],["مين","كسب كاس مصر أكتر",QA],"max",[
  ["Al Ahly",39,"الأهلي","Al Ahly SC"],["Zamalek",29,"الزمالك","Zamalek SC"],["Al Ittihad Alexandria",6,"الاتحاد السكندري","Al Ittihad Alexandria Club"],
  ["Tersana",6,"الترسانة","Tersana SC"],["Arab Contractors",3,"المقاولون العرب","Al Mokawloon Al Arab SC"],["Ismaily",2,"الإسماعيلي","Ismaily SC"],
  ["ENPPI",2,"إنبي","ENPPI SC"],["Pyramids FC",2,"بيراميدز"],["Al Masry",1,"المصري","Al Masry SC"]],{suf:TRA,h:"Egyptian football club",k:["EGYPT CUPS","كاسات مصر"],s:"trophies",m:"eg",d:1}),
 Rd(["WHICH IS THE","BIGGEST STADIUM",Q],["أنهي استاد","أكبر",QA],"max",[
  ["Misr Stadium",93940,"استاد مصر (العاصمة الإدارية)","New Administrative Capital Stadium"],["Borg El Arab Stadium",86000,"استاد برج العرب"],["Cairo International Stadium",75000,"استاد القاهرة"],
  ["Egyptian Army Stadium (Suez)",45000,"استاد الجيش بالسويس","Egyptian Army Stadium"],["Arab Contractors Stadium",35000,"استاد المقاولون العرب","Osman Ahmed Osman Stadium"],["Al Salam Stadium",30000,"استاد السلام","Al Salam Stadium (Egypt)"],
  ["30 June Stadium",30000,"استاد 30 يونيو (الدفاع الجوي)"],["Military Academy Stadium",28500,"استاد الكلية الحربية","Cairo Military Academy Stadium"],["Suez Stadium",27000,"استاد السويس"]],{h:"stadium",k:["CAPACITY","بيساع"],suf:[" fans"," متفرج"],s:"trophies",m:"eg",d:2}),
 Rd(["WHO IS THE","OLDEST COACH",Q],["مين","أكبر مدرب في السن",QA],"min",[
  ["Mahmoud El-Gohary",1938,"محمود الجوهري"],["Hassan Shehata",1949,"حسن شحاتة"],["Farouk Gaafar",1952,"فاروق جعفر"],
  ["Shawky Gharib",1959,"شوقي غريب","Shawky Gharieb"],["Hossam El-Badry",1960,"حسام البدري","Hossam El Badry"],["Hossam Hassan",1966,"حسام حسن"],
  ["Ehab Galal",1967,"إيهاب جلال"],["Hany Ramzy",1969,"هاني رمزي"],["Ahmed 'Mido' Hossam",1983,"أحمد حسام (ميدو)","Mido (footballer)"]],{h:"Egyptian football manager",k:BORN,g:"p",s:"players",m:"eg",d:2}),
 Rd(["WHO IS THE","OLDEST EGYPT INTERNATIONAL",Q],["مين","أكبر لاعب في المنتخب في السن",QA],"min",[
  ["Wael Gomaa",1975,"وائل جمعة"],["Mohamed Barakat",1976,"محمد بركات"],["Hossam Ghaly",1981,"حسام غالي"],
  ["Mohamed Zidan",1981,"محمد زيدان"],["Emad Moteab",1983,"عماد متعب"],["Hosny Abd Rabo",1984,"حسني عبد ربه"],
  ["Ahmed Fathy",1984,"أحمد فتحي"],["Mahmoud 'Shikabala' Abdel Razek",1986,"محمود عبد الرازق (شيكابالا)","Shikabala"],["Mohamed Elneny",1992,"محمد النني"]],{h:"Egyptian footballer",k:BORN,g:"p",s:"players",m:"eg",d:3}),
 Rd(["WHO HAS THE","MOST CAPS FOR EGYPT",Q],["مين","عنده أكتر ماتشات دولية",QA],"max",[
  ["Ahmed Hassan",184,"أحمد حسن","Ahmed Hassan (footballer, born 1975)"],["Hossam Hassan",177,"حسام حسن"],["Essam El-Hadary",159,"عصام الحضري","Essam El Hadary"],
  ["Ahmed Fathy",135,"أحمد فتحي"],["Ibrahim Hassan",131,"إبراهيم حسن"],["Hany Ramzy",122,"هاني رمزي"],
  ["Wael Gomaa",114,"وائل جمعة"],["Mohamed Aboutrika",100,"محمد أبو تريكة"],["Ahmed 'Mido' Hossam",51,"أحمد حسام (ميدو)","Mido (footballer)"]],
  {h:"footballer",k:["EGYPT CAPS","ماتشات دولية"],suf:[" caps"," ماتش"],s:"players",m:"eg",d:2}),
 Rd(["WHO HAS THE","MOST AFCON TITLES",Q],["مين","كسب كاس الأمم الأفريقية أكتر",QA],"max",[
  ["Ahmed Hassan",4,"أحمد حسن","Ahmed Hassan (footballer, born 1975)"],["Hossam Hassan",3,"حسام حسن"],["Wael Gomaa",3,"وائل جمعة"],
  ["Ahmed Fathy",3,"أحمد فتحي"],["Mohamed Aboutrika",2,"محمد أبو تريكة"],["Mohamed Zidan",2,"محمد زيدان"],
  ["Mahmoud 'Bibo' El Khatib",1,"محمود الخطيب (بيبو)","Mahmoud El Khatib"],["Mohamed Salah",0,"محمد صلاح"],["Omar Marmoush",0,"عمر مرموش"]],
  {suf:TRA,h:"footballer",k:["AFCON TITLES","كاسات أمم أفريقيا"],s:"players",m:"eg",d:1}),
 Rd(["WHO HAS WON THE","MOST CAF CHAMPIONS LEAGUES",Q],["مين","كسب دوري أبطال أفريقيا أكتر",QA],"max",[
  ["Wael Gomaa",6,"وائل جمعة"],["Mohamed Aboutrika",5,"محمد أبو تريكة"],["Mohamed El Shenawy",4,"محمد الشناوي"],
  ["Ali Maaloul",4,"علي معلول","Ali Maâloul"],["Hossam Hassan",2,"حسام حسن"],["Mahmoud 'Bibo' El Khatib",2,"محمود الخطيب (بيبو)","Mahmoud El Khatib"],
  ["Mohamed Salah",0,"محمد صلاح"],["Ahmed 'Mido' Hossam",0,"أحمد حسام (ميدو)","Mido (footballer)"],["Omar Marmoush",0,"عمر مرموش"]],
  {suf:TRA,h:"footballer",k:["CAF CL TITLES","دوري أبطال أفريقيا"],s:"players",m:"eg",d:2}),
 Rd(["WHO SCORED THE","MOST EPL GOALS",Q],["مين","جاب أكتر أهداف في البريميرليج",QA],"max",[
  ["Mohamed Salah",193,"محمد صلاح"],["Ahmed 'Mido' Hossam",22,"أحمد حسام (ميدو)","Mido (footballer)"],["Amr Zaki",10,"عمرو زكي"],
  ["Mahmoud 'Trezeguet' Hassan",8,"محمود حسن (تريزيجيه)","Trézéguet (Egyptian footballer)"],["Ahmed Elmohamady",6,"أحمد المحمدي"],["Ahmed Hegazi",2,"أحمد حجازي"],
  ["Ramadan Sobhi",2,"رمضان صبحي"],["Mohamed Elneny",1,"محمد النني"],["Hossam Ghaly",1,"حسام غالي"]],
  {h:"footballer",k:["PREMIER LEAGUE GOALS","أهداف البريميرليج"],suf:[" goals"," هدف"],s:"players",m:"eg",d:1}),
 Rd(["WHO MOVED TO","EUROPE FIRST",Q],["مين","احترف في أوروبا الأول",QA],"min",[
  ["Hossam Hassan",1990,"حسام حسن"],["Ahmed Hassan",1997,"أحمد حسن","Ahmed Hassan (footballer, born 1975)"],["Ahmed 'Mido' Hossam",2000,"أحمد حسام (ميدو)","Mido (footballer)"],
  ["Ahmed Hegazi",2011,"أحمد حجازي"],["Mohamed Salah",2012,"محمد صلاح"],["Mohamed Elneny",2013,"محمد النني"],
  ["Mahmoud 'Trezeguet' Hassan",2015,"محمود حسن (تريزيجيه)","Trézéguet (Egyptian footballer)"],["Omar Marmoush",2017,"عمر مرموش"],["Mostafa Mohamed",2021,"مصطفى محمد","Mostafa Mohamed (footballer)"]],
  {h:"Egyptian footballer",k:["MOVED TO EUROPE","احترف في أوروبا سنة"],s:"players",m:"eg",d:2}),
 Rd(["WHO IS THE","YOUNGEST AHLY STAR",Q],["مين","أصغر نجم في الأهلي",QA],"max",[
  ["Wael Gomaa",1975,"وائل جمعة"],["Abdallah El Said",1985,"عبد الله السعيد","Abdallah El Said"],["Hossam Ashour",1986,"حسام عاشور"],
  ["Moamen Zakaria",1988,"مؤمن زكريا"],["Hussein El Shahat",1992,"حسين الشحات"],["Mohamed Magdy 'Afsha'",1996,"محمد مجدي (أفشة)","Mohamed Magdy (footballer)"],
  ["Emam Ashour",1998,"إمام عاشور"],["Mohamed Abdelmonem",1999,"محمد عبد المنعم"],["Mostafa Shobeir",2000,"مصطفى شوبير"]],
  {h:"Egyptian footballer",k:BORN,g:"p",s:"players",m:"eg",d:3}),
 Rd(["WHO IS THE","OLDEST ZAMALEK LEGEND",Q],["مين","أكبر أسطورة زملكاوية في السن",QA],"min",[
  ["Hamada Emam",1947,"حمادة إمام"],["Farouk Gaafar",1952,"فاروق جعفر"],["Hazem Emam",1975,"حازم إمام","Hazem Emam (footballer, born 1975)"],
  ["Abdel Wahed El Sayed",1977,"عبد الواحد السيد"],["Ahmed 'Mido' Hossam",1983,"أحمد حسام (ميدو)","Mido (footballer)"],["Mahmoud 'Shikabala' Abdel Razek",1986,"محمود عبد الرازق (شيكابالا)","Shikabala"],
  ["Tarek Hamed",1988,"طارق حامد"],["Omar Gaber",1992,"عمر جابر"],["Ahmed Sayed 'Zizo'",1996,"أحمد سيد (زيزو)","Zizo (footballer)"]],
  {h:"Egyptian footballer",k:BORN,g:"p",s:"players",m:"eg",d:2}),
 Rd(["WHICH CLUB HAS THE","MOST EGYPTIAN SUPER CUPS",Q],["مين","كسب السوبر المصري أكتر",QA],"max",[
  ["Al Ahly",16,"الأهلي","Al Ahly SC"],["Zamalek",4,"الزمالك","Zamalek SC"],["Arab Contractors",1,"المقاولون العرب","Al Mokawloon Al Arab SC"],
  ["Haras El Hodoud",1,"حرس الحدود","Haras El Hodoud SC"],["Tala'ea El Gaish",1,"طلائع الجيش","Tala'ea El Gaish SC"],["ENPPI",0,"إنبي","ENPPI SC"],
  ["Ghazl El Mahalla",0,"غزل المحلة","Ghazl El Mahalla SC"],["Ismaily",0,"الإسماعيلي","Ismaily SC"],["Al Masry",0,"المصري","Al Masry SC"]],
  {suf:TRA,h:"Egyptian football club",k:["SUPER CUPS","كاسات سوبر"],s:"trophies",m:"eg",d:1}),
 Rd(["WHICH EGYPT COACH WON","THE MOST AFRICA CUPS",Q],["مين من مدربين مصر","كسب كاس الأمم الأفريقية أكتر",QA],"max",[
  ["Hassan Shehata",3,"حسن شحاتة"],["Mahmoud El-Gohary",1,"محمود الجوهري"],["Mike Smith",1,"مايك سميث","Mike Smith (football manager)"],
  ["Pál Titkos",1,"بال تيتكوش"],["Héctor Cúper",0,"هيكتور كوبر"],["Bob Bradley",0,"بوب برادلي"],
  ["Carlos Queiroz",0,"كارلوس كيروش"],["Rui Vitória",0,"روي فيتوريا"],["Hossam Hassan",0,"حسام حسن"]],
  {suf:TRA,h:"football manager",k:["AFCONS AS EGYPT COACH","كاسات أمم كمدرب لمصر"],s:"players",m:"eg",d:1}),
Rd(["WHICH CLUB OUTSIDE CAIRO","WAS FOUNDED FIRST",Q],["أنهي نادي بره القاهرة","اتأسس الأول",QA],"min",[
  ["Olympic Club",1905,"الأوليمبي","Olympic Club (Egypt)"],["Al Ittihad Alexandria",1914,"الاتحاد السكندري","Al Ittihad Alexandria Club"],["Al Masry",1920,"المصري","Al Masry SC"],
  ["Ismaily",1924,"الإسماعيلي","Ismaily SC"],["Aswan SC",1930,"أسوان","Aswan SC"],["Baladiyat El Mahalla",1931,"بلدية المحلة","Baladiyat El Mahalla SC"],
  ["Haras El Hodoud",1932,"حرس الحدود","Haras El Hodoud SC"],["Ghazl El Mahalla",1936,"غزل المحلة","Ghazl El Mahalla SC"],["El Mansoura",1949,"المنصورة","El Mansoura SC"]],
  {h:"Egyptian football club",k:["FOUNDED","اتأسس سنة"],dt:["Club founded","تأسيس النادي"],g:"y",s:"trophies",m:"eg",d:3}),
 Rd(["WHICH CLUB","WAS FOUNDED LAST",Q],["مين","أجدد نادي",QA],"max",[
  ["Petrojet",1980,"بتروجت","Petrojet SC"],["Misr Lel Makkasa",1988,"مصر المقاصة","Misr Lel Makkasa SC"],["Tala'ea El Gaish",1997,"طلائع الجيش","Tala'ea El Gaish SC"],
  ["Wadi Degla SC",2002,"وادي دجلة","Wadi Degla SC"],["El Gouna",2003,"الجونة","El Gouna FC"],["El Entag El Harby",2004,"الإنتاج الحربي","El Entag El Harby SC"],
  ["Ceramica Cleopatra",2007,"سيراميكا كليوباترا","Ceramica Cleopatra FC"],["Pharco",2010,"فاركو","Pharco FC"],["Modern Sport",2011,"مودرن سبورت","Modern Sport FC"]],
  {h:"Egyptian football club",k:["FOUNDED","اتأسس سنة"],dt:["Club founded","تأسيس النادي"],g:"y",s:"trophies",m:"eg",d:3}),
 Rd(["WHICH EGYPTIAN STADIUM","OPENED FIRST",Q],["أنهي استاد","اتفتح الأول",QA],"min",[
  ["Mokhtar El Tetsh Stadium",1917,"استاد مختار التتش (الأهلي)","Mokhtar El Tetsh Stadium"],["Alexandria Stadium",1929,"استاد إسكندرية"],["Cairo International Stadium",1960,"استاد القاهرة"],
  ["Arab Contractors Stadium",1979,"استاد المقاولون العرب","Osman Ahmed Osman Stadium"],["Military Academy Stadium",1989,"استاد الكلية الحربية","Cairo Military Academy Stadium"],["Suez Stadium",1990,"استاد السويس"],
  ["Borg El Arab Stadium",2007,"استاد برج العرب"],["Al Salam Stadium",2009,"استاد السلام","Al Salam Stadium (Egypt)"],["30 June Stadium",2012,"استاد 30 يونيو (الدفاع الجوي)"]],
  {h:"stadium",k:["OPENED","اتفتح سنة"],s:"trophies",m:"eg",d:3}),
 Rd(["WHICH CLUB WON THE","EGYPT CUP FIRST",Q],["مين","كسب كاس مصر الأول",QA],"min",[
  ["Zamalek",1922,"الزمالك","Zamalek SC"],["Tersana",1923,"الترسانة","Tersana SC"],["Al Ahly",1924,"الأهلي","Al Ahly SC"],
  ["Al Ittihad Alexandria",1926,"الاتحاد السكندري","Al Ittihad Alexandria Club"],["Olympic Club",1933,"الأوليمبي","Olympic Club (Egypt)"],["Arab Contractors",1990,"المقاولون العرب","Al Mokawloon Al Arab SC"],
  ["Ismaily",1997,"الإسماعيلي","Ismaily SC"],["Al Masry",1998,"المصري","Al Masry SC"],["Pyramids FC",2024,"بيراميدز"]],
  {h:"Egyptian football club",k:["FIRST EGYPT CUP","أول كاس مصر سنة"],s:"trophies",m:"eg",d:2}),
 Rd(["WHICH CLUB WON THE","EGYPT CUP MOST RECENTLY",Q],["مين","آخر نادي كسب كاس مصر",QA],"max",[
  ["Pyramids FC",2026,"بيراميدز"],["Zamalek",2025,"الزمالك","Zamalek SC"],["Al Ahly",2023,"الأهلي","Al Ahly SC"],
  ["ENPPI",2011,"إنبي","ENPPI SC"],["Haras El Hodoud",2010,"حرس الحدود","Haras El Hodoud SC"],["Arab Contractors",2004,"المقاولون العرب","Al Mokawloon Al Arab SC"],
  ["Ismaily",2000,"الإسماعيلي","Ismaily SC"],["Al Masry",1998,"المصري","Al Masry SC"],["Tersana",1986,"الترسانة","Tersana SC"]],
  {h:"Egyptian football club",k:["LAST EGYPT CUP","آخر كاس مصر سنة"],s:"trophies",m:"eg",d:2}),
 Rd(["WHICH CLUB HAS LOST THE","MOST EGYPT CUP FINALS",Q],["مين","خسر نهائي كاس مصر أكتر",QA],"max",[
  ["Al Ahly",16,"الأهلي","Al Ahly SC"],["Zamalek",14,"الزمالك","Zamalek SC"],["Al Masry",9,"المصري","Al Masry SC"],
  ["Al Ittihad Alexandria",8,"الاتحاد السكندري","Al Ittihad Alexandria Club"],["El Sekka El Hadid",7,"السكة الحديد","El Sekka El Hadid SC"],["Ghazl El Mahalla",6,"غزل المحلة","Ghazl El Mahalla SC"],
  ["Ismaily",4,"الإسماعيلي","Ismaily SC"],["Tersana",3,"الترسانة","Tersana SC"],["Pyramids FC",3,"بيراميدز"]],
  {h:"Egyptian football club",k:["CUP FINALS LOST","نهائيات خسرها"],s:"trophies",m:"eg",d:3})]}
);
