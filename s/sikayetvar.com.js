// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/sikayetvar.com.js
// @icon https://cdn.sikayetvar.com/public/images/favicon/apple-touch-icon.png
// @match *://www.sikayetvar.com/*
// @name sikayetvar.com
// ==/UserScript==
// 2024-12-09 "Improve `sikayetvar.com`": https://github.com/dmitrii-fediuk/vm/issues/75
// language=CSS
GM_addStyle([
	'#announcement'
	,'.model-comparison'
	,'.model-specs'
	,'.section-company-collection-list'
	,'[data-ga-element="Header_Logo"]'
	,'footer'
	,'footer ~ .brand-summary-box'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'.brand-summary-box'
	,'header'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;