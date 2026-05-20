function setLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll("[data-fr][data-en]").forEach((element) => {
    element.textContent = element.getAttribute(`data-${lang}`);
  });

  localStorage.setItem("mic1-lang", lang);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.classList.toggle("active", button.getAttribute("data-lang") === lang);
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("mic1-lang") || "fr";
  setLanguage(savedLang);

  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.getAttribute("data-lang"));
    });
  });
});
