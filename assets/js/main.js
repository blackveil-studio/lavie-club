(function(){
  "use strict";

  /* ---------------- i18n dictionary ---------------- */
  var translations = {
    en: {
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

      "experiences.eyebrow": "What we do",
      "experiences.heading": "Four ways in.",
      "experiences.lead": "Not a tour operator. Not a gym. A community that shows up for you, in four regular forms.",

      "exp.trips.photo": "Photo pending — Mykonos, girls trip",
      "exp.trips.eyebrow": "Girls Trips",
      "exp.trips.title": "A season of escapes.",
      "exp.trips.desc": "Maldives, Mykonos, Santorini, Milan &amp; Como, Paris, Courchevel — a full calendar across the year, villas and private drivers included, plus intimate off-calendar trips with only a few seats.",
      "exp.trips.price": "From €1,950 per trip",

      "exp.stretch.photo": "Photo pending — Stretch Club, Warsaw park",
      "exp.stretch.eyebrow": "Stretch Club",
      "exp.stretch.title": "Every weekend, outdoors.",
      "exp.stretch.desc": "Morning and evening sessions in the parks of Warsaw and Kyiv — mats provided, every level welcome.",
      "exp.stretch.price": "30 zł per session",

      "exp.tennis.photo": "Photo pending — Tennis Club",
      "exp.tennis.eyebrow": "Tennis Club",
      "exp.tennis.title": "Just launched. Already full of regulars.",
      "exp.tennis.desc": "A closed weekly court club in Warsaw and Kyiv, open to beginners and players alike.",

      "exp.brunch.photo": "Photo",
      "exp.brunch.eyebrow": "Brunches",
      "exp.brunch.title": "The long table.",
      "exp.brunch.desc": "Conversation that runs long, on purpose.",

      "season.eyebrow": "The Calendar",
      "season.heading": "The 2026 season.",
      "season.lead": "Eight trips, booked out season by season. A few off-calendar escapes appear without warning — seats are always limited.",
      "season.limited": "Limited seats",
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
      "journal.pending3": "Photo pending", "journal.pending4": "Photo pending",
      "journal.pending5": "Photo pending", "journal.pending6": "Photo pending",
      "journal.pending8": "Photo pending",

      "gallery.eyebrow": "Unfiltered",
      "gallery.heading": "Watch the season.",
      "gallery.lead": "Straight from the club's own reels and cameras — no script, no re-shoot. Tap anything to play.",
      "gallery.cap1": "Arrival, by air",
      "gallery.cap2": "Golden hour, Mykonos",
      "gallery.cap3": "A closed-club kind of night",
      "gallery.cap4": "Match point",
      "gallery.cap5": "Details, always",
      "gallery.cap6": "Toasting nothing in particular",
      "gallery.cap7": "The whole point",
      "gallery.cap8": "Last light",
      "gallery.cap9": "En route to the next one",
      "gallery.cap10": "Somewhere on the Riviera",
      "gallery.cap11": "Under sail",
      "gallery.cap12": "The view from up here",
      "gallery.more": "More of this on Instagram →",

      "community.eyebrow": "In their words",
      "community.heading": "Who's in the room.",
      "community.lead": "Founders, doctors, lawyers, creatives — women who don't need a trip, they need the right ones to take it with.",
      "community.q1": "Real quote pending — to be replaced with an actual member testimonial once supplied.",
      "community.q2": "Real quote pending — to be replaced with an actual member testimonial once supplied.",
      "community.q3": "Real quote pending — to be replaced with an actual member testimonial once supplied.",
      "community.a1": "<b>—</b> Member, Kyiv",
      "community.a2": "<b>—</b> Member, Warsaw",
      "community.a3": "<b>—</b> Member, Europe",

      "join.eyebrow": "Membership",
      "join.heading": "Request your invitation.",
      "join.sub": "La Vie Club is not open enrollment. Tell us who you are and where you're based, and we'll bring you into the right circle — a trip, a stretch session, a match.",
      "join.note": "You can also reach us directly on Telegram or Instagram — links in the footer.",
      "join.name": "Name", "join.city": "City", "join.email": "Email",
      "join.interest": "What are you most drawn to?",
      "join.opt1": "Girls Trips", "join.opt2": "Stretch Club", "join.opt3": "Tennis Club", "join.opt4": "Brunches",
      "join.about": "A little about you",
      "join.submit": "Send Request",
      "join.sent": "Thank you — your request has been noted. We'll be in touch.",

      "footer.tag": "A women's club for travel, movement and belonging. Kyiv · Warsaw · Europe.",
      "footer.explore": "Explore", "footer.connect": "Connect", "footer.based": "Based in",
      "footer.rights": "All rights reserved"
    },
    ua: {
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

      "experiences.eyebrow": "Чим ми живемо",
      "experiences.heading": "Чотири шляхи всередину.",
      "experiences.lead": "Не туристична агенція. Не фітнес-клуб. Спільнота, яка підтримує тебе у чотирьох постійних форматах.",

      "exp.trips.photo": "Фото очікується — Міконос, girls trip",
      "exp.trips.eyebrow": "Girls Trips",
      "exp.trips.title": "Сезон утеч.",
      "exp.trips.desc": "Мальдіви, Міконос, Санторіні, Мілан &amp; Комо, Париж, Куршевель — повний календар на весь рік, з віллами й приватним водієм, плюс камерні позапланові поїздки на кілька місць.",
      "exp.trips.price": "Від 1950€ за поїздку",

      "exp.stretch.photo": "Фото очікується — Stretch Club, парк у Варшаві",
      "exp.stretch.eyebrow": "Stretch Club",
      "exp.stretch.title": "Щовихідних, просто неба.",
      "exp.stretch.desc": "Ранкові й вечірні заняття у парках Варшави та Києва — килимки надаємо, будь-який рівень підготовки.",
      "exp.stretch.price": "30 злотих за заняття",

      "exp.tennis.photo": "Фото очікується — Tennis Club",
      "exp.tennis.eyebrow": "Tennis Club",
      "exp.tennis.title": "Щойно відкрили. Вже свій постійний склад.",
      "exp.tennis.desc": "Закритий щотижневий тенісний клуб у Варшаві та Києві — для новачків і тих, хто вже грає.",

      "exp.brunch.photo": "Фото",
      "exp.brunch.eyebrow": "Бранчі",
      "exp.brunch.title": "Довгий стіл.",
      "exp.brunch.desc": "Розмова, що триває довго. Свідомо.",

      "season.eyebrow": "Календар",
      "season.heading": "Сезон 2026.",
      "season.lead": "Вісім поїздок, які розбирають сезон за сезоном. Кілька позапланових утеч з'являються без попередження — місць завжди мало.",
      "season.limited": "Мало місць",
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
      "journal.pending3": "Фото очікується", "journal.pending4": "Фото очікується",
      "journal.pending5": "Фото очікується", "journal.pending6": "Фото очікується",
      "journal.pending8": "Фото очікується",

      "gallery.eyebrow": "Без фільтрів",
      "gallery.heading": "Дивись на сезон.",
      "gallery.lead": "Прямо з рілсів і камер клубу — без сценарію, без перезйомки. Торкнись, щоб відтворити.",
      "gallery.cap1": "Прибуття, повітрям",
      "gallery.cap2": "Золота година, Міконос",
      "gallery.cap3": "Ніч у дусі закритого клубу",
      "gallery.cap4": "Матч-пойнт",
      "gallery.cap5": "Деталі завжди мають значення",
      "gallery.cap6": "Тост нізащо",
      "gallery.cap7": "Заради цього все і затівалось",
      "gallery.cap8": "Останнє світло",
      "gallery.cap9": "По дорозі до наступної",
      "gallery.cap10": "Десь на Рив'єрі",
      "gallery.cap11": "Під вітрилом",
      "gallery.cap12": "Вид згори",
      "gallery.more": "Ще більше в Instagram →",

      "community.eyebrow": "Їхніми словами",
      "community.heading": "Хто в колі.",
      "community.lead": "Засновниці, лікарки, юристки, творчі жінки — ті, кому не потрібна поїздка, їм потрібні правильні супутниці для неї.",
      "community.q1": "Реальна цитата очікується — буде замінена на справжній відгук учасниці.",
      "community.q2": "Реальна цитата очікується — буде замінена на справжній відгук учасниці.",
      "community.q3": "Реальна цитата очікується — буде замінена на справжній відгук учасниці.",
      "community.a1": "<b>—</b> Учасниця, Київ",
      "community.a2": "<b>—</b> Учасниця, Варшава",
      "community.a3": "<b>—</b> Учасниця, Європа",

      "join.eyebrow": "Членство",
      "join.heading": "Подай заявку на запрошення.",
      "join.sub": "La Vie Club — це не вільна реєстрація. Розкажи, хто ти і де живеш, — і ми приведемо тебе у правильне коло: поїздку, розтяжку чи матч.",
      "join.note": "Також можеш написати нам напряму в Telegram чи Instagram — посилання внизу сторінки.",
      "join.name": "Ім'я", "join.city": "Місто", "join.email": "Email",
      "join.interest": "Що приваблює найбільше?",
      "join.opt1": "Girls Trips", "join.opt2": "Stretch Club", "join.opt3": "Tennis Club", "join.opt4": "Бранчі",
      "join.about": "Трохи про тебе",
      "join.submit": "Надіслати заявку",
      "join.sent": "Дякуємо — заявку отримано. Ми зв'яжемось з тобою.",

      "footer.tag": "Жіночий клуб для подорожей, руху і належності. Київ · Варшава · Європа.",
      "footer.explore": "Розділи", "footer.connect": "Зв'язок", "footer.based": "Базуємось у",
      "footer.rights": "Усі права захищено"
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
    document.querySelectorAll(".lang-toggle button").forEach(function(btn){
      btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
    });
  }

  document.querySelectorAll(".lang-toggle button").forEach(function(btn){
    btn.addEventListener("click", function(){ applyLang(btn.getAttribute("data-lang")); });
  });

  /* ---------------- hero video (falls back to placeholder if no file yet) ---------------- */
  var heroVideo = document.getElementById("heroVideo");
  var heroMedia = document.getElementById("heroMedia");
  if (heroVideo){
    heroVideo.addEventListener("loadeddata", function(){
      heroVideo.classList.add("is-ready");
      heroMedia.classList.add("has-video");
    });
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
  var heroHeight = function(){ var h = document.querySelector(".hero"); return h ? h.offsetHeight : 600; };

  function onScroll(){
    var y = window.scrollY || window.pageYOffset;
    header.classList.toggle("is-scrolled", y > 40);
    header.classList.toggle("is-hero-dark", y < heroHeight() - 80);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

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

  applyLang("en");
})();
