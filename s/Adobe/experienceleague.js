// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Adobe/experienceleague.js
// @icon https://experienceleague.adobe.com/favicon.ico
// @match *://experienceleague.adobe.com/*
// @name Adobe / experienceleague
// ==/UserScript==
// 2024-12-13 "Improve `experienceleague.adobe.com`": https://github.com/dmitrii-fediuk/vm/issues/76
// language=CSS
GM_addStyle([
	'.article-metadata-createdby-wrapper'
	,'.article-metadata-topics-wrapper'
	,'.doc-actions-mobile'
	,'.doc-pagination'
	,'.docs main > .rail-right.mini-toc-container'
	,'.feedback-ui'
	,'footer'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// language=CSS
GM_addStyle('main {padding: 0 1rem !important;}');
// 2024-12-13
// 1) "How do I hide a DOM element inside a shadow root using Violentmonkey?" https://df.tips/t/2326
// 2) https://stackoverflow.com/a/75518992
// 3) https://stackoverflow.com/a/75571912
// 4) https://github.com/violentmonkey/violentmonkey/issues/1852

customElements.whenDefined('exl-header').then(() => {
  // Функция для попытки применения стиля
  function applyStyle() {
    const header = document.querySelector('exl-header');
    if (header && header.shadowRoot) {
      const brand = header.shadowRoot.querySelector('.brand');
      if (brand) {
        // Создаём и вставляем стиль
        const style = document.createElement('style');
        style.textContent = `.brand {display: none !important}`;
        header.shadowRoot.appendChild(style);
        return true;
      }
    }
    return false;
  }

  // Пытаемся применить стили сразу после определения элемента
  if (!applyStyle()) {
    // Если не удалось (нет элемента или .brand), наблюдаем за появлением
    const observer = new MutationObserver(() => {
      if (applyStyle()) {
        observer.disconnect(); // как только стиль успешно применён, останавливаем наблюдение
      }
    });

    // Наблюдаем изменения по всему документу, пока не появится нужный узел
    observer.observe(document.documentElement, { childList: true, subtree: true });
  }
});
