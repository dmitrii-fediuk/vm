// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/docs.hetzner.com.js
// @icon https://docs.hetzner.com/favicon-32x32.png
// @match *://docs.hetzner.com/*
// @name docs.hetzner.com
// ==/UserScript==
// 2025-02-08 "Improve `docs.hetzner.com`": https://github.com/dmitrii-fediuk/vm/issues/89
// language=CSS
GM_addStyle([
	'footer'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-02-05
// language=CSS
GM_addStyle([
	'nav'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-02-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: absolute !important;}')
;
// 2025-02-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-02-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-02-05
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;