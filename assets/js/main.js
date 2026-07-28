(function(){
  "use strict";

  /* ---------------- i18n dictionary ---------------- */
  var translations = {
    en: {
      "nav.experiences": "Experiences",
      "nav.journal": "Journal",
      "nav.community": "Community",
      "nav.join": "Request Invitation",

      "hero.eyebrow": "Women's Club — Kyiv · Warsaw · Europe",
      "hero.headline": "A life worth&nbsp;living, fully.",
      "hero.sub": "Girls trips, movement, tennis and brunches for women who take their one life seriously — and their joy even more so.",
      "hero.locations": "Mykonos · French Riviera · Maldives · Warsaw · Kyiv",
      "hero.scroll": "Scroll",
      "hero.placeholder": "Photo pending — French Riviera, golden hour",

      "manifesto.eyebrow": "The Club",
      "manifesto.heading": "Not an escape<br>from your life.<br><span class=\"italic accent\">A return</span> to it.",
      "manifesto.p1": "La Vie Club is a private circle for <strong>entrepreneurs, experts and women building something of their own</strong> — across Kyiv, Warsaw and the rest of Europe. Women who take their careers seriously, and refuse to let that be the only thing they take seriously.",
      "manifesto.p2": "We meet on yachts off Mykonos and on a stretch mat in a Warsaw park. Over brunch, over a match, over a glass of something good. The setting changes; what we come back for doesn't — <strong>quality, in company and in life</strong>.",
      "manifesto.quote": "“You don’t need another trip. You need people who make you want to come back.”",

      "experiences.eyebrow": "What we do",
      "experiences.heading": "Four ways in.",
      "experiences.lead": "Not a tour operator. Not a gym. A standing invitation, in four forms — join one or join all.",

      "exp.trips.photo": "Photo pending — Mykonos, girls trip",
      "exp.trips.eyebrow": "Girls Trips",
      "exp.trips.title": "Mykonos. French Riviera. Maldives.",
      "exp.trips.desc": "Small, curated trips built around villas, boats and people worth flying for — not itineraries built around sights.",

      "exp.stretch.photo": "Photo pending — Stretch Club, Warsaw park",
      "exp.stretch.eyebrow": "Stretch Club",
      "exp.stretch.title": "Outdoor, every week.",
      "exp.stretch.desc": "Movement in the open air, in Warsaw and Kyiv — the one standing appointment you keep for yourself.",

      "exp.tennis.photo": "Photo pending — Tennis Club",
      "exp.tennis.eyebrow": "Tennis Club",
      "exp.tennis.title": "Court time, good company.",
      "exp.tennis.desc": "Regular matches for every level — competitive, social, never precious about it.",

      "exp.brunch.photo": "Photo",
      "exp.brunch.eyebrow": "Brunches",
      "exp.brunch.title": "The long table.",
      "exp.brunch.desc": "Conversation that runs long, on purpose.",

      "journal.eyebrow": "Journal",
      "journal.heading": "Recent moments.",
      "journal.lead": "A running record of where we've been and who we were with — real trips, real mornings, no stock photography.",
      "journal.tag1": "Mykonos 5.0", "journal.tag2": "French Riviera", "journal.tag3": "Waw Stretch",
      "journal.tag4": "Kyiv Stretch", "journal.tag5": "Maldives", "journal.tag6": "Brunch, Kyiv",
      "journal.tag7": "Cannes", "journal.tag8": "Tennis Club",

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
      "join.sub": "La Vie Club is not open enrollment. Tell us a little about yourself, and we'll be in touch about the next trip, stretch session or match.",
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
      "nav.community": "Спільнота",
      "nav.join": "Подати заявку",

      "hero.eyebrow": "Жіночий клуб — Київ · Варшава · Європа",
      "hero.headline": "Життя, яке варто&nbsp;проживати. Повністю.",
      "hero.sub": "Girls trips, рух, теніс і бранчі для жінок, які серйозно ставляться до свого єдиного життя — і ще серйозніше до власної радості.",
      "hero.locations": "Міконос · Французька Рив'єра · Мальдіви · Варшава · Київ",
      "hero.scroll": "Гортати",
      "hero.placeholder": "Фото очікується — Французька Рив'єра, золота година",

      "manifesto.eyebrow": "Клуб",
      "manifesto.heading": "Це не втеча<br>від свого життя.<br><span class=\"italic accent\">Це повернення</span> до нього.",
      "manifesto.p1": "La Vie Club — це закрите коло для <strong>підприємиць, експерток і жінок, які будують щось своє</strong> — у Києві, Варшаві та по всій Європі. Жінок, які серйозно ставляться до кар'єри й відмовляються робити її єдиним, чому приділяють увагу.",
      "manifesto.p2": "Ми зустрічаємось на яхтах біля Міконоса і на килимку для розтяжки у варшавському парку. За бранчем, за грою, за келихом чогось хорошого. Обстановка змінюється — незмінним лишається те, заради чого повертаємось: <strong>якість — у спілкуванні й у житті</strong>.",
      "manifesto.quote": "«Тобі не потрібна ще одна поїздка. Тобі потрібні люди, до яких хочеться повертатись.»",

      "experiences.eyebrow": "Чим ми живемо",
      "experiences.heading": "Чотири шляхи всередину.",
      "experiences.lead": "Не туристична агенція. Не фітнес-клуб. Постійне запрошення у чотирьох формах — обери один або всі одразу.",

      "exp.trips.photo": "Фото очікується — Міконос, girls trip",
      "exp.trips.eyebrow": "Girls Trips",
      "exp.trips.title": "Міконос. Рив'єра. Мальдіви.",
      "exp.trips.desc": "Невеликі кураторські подорожі навколо вілл, яхт і людей, заради яких варто летіти — а не навколо списку визначних місць.",

      "exp.stretch.photo": "Фото очікується — Stretch Club, парк у Варшаві",
      "exp.stretch.eyebrow": "Stretch Club",
      "exp.stretch.title": "Просто неба, щотижня.",
      "exp.stretch.desc": "Рух на свіжому повітрі у Варшаві та Києві — та єдина постійна зустріч, яку тримаєш для себе.",

      "exp.tennis.photo": "Фото очікується — Tennis Club",
      "exp.tennis.eyebrow": "Tennis Club",
      "exp.tennis.title": "Корт і хороша компанія.",
      "exp.tennis.desc": "Регулярні матчі для будь-якого рівня — змагальні, товариські, без зайвого пафосу.",

      "exp.brunch.photo": "Фото",
      "exp.brunch.eyebrow": "Бранчі",
      "exp.brunch.title": "Довгий стіл.",
      "exp.brunch.desc": "Розмова, що триває довго. Свідомо.",

      "journal.eyebrow": "Журнал",
      "journal.heading": "Останні моменти.",
      "journal.lead": "Хроніка того, де ми були і з ким — реальні подорожі, реальні ранки, без стокових фото.",
      "journal.tag1": "Міконос 5.0", "journal.tag2": "Рив'єра", "journal.tag3": "Waw Stretch",
      "journal.tag4": "Kyiv Stretch", "journal.tag5": "Мальдіви", "journal.tag6": "Бранч, Київ",
      "journal.tag7": "Канни", "journal.tag8": "Tennis Club",

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
      "join.sub": "La Vie Club — це не вільна реєстрація. Розкажи трохи про себе, і ми зв'яжемось щодо найближчої поїздки, розтяжки чи матчу.",
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
