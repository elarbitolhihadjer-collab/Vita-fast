// Année automatique dans le pied de page.
document.getElementById("year").textContent = new Date().getFullYear();

// Menu mobile accessible.
const menuButton = document.querySelector(".menu-toggle");
const navigation = document.querySelector(".nav-links");

if (menuButton && navigation) {
  menuButton.addEventListener("click", () => {
    const isOpen = navigation.classList.toggle("open");
    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute("aria-label", isOpen ? "Fermer le menu" : "Ouvrir le menu");
  });

  navigation.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navigation.classList.remove("open");
      menuButton.setAttribute("aria-expanded", "false");
      menuButton.setAttribute("aria-label", "Ouvrir le menu");
    });
  });
}

// Apparition douce des sections au défilement.
const revealItems = document.querySelectorAll(".reveal");
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver((entries, currentObserver) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        currentObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("visible"));
}

// Mise en évidence du lien correspondant à la section visible.
const sections = document.querySelectorAll("main section[id]");
const navLinks = document.querySelectorAll(".nav-links a");
if ("IntersectionObserver" in window && sections.length && navLinks.length) {
  const sectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        navLinks.forEach((link) => {
          link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
        });
      }
    });
  }, { rootMargin: "-35% 0px -55% 0px" });
  sections.forEach((section) => sectionObserver.observe(section));
}


// Bilingue français / arabe : bascule instantanée sans rechargement.
const translations = {
  fr: {
    '.announcement':'Laboratoire d’analyses médicales · Aïn El Turk, Oran',
    '.announcement a':'Appeler : 0563 30 44 52 ↗',
    '.nav-links a:nth-child(1)':'Accueil','.nav-links a:nth-child(2)':'Nos services','.nav-links a:nth-child(3)':'Le laboratoire','.nav-links a:nth-child(4)':'Réseaux','.nav-links a:nth-child(5)':'Localisation','.nav-links a:nth-child(6)':'Contact',
    '.header-cta':'Nous contacter ↗',
    '.social-profile-status':'AÏN EL TURK · ORAN','.social-profile-subtitle':'LABORATOIRE D’ANALYSES MÉDICALES','.social-profile-intro':'Retrouvez-nous sur vos réseaux sociaux et contactez facilement notre équipe.',
    '.social-profile-actions a:nth-child(2)':'⌖ Nous trouver ↗','.eyebrow':'RESTONS CONNECTÉS',
    '.social-profile-heading h3':'Suivez-nous <em>en ligne</em>','.social-profile-heading p':'Choisissez votre plateforme préférée pour suivre nos actualités ou nous contacter.',
    '.profile-social-link.whatsapp .profile-social-copy small':'Contact direct',
    '.hero-content .eyebrow':'AÏN EL TURK · ORAN','.hero h1':'Votre santé mérite<br><em>toute notre attention.</em>',
    '.hero-lead':'VITA FAST, votre laboratoire d’analyses médicales. Retrouvez ici nos services, nos coordonnées et les moyens de nous contacter.',
    '.hero-actions .btn-white':'Contacter le laboratoire ↗','.hero-actions .btn-outline':'Voir la localisation ⌖',
    '.hero-meta span:first-child':'<b>24/24 </b>|<b>7/7 </b> Disponibilité affichée','.hero-meta span:last-child':'<b>Aïn El Turk</b> Oran, Algérie',
    '.section-head .eyebrow':'NOTRE SAVOIR-FAIRE','.section-head h2':'Analyses médicales <em>& explorations</em>','.section-head p':'Découvrez les domaines d’exploration et les services présentés par le laboratoire.',
    '.about-copy .eyebrow':'VITA FAST','.about-copy h2':'Un espace dédié<br>à vos <em>analyses.</em>','.about-copy > p':'Le site VITA FAST rassemble les informations essentielles du laboratoire pour vous aider à retrouver facilement ses services, son adresse et ses moyens de contact.',
    '.contact-intro .eyebrow':'NOUS TROUVER','.contact-intro h2':'Restons en<br><em>contact.</em>','.contact-intro > p':'Une question ou besoin de localiser le laboratoire ? Retrouvez toutes les coordonnées ici.',
    '.contact-intro .btn':'Écrire sur WhatsApp ↗','.map-heading .eyebrow':'ACCÈS AU LABORATOIRE','.map-heading h2':'Retrouvez-nous <em>facilement.</em>','.map-heading > p':'Consultez notre emplacement sur la carte et préparez votre itinéraire jusqu’au laboratoire.','.map-label':'NOTRE ADRESSE','.map-details h3':'VITA FAST – Aïn El Turk','.map-details > p':'En face de la boulangerie Yazid, à côté du Grand Marché.<br>Aïn El Turk, Oran, Algérie.','.map-directions-label':'Ouvrir l’itinéraire sur Google Maps','.map-details > small':'Activez la localisation sur votre téléphone pour obtenir un itinéraire depuis votre position.','.contact-intro .btn':'Écrire sur WhatsApp ↗','.back-top':'Retour en haut ↑'
  },
  ar: {
    '.announcement':'مخبر التحاليل الطبية · عين الترك، وهران',
    '.announcement a':'اتصل بنا: <bdi dir="ltr">0563 30 44 52</bdi> ↗',
    '.nav-links a:nth-child(1)':'الرئيسية','.nav-links a:nth-child(2)':'خدماتنا','.nav-links a:nth-child(3)':'المخبر','.nav-links a:nth-child(4)':'شبكات التواصل','.nav-links a:nth-child(5)':'الموقع','.nav-links a:nth-child(6)':'اتصل بنا',
    '.header-cta':'تواصل معنا ↗',
    '.social-profile-status':'عين الترك · وهران','.social-profile-subtitle':'مخبر التحاليل الطبية','.social-profile-intro':'تابعونا على شبكات التواصل الاجتماعي أو تواصلوا مع فريقنا بسهولة.',
    '.social-profile-actions a:nth-child(2)':'⌖ موقعنا ↗','.eyebrow':'ابقوا على تواصل',
    '.social-profile-heading h3':'تابعونا <em>على الإنترنت</em>','.social-profile-heading p':'اختاروا منصتكم المفضلة لمتابعة جديدنا أو التواصل معنا.',
    '.profile-social-link.whatsapp .profile-social-copy small':'تواصل مباشر',
    '.hero-content .eyebrow':'عين الترك · وهران','.hero h1':'صحتكم تستحق<br><em>كل اهتمامنا.</em>',
    '.hero-lead':'فيتا فاست، مخبركم للتحاليل الطبية. اكتشفوا خدماتنا ومعلومات الاتصال وطرق التواصل معنا.',
    '.hero-actions .btn-white':'اتصلوا بالمخبر ↗','.hero-actions .btn-outline':'عرض الموقع ⌖',
    '.hero-meta span:first-child':'<b>24/24 </b>|<b>7/7 </b> التوفر المعلن','.hero-meta span:last-child':'<b>عين الترك</b> وهران، الجزائر',
    '.section-head .eyebrow':'خبرتنا','.section-head h2':'التحاليل الطبية <em>والفحوصات</em>','.section-head p':'اكتشفوا مجالات الاستكشاف والخدمات التي يقدمها المخبر.',
    '.about-copy .eyebrow':'فيتا فاست','.about-copy h2':'فضاء مخصص<br><em>لتحاليلكم.</em>','.about-copy > p':'يجمع موقع فيتا فاست المعلومات الأساسية للمخبر، لتسهيل الاطلاع على الخدمات والعنوان ووسائل الاتصال.',
    '.contact-intro .eyebrow':'موقعنا','.contact-intro h2':'نحن هنا<br><em>للتواصل.</em>','.contact-intro > p':'لديكم سؤال أو تحتاجون إلى معرفة موقع المخبر؟ تجدون هنا جميع معلومات الاتصال.',
    '.map-heading .eyebrow':'كيفية الوصول إلى المخبر','.map-heading h2':'اعثروا علينا <em>بسهولة.</em>','.map-heading > p':'شاهدوا موقعنا على الخريطة واستعدوا لمسار الوصول إلى المخبر.','.map-label':'عنواننا','.map-details h3':'فيتا فاست – عين الترك','.map-details > p':'مقابل مخبزة يزيد، بجانب السوق الكبير.<br>عين الترك، وهران، الجزائر.','.map-directions-label':'افتحوا مسار الوصول على خرائط Google','.map-details > small':'فعّلوا خدمة تحديد الموقع على هاتفكم للحصول على المسار انطلاقاً من موقعكم الحالي.','.contact-intro .btn':'راسلونا عبر واتساب ↗','.back-top':'العودة إلى الأعلى ↑'
  }
};
const languageToggle = document.getElementById('languageToggle');
let currentLanguage = 'fr';
function setLanguage(language) {
  currentLanguage = language;
  document.documentElement.lang = language;
  document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
  document.body.classList.toggle('arabic-mode', language === 'ar');
  Object.entries(translations[language]).forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  });
  if (languageToggle) languageToggle.textContent = language === 'fr' ? 'العربية' : 'Français';
}
if (languageToggle) languageToggle.addEventListener('click', () => setLanguage(currentLanguage === 'fr' ? 'ar' : 'fr'));

// Traduction des éléments complémentaires de la page.
const extraTranslations = {
  fr: {
    '.trust-strip > div:nth-child(1) b':'Nous trouver','.trust-strip > div:nth-child(1) small':'Aïn El Turk, Oran',
    '.trust-strip > div:nth-child(2) b':'Disponibilité','.trust-strip > div:nth-child(2) small':'24h/24 – 7j/7*',
    '.trust-strip > div:nth-child(3) b':'Contact direct','.trust-strip > div:nth-child(3) small':'Téléphone & WhatsApp',
    '.service-card:nth-child(1) h3':'Conseil biologique','.service-card:nth-child(2) h3':'Exploration des anomalies lipidiques',
    '.service-card:nth-child(3) h3':'Exploration de la fonction rénale','.service-card:nth-child(4) h3':'Exploration du métabolisme glucidique',
    '.service-card:nth-child(5) h3':'Exploration de l’insulino-résistance','.service-card:nth-child(6) h3':'Spermogramme',
    '.service-card:nth-child(7) h3':'Hormonologie','.service-card:nth-child(8) h3':'Immunologie',
    '.about-points > div:nth-child(1) b':'Informations pratiques','.about-points > div:nth-child(1) small':'Adresse et accès au laboratoire.',
    '.about-points > div:nth-child(2) b':'Contact simplifié','.about-points > div:nth-child(2) small':'Téléphone, e-mail et WhatsApp.',
    '.about-points > div:nth-child(3) b':'Présence en ligne','.about-points > div:nth-child(3) small':'Retrouvez les réseaux sociaux du laboratoire.',
    '.doctor-label':'DIRECTION MÉDICALE','.doctor-prefix':'Direction médicale',
    '.contact-card:nth-child(1) .contact-label':'ADRESSE','.contact-card:nth-child(1) h3':'Aïn El Turk, Oran',
    '.contact-card:nth-child(1) > p:not(.arabic)':'En face de la boulangerie Yazid, à côté du Grand Marché.',
    '.contact-card:nth-child(1) .contact-link':'Ouvrir Google Maps ↗',
    '.contact-card:nth-child(2) .contact-label':'TÉLÉPHONE & E-MAIL',
    '.contact-card:nth-child(3) .contact-label':'HORAIRES AFFICHÉS','.contact-card:nth-child(3) h3':'Ouvert 24h/24 – 7j/7',
    '.contact-card:nth-child(3) > small':'*Selon les informations communiquées par le laboratoire.',
    '.footer-main > p':'La précision d’abord.','.footer-bottom small:first-child':'© '+new Date().getFullYear()+' VITA FAST · Laboratoire d’Analyses Médicales',
    '.footer-bottom small:last-child':'Aïn El Turk · Oran · Algérie'
  },
  ar: {
    '.trust-strip > div:nth-child(1) b':'موقعنا','.trust-strip > div:nth-child(1) small':'عين الترك، وهران',
    '.trust-strip > div:nth-child(2) b':'التوفر','.trust-strip > div:nth-child(2) small':'24 ساعة/24 – 7 أيام/7*',
    '.trust-strip > div:nth-child(3) b':'اتصال مباشر','.trust-strip > div:nth-child(3) small':'الهاتف وواتساب',
    '.service-card:nth-child(1) h3':'استشارات بيولوجية','.service-card:nth-child(2) h3':'استكشاف اضطرابات الدهون',
    '.service-card:nth-child(3) h3':'استكشاف وظائف الكلى','.service-card:nth-child(4) h3':'استكشاف استقلاب السكريات',
    '.service-card:nth-child(5) h3':'استكشاف مقاومة الإنسولين','.service-card:nth-child(6) h3':'تحليل السائل المنوي',
    '.service-card:nth-child(7) h3':'التحاليل الهرمونية','.service-card:nth-child(8) h3':'علم المناعة',
    '.about-points > div:nth-child(1) b':'معلومات عملية','.about-points > div:nth-child(1) small':'العنوان وكيفية الوصول إلى المخبر.',
    '.about-points > div:nth-child(2) b':'تواصل سهل','.about-points > div:nth-child(2) small':'الهاتف والبريد الإلكتروني وواتساب.',
    '.about-points > div:nth-child(3) b':'حضورنا الرقمي','.about-points > div:nth-child(3) small':'تابعوا صفحات المخبر على شبكات التواصل.',
    '.doctor-label':'الإدارة الطبية','.doctor-prefix':'الإدارة الطبية',
    '.contact-card:nth-child(1) .contact-label':'العنوان','.contact-card:nth-child(1) h3':'عين الترك، وهران',
    '.contact-card:nth-child(1) > p:not(.arabic)':'مقابل مخبزة يزيد، بجانب السوق الكبير.',
    '.contact-card:nth-child(1) .contact-link':'افتحوا الموقع على خرائط Google ↗',
    '.contact-card:nth-child(2) .contact-label':'الهاتف والبريد الإلكتروني',
    '.contact-card:nth-child(3) .contact-label':'أوقات العمل المعلنة','.contact-card:nth-child(3) h3':'مفتوح 24 ساعة/24 – 7 أيام/7',
    '.contact-card:nth-child(3) > small':'*حسب المعلومات المقدمة من طرف المخبر.',
    '.footer-main > p':'الدقة أولاً.','.footer-bottom small:first-child':'© '+new Date().getFullYear()+' فيتا فاست · مخبر التحاليل الطبية',
    '.footer-bottom small:last-child':'عين الترك · وهران · الجزائر'
  }
};
const originalSetLanguage = setLanguage;
setLanguage = function(language) {
  originalSetLanguage(language);
  Object.entries(extraTranslations[language]).forEach(([selector, value]) => {
    const element = document.querySelector(selector);
    if (element) element.innerHTML = value;
  });
};
