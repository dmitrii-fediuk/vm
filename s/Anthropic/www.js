// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Anthropic/docs.js
// @icon https://www.anthropic.com/images/icons/apple-touch-icon.png
// @match *://www.anthropic.com/*
// @name Anthropic / www
// ==/UserScript==
// 2024-11-15 "Improve `www.anthropic.com`": https://github.com/dmitrii-fediuk/vm/issues/65
// language=CSS
GM_addStyle([
	`[class*='Sticky']`  // 2026-10-24
	,`a[class^='SiteHeader_core-logo-link']` // 2024-11-15
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'header'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// language=CSS
GM_addStyle([
	'.post-text'
]
	 // language=Javascript
	.join(',') + '{max-width: initial !important;}')
;