// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Hetzner/docs.js
// @icon https://docs.hetzner.com/favicon-32x32.png
// @match *://docs.hetzner.com/*
// @name Hetzner / Docs
// ==/UserScript==
// 2025-02-08 "Improve `docs.hetzner.com`": https://github.com/dmitrii-fediuk/vm/issues/89
// language=CSS
GM_addStyle([
	'button.position-fixed'
	,'footer'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-02-08
// language=CSS
GM_addStyle([
	'nav'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-02-08
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: absolute !important;}')
;
// 2025-02-08
// language=CSS
GM_addStyle([
	'.container'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-02-08
// language=CSS
GM_addStyle([
	'.container'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-02-08
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-02-08
// language=CSS
GM_addStyle([
	'.container'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'min-width', 'width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
	'}'
);
// 2025-02-08
// language=CSS
GM_addStyle('body {padding: 0 0.5rem !important;}');
// 2025-02-08
// language=CSS
GM_addStyle([
	'.mb-5'
	,'h2'
	,'h3'
	,'p'
	,'pre'
	,'small'
]
	 // language=Javascript
	.join(',') + '{margin: 0.25rem 0 !important;}')
;