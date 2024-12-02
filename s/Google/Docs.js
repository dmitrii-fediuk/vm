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
// 2024-12-02 https://claude.ai/chat/a99b0b68-32ff-479b-8674-140b2275c0a5
(() => {
    const f = () => {
        const e = document.querySelector('.kix-appview-editor');
        e?.scrollLeft == 89 || (e && (e.scrollLeft = 89));
    };
    setTimeout(f, 1000);
    addEventListener('load', () =>
		new MutationObserver(() => setTimeout(f, 100)).observe(document.body, {childList: 1, subtree: 1})
	);
})();