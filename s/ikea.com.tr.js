// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/ikea.com.tr.js
// @icon https://image-ikea.mncdn.com/_assets/img/ikea-app-logo.png
// @match *://www.ikea.com.tr/*
// @name Ikea Turkey
// ==/UserScript==
// 2024-12-08 "Improve `ikea.com.tr`": https://github.com/dmitrii-fediuk/vm/issues/74
// language=CSS
GM_addStyle([
	'#persona-header-text-bant'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'.filter--fixed'
	,'.header-parent'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;