// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Hetzner/docs.js
// @icon https://foswiki.org/pub/System/FoswikiOrgContrib/assets/logo.svg
// @match *://foswiki.org/*
// @name foswiki.org
// ==/UserScript==
// 2025-02-11 "Improve `foswiki.org`": https://github.com/dmitrii-fediuk/vm/issues/91
// language=CSS
GM_addStyle([
	'.natBottomBar'
	,'.natScrollTop'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-02-11
// language=CSS
GM_addStyle([
	'.natTopBar'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-02-11
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: absolute !important;}')
;
// 2025-02-11
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-02-11
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-02-11
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-02-11
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