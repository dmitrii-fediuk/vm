// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Adobe/business.js
// @icon https://experienceleague.adobe.com/favicon.ico
// @match *://business.adobe.com/*
// @name Adobe / business
// ==/UserScript==
// 2024-12-13 "Improve `business.adobe.com`": https://github.com/dmitrii-fediuk/vm/issues/82
// language=CSS
GM_addStyle([
	'footer.global-footer'
	,'.notification'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'header.global-navigation'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;