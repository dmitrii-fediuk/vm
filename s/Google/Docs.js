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
	,'#docs-instant-bubble' // 2025-06-14
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
	,'#textToSpeechToolbarButton' // 2025-08-13
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
// 2025-08-13 https://g.co/gemini/share/1893549775f1
// language=CSS
GM_addStyle([
	'#docs-editor' // 2025-08-13
	,'.kix-rotatingtilemanager-content > div' // 2025-08-13
	,'.kix-scrollareadocumentplugin' // 2025-08-13
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'min-width', 'width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
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
// 2024-12-02
// https://claude.ai/chat/a99b0b68-32ff-479b-8674-140b2275c0a5
// https://chatgpt.com/c/674d3213-1118-8006-943f-4402618425e4
(() => {
	const f = () => {
		const e = document.querySelector('.kix-appview-editor');
		const v = 89;
		if (e && v !== e.scrollLeft) {e.scrollLeft = v;}
	};
	setTimeout(f, 1000);
	const o = new MutationObserver(() => setTimeout(f, 100));
	o.observe(document.body || document.documentElement, {childList: true, subtree: true});
})();