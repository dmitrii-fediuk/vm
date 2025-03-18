// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/developer.mozilla.org.js
// @icon https://developer.mozilla.org/apple-touch-icon.528534bba673c38049c2.png
// @match *://developer.mozilla.org/*
// @name Mozilla / Developer
// ==/UserScript==
// 2025-03-18 "Improve `developer.mozilla.org`": https://github.com/dmitrii-fediuk/vm/issues/99
// language=CSS
GM_addStyle([
	'.article-footer'
	,'.sidebar-container'
	,'.sticky-header-container'
	,'footer'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
	'.main-wrapper'
]
	 // language=Javascript
	.join(',') + '{display: initial !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
	'h1'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
	'main'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['width', 'max-width',' min-width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
	'}'
);