// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/archive.is/common.js
// @icon https://archive.is/apple-touch-icon-144x144.png
// 2025-04-11 https://chatgpt.com/c/67f90c02-eb2c-8003-912b-607eae8ec098
// @match https://archive.is/*
// @name archive.is / Common
// ==/UserScript==
// 2025-04-10 "Improve `archive.is`": https://github.com/dmitrii-fediuk/vm/issues/101
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background: none !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background-color: initial !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: initial !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: initial !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
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
// 2025-04-10
// language=CSS
//GM_addStyle('body {margin: 0 1rem !important;}');