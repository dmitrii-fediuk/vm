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
	,'#addNumberedBulletButton'
	,'#bulletedListPresetMenuButton'
	,'#checklistPresetMenuButton'
	,'#clearFormattingButton'
	,'#docs-omnibox-toolbar'
	,'#docs-toolbar-mode-switcher'
	,'#formatPainterButton'
	,'#indentButton'
	,'#numberedListPresetMenuButton'
	,'#outdentButton'
	,'#printButton'
	,'#redoButton'
	,'#spellGrammarCheckButton'
	,'#undoButton'
	,'.docs-companion-app-switcher-container'
	,'.docs-titlebar-buttons'
	,'.left-sidebar-container'
	,'.miniChapterSwitcherContainerView'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
//GM_addStyle('.docs-ui-hit-region-surface {left: 0 !important;}');
// language=CSS
GM_addStyle('.left-sidebar-container {width: 0 !important;}');

