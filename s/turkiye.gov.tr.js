// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/turkiye.gov.tr.js
// @icon https://cdn.e-devlet.gov.tr/themes/izmir/images/favicons/favicon-196x196.1.8.0.png
// @match https://www.turkiye.gov.tr/*
// @name turkiye.gov.tr
// ==/UserScript==
// 2025-04-15 "Improve `turkiye.gov.tr`": https://github.com/dmitrii-fediuk/vm/issues/104
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'header#top'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background: none !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background-color: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'*'
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: initial !important;}')
;
// 2025-04-15
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
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Segoie UI'
			// language=Javascript
			,'font-size': '150%'
			// language=CSS
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);