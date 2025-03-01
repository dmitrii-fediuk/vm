// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/lexpera.com.tr.js
// @icon https://www.lexpera.com.tr/Content/Images/logo-lexpera-icon_launcher_192.jpg
// @match *://www.lexpera.com.tr/*
// @name lexpera.com.tr
// ==/UserScript==
// 2024-10-30 "Improve `lexpera.com.tr`": https://github.com/dmitrii-fediuk/vm/issues/62
// language=CSS
GM_addStyle([
	'#goToTopButton'
	,'#UIDocumentToolbarContainer'
	,'.articleIcons'
	,'.document-grid__toolbar--bottom'
	,'.fab-lexi-ai'
	,'.global-search-container'
	,'aside'
	,'footer'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'.document-grid'
	,'.row'
	,'main'
]
	 // language=Javascript
	.join(',') + '{display: initial !important; max-width: 100% !important; width: 100% !important;}')
;