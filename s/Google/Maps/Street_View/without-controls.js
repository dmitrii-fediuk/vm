// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Maps/Street_View/without-controls.js
// @icon https://www.google.com/images/branding/product/ico/maps15_bnuw3a_64dp.ico
// @match https://www.google.com/maps/*
// @name Google / Maps / Street View / without controls
// ==/UserScript==
// 2024-10-27 "Improve Google Maps": https://github.com/dmitrii-fediuk/vm/issues/61
// language=CSS
GM_addStyle([
	'#bottom-pane'
	,'#layer'
	,'#minimap'
	,'#titlecard'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
