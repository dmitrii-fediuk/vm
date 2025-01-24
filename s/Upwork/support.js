// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/support.js
// @icon https://www.upwork.com/favicon.ico
// @match *://support.upwork.com/*
// @name Upwork / Support
// ==/UserScript==
// 2025-01-24 "Improve `support.upwork.com`": https://github.com/dmitrii-fediuk/vm/issues/86
// language=CSS
GM_addStyle([
	'#article-vote-container'
	,'#navbar'
	,'#section-banner-contact'
	,'.navbar-container:has(> footer)'
	,'div:has(> #article-sidebar)'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'div:has(> #article-body)'
]
	 // language=Javascript
	.join(',') + '{width: auto !important;}')
;
// language=CSS
GM_addStyle([
	'#page-header'
	,'h1'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;