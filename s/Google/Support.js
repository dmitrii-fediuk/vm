// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Support.js
// @icon https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA
// @match *://support.google.com/*
// @name Google / Support
// ==/UserScript==
// 2025-02-04 "Improve `support.google.com`": https://github.com/dmitrii-fediuk/vm/issues/87
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-02-04
// language=CSS
GM_addStyle([
	'header'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;