// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/DeepL.js
// @icon https://static.deepl.com/img/favicon/tile_144.png
// @match *://www.deepl.com/*
// @name DeepL
// ==/UserScript==
// 2024-09-27 "Improve the appearance of DeepL": https://github.com/dmitrii-fediuk/vm/issues/49
// 2024-12-30
// language=CSS
GM_addStyle([
	'#textareasContainer .sticky'
	,'[data-testid="product-navigation-sidebar-container"]'
	,'div:has(> button[data-testid="floating-button-ui"])'
	,'div:has(> main) ~ *'
	,'footer'
	,'span:has(> [data-testid="downloadButtonHeader"])'
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
// 2024-12-30
// language=CSS
GM_addStyle([
	'div:has(> main)'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2024-12-30
// language=CSS
// 2024-12-30
// language=CSS
GM_addStyle([
	'[data-testid$="-flyout-panel"]'
	,'[id*="-popover-panel-"]'
]
	 // language=Javascript
	.join(',') + '{z-index: 3  !important;}')
;
