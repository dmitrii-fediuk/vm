// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Anthropic/akakce.js
// @icon https://cdn.akakce.com/favicon.ico
// @match *://*.akakce.com/*
// @name Akakce
// ==/UserScript==
// 2024-11-30 "Improve `akakce.com`": https://github.com/dmitrii-fediuk/vm/issues/69
// language=CSS
GM_addStyle([
	'.topBanner'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'header'
	,'[id^="H_bg_v"]'
	,'[id^="H_v"]'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;