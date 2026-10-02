/**
 * Internationalization (i18n) Engine for Holi English Week App
 * Supports English (en - default) and Spanish (es).
 */

const I18N = (function() {
  const STORAGE_KEY = 'holi_app_lang';
  let currentLang = localStorage.getItem(STORAGE_KEY) || 'en';

  function getLang() {
    return currentLang;
  }

  function setLang(lang) {
    if (lang !== 'en' && lang !== 'es') lang = 'en';
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyLanguage();
    // Dispatch custom event for pages that need custom re-rendering (trivia, colors, etc.)
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang: currentLang } }));
  }

  function toggleLang() {
    setLang(currentLang === 'en' ? 'es' : 'en');
  }

  function applyLanguage() {
    document.documentElement.lang = currentLang;

    // Translate all elements with data-i18n-en and data-i18n-es
    const elements = document.querySelectorAll('[data-i18n-en]');
    elements.forEach(el => {
      const text = el.getAttribute('data-i18n-' + currentLang);
      if (text !== null) {
        if (el.tagName === 'INPUT' && el.type === 'button') {
          el.value = text;
        } else {
          el.innerHTML = text;
        }
      }
    });

    // Update language switch buttons
    const toggles = document.querySelectorAll('.lang-toggle-btn');
    toggles.forEach(btn => {
      if (currentLang === 'en') {
        btn.innerHTML = '🇬🇧 <span class="font-bold text-holi-yellow">EN</span> / <span class="opacity-60">ES</span>';
        btn.setAttribute('title', 'Cambiar a Español');
      } else {
        btn.innerHTML = '🇪🇸 <span class="opacity-60">EN</span> / <span class="font-bold text-holi-yellow">ES</span>';
        btn.setAttribute('title', 'Switch to English');
      }
    });
  }

  // Initialize on page DOM load
  document.addEventListener('DOMContentLoaded', () => {
    applyLanguage();
  });

  return {
    getLang,
    setLang,
    toggleLang,
    applyLanguage
  };
})();
