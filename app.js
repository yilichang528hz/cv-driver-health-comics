let currentView = "home";
let currentTopicId = null;
let currentImageIndex = 0;
let currentLanguage = "zh";
let currentTheme = "A";
let motivationExpanded = false;

const $ = (id) => document.getElementById(id);

const elements = {
  html: document.documentElement,
  body: document.body,
  topicNav: $("topicNav"),
  motivationNavBtn: $("motivationNavBtn"),
  galleryMenuControl: $("galleryMenuControl"),
  galleryMenuBtn: $("galleryMenuBtn"),
  galleryMenu: $("galleryMenu"),
  languageMenuControl: $("languageMenuControl"),
  languageMenuBtn: $("languageMenuBtn"),
  languageMenu: $("languageMenu"),
  themeMenuControl: $("themeMenuControl"),
  themeMenuBtn: $("themeMenuBtn"),
  themeMenu: $("themeMenu"),
  floatingTopicList: $("floatingTopicList"),
  copyrightText: $("copyrightText"),
  siteTitle: $("siteTitle"),
  siteSubtitle: $("siteSubtitle"),
  readerEyebrow: $("readerEyebrow"),
  readerTitle: $("readerTitle"),
  readerSummary: $("readerSummary"),
  badgeRow: $("badgeRow"),
  homeReaderView: $("homeReaderView"),
  ebookFrame: $("ebookFrame"),
  ebookImage: $("ebookImage"),
  imageFallback: $("imageFallback"),
  ebookCaption: $("ebookCaption"),
  motivationPanel: $("motivationPanel"),
  motivationTitle: $("motivationTitle"),
  motivationText: $("motivationText"),
  motivationToggleBtn: $("motivationToggleBtn"),
  prevPageBtn: $("prevPageBtn"),
  nextPageBtn: $("nextPageBtn"),
  pageIndicator: $("pageIndicator"),
  fullscreenBtn: $("fullscreenBtn"),
  exitFullscreenBtn: $("exitFullscreenBtn"),
  readerShell: $("readerShell"),
  floatingHub: $("floatingHub"),
  floatingToggleBtn: $("floatingToggleBtn"),
  floatingPanel: $("floatingPanel"),
  floatingLanguageTitle: $("floatingLanguageTitle"),
  floatingCatalogTitle: $("floatingCatalogTitle"),
  glossaryOpenBtn: $("glossaryOpenBtn"),
  glossaryDialog: $("glossaryDialog"),
  glossaryCloseBtn: $("glossaryCloseBtn"),
  glossaryGrid: $("glossaryGrid"),
  glossaryEyebrow: $("glossaryEyebrow"),
  glossaryTitle: $("glossaryTitle")
};

function t(key) {
  return UI_TEXT[currentLanguage][key] || UI_TEXT.zh[key] || key;
}

function escapeHTML(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function buildNavigation() {
  const floatingItems = [
    { type: "home", id: "home" },
    { type: "characters", id: "characters" },
    ...TOPIC_MANIFEST.map((topic) => ({ type: "topic", id: topic.id }))
  ];

  elements.motivationNavBtn.textContent = t("motivation");

  elements.galleryMenuBtn.textContent = t("galleryEntry");
  elements.galleryMenu.innerHTML = "";
  TOPIC_MANIFEST.forEach((topic) => {
    const topicButton = document.createElement("button");
    topicButton.type = "button";
    topicButton.dataset.navType = "topic";
    topicButton.dataset.navId = topic.id;
    topicButton.textContent = getNavLabel({ type: "topic", id: topic.id });
    topicButton.addEventListener("click", () => {
      renderTopic(topic.id);
      closeMenu(elements.galleryMenu, elements.galleryMenuBtn);
    });
    elements.galleryMenu.appendChild(topicButton);
  });

  elements.floatingTopicList.innerHTML = "";
  for (const item of floatingItems) {
    const floatingButton = document.createElement("button");
    floatingButton.type = "button";
    floatingButton.dataset.navType = item.type;
    floatingButton.dataset.navId = item.id;
    floatingButton.textContent = getNavLabel(item);
    floatingButton.addEventListener("click", () => {
      navigateTo(item.type, item.id);
      closeFloatingPanel();
    });
    elements.floatingTopicList.appendChild(floatingButton);
  }
  syncActiveNav();
}

function getNavLabel(item) {
  if (item.type === "home") return t("home");
  if (item.type === "characters") return t("characters");
  const topic = TOPIC_MANIFEST.find((entry) => entry.id === item.id);
  return topic ? `${t("topicPrefix")} ${topic.id}. ${topic.title[currentLanguage]}` : item.id;
}

function navigateTo(type, id) {
  if (type === "home") {
    renderHome(false);
  } else if (type === "characters") {
    renderCharacters();
  } else {
    renderTopic(id);
  }
}

function renderBadges(badges) {
  const source = badges && badges.length ? badges : ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"];
  elements.badgeRow.innerHTML = source.map((badge) => `<span class="badge">${escapeHTML(badge)}</span>`).join("");
}

function renderHome(expand = motivationExpanded) {
  currentView = "home";
  currentTopicId = null;
  currentImageIndex = 0;
  motivationExpanded = expand;

  elements.homeReaderView.classList.remove("is-reading-topic");
  elements.readerEyebrow.textContent = t("readerEyebrowHome");
  elements.readerTitle.textContent = t("homeTitle");
  elements.readerSummary.textContent = t("homeSummary");
  elements.motivationPanel.hidden = false;
  elements.motivationPanel.classList.toggle("is-expanded", motivationExpanded);
  elements.motivationTitle.textContent = t("motivation");
  elements.motivationToggleBtn.textContent = motivationExpanded ? t("collapse") : t("expand");
  elements.motivationText.textContent = MOTIVATION_CONTENT[currentLanguage];

  setImage({
    src: HOME_IMAGE.src,
    alt: HOME_IMAGE.alt[currentLanguage],
    caption: HOME_IMAGE.caption[currentLanguage]
  });

  renderBadges(HOME_IMAGE.badges);
  elements.pageIndicator.textContent = t("noPage");
  elements.prevPageBtn.disabled = true;
  elements.nextPageBtn.disabled = true;
  syncActiveNav();
}

function renderCharacters() {
  currentView = "characters";
  currentTopicId = "characters";
  currentImageIndex = 0;

  elements.homeReaderView.classList.add("is-reading-topic");
  elements.motivationPanel.hidden = true;
  elements.readerEyebrow.textContent = t("readerEyebrowCharacters");
  elements.readerTitle.textContent = t("charactersTitle");
  elements.readerSummary.textContent = t("charactersSummary");
  renderBadges(["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]);
  renderCurrentImage();
  syncActiveNav();
}

function renderTopic(topicId) {
  const topic = TOPIC_MANIFEST.find((entry) => entry.id === topicId);
  if (!topic) return;

  currentView = "topic";
  currentTopicId = topicId;
  currentImageIndex = 0;

  elements.homeReaderView.classList.add("is-reading-topic");
  elements.motivationPanel.hidden = true;
  elements.readerEyebrow.textContent = t("readerEyebrowTopic");
  elements.readerTitle.textContent = topic.title[currentLanguage];
  elements.readerSummary.textContent = t("topicSummary");
  renderCurrentImage();
  syncActiveNav();
}

function getCurrentImages() {
  if (currentView === "characters") {
    return CHARACTER_IMAGES.map((image) => ({
      ...image,
      alt: {
        zh: `角色設定圖第${image.page}張`,
        en: `Character design image ${image.page}`,
        ja: `キャラクター設定画像 ${image.page}`
      },
      caption: {
        zh: `${t("characterCaptionPrefix")} ${image.page}。${t("prototypeNote")}`,
        en: `${t("characterCaptionPrefix")} ${image.page}. ${t("prototypeNote")}`,
        ja: `${t("characterCaptionPrefix")} ${image.page}。${t("prototypeNote")}`
      },
      badges: ["Demo Dataset", "Simulated data", "Prototype Simulation", "Requires human review"]
    }));
  }

  const topic = TOPIC_MANIFEST.find((entry) => entry.id === currentTopicId);
  return topic ? topic.images : [];
}

function renderCurrentImage() {
  if (currentView === "home") {
    renderHome(motivationExpanded);
    return;
  }

  const images = getCurrentImages();
  const item = images[currentImageIndex];
  if (!item) return;

  if (currentView === "topic") {
    const topic = TOPIC_MANIFEST.find((entry) => entry.id === currentTopicId);
    elements.readerTitle.textContent = topic.title[currentLanguage];
    elements.readerSummary.textContent = t("topicSummary");
  } else if (currentView === "characters") {
    elements.readerTitle.textContent = t("charactersTitle");
    elements.readerSummary.textContent = t("charactersSummary");
  }

  setImage({
    src: item.src,
    alt: item.alt[currentLanguage],
    caption: item.caption[currentLanguage]
  });

  renderBadges(item.badges);
  elements.pageIndicator.textContent = `${t("page")} ${currentImageIndex + 1} / ${images.length}`;
  elements.prevPageBtn.disabled = currentImageIndex <= 0;
  elements.nextPageBtn.disabled = currentImageIndex >= images.length - 1;
}

function setImage({ src, alt, caption }) {
  const normalizedSrc = src || "";

  elements.ebookImage.classList.remove("is-changing", "is-missing");
  elements.imageFallback.hidden = true;
  elements.imageFallback.textContent = "";
  elements.ebookCaption.textContent = caption;
  elements.ebookImage.alt = alt;
  elements.ebookImage.dataset.expectedSrc = normalizedSrc;

  // Assign the image source directly. The previous delayed fade transition could
  // leave a stale fallback layer over successfully loaded images in some browsers.
  if (elements.ebookImage.getAttribute("src") !== normalizedSrc) {
    elements.ebookImage.src = normalizedSrc;
  } else if (elements.ebookImage.complete && elements.ebookImage.naturalWidth > 0) {
    hideImageFallback();
  }
}

function hideImageFallback() {
  elements.ebookImage.classList.remove("is-changing", "is-missing");
  elements.imageFallback.hidden = true;
  elements.imageFallback.textContent = "";
}

function handleImageError(event) {
  const expected = elements.ebookImage.dataset.expectedSrc || "";
  const failedSrc = elements.ebookImage.getAttribute("src") || "";

  // Ignore stale error events from the initial empty src or a previous page image.
  if (!expected || failedSrc !== expected || (event && event.target !== elements.ebookImage)) {
    return;
  }

  elements.ebookImage.classList.remove("is-changing");
  elements.ebookImage.classList.add("is-missing");
  elements.imageFallback.hidden = false;
  elements.imageFallback.textContent = `${t("missingImage")}
${expected}`;
}

function handleImageLoad(event) {
  if (event && event.target !== elements.ebookImage) return;
  hideImageFallback();
}

function goNextPage() {
  if (currentView === "home") return;
  const images = getCurrentImages();
  if (currentImageIndex < images.length - 1) {
    currentImageIndex += 1;
    renderCurrentImage();
  }
}

function goPrevPage() {
  if (currentView === "home") return;
  if (currentImageIndex > 0) {
    currentImageIndex -= 1;
    renderCurrentImage();
  }
}

function setLanguage(lang) {
  if (!UI_TEXT[lang]) return;

  currentLanguage = lang;
  elements.html.lang = lang === "zh" ? "zh-Hant" : lang;

  elements.copyrightText.textContent = t("copyright");
  elements.siteTitle.textContent = t("siteTitle");
  elements.siteSubtitle.textContent = t("siteSubtitle");
  elements.languageMenuBtn.textContent = t("languageButton");
  elements.themeMenuBtn.textContent = t("themeButton");
  elements.galleryMenuBtn.textContent = t("galleryEntry");
  elements.prevPageBtn.textContent = t("prev");
  elements.nextPageBtn.textContent = t("next");
  elements.fullscreenBtn.textContent = t("fullscreen");
  elements.exitFullscreenBtn.textContent = t("exitFullscreen");
  elements.floatingToggleBtn.textContent = t("floatingToggle");
  elements.floatingLanguageTitle.textContent = t("floatingLanguageTitle");
  elements.floatingCatalogTitle.textContent = t("floatingCatalogTitle");
  elements.glossaryOpenBtn.textContent = t("glossaryOpen");
  elements.glossaryEyebrow.textContent = t("glossaryEyebrow");
  elements.glossaryTitle.textContent = t("glossaryTitle");

  document.querySelectorAll("[data-lang]").forEach((button) => {
    const active = button.dataset.lang === currentLanguage;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-current", active ? "true" : "false");
  });

  buildNavigation();
  renderGlossary();

  if (currentView === "home") {
    elements.readerEyebrow.textContent = t("readerEyebrowHome");
    elements.readerTitle.textContent = t("homeTitle");
    elements.readerSummary.textContent = t("homeSummary");
    elements.motivationTitle.textContent = t("motivation");
    elements.motivationToggleBtn.textContent = motivationExpanded ? t("collapse") : t("expand");
    elements.motivationText.textContent = MOTIVATION_CONTENT[currentLanguage];
    elements.ebookImage.alt = HOME_IMAGE.alt[currentLanguage];
    elements.ebookCaption.textContent = HOME_IMAGE.caption[currentLanguage];
    elements.pageIndicator.textContent = t("noPage");
    const expected = elements.ebookImage.dataset.expectedSrc || HOME_IMAGE.src;
    if (elements.ebookImage.classList.contains("is-missing")) {
      elements.imageFallback.textContent = `${t("missingImage")}\n${expected}`;
    }
  } else {
    renderCurrentImage();
  }
}

function setTheme(theme) {
  currentTheme = theme;
  document.body.dataset.theme = theme;
  document.querySelectorAll("[data-theme-option]").forEach((button) => {
    const active = button.dataset.themeOption === currentTheme;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-current", active ? "true" : "false");
  });
}

async function enterFullscreen() {
  try {
    if (elements.readerShell.requestFullscreen) {
      await elements.readerShell.requestFullscreen();
    } else {
      elements.readerShell.classList.add("is-fullscreen");
    }
  } catch (error) {
    elements.readerShell.classList.add("is-fullscreen");
  }
  updateFullscreenState();
}

async function exitFullscreen() {
  try {
    if (document.fullscreenElement) {
      await document.exitFullscreen();
    }
  } catch (error) {
    // CSS fallback still exits below.
  }
  elements.readerShell.classList.remove("is-fullscreen");
  updateFullscreenState();
}

function updateFullscreenState() {
  const active = Boolean(document.fullscreenElement) || elements.readerShell.classList.contains("is-fullscreen");
  elements.readerShell.classList.toggle("is-fullscreen", active);
  elements.fullscreenBtn.disabled = active;
  elements.exitFullscreenBtn.disabled = !active;
}

function toggleMenu(menuElement, triggerElement) {
  const willOpen = menuElement.hidden;
  closeTopMenus();
  menuElement.hidden = !willOpen;
  triggerElement.setAttribute("aria-expanded", String(willOpen));
}

function closeMenu(menuElement, triggerElement) {
  menuElement.hidden = true;
  triggerElement.setAttribute("aria-expanded", "false");
}

function closeTopMenus() {
  closeMenu(elements.languageMenu, elements.languageMenuBtn);
  closeMenu(elements.themeMenu, elements.themeMenuBtn);
  closeMenu(elements.galleryMenu, elements.galleryMenuBtn);
}

function toggleFloatingPanel() {
  const next = elements.floatingPanel.hidden;
  elements.floatingPanel.hidden = !next;
  elements.floatingToggleBtn.setAttribute("aria-expanded", String(next));
}

function closeFloatingPanel() {
  elements.floatingPanel.hidden = true;
  elements.floatingToggleBtn.setAttribute("aria-expanded", "false");
}

function renderGlossary() {
  elements.glossaryGrid.innerHTML = GLOSSARY.map((item) => `
    <article class="glossary-card">
      <h3>${escapeHTML(item.term[currentLanguage])}</h3>
      <p>${escapeHTML(item.desc[currentLanguage])}</p>
    </article>
  `).join("");
}

function openGlossary() {
  if (elements.glossaryDialog.showModal) {
    elements.glossaryDialog.showModal();
  } else {
    elements.glossaryDialog.setAttribute("open", "");
  }
}

function closeGlossary() {
  elements.glossaryDialog.close();
}

function syncActiveNav() {
  document.querySelectorAll("[data-nav-type]").forEach((button) => {
    const type = button.dataset.navType;
    const id = button.dataset.navId;
    const active =
      (currentView === "home" && type === "home") ||
      (currentView === "characters" && type === "characters") ||
      (currentView === "topic" && type === "topic" && id === currentTopicId);
    button.classList.toggle("is-active", active);
  });
  elements.galleryMenuBtn.classList.toggle("is-active", currentView === "topic");
}

function bindEvents() {
  document.querySelectorAll("[data-lang]").forEach((button) => {
    button.addEventListener("click", () => {
      setLanguage(button.dataset.lang);
      closeTopMenus();
    });
  });

  document.querySelectorAll("[data-theme-option]").forEach((button) => {
    button.addEventListener("click", () => {
      setTheme(button.dataset.themeOption);
      closeTopMenus();
    });
  });

  elements.languageMenuBtn.addEventListener("click", () => toggleMenu(elements.languageMenu, elements.languageMenuBtn));
  elements.themeMenuBtn.addEventListener("click", () => toggleMenu(elements.themeMenu, elements.themeMenuBtn));
  elements.galleryMenuBtn.addEventListener("click", () => toggleMenu(elements.galleryMenu, elements.galleryMenuBtn));
  elements.motivationNavBtn.addEventListener("click", () => renderHome(true));

  elements.prevPageBtn.addEventListener("click", goPrevPage);
  elements.nextPageBtn.addEventListener("click", goNextPage);
  elements.fullscreenBtn.addEventListener("click", enterFullscreen);
  elements.exitFullscreenBtn.addEventListener("click", exitFullscreen);
  elements.ebookImage.addEventListener("error", handleImageError);
  elements.ebookImage.addEventListener("load", handleImageLoad);

  elements.motivationToggleBtn.addEventListener("click", () => {
    motivationExpanded = !motivationExpanded;
    renderHome(motivationExpanded);
  });

  elements.floatingToggleBtn.addEventListener("click", toggleFloatingPanel);
  elements.glossaryOpenBtn.addEventListener("click", openGlossary);
  elements.glossaryCloseBtn.addEventListener("click", closeGlossary);

  document.addEventListener("fullscreenchange", updateFullscreenState);

  document.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") goPrevPage();
    if (event.key === "ArrowRight") goNextPage();
    if (event.key === "Escape") {
      exitFullscreen();
      closeTopMenus();
      closeFloatingPanel();
    }
  });

  document.addEventListener("click", (event) => {
    if (!elements.floatingHub.contains(event.target)) closeFloatingPanel();
    const insideTopMenu =
      elements.languageMenuControl.contains(event.target) ||
      elements.themeMenuControl.contains(event.target) ||
      elements.galleryMenuControl.contains(event.target);
    if (!insideTopMenu) closeTopMenus();
  });
}

function init() {
  bindEvents();
  setTheme("A");
  setLanguage("zh");
  renderHome(false);
  updateFullscreenState();
}

init();
