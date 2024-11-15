// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Anthropic/docs.js
// @icon https://mintlify.s3-us-west-1.amazonaws.com/anthropic/_generated/favicon/apple-touch-icon.png?v=3
// @match *://www.anthropic.com/*
// @name Anthropic / www
// ==/UserScript==
// 2024-11-15 "Improve `www.anthropic.com`": https://github.com/dmitrii-fediuk/vm/issues/65
// language=CSS
GM_addStyle([
	'a[class^="SiteHeader_core-logo-link"]'
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