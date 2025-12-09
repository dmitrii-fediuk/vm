// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/DeepL.js
// @icon https://static.deepl.com/img/favicon/tile_144.png
// @match *://www.deepl.com/*
// @name DeepL
// ==/UserScript==
// 2024-09-27 "Improve DeepL": https://github.com/dmitrii-fediuk/vm/issues/49
// 2024-12-30
// language=CSS
GM_addStyle([
	'#textareasContainer .sticky'
	//,'.relative:has(> div > main) > :not(:has(> main))' // 2025-12-10
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
// 2024-12-30
if (location.pathname.endsWith('/write')) {
	// 2024-12-30
	// language=CSS
	GM_addStyle([
		'[data-testid="dl-header"]'
		,'[data-testid="dl-home-header"]'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}