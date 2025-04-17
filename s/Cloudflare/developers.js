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
	,'starlight-tabs'
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
	'.content-panel'
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
	'code'
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
	'*'
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
	'.main-pane'
	,'.sl-container'
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
	'.c-breadcrumbs__link'
	,'.heading-wrapper'
	,'code'
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
	'body'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Segoie UI'
			// language=Javascript
			,'font-size': '150%'
			,'line-height': 1.4
			// language=CSS
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-17
// language=CSS
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-04-17
// language=CSS
GM_addStyle('h1 {font-size: 1.5rem !important; margin: 0.3rem 0 !important;}');
// 2025-04-17
// language=CSS
GM_addStyle('h2 {font-size: 1.4rem !important; margin: 0.3rem 0 !important;}');
// 2025-04-17
// language=CSS
GM_addStyle('h3 {margin: 0.25rem 0 !important;}');
// 2025-04-17
// language=CSS
GM_addStyle('h4 {margin: 0.2rem 0 !important;}');
// 2025-04-17
// language=CSS
GM_addStyle('li, p, ul {margin: 0.25rem 0 !important;}');