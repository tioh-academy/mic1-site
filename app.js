function setLanguage(lang) {
  document.documentElement.lang = lang;

  var elements = document.querySelectorAll("[data-fr][data-en]");

  for (var i = 0; i < elements.length; i++) {
    var element = elements[i];
    var text = element.getAttribute("data-" + lang);

    if (text !== null) {
      element.textContent = text;
    }
  }

  localStorage.setItem("mic1-lang", lang);

  var buttons = document.querySelectorAll("[data-lang]");

  for (var j = 0; j < buttons.length; j++) {
    var button = buttons[j];

    if (button.getAttribute("data-lang") === lang) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  }
}

window.setLanguage = setLanguage;

document.addEventListener("DOMContentLoaded", function () {
  var savedLang = localStorage.getItem("mic1-lang") || "fr";

  setLanguage(savedLang);

  var buttons = document.querySelectorAll("[data-lang]");

  for (var i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function () {
      var lang = this.getAttribute("data-lang");
      setLanguage(lang);
    });
  }
});
