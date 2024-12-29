// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/DeepL.js
// @icon https://static.deepl.com/img/favicon/tile_144.png
// @match *://www.deepl.com/*
// @name DeepL
// ==/UserScript==
// 2024-09-27 "Improve the appearance of DeepL": https://github.com/dmitrii-fediuk/vm/issues/49
// language=CSS
GM_addStyle([
	'div:has(> button[data-testid="floating-button-ui"])'
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
