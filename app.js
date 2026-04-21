const content = {
  fr: {
    navHome: "Accueil",
    navProjects: "Projets",
    navAbout: "Le projet",
    eyebrow: "À propos",
    title: "Le projet MIC1",
    description: "MIC1 — Math in the City est une initiative qui montre comment les mathématiques permettent d’observer, comparer, organiser, modéliser, optimiser et argumenter à partir de situations concrètes.",
    publicTitle: "Public visé",
    publicText: "Élèves de la 8e à la 11e année.",
    formatTitle: "Format",
    formatText: "Travail en groupe, principalement à la maison, avec choix du projet en ligne et présentation finale.",
    colorsTitle: "Couleurs",
    colorsText: "Palette MIC1 : violet, lavande et or."
  },
  en: {
    navHome: "Home",
    navProjects: "Projects",
    navAbout: "The project",
    eyebrow: "About",
    title: "The MIC1 Project",
    description: "MIC1 — Math in the City is an initiative that shows how mathematics can be used to observe, compare, organize, model, optimize, and justify ideas based on real-life situations.",
    publicTitle: "Target audience",
    publicText: "Students in Grades 8 to 11.",
    formatTitle: "Format",
    formatText: "Group work, mainly from home, with online project selection and a final presentation.",
    colorsTitle: "Colors",
    colorsText: "MIC1 palette: violet, lavender, and gold."
  }
};

function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.getElementById("nav-home").textContent = content[lang].navHome;
  document.getElementById("nav-projects").textContent = content[lang].navProjects;
  document.getElementById("nav-about").textContent = content[lang].navAbout;
  document.getElementById("eyebrow").textContent = content[lang].eyebrow;
  document.getElementById("page-title").textContent = content[lang].title;
  document.getElementById("project-description").textContent = content[lang].description;
  document.getElementById("public-title").textContent = content[lang].publicTitle;
  document.getElementById("public-target").textContent = content[lang].publicText;
  document.getElementById("format-title").textContent = content[lang].formatTitle;
  document.getElementById("format-text").textContent = content[lang].formatText;
  document.getElementById("colors-title").textContent = content[lang].colorsTitle;
  document.getElementById("colors-text").textContent = content[lang].colorsText;
}
