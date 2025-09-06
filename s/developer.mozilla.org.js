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
	,'.baseline-indicator'
	,'.page-layout__banner' // 2025-09-06
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
	.join(',') + '{display: block !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
	'header' // 2025-09-06
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
	'.code-example'
	,'.main-wrapper'
	,'.table-container'
	,'dd'
	,'dl'
	,'dt'
	,'h1'
	,'h2'
	,'h5'
	,'h6'
	,'li'
	,'pre'
	,'table'
	,'ul'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
	'.main-wrapper'
	,'.table-container-inner'
	,'main'
	,'pre'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
	'.main-wrapper'
	,'.table-container'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['width', 'min-width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
		// language=CSS
		Object.entries({
			// language=Javascript
			'max-width': '100%'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-18
// language=CSS
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-03-18
// language=CSS
GM_addStyle('h3 {margin: 0.25rem 0 !important;}');
// 2025-03-18
// language=CSS
GM_addStyle('h4 {margin: 0.2rem 0 !important;}');
// 2025-03-18
// language=CSS
GM_addStyle('p {margin: 0.25rem 0 !important;}');
// 2025-03-18
// language=CSS
GM_addStyle('.bc-legend-items-container {row-gap: 0 !important;}');