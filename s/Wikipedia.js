// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Wikipedia.js
// @icon https://en.wikipedia.org/static/favicon/wikipedia.ico
// @match *://*.wikipedia.org/*
// @name Wikipedia
// ==/UserScript==
// 2024-10-20 "Improve the appearance of Wikipedia articles": https://github.com/dmitrii-fediuk/vm/issues/57
// language=CSS
GM_addStyle([
	'.mw-footer-container'
	,'.vector-header-start'
	,'.vector-sitenotice-container' // 2025-03-05
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
GM_addStyle([
	'#vector-page-titlebar-toc'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
