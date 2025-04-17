// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Cloudflare/developers.js
// @icon https://dash.cloudflare.com/favicon-196x196.png
// @match https://developers.cloudflare.com/*
// @name Cloudflare / developers
// ==/UserScript==
// 2025-04-17 "Improve `cloudflare.com`": https://github.com/dmitrii-fediuk/vm/issues/106
// language=CSS
GM_addStyle([
	'.sidebar'
	,':has(> astro-island)'
	,'aside'
	,'footer ~ *'
	,'footer'
	,'header'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
	'.heading-wrapper'
	,'.sl-markdown-content'
	,'h1'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
	'.content-panel'
	,'.main-frame'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background: none !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background-color: initial !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: initial !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: initial !important;}')
;
// 2025-04-17
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
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2025-04-17
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
// 2025-04-17
// language=CSS
//GM_addStyle('body {margin: 0 1rem !important;}');