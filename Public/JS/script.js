(() => {
  const translations = window.PORTFOLIO_TRANSLATIONS;
  if (!translations) return;

  const projectLinks = {
    orva: "https://github.com/guiguix7/Orva",
    drazyx: "https://github.com/guiguix7/Drazyx",
    easyvan: "https://github.com/guiguix7/EasyVan",
    portfolio: "https://github.com/guiguix7/Landing-Page"
  };
  const groupOrder = ["frontend", "backend", "data", "mobile", "tools"];
  const groupMembers = {
    frontend: ["javascript", "typescript", "react", "html", "css", "tailwind"],
    backend: ["node", "csharp", "aspnet", "rest"],
    data: ["sql", "postgres", "sqlite"],
    mobile: ["flutter", "dart"],
    tools: ["git", "github"]
  };
  const body = document.body;
  const skillGroupsEl = document.getElementById("skill-groups");
  const skillDetailTitle = document.getElementById("skill-detail-title");
  const skillDetailCategory = document.getElementById("skill-detail-category");
  const skillDetailDescription = document.getElementById("skill-detail-description");
  const skillRelatedProjects = document.getElementById("skill-related-projects");
  const skillDetailNote = document.getElementById("skill-detail-note");
  const themeToggle = document.getElementById("theme-toggle");
  const themeIcon = document.getElementById("theme-icon");
  let currentLanguage = "pt";
  let activeSkill = "javascript";

  function safeRead(key) {
    try { return window.localStorage.getItem(key); } catch { return null; }
  }
  function safeWrite(key, value) {
    try { window.localStorage.setItem(key, value); } catch { /* local storage may be unavailable for file URLs */ }
  }

  function applyTranslations(language) {
    const copy = translations[language] || translations.pt;
    currentLanguage = translations[language] ? language : "pt";
    document.documentElement.lang = copy.documentLang;
    document.title = copy.pageTitle;
    const description = document.querySelector('meta[name="description"]');
    if (description) description.setAttribute("content", copy.metaDescription);
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute("content", copy.pageTitle);
    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute("content", copy.metaDescription);
    const ogLocale = document.querySelector('meta[property="og:locale"]');
    if (ogLocale) ogLocale.setAttribute("content", currentLanguage === "pt" ? "pt_BR" : "en_US");

    document.querySelectorAll("[data-i18n]").forEach((element) => {
      const key = element.dataset.i18n;
      if (Object.prototype.hasOwnProperty.call(copy, key) && typeof copy[key] === "string") {
        element.textContent = copy[key];
      }
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
      const key = element.dataset.i18nPlaceholder;
      if (typeof copy[key] === "string") element.setAttribute("placeholder", copy[key]);
    });
    document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
      const key = element.dataset.i18nAriaLabel;
      if (typeof copy[key] === "string") element.setAttribute("aria-label", copy[key]);
    });
    document.querySelectorAll(".language-button").forEach((button) => {
      const active = button.dataset.language === currentLanguage;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });
    safeWrite("portfolio-language", currentLanguage);
    renderSkills();
  }

  function makeElement(tag, className, text) {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (text !== undefined && text !== null) element.textContent = text;
    return element;
  }

  function renderSkills() {
    const copy = translations[currentLanguage];
    skillGroupsEl.replaceChildren();
    let count = 0;
    groupOrder.forEach((groupKey) => {
      const group = makeElement("section", "skill-group");
      const label = makeElement("h4", "skill-group-label", copy.groups[groupKey]);
      const list = makeElement("ul", "tag-list");
      list.setAttribute("aria-label", copy.groups[groupKey]);
      groupMembers[groupKey].forEach((skillKey) => {
        const skill = copy.skills[skillKey];
        if (!skill) return;
        count += 1;
        const li = document.createElement("li");
        const button = makeElement("button", "skill-btn", skill.name);
        button.type = "button";
        button.dataset.skill = skillKey;
        button.setAttribute("aria-pressed", String(skillKey === activeSkill));
        if (skillKey === activeSkill) button.classList.add("is-active");
        button.addEventListener("click", () => selectSkill(skillKey));
        li.append(button);
        list.append(li);
      });
      group.append(label, list);
      skillGroupsEl.append(group);
    });
    document.getElementById("skills-count").textContent = String(count).padStart(2, "0");
    renderSkillDetail(activeSkill);
  }

  function selectSkill(skillKey) {
    activeSkill = skillKey;
    skillGroupsEl.querySelectorAll(".skill-btn").forEach((button) => {
      const selected = button.dataset.skill === skillKey;
      button.classList.toggle("is-active", selected);
      button.setAttribute("aria-pressed", String(selected));
    });
    renderSkillDetail(skillKey);
  }

  function renderSkillDetail(skillKey) {
    const copy = translations[currentLanguage];
    const skill = copy.skills[skillKey] || copy.skills.javascript;
    skillDetailTitle.textContent = skill.name;
    skillDetailCategory.textContent = copy.categories[skill.category] || "";
    skillDetailDescription.textContent = skill.description;
    skillRelatedProjects.replaceChildren();
    if (skill.projects && skill.projects.length) {
      skill.projects.forEach((projectKey) => {
        const link = makeElement("a", "related-project-link");
        link.href = projectLinks[projectKey] || "#projetos";
        link.target = "_blank";
        link.rel = "noopener noreferrer";
        const label = makeElement("span", "", copy.projectNames[projectKey] || projectKey);
        const arrow = makeElement("span", "", "↗");
        arrow.setAttribute("aria-hidden", "true");
        link.append(label, arrow);
        skillRelatedProjects.append(link);
      });
      skillDetailNote.textContent = "";
    } else {
      skillDetailNote.textContent = copy.noProjectEvidence;
    }
  }

  function setTheme(theme) {
    const dark = theme === "dark";
    body.classList.toggle("theme-dark", dark);
    themeToggle.setAttribute("aria-pressed", String(dark));
    themeIcon.textContent = dark ? "☀" : "☾";
    safeWrite("portfolio-theme", dark ? "dark" : "light");
    const themeColor = document.querySelector('meta[name="theme-color"]');
    if (themeColor) themeColor.setAttribute("content", dark ? "#07111d" : "#f4f6fb");
  }

  function initTheme() {
    const saved = safeRead("portfolio-theme");
    if (saved === "dark" || saved === "light") {
      setTheme(saved);
      return;
    }
    // Keep the portfolio's original light appearance as the default; the visitor can switch themes.
    setTheme("light");
  }

  function initReveal() {
    if (window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
      return;
    }
    if (!("IntersectionObserver" in window)) {
      document.querySelectorAll(".reveal").forEach((element) => element.classList.add("is-visible"));
      return;
    }
    body.classList.add("js-ready");
    const observer = new IntersectionObserver((entries, activeObserver) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });
    document.querySelectorAll(".reveal").forEach((element, index) => {
      element.style.transitionDelay = `${Math.min(index % 5, 4) * 35}ms`;
      observer.observe(element);
    });
  }

  function initContactForm() {
    const form = document.getElementById("contact-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!form.reportValidity()) return;
      const formData = new FormData(form);
      const name = String(formData.get("name") || "").trim();
      const senderEmail = String(formData.get("email") || "").trim();
      const message = String(formData.get("message") || "").trim();
      if (!name || !senderEmail || !message) return;
      const subject = encodeURIComponent(`Contato pelo portfólio — ${name}`);
      const bodyText = encodeURIComponent(`Nome: ${name}\nE-mail: ${senderEmail}\n\nMensagem:\n${message}`);
      const note = document.getElementById("form-note");
      note.textContent = translations[currentLanguage].formPreparing;
      window.location.href = `mailto:guilherme.andraz@outlook.com?subject=${subject}&body=${bodyText}`;
    });
  }

  document.querySelectorAll(".language-button").forEach((button) => {
    button.addEventListener("click", () => applyTranslations(button.dataset.language));
  });
  themeToggle.addEventListener("click", () => setTheme(body.classList.contains("theme-dark") ? "light" : "dark"));
  document.getElementById("current-year").textContent = String(new Date().getFullYear());

  initTheme();
  applyTranslations(safeRead("portfolio-language") || "pt");
  initReveal();
  initContactForm();
})();
