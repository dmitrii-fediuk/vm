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
(function() {
    'use strict';
    function adjustEditorLayout() {
        const elements = document.querySelectorAll('.docs-ui-hit-region-surface');
        const editor = document.querySelector('.kix-appview-editor');
        elements.forEach(element => {
            // Вместо удаления left:89px добавляем transform
            const currentStyle = element.getAttribute('style');
            if (currentStyle && currentStyle.includes('left: 89px')) {
                element.style.transform = 'translateX(-89px)';
            }
        });
        // Компенсируем смещение контейнера редактора
        if (editor) {
            editor.style.marginLeft = '89px';
        }
    }
    // Запускаем изначально
    setTimeout(adjustEditorLayout, 1000);
    // Наблюдаем за изменениями DOM
    const observer = new MutationObserver(() => {
        setTimeout(adjustEditorLayout, 100);
    });
    observer.observe(document.body, {
        childList: true,
        subtree: true
    });
})();
// language=CSS
//GM_addStyle('.docs-ui-hit-region-surface {left: 0 !important;}');