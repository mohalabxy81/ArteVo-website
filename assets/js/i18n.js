/*
ArteVo i18n.js — translation workflow

How to add new keys:
- Add the key to both `en` and `ar` objects below.
- Use `data-i18n="key"` for text nodes and `data-i18n-placeholder="key"` for input placeholders in HTML.
- To test: switch language using the button with id `lang-switch` and verify all text updates.
- If a key is missing, the key name will be shown and a warning logged in the console.
- To re-apply translations after dynamic DOM changes, call `applyTranslations(lang)`.
*/

const translations = {
  en: {
    home: "Home",
    about: "About",
    services: "Services",
    gallery: "Gallery",
    clients: "Clients",
    contact: "Contact",
    projects: "Projects",
    welcome: "Welcome to ArteVo",
    partner: "Your partner in creative solutions",
    aboutUs: "Who We Are",
    aboutIntro:
      "If you are looking to create your haven, ArteVo holds the key to unlocking your sanctuary. ArteVo is a full-service interior design firm specializing in sustainable and interior projects. With a strong focus on innovative design solutions and a commitment to environmental responsibility, we strive to create spaces that are aesthetically pleasing and sustainable for future generations.",
    aboutTeam:
      "Our highly skilled professionals bring extensive expertise and a collaborative approach to every project. Through our integrated design process and dedication to excellence, we aim to exceed client expectations and create meaningful spaces that positively impact the built environment.",
    aboutProcess:
      "We utilize advanced 3D models to evaluate and enhance our proposed design concepts effectively. Additionally, when clients express a desire to alter the project's direction to align with their personal preferences, our team diligently employs their expertise to conceive, sketch, and refine designs until we achieve the most optimal outcome. It doesn’t end when we leave your building…we provide the highest standard of aftercare too.",
    ourMission: "Our Mission",
    missionText:
      "We’re passionate about creative concepts and unique designs. Our mission is to inspire, fulfil and uplift. From the beginning of a project, right through to our unparalleled aftercare, we’re by your side.",
    ourVision: "Our Vision",
    visionText:
      "We have the imagination and refined taste to create distinctive designs that stand the test of time. We get deep in details to get the perfection you have never seen before.",
    ourValues: "Our Values",
    value1: "Excellence in every detail",
    value2: "Sustainability and responsibility",
    value3: "Client-focused collaboration",
    value4: "Innovation and creativity",
    branding: "Branding & Identity",
    brandingDesc:
      "We create unique brand identities, logos, and visual guidelines that reflect your vision and values, ensuring your business stands out in the market.",
    interior: "Interior & Exterior Design",
    interiorDesc:
      "Innovative interior and exterior design solutions for residential, commercial, and hospitality spaces, blending artistry with functionality and sustainability.",
    pm: "Project Management",
    pmDesc:
      "Comprehensive project management from concept to completion, ensuring quality, efficiency, and client satisfaction at every stage.",
    marketing: "Advertising & Marketing",
    marketingDesc:
      "Creative advertising campaigns and marketing strategies tailored to elevate your brand and reach your target audience effectively.",
    whyChoose: "Why Choose ArteVo?",
    serviceValue1: "Excellence in every detail",
    serviceValue2: "Sustainable and innovative solutions",
    serviceValue3: "Client-focused collaboration",
    serviceValue4: "Creative vision and expertise",
    projects: "Our Projects",
    projectsDesc:
      "Discover some of our best work and creative solutions for our clients. Each project reflects our passion for detail, innovation, and luxury.",
    wabiSabi: "Wabi Sabi Reception",
    wabiSabiDesc:
      "We chose the Wabi Sabi style for this commercial space, reflecting the client's preference for simplicity and the aesthetics of nature. This style provides an elegant way to describe the beauty of imperfection.",
    modernVilla: "Modern Villa Reception",
    modernVillaDesc:
      "A mix between modern wooden strips and the luxury of open-book marble flooring, creating a unique and comfortable residential villa reception.",
    neoclassic: "Neoclassic Reception",
    neoclassicDesc:
      "The combination of the beauty of the classical past with the comfort and simplicity of the present, resulting in a timeless and elegant space.",
    luxuryApartment: "Luxury Apartment",
    luxuryApartmentDesc:
      "Luxury design is about creating a living space that is elegant, sophisticated, and comfortable, featuring high-quality materials, stylish furniture, and stunning views.",
    gallery: "Gallery",
    galleryWabiSabi: "Wabi Sabi Style",
    galleryModernVilla: "Modern Villa",
    galleryNeoclassic: "Neoclassic Reception",
    galleryBranding: "Branding & Identity",
    galleryInterior: "Interior & Exterior Design",
    galleryPM: "Project Management",
    galleryMarketing: "Advertising & Marketing",
    galleryLuxury: "Luxury Apartment",
    clients: "Our Clients",
    clientsDesc:
      "We are proud to have worked with a diverse range of clients who trust us to deliver excellence and creativity in every project.",
    client1: "Client 1",
    client2: "Client 2",
    client3: "Client 3",
    client4: "Client 4",
    client5: "Client 5",
    contact: "Contact Us",
    contactInfo: "Contact Information",
    namePlaceholder: "Your Name",
    emailPlaceholder: "Your Email",
    messagePlaceholder: "Your Message",
    send: "Send",
    discoverServices: "Discover Our Services",
    readMore: "Read More",
    seeAllProjects: "See All Projects",
    workingProcess: "Our Working Process",
    step1a: "Initial Consultation.",
    step1b: "Budget Discussion.",
    step1c: "Site Visit.",
    step1d: "Concept Development.",
    step2a: "Design Proposal.",
    step2b: "Feedback and Revisions.",
    step2c: "Final Design Approval.",
    step2d: "Material Selection.",
    step3a: "Procurement.",
    step3b: "Execution.",
    step3c: "Regular Updates.",
    step4a: "Final Walkthrough.",
    step4b: "Project Closure.",
    step4c: "Post-Project Support.",
    notFoundMessage: "Sorry, the page you are looking for does not exist.",
    backToHome: "Back to Home",
  },
  ar: {
    home: "الرئيسية",
    about: "من نحن",
    services: "الخدمات",
    gallery: "المعرض",
    clients: "العملاء",
    contact: "اتصل بنا",
    projects: "المشاريع",
    welcome: "مرحبًا بكم في ArteVo",
    partner: "شريككم في الحلول الإبداعية",
    aboutUs: "من نحن",
    aboutIntro:
      "إذا كنت تبحث عن إنشاء ملاذك الخاص، فإن ArteVo تحمل مفتاح فتح ملاذك. ArteVo هي شركة تصميم داخلي متكاملة متخصصة في المشاريع المستدامة والداخلية. مع تركيز قوي على حلول التصميم المبتكرة والالتزام بالمسؤولية البيئية، نسعى لإنشاء مساحات جميلة ومستدامة للأجيال القادمة.",
    aboutTeam:
      "يقدم فريقنا المحترف خبرة واسعة ونهجًا تعاونيًا في كل مشروع. من خلال عملية التصميم المتكاملة والتفاني في التميز، نسعى لتجاوز توقعات العملاء وخلق مساحات ذات تأثير إيجابي على البيئة المبنية.",
    aboutProcess:
      "نستخدم نماذج ثلاثية الأبعاد متقدمة لتقييم وتعزيز مفاهيم التصميم المقترحة بشكل فعال. بالإضافة إلى ذلك، عندما يعبر العملاء عن رغبتهم في تغيير اتجاه المشروع ليتماشى مع تفضيلاتهم الشخصية، يعمل فريقنا بجد لتصميم وتخطيط وتطوير التصاميم حتى نصل إلى أفضل نتيجة ممكنة. ولا ينتهي الأمر عند مغادرتنا المبنى... نحن نقدم أعلى مستوى من الرعاية اللاحقة أيضًا.",
    ourMission: "رسالتنا",
    missionText:
      "نحن شغوفون بالمفاهيم الإبداعية والتصاميم الفريدة. رسالتنا هي الإلهام، والإشباع، والارتقاء. من بداية المشروع وحتى الرعاية اللاحقة الفريدة، نحن بجانبك.",
    ourVision: "رؤيتنا",
    visionText:
      "لدينا الخيال والذوق الرفيع لإنشاء تصاميم مميزة تدوم مع الزمن. نغوص في التفاصيل لنحقق الكمال الذي لم تره من قبل.",
    ourValues: "قيمنا",
    value1: "التميز في كل التفاصيل",
    value2: "الاستدامة والمسؤولية",
    value3: "التعاون مع العميل",
    value4: "الابتكار والإبداع",
    services: "خدماتنا",
    branding: "الهوية والعلامة التجارية",
    brandingDesc:
      "ننشئ هويات بصرية فريدة وشعارات وإرشادات بصرية تعكس رؤيتك وقيمك، لضمان تميز عملك في السوق.",
    interior: "تصميم داخلي وخارجي",
    interiorDesc:
      "حلول تصميم داخلي وخارجي مبتكرة للمساحات السكنية والتجارية والفندقية، تجمع بين الفن والوظيفة والاستدامة.",
    pm: "إدارة المشاريع",
    pmDesc:
      "إدارة مشاريع شاملة من الفكرة إلى التنفيذ، لضمان الجودة والكفاءة ورضا العميل في كل مرحلة.",
    marketing: "الإعلان والتسويق",
    marketingDesc:
      "حملات إعلانية إبداعية واستراتيجيات تسويقية مصممة لرفع علامتك التجارية والوصول إلى جمهورك المستهدف بفعالية.",
    whyChoose: "لماذا ArteVo؟",
    serviceValue1: "التميز في كل التفاصيل",
    serviceValue2: "حلول مستدامة ومبتكرة",
    serviceValue3: "التعاون مع العميل",
    serviceValue4: "رؤية وخبرة إبداعية",
    projects: "مشاريعنا",
    projectsDesc:
      "اكتشف بعض من أفضل أعمالنا وحلولنا الإبداعية لعملائنا. كل مشروع يعكس شغفنا بالتفاصيل والابتكار والفخامة.",
    wabiSabi: "استقبال وابي سابي",
    wabiSabiDesc:
      "اخترنا أسلوب وابي سابي لهذا المكان التجاري، ليعكس تفضيل العميل للبساطة وجمال الطبيعة. يوفر هذا الأسلوب طريقة أنيقة لوصف ما هو طبيعي ونقي، ويسمح لنا بالتعرف على جمال أي مادة أو كائن في شكله الأصلي.",
    modernVilla: "استقبال فيلا حديثة",
    modernVillaDesc:
      "مزيج بين الشرائح الخشبية الحديثة وفخامة أرضية الرخام المفتوحة، لخلق استقبال فيلا سكنية فريدة ومريحة.",
    neoclassic: "استقبال نيوكلاسيك",
    neoclassicDesc:
      "مزيج بين جمال الماضي الكلاسيكي وراحة وبساطة الحاضر، لينتج مساحة خالدة وأنيقة.",
    luxuryApartment: "شقة فاخرة",
    luxuryApartmentDesc:
      "تصميم فاخر يهدف إلى خلق مساحة معيشة أنيقة وراقية ومريحة، مع مواد عالية الجودة وأثاث أنيق وإطلالات رائعة.",
    gallery: "المعرض",
    galleryWabiSabi: "أسلوب وابي سابي",
    galleryModernVilla: "فيلا حديثة",
    galleryNeoclassic: "استقبال نيوكلاسيك",
    galleryBranding: "الهوية والعلامة التجارية",
    galleryInterior: "تصميم داخلي وخارجي",
    galleryPM: "إدارة المشاريع",
    galleryMarketing: "الدعاية والتسويق",
    galleryLuxury: "شقة فاخرة",
    clients: "عملاؤنا",
    clientsDesc:
      "نفخر بالتعامل مع مجموعة متنوعة من العملاء الذين يثقون بنا لتقديم التميز والإبداع في كل مشروع.",
    client1: "عميل 1",
    client2: "عميل 2",
    client3: "عميل 3",
    client4: "عميل 4",
    client5: "عميل 5",
    contact: "تواصل معنا",
    contactInfo: "معلومات التواصل",
    namePlaceholder: "اسمك",
    emailPlaceholder: "بريدك الإلكتروني",
    messagePlaceholder: "رسالتك",
    send: "إرسال",
    discoverServices: "اكتشف خدماتنا",
    readMore: "اقرأ المزيد",
    seeAllProjects: "عرض كل المشاريع",
    workingProcess: "عملية العمل لدينا",
    step1a: "الاستشارة الأولية.",
    step1b: "مناقشة الميزانية.",
    step1c: "زيارة الموقع.",
    step1d: "تطوير الفكرة.",
    step2a: "مقترح التصميم.",
    step2b: "الملاحظات والتعديلات.",
    step2c: "اعتماد التصميم النهائي.",
    step2d: "اختيار المواد.",
    step3a: "التوريد.",
    step3b: "التنفيذ.",
    step3c: "تحديثات منتظمة.",
    step4a: "جولة التسليم النهائية.",
    step4b: "إغلاق المشروع.",
    step4c: "دعم ما بعد التسليم.",
    notFoundMessage: "عذراً، الصفحة التي تبحث عنها غير موجودة.",
    backToHome: "العودة للرئيسية",
  },
};
// Small runtime helpers
const _i18n_missingCache = new Set(); // avoid spamming console for the same missing key
let _i18n_observer = null;
let _i18n_debounce = null;

function getTranslation(key, lang) {
  const dict = translations[lang] || translations.en || {};
  return dict[key] || null;
}

function applyTranslations(lang) {
  const dict = translations[lang] || translations.en || {};
  // Update all elements with data-i18n
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (!key) return;
    const value = dict[key];
    if (value !== undefined && value !== null) {
      el.textContent = value;
    } else {
      el.textContent = key; // visible hint for missing translations
      const cacheKey = `${lang}::${key}`;
      if (!_i18n_missingCache.has(cacheKey)) {
        _i18n_missingCache.add(cacheKey);
        console.warn(`[i18n] Missing translation for key '${key}' in '${lang}'`);
      }
    }
  });
  // Update placeholders
  document.querySelectorAll("[data-i18n-placeholder]").forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (!key) return;
    const value = dict[key];
    if (value !== undefined && value !== null) {
      el.placeholder = value;
    } else {
      el.placeholder = key;
      const cacheKey = `${lang}::placeholder::${key}`;
      if (!_i18n_missingCache.has(cacheKey)) {
        _i18n_missingCache.add(cacheKey);
        console.warn(
          `[i18n] Missing placeholder translation for key '${key}' in '${lang}'`
        );
      }
    }
  });
}

function setLanguage(lang) {
  const chosen = translations[lang] ? lang : "en";
  document.documentElement.lang = chosen;
  document.documentElement.dir = chosen === "ar" ? "rtl" : "ltr";
  // persist choice
  try {
    localStorage.setItem("artevo-lang", chosen);
  } catch (e) {
    /* ignore storage errors */
  }

  var langSwitch = document.getElementById("lang-switch");
  if (langSwitch) {
    // show the target language name (the language the button will switch to)
    const target = chosen === "ar" ? "en" : "ar";
    const label = getTranslation("languageName", target) || (target === "ar" ? "العربية" : "English");
    langSwitch.textContent = label;
  }

  applyTranslations(chosen);
}

function _i18n_enableObserver() {
  if (typeof MutationObserver === "undefined") return;
  if (_i18n_observer) return; // already observing
  _i18n_observer = new MutationObserver((mutations) => {
    // debounce quick bursts
    if (_i18n_debounce) clearTimeout(_i18n_debounce);
    _i18n_debounce = setTimeout(() => {
      const lang = document.documentElement.lang || (localStorage.getItem("artevo-lang") || "en");
      applyTranslations(lang);
    }, 80);
  });
  _i18n_observer.observe(document.body, { childList: true, subtree: true });
}

document.addEventListener("DOMContentLoaded", function () {
  var langSwitch = document.getElementById("lang-switch");
  if (langSwitch) {
    langSwitch.addEventListener("click", () => {
      const currentLang = document.documentElement.lang || (localStorage.getItem("artevo-lang") || "en");
      setLanguage(currentLang === "en" ? "ar" : "en");
    });
  }

  // Determine initial language: localStorage -> html[lang] -> navigator -> default en
  let initial = "en";
  try {
    const stored = localStorage.getItem("artevo-lang");
    if (stored) initial = stored;
  } catch (e) {}
  if (!initial) initial = document.documentElement.lang || undefined;
  if (!initial) {
    const nav = (navigator.language || navigator.userLanguage || "").toLowerCase();
    if (nav.startsWith("ar")) initial = "ar";
    else initial = "en";
  }

  setLanguage(initial);
  // enable dynamic observer so translations apply to injected content
  _i18n_enableObserver();
});
