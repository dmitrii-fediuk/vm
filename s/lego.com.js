// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/lego.com.js
// @icon https://www.lego.com/lego-logo-512.png
// @match *://www.lego.com/*
// @name lego.com
// ==/UserScript==
// 2024-10-19 "Improve `lego.com`": https://github.com/dmitrii-fediuk/vm/issues/56
// language=CSS
// language=CSS
GM_addStyle([
	'[data-test=fixed-pos-wrapper]'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;