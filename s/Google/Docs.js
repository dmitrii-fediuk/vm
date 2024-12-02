// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Docs.js
// @icon https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico
// @match *://docs.google.com/*
// @name Google / Docs
// ==/UserScript==
// 2024-12-02 "Improve Google Docs": https://github.com/dmitrii-fediuk/vm/issues/72
// language=CSS
GM_addStyle([
	'#addBulletButton'
	,'#addChecklistButton'
	,'#addNumberedBulletButton'
	,'#alignButton'
	,'#bgColorButton'
	,'#bulletedListPresetMenuButton'
	,'#checklistPresetMenuButton'
	,'#clearFormattingButton'
	,'#commentSeparator'
	,'#docs-branding-container'
	,'#docs-omnibox-toolbar'
	,'#docs-toolbar-mode-switcher'
	,'#formatPainterButton'
	,'#indentButton'
	,'#insertCommentButton'
	,'#insertImageButton'
	,'#insertLinkButton'
	,'#lineSpacingMenuButton'
	,'#numberedListPresetMenuButton'
	,'#outdentButton'
	,'#printButton'
	,'#redoButton'
	,'#spellGrammarCheckButton'
	,'#undoButton'
	,'.docs-companion-app-switcher-container'
	,'.docs-folder-container'
	,'.docs-save-indicator-container'
	,'.docs-star-container'
	,'.docs-titlebar-buttons'
	,'.left-sidebar-container'
	,'.miniChapterSwitcherContainerView'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'#docs-menubar'
	,'#docs-titlebar-container'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// language=CSS
GM_addStyle('.left-sidebar-container {width: 0 !important;}');
// language=CSS
GM_addStyle([
	'div:has(> #docs-header-container)'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			//'float': 'left'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// language=CSS
//GM_addStyle('.docs-ui-hit-region-surface {left: 0 !important;}');
(function() {
    'use strict';
    function scrollEditor() {
        const editorContainer = document.querySelector('.kix-appview-editor');
        if (editorContainer) {
            editorContainer.scrollLeft = 89;
        }
    }
    // Запускаем прокрутку после загрузки страницы
    setTimeout(scrollEditor, 1000);
    // Наблюдаем за изменениями в DOM
    const observer = new MutationObserver(() => {
        setTimeout(scrollEditor, 100);
    });
    // Начинаем наблюдение после загрузки страницы
    window.addEventListener('load', () => {
        observer.observe(document.body, {
            childList: true,
            subtree: true
        });
    });
})();