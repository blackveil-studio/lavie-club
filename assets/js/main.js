(function(){
  "use strict";

  /* ---------------- i18n dictionary ---------------- */
  var translations = {
    en: {
      "cookie.text": "This site uses local storage only to remember your language preference — no tracking, no third-party cookies. See our <a href=\"privacy.html\">Privacy Policy</a>.",
      "cookie.accept": "Got it",
      "nav.experiences": "Experiences",
      "nav.journal": "Journal",
      "nav.gallery": "Gallery",
      "nav.community": "Community",
      "nav.join": "Request Invitation",

      "hero.eyebrow": "Women's Club — Kyiv · Warsaw · Europe",
      "hero.headline": "Live it, inspired.",
      "hero.sub": "A community, first — trips across the year, weekly movement and matches, long brunches, and women who show up for each other in between.",
      "hero.locations": "Mykonos · Santorini · Maldives · Milan &amp; Como · Paris · Courchevel · Warsaw · Kyiv",
      "hero.scroll": "Scroll",
      "stats.members": "women in the community",
      "stats.trips": "trips on the 2026 calendar",
      "stats.cities": "home cities — Kyiv &amp; Warsaw",
      "stats.weeks": "weeks a year of Stretch &amp; Tennis",

      "manifesto.eyebrow": "The Club",
      "manifesto.heading": "A space to <span class=\"italic accent\">grow</span>, not just to escape.",
      "manifesto.p1": "La Vie Club is a community first — <strong>entrepreneurs, experts and women building something of their own</strong>, across Kyiv, Warsaw and the rest of Europe. Women who take their ambition seriously, and refuse to let it be the only thing they take seriously.",
      "manifesto.p2": "We show up for each other on a stretch mat in a park, across a tennis net, over a long brunch, and on a beach three countries away. Different room, same intention — <strong>presence, honesty, and each other</strong>.",
      "manifesto.pillar1.label": "Community",
      "manifesto.pillar1.desc": "Women who actually show up for each other — not just at the event, after it too.",
      "manifesto.pillar2.label": "Growth",
      "manifesto.pillar2.desc": "Honest conversation and real reflection. We're here to grow, not just to network.",
      "manifesto.pillar3.label": "Balance",
      "manifesto.pillar3.desc": "Room to exhale — between ambition, work, and the rest of a full life.",
      "manifesto.pillar4.label": "Aesthetic",
      "manifesto.pillar4.desc": "Every gathering made with care. Beauty here isn't decoration, it's part of the point.",
      "manifesto.founderQuote": "“They say I inspire people to live boldly — without ‘later.’”",
      "manifesto.founderRole": "— Founder",

      "statement.line": "The company was always the point.",

      "experiences.eyebrow": "What we do",
      "experiences.heading": "Four ways in.",
      "experiences.lead": "Not a tour operator. Not a gym. A community that shows up for you, in four regular forms.",

      "exp.trips.photo": "Photo pending — Mykonos, girls trip",
      "exp.trips.alt": "Golden hour on a La Vie Club girls trip",
      "exp.trips.eyebrow": "Girls Trips",
      "exp.trips.title": "A season of escapes.",
      "exp.trips.desc": "Maldives, Mykonos, Santorini, Milan &amp; Como, Paris, Courchevel — a full calendar across the year, villas and private drivers included, plus intimate off-calendar trips with only a few seats.",
      "exp.trips.price": "From €1,950 per trip",

      "exp.stretch.eyebrow": "Stretch Club",
      "exp.stretch.alt": "Stretch Club, an outdoor movement session",
      "exp.stretch.title": "Every weekend, outdoors.",
      "exp.stretch.desc": "Morning and evening sessions in the parks of Warsaw and Kyiv — mats provided, every level welcome.",
      "exp.stretch.price": "30 zł per session",

      "exp.tennis.eyebrow": "Tennis Club",
      "exp.tennis.alt": "La Vie Club Tennis Club match",
      "exp.tennis.title": "Just launched. Already full of regulars.",
      "exp.tennis.desc": "A closed weekly court club in Warsaw and Kyiv, open to beginners and players alike.",

      "exp.brunch.eyebrow": "Brunches",
      "exp.brunch.alt": "La Vie Club brunch table",
      "exp.brunch.title": "The long table.",
      "exp.brunch.desc": "Conversation that runs long, on purpose.",

      "season.eyebrow": "The Calendar",
      "season.heading": "The 2026 season.",
      "season.lead": "Eight trips, booked out season by season. A few off-calendar escapes appear without warning — seats are always limited.",
      "season.limited": "Limited seats",
      "season.next": "Next trip",
      "season.date1": "Mar 20–27", "season.name1": "Maldives",
      "season.date2": "Jun 15–21", "season.name2": "Mykonos",
      "season.date3": "Jul 15–21", "season.name3": "Santorini",
      "season.date4": "Aug 15–21", "season.name4": "Mykonos",
      "season.date5": "Sep 7–12", "season.name5": "Milan &amp; Como",
      "season.date6": "Oct 10–17", "season.name6": "Paris &amp; Étretat",
      "season.date7": "Oct 20–27", "season.name7": "Maldives",
      "season.date8": "Dec 14–18", "season.name8": "Courchevel",
      "season.cta": "Live availability updates on Telegram →",

      "journal.eyebrow": "Journal",
      "journal.heading": "Recent moments.",
      "journal.lead": "A running record across the season — villas, courts, park mornings — real trips and real faces, no stock photography.",
      "journal.tag1": "Mykonos", "journal.tag2": "Santorini", "journal.tag3": "Stretch — Warsaw",
      "journal.tag4": "Stretch — Kyiv", "journal.tag5": "Maldives", "journal.tag6": "Milan &amp; Como",
      "journal.tag7": "Paris &amp; Étretat", "journal.tag8": "Tennis Club",
      "journal.alt1": "La Vie Club trip to Mykonos",
      "journal.alt2": "La Vie Club trip to Santorini",
      "journal.alt3": "Stretch Club, an outdoor movement session",
      "journal.alt4": "Stretch Club, an outdoor movement session",
      "journal.alt5": "La Vie Club trip to the Maldives",
      "journal.alt6": "La Vie Club trip to Milan and Lake Como",
      "journal.alt7": "La Vie Club trip to Paris and Étretat",
      "journal.alt8": "La Vie Club Tennis Club",
      "journal.dispatch1": "Dispatch No. 01", "journal.dispatch2": "Dispatch No. 02",
      "journal.dispatch3": "Dispatch No. 03", "journal.dispatch4": "Dispatch No. 04",
      "journal.dispatch5": "Dispatch No. 05", "journal.dispatch6": "Dispatch No. 06",
      "journal.dispatch7": "Dispatch No. 07", "journal.dispatch8": "Dispatch No. 08",

      "gallery.eyebrow": "Unfiltered",
      "gallery.heading": "Watch the season.",
      "gallery.lead": "Straight from the club's own reels and cameras — no script, no re-shoot. Tap anything to play.",
      "gallery.cap1": "Arrival, by air",
      "gallery.cap2": "Golden hour, Mykonos",
      "gallery.alt2": "Golden hour on a La Vie Club trip to Mykonos",
      "gallery.cap3": "A closed-club kind of night",
      "gallery.cap4": "Match point",
      "gallery.cap5": "Details, always",
      "gallery.alt5": "Details from a La Vie Club trip",
      "gallery.cap6": "Toasting nothing in particular",
      "gallery.cap7": "The whole point",
      "gallery.alt7": "La Vie Club members embracing",
      "gallery.cap8": "Last light",
      "gallery.cap9": "En route to the next one",
      "gallery.alt9": "La Vie Club members on a speedboat",
      "gallery.cap10": "Somewhere on the Riviera",
      "gallery.cap11": "Under sail",
      "gallery.cap12": "The view from up here",
      "gallery.cap13": "Coffee first",
      "gallery.alt13": "Coffee by the pool on a La Vie Club trip",
      "gallery.cap14": "Golden hour, always",
      "gallery.alt14": "Golden hour with La Vie Club",
      "gallery.more": "More of this on Instagram →",

      "community.eyebrow": "In their words",
      "community.heading": "Who's in the room.",
      "community.lead": "Founders, doctors, lawyers, creatives — women who don't need a trip, they need the right ones to take it with.",
      "community.role1": "Founders", "community.role2": "Doctors", "community.role3": "Lawyers", "community.role4": "Creatives",
      "community.photoAlt": "La Vie Club members embracing",
      "community.quote1": "I came for the trips. I stayed for the group chat that never goes quiet.",
      "community.name1": "Oksana, Kyiv",
      "community.quote2": "Stretch Club is the only thing that gets me out of bed before an 8am client call.",
      "community.name2": "Marta, Warsaw",
      "community.quote3": "Every table feels like the good kind of small talk — the kind that isn't small at all.",
      "community.name3": "Julia, Kyiv",

      "join.eyebrow": "Membership",
      "join.heading": "Request your invitation.",
      "join.sub": "La Vie Club is not open enrollment. Tell us who you are and where you're based, and we'll bring you into the right circle — a trip, a stretch session, a match.",
      "join.note": "You can also reach us directly on Telegram or Instagram — links in the footer.",
      "join.rule1": "Invitation-based",
      "join.rule2": "Limited seats, every season",
      "join.rule3": "A closed circle, not a mailing list",
      "join.name": "Name", "join.city": "City", "join.email": "Email",
      "join.interest": "What are you most drawn to?",
      "join.opt1": "Girls Trips", "join.opt2": "Stretch Club", "join.opt3": "Tennis Club", "join.opt4": "Brunches",
      "join.about": "A little about you",
      "join.submit": "Send Request",
      "join.sent": "Thank you — your request has been noted. We'll be in touch.",

      "footer.tag": "A women's club for travel, movement and belonging. Kyiv · Warsaw · Europe.",
      "footer.explore": "Explore", "footer.connect": "Connect", "footer.based": "Based in",
      "footer.destinations": "2026 Destinations",
      "footer.privacy": "Privacy Policy",
      "footer.rights": "All rights reserved",

      "privacy.eyebrow": "Legal",
      "privacy.heading": "Privacy Policy",
      "privacy.updated": "Last updated: July 2026",
      "privacy.intro": "La Vie Club (\"we\", \"us\", \"our club\") respects your privacy. This page explains what information we collect when you use this website, why we collect it, and what choices you have.",
      "privacy.h1": "What we collect",
      "privacy.p1": "When you submit the invitation request form, we collect the information you choose to provide: your name, city, email address, the area you're most drawn to (Girls Trips, Stretch Club, Tennis Club or Brunches), and anything you share in the \"a little about you\" field. We don't collect payment or financial information through this site.",
      "privacy.h2": "Local storage, not tracking cookies",
      "privacy.p2": "This site stores one small piece of information in your browser's local storage: your language preference (English or Ukrainian), so you don't have to reselect it on your next visit. We also remember, in the same way, that you've seen this notice. We do not use tracking cookies, advertising pixels, or third-party analytics on this site. If that changes in the future, we'll update this policy and ask for your consent where required.",
      "privacy.h3": "How we use your information",
      "privacy.p3": "We use the details from your invitation request to respond to you, to understand which experiences you're interested in, and to invite you into the right trip, session or match. We don't sell your information to anyone, and we don't share it with third parties for their own marketing purposes.",
      "privacy.h4": "Instagram and Telegram",
      "privacy.p4": "Links on this site lead to our Instagram and Telegram — both are independent platforms with their own privacy policies. Anything you share with us directly on those platforms (a message, a comment) is governed by their terms, not this page.",
      "privacy.h5": "How long we keep it",
      "privacy.p5": "We keep invitation request details for as long as needed to respond to you and, if you join, for the duration of your membership with the club. You can ask us to delete your information at any time — see \"Your rights\" below.",
      "privacy.h6": "Your rights",
      "privacy.p6": "You can ask us what information we hold about you, ask us to correct it, or ask us to delete it. To do any of this, message us directly on Telegram or Instagram — links are in the footer of this site.",
      "privacy.h7": "Who this applies to",
      "privacy.p7": "This site isn't directed at children, and we don't knowingly collect information from anyone under 16.",
      "privacy.h8": "Changes to this policy",
      "privacy.p8": "If we change how we collect or use information, we'll update this page and change the date at the top.",

      "404.eyebrow": "Not found",
      "404.heading": "This trip isn't on the calendar.",
      "404.body": "The page you're looking for has already moved on — check the address, or head back and start again from the beginning.",
      "404.cta": "Back to La Vie Club"
    },
    ua: {
      "cookie.text": "Цей сайт використовує локальне сховище лише для запам'ятовування мови інтерфейсу — без відстеження, без сторонніх cookie. Детальніше в <a href=\"privacy.html\">Політиці конфіденційності</a>.",
      "cookie.accept": "Зрозуміло",
      "nav.experiences": "Формати",
      "nav.journal": "Журнал",
      "nav.gallery": "Галерея",
      "nav.community": "Спільнота",
      "nav.join": "Подати заявку",

      "hero.eyebrow": "Жіночий клуб — Київ · Варшава · Європа",
      "hero.headline": "Проживай натхненно.",
      "hero.sub": "Насамперед — спільнота: подорожі впродовж усього сезону, щотижневий рух і матчі, довгі бранчі та жінки, які підтримують одна одну між зустрічами.",
      "hero.locations": "Міконос · Санторіні · Мальдіви · Мілан &amp; Комо · Париж · Куршевель · Варшава · Київ",
      "hero.scroll": "Гортати",
      "stats.members": "жінок у спільноті",
      "stats.trips": "поїздок у сезоні 2026",
      "stats.cities": "рідних міста — Київ &amp; Варшава",
      "stats.weeks": "тижнів на рік Stretch &amp; Tennis",

      "manifesto.eyebrow": "Клуб",
      "manifesto.heading": "Простір, де <span class=\"italic accent\">ростеш</span>, а не лише тікаєш.",
      "manifesto.p1": "La Vie Club — це насамперед спільнота: <strong>підприємиці, експертки й жінки, які будують щось своє</strong>, у Києві, Варшаві та по всій Європі. Жінки, які серйозно ставляться до амбіцій — і не дозволяють цьому бути єдиним, чому приділяють увагу.",
      "manifesto.p2": "Ми підтримуємо одна одну на килимку для розтяжки в парку, на тенісному корті, за довгим бранчем і на пляжі за три країни звідси. Кімната інша — намір той самий: <strong>присутність, чесність і одна одна</strong>.",
      "manifesto.pillar1.label": "Спільнота",
      "manifesto.pillar1.desc": "Жінки, які справді підтримують одна одну — не лише на самій зустрічі, а й після неї.",
      "manifesto.pillar2.label": "Розвиток",
      "manifesto.pillar2.desc": "Чесні розмови й справжня рефлексія. Ми тут, щоб рости, а не просто заводити контакти.",
      "manifesto.pillar3.label": "Баланс",
      "manifesto.pillar3.desc": "Простір видихнути — між амбіціями, роботою і рештою повного життя.",
      "manifesto.pillar4.label": "Естетика",
      "manifesto.pillar4.desc": "Кожна зустріч продумана з турботою. Краса тут — не прикраса, а частина суті.",
      "manifesto.founderQuote": "«Кажуть, я надихаю жити сміливо — без «потім».»",
      "manifesto.founderRole": "— засновниця",

      "statement.line": "Компанія завжди була суттю.",

      "experiences.eyebrow": "Чим ми живемо",
      "experiences.heading": "Чотири шляхи всередину.",
      "experiences.lead": "Не туристична агенція. Не фітнес-клуб. Спільнота, яка підтримує тебе у чотирьох постійних форматах.",

      "exp.trips.photo": "Фото очікується — Міконос, girls trip",
      "exp.trips.alt": "Золота година в поїздці La Vie Club",
      "exp.trips.eyebrow": "Girls Trips",
      "exp.trips.title": "Сезон утеч.",
      "exp.trips.desc": "Мальдіви, Міконос, Санторіні, Мілан &amp; Комо, Париж, Куршевель — повний календар на весь рік, з віллами й приватним водієм, плюс камерні позапланові поїздки на кілька місць.",
      "exp.trips.price": "Від 1950€ за поїздку",

      "exp.stretch.eyebrow": "Stretch Club",
      "exp.stretch.alt": "Stretch Club — заняття просто неба",
      "exp.stretch.title": "Щовихідних, просто неба.",
      "exp.stretch.desc": "Ранкові й вечірні заняття у парках Варшави та Києва — килимки надаємо, будь-який рівень підготовки.",
      "exp.stretch.price": "30 злотих за заняття",

      "exp.tennis.eyebrow": "Tennis Club",
      "exp.tennis.alt": "Матч Tennis Club La Vie Club",
      "exp.tennis.title": "Щойно відкрили. Вже свій постійний склад.",
      "exp.tennis.desc": "Закритий щотижневий тенісний клуб у Варшаві та Києві — для новачків і тих, хто вже грає.",

      "exp.brunch.eyebrow": "Бранчі",
      "exp.brunch.alt": "Бранч La Vie Club",
      "exp.brunch.title": "Довгий стіл.",
      "exp.brunch.desc": "Розмова, що триває довго. Свідомо.",

      "season.eyebrow": "Календар",
      "season.heading": "Сезон 2026.",
      "season.lead": "Вісім поїздок, які розбирають сезон за сезоном. Кілька позапланових утеч з'являються без попередження — місць завжди мало.",
      "season.limited": "Мало місць",
      "season.next": "Найближча поїздка",
      "season.date1": "20–27 бер", "season.name1": "Мальдіви",
      "season.date2": "15–21 чер", "season.name2": "Міконос",
      "season.date3": "15–21 лип", "season.name3": "Санторіні",
      "season.date4": "15–21 сер", "season.name4": "Міконос",
      "season.date5": "7–12 вер", "season.name5": "Мілан &amp; Комо",
      "season.date6": "10–17 жов", "season.name6": "Париж &amp; Етрета",
      "season.date7": "20–27 жов", "season.name7": "Мальдіви",
      "season.date8": "14–18 гру", "season.name8": "Куршевель",
      "season.cta": "Актуальні місця — в Telegram →",

      "journal.eyebrow": "Журнал",
      "journal.heading": "Останні моменти.",
      "journal.lead": "Хроніка сезону — вілли, корти, ранки в парку — реальні поїздки й реальні обличчя, без стокових фото.",
      "journal.tag1": "Міконос", "journal.tag2": "Санторіні", "journal.tag3": "Stretch — Варшава",
      "journal.tag4": "Stretch — Київ", "journal.tag5": "Мальдіви", "journal.tag6": "Мілан &amp; Комо",
      "journal.tag7": "Париж &amp; Етрета", "journal.tag8": "Tennis Club",
      "journal.alt1": "Поїздка La Vie Club на Міконос",
      "journal.alt2": "Поїздка La Vie Club на Санторіні",
      "journal.alt3": "Stretch Club — заняття просто неба",
      "journal.alt4": "Stretch Club — заняття просто неба",
      "journal.alt5": "Поїздка La Vie Club на Мальдіви",
      "journal.alt6": "Поїздка La Vie Club до Мілана і Комо",
      "journal.alt7": "Поїздка La Vie Club до Парижа і Етрета",
      "journal.alt8": "Tennis Club La Vie Club",
      "journal.dispatch1": "Депеша №01", "journal.dispatch2": "Депеша №02",
      "journal.dispatch3": "Депеша №03", "journal.dispatch4": "Депеша №04",
      "journal.dispatch5": "Депеша №05", "journal.dispatch6": "Депеша №06",
      "journal.dispatch7": "Депеша №07", "journal.dispatch8": "Депеша №08",

      "gallery.eyebrow": "Без фільтрів",
      "gallery.heading": "Дивись на сезон.",
      "gallery.lead": "Прямо з рілсів і камер клубу — без сценарію, без перезйомки. Торкнись, щоб відтворити.",
      "gallery.cap1": "Прибуття, повітрям",
      "gallery.cap2": "Золота година, Міконос",
      "gallery.alt2": "Золота година в поїздці La Vie Club на Міконос",
      "gallery.cap3": "Ніч у дусі закритого клубу",
      "gallery.cap4": "Матч-пойнт",
      "gallery.cap5": "Деталі завжди мають значення",
      "gallery.alt5": "Деталі поїздки La Vie Club",
      "gallery.cap6": "Тост нізащо",
      "gallery.cap7": "Заради цього все і затівалось",
      "gallery.alt7": "Учасниці La Vie Club обіймаються",
      "gallery.cap8": "Останнє світло",
      "gallery.cap9": "По дорозі до наступної",
      "gallery.alt9": "Учасниці La Vie Club на швидкісному катері",
      "gallery.cap10": "Десь на Рив'єрі",
      "gallery.cap11": "Під вітрилом",
      "gallery.cap12": "Вид згори",
      "gallery.cap13": "Спершу кава",
      "gallery.alt13": "Кава біля басейну в поїздці La Vie Club",
      "gallery.cap14": "Золота година, завжди",
      "gallery.alt14": "Золота година з La Vie Club",
      "gallery.more": "Ще більше в Instagram →",

      "community.eyebrow": "Їхніми словами",
      "community.heading": "Хто в колі.",
      "community.lead": "Засновниці, лікарки, юристки, творчі жінки — ті, кому не потрібна поїздка, їм потрібні правильні супутниці для неї.",
      "community.role1": "Засновниці", "community.role2": "Лікарки", "community.role3": "Юристки", "community.role4": "Творчі жінки",
      "community.photoAlt": "Учасниці La Vie Club обіймаються",
      "community.quote1": "Я прийшла заради поїздок. Залишилась заради чату, який ніколи не змовкає.",
      "community.name1": "Оксана, Київ",
      "community.quote2": "Stretch Club — єдине, що піднімає мене з ліжка до дзвінка з клієнтом о восьмій ранку.",
      "community.name2": "Марта, Варшава",
      "community.quote3": "За кожним столом — та розмова, яка ніби й дрібниця, але насправді зовсім ні.",
      "community.name3": "Юлія, Київ",

      "join.eyebrow": "Членство",
      "join.heading": "Подай заявку на запрошення.",
      "join.sub": "La Vie Club — це не вільна реєстрація. Розкажи, хто ти і де живеш, — і ми приведемо тебе у правильне коло: поїздку, розтяжку чи матч.",
      "join.note": "Також можеш написати нам напряму в Telegram чи Instagram — посилання внизу сторінки.",
      "join.rule1": "За запрошенням",
      "join.rule2": "Обмежена кількість місць щосезону",
      "join.rule3": "Закрите коло, а не розсилка",
      "join.name": "Ім'я", "join.city": "Місто", "join.email": "Email",
      "join.interest": "Що приваблює найбільше?",
      "join.opt1": "Girls Trips", "join.opt2": "Stretch Club", "join.opt3": "Tennis Club", "join.opt4": "Бранчі",
      "join.about": "Трохи про тебе",
      "join.submit": "Надіслати заявку",
      "join.sent": "Дякуємо — заявку отримано. Ми зв'яжемось з тобою.",

      "footer.tag": "Жіночий клуб для подорожей, руху і належності. Київ · Варшава · Європа.",
      "footer.explore": "Розділи", "footer.connect": "Зв'язок", "footer.based": "Базуємось у",
      "footer.destinations": "Напрямки 2026",
      "footer.privacy": "Політика конфіденційності",
      "footer.rights": "Усі права захищено",

      "privacy.eyebrow": "Правова інформація",
      "privacy.heading": "Політика конфіденційності",
      "privacy.updated": "Оновлено: липень 2026",
      "privacy.intro": "La Vie Club (\"ми\", \"наш клуб\") поважає вашу приватність. Ця сторінка пояснює, яку інформацію ми збираємо, коли ви користуєтесь цим сайтом, навіщо ми її збираємо і який у вас є вибір.",
      "privacy.h1": "Що ми збираємо",
      "privacy.p1": "Коли ви надсилаєте заявку на запрошення, ми отримуємо інформацію, яку ви вирішили надати: ім'я, місто, електронну адресу, напрямок, який вас найбільше приваблює (Girls Trips, Stretch Club, Tennis Club або Бранчі), а також усе, що ви вкажете в полі \"трохи про тебе\". Ми не збираємо платіжну чи фінансову інформацію через цей сайт.",
      "privacy.h2": "Локальне сховище, а не трекінгові cookie",
      "privacy.p2": "Цей сайт зберігає в локальному сховищі браузера лише одну невелику деталь: вашу мовну перевагу (англійська чи українська), щоб не доводилось обирати її щоразу заново. Так само ми запам'ятовуємо, що ви вже бачили цю сповіщення. Ми не використовуємо трекінгові cookie, рекламні піксели чи сторонню аналітику на цьому сайті. Якщо це зміниться в майбутньому, ми оновимо цю політику і запитаємо вашу згоду там, де це потрібно.",
      "privacy.h3": "Як ми використовуємо вашу інформацію",
      "privacy.p3": "Ми використовуємо дані з вашої заявки, щоб відповісти вам, зрозуміти, які формати вас цікавлять, і запросити вас у правильну поїздку, заняття чи матч. Ми не продаємо вашу інформацію нікому і не передаємо її третім сторонам для їхніх власних маркетингових цілей.",
      "privacy.h4": "Instagram та Telegram",
      "privacy.p4": "Посилання на цьому сайті ведуть до нашого Instagram та Telegram — обидві платформи незалежні і мають власні політики конфіденційності. Усе, чим ви ділитесь з нами безпосередньо на цих платформах (повідомлення, коментар), регулюється їхніми умовами, а не цією сторінкою.",
      "privacy.h5": "Як довго ми зберігаємо дані",
      "privacy.p5": "Ми зберігаємо дані заявки стільки, скільки потрібно, щоб відповісти вам, а якщо ви приєднаєтесь — протягом усього часу вашого членства в клубі. Ви можете попросити видалити вашу інформацію в будь-який момент — див. \"Ваші права\" нижче.",
      "privacy.h6": "Ваші права",
      "privacy.p6": "Ви можете запитати, яку інформацію про вас ми зберігаємо, попросити її виправити або видалити. Для цього напишіть нам напряму в Telegram чи Instagram — посилання внизу сторінки.",
      "privacy.h7": "Кого це стосується",
      "privacy.p7": "Цей сайт не призначений для дітей, і ми свідомо не збираємо інформацію від осіб молодших 16 років.",
      "privacy.h8": "Зміни до цієї політики",
      "privacy.p8": "Якщо ми змінимо спосіб збору чи використання інформації, ми оновимо цю сторінку і змінимо дату вгорі.",

      "404.eyebrow": "Не знайдено",
      "404.heading": "Цієї поїздки немає в календарі.",
      "404.body": "Сторінка, яку ви шукаєте, вже кудись поїхала — перевірте адресу або поверніться на головну.",
      "404.cta": "Повернутись до La Vie Club"
    }
  };

  var currentLang = "en";

  function applyLang(lang){
    currentLang = lang;
    document.documentElement.setAttribute("lang", lang === "ua" ? "uk" : "en");
    var dict = translations[lang];
    document.querySelectorAll("[data-i18n]").forEach(function(el){
      var key = el.getAttribute("data-i18n");
      if (dict[key] === undefined) return;
      if (el.tagName === "OPTION" || el.tagName === "INPUT"){
        el.textContent = dict[key];
      } else {
        el.innerHTML = dict[key];
      }
    });
    document.querySelectorAll("[data-i18n-alt]").forEach(function(el){
      var key = el.getAttribute("data-i18n-alt");
      if (dict[key] !== undefined) el.setAttribute("alt", dict[key]);
    });
    document.querySelectorAll(".lang-toggle button").forEach(function(btn){
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  function storageGet(key){
    try { return localStorage.getItem(key); } catch (e) { return null; }
  }
  function storageSet(key, value){
    try { localStorage.setItem(key, value); } catch (e) { /* storage unavailable — degrade silently */ }
  }

  document.querySelectorAll(".lang-toggle button").forEach(function(btn){
    btn.addEventListener("click", function(){
      applyLang(btn.getAttribute("data-lang"));
      storageSet("lvc_lang", btn.getAttribute("data-lang"));
    });
  });

  /* ---------------- cookie notice — discloses the one real local-storage use above ---------------- */
  var cookieNotice = document.getElementById("cookieNotice");
  var cookieAccept = document.getElementById("cookieAccept");
  if (cookieNotice && cookieAccept){
    if (!storageGet("lvc_cookie_ack")){
      cookieNotice.classList.add("is-visible");
    }
    cookieAccept.addEventListener("click", function(){
      storageSet("lvc_cookie_ack", "1");
      cookieNotice.classList.remove("is-visible");
    });
  }

  /* ---------------- hero video (falls back to placeholder if no file yet) ---------------- */
  var heroVideo = document.getElementById("heroVideo");
  var heroMedia = document.getElementById("heroMedia");
  if (heroVideo){
    function markVideoReady(){
      heroVideo.classList.add("is-ready");
      heroMedia.classList.add("has-video");
    }
    heroVideo.addEventListener("loadeddata", markVideoReady);
    // A cached video can reach readyState >= HAVE_CURRENT_DATA before this
    // script runs, so "loadeddata" never fires again — check directly too.
    if (heroVideo.readyState >= 2) markVideoReady();
    heroVideo.addEventListener("error", function(){
      heroVideo.remove();
    });
    // If no <source> resolves, the element itself errors on the source, not always the video tag.
    heroVideo.querySelectorAll("source").forEach(function(src){
      src.addEventListener("error", function(){ heroVideo.remove(); });
    });
  }

  /* ---------------- header state on scroll ---------------- */
  var header = document.getElementById("siteHeader");
  var hasHero = !!document.querySelector(".hero");
  function onScroll(){
    if (!hasHero) return; // content pages (e.g. privacy.html) have no dark hero to contrast against
    var y = window.scrollY || window.pageYOffset;
    var scrolled = y > 40;
    var dark = !scrolled;
    header.classList.toggle("is-scrolled", scrolled);
    header.classList.toggle("is-hero-dark", dark);
  }
  if (hasHero){
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
  }

  /* ---------------- mobile nav ---------------- */
  var navToggle = document.getElementById("navToggle");
  var mobileNav = document.getElementById("mobileNav");
  navToggle.addEventListener("click", function(){
    var open = mobileNav.classList.toggle("is-open");
    navToggle.setAttribute("aria-expanded", open ? "true" : "false");
  });
  mobileNav.querySelectorAll("a").forEach(function(a){
    a.addEventListener("click", function(){
      mobileNav.classList.remove("is-open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });

  /* ---------------- scroll reveal ---------------- */
  var revealEls = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window){
    var io = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          entry.target.classList.add("is-visible");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });
    revealEls.forEach(function(el){ io.observe(el); });
  } else {
    revealEls.forEach(function(el){ el.classList.add("is-visible"); });
  }

  /* ---------------- season — badge whichever real trip is coming up next ---------------- */
  (function(){
    var items = document.querySelectorAll(".season-item[data-end]");
    var today = new Date(); today.setHours(0,0,0,0);
    for (var i = 0; i < items.length; i++){
      var end = new Date(items[i].getAttribute("data-end"));
      if (end >= today){
        var badge = document.createElement("span");
        badge.className = "season-next-badge";
        badge.setAttribute("data-i18n", "season.next");
        badge.textContent = translations[currentLang]["season.next"];
        var top = items[i].querySelector(".season-top");
        top.appendChild(badge);
        items[i].classList.add("is-next");
        break;
      }
    }
  })();

  /* ---------------- stat count-up (real figures, animated once in view) ---------------- */
  var reduceMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var statEls = document.querySelectorAll(".stat-num[data-count-to]");
  function animateCount(el){
    var target = parseInt(el.getAttribute("data-count-to"), 10);
    var suffix = el.getAttribute("data-suffix") || "";
    if (reduceMotion){ el.textContent = target.toLocaleString("en-US") + suffix; return; }
    var start = null, dur = 1400;
    function tick(ts){
      if (start === null) start = ts;
      var p = Math.min(1, (ts - start) / dur);
      var eased = 1 - Math.pow(1 - p, 3);
      el.textContent = Math.round(target * eased).toLocaleString("en-US") + suffix;
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }
  if (statEls.length && "IntersectionObserver" in window){
    var statIo = new IntersectionObserver(function(entries){
      entries.forEach(function(entry){
        if (entry.isIntersecting){
          animateCount(entry.target);
          statIo.unobserve(entry.target);
        }
      });
    }, { threshold: 0.4 });
    statEls.forEach(function(el){ statIo.observe(el); });
  } else {
    statEls.forEach(animateCount);
  }

  /* ---------------- back to top ---------------- */
  var toTop = document.getElementById("toTop");
  if (toTop){
    function onScrollToTop(){
      var y = window.scrollY || window.pageYOffset;
      toTop.classList.toggle("is-visible", y > 700);
    }
    window.addEventListener("scroll", onScrollToTop, { passive: true });
    onScrollToTop();
    toTop.addEventListener("click", function(){
      window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
    });
  }

  /* ---------------- magnetic hover on primary CTAs ---------------- */
  var magneticEls = document.querySelectorAll(".magnetic");
  if (magneticEls.length && !reduceMotion && window.matchMedia && window.matchMedia("(hover: hover) and (pointer: fine)").matches){
    magneticEls.forEach(function(el){
      var ox = 0, oy = 0;
      function apply(pressed){
        el.style.transform = "translate(" + ox.toFixed(1) + "px," + oy.toFixed(1) + "px)" + (pressed ? " scale(0.96)" : "");
      }
      el.addEventListener("mousemove", function(e){
        var r = el.getBoundingClientRect();
        ox = (e.clientX - r.left - r.width / 2) * 0.25;
        oy = (e.clientY - r.top - r.height / 2) * 0.35;
        apply(false);
      });
      el.addEventListener("mouseleave", function(){ ox = 0; oy = 0; apply(false); });
      el.addEventListener("mousedown", function(){ apply(true); });
      el.addEventListener("mouseup", function(){ apply(false); });
    });
  }

  /* ---------------- gallery lightbox ---------------- */
  var lightbox = document.getElementById("lightbox");
  var lightboxStage = document.getElementById("lightboxStage");
  var lightboxClose = document.getElementById("lightboxClose");

  function closeLightbox(){
    lightbox.classList.remove("is-open");
    lightboxStage.innerHTML = "";
  }
  function openLightbox(type, src){
    lightboxStage.innerHTML = "";
    var el;
    if (type === "video"){
      el = document.createElement("video");
      el.src = src;
      el.controls = true;
      el.autoplay = true;
      el.playsInline = true;
    } else {
      el = document.createElement("img");
      el.src = src;
      el.alt = "";
    }
    lightboxStage.appendChild(el);
    lightbox.classList.add("is-open");
  }
  document.querySelectorAll(".gallery-item").forEach(function(btn){
    btn.addEventListener("click", function(){
      openLightbox(btn.getAttribute("data-type"), btn.getAttribute("data-src"));
    });
  });
  lightboxClose.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", function(e){
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener("keydown", function(e){
    if (e.key === "Escape") closeLightbox();
  });

  /* ---------------- invite form (static — no backend yet) ---------------- */
  var form = document.getElementById("inviteForm");
  if (form){
    form.addEventListener("submit", function(e){
      e.preventDefault();
      var btn = form.querySelector("button[type=submit]");
      btn.textContent = translations[currentLang]["join.sent"];
      btn.disabled = true;
    });
  }

  applyLang(storageGet("lvc_lang") === "ua" ? "ua" : "en");

  /* ---------------- page-load reveal — a brief arrival moment before the hero shows ---------------- */
  var pageLoader = document.getElementById("pageLoader");
  if (pageLoader){
    setTimeout(function(){
      pageLoader.classList.add("is-hidden");
    }, 900);
  }
})();
