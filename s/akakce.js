// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Anthropic/akakce.js
// @icon https://cdn.akakce.com/favicon.ico
// @match *://*.akakce.com/*
// @name Akakce
// ==/UserScript==
// 2024-11-30 "Improve `akakce.com`": https://github.com/dmitrii-fediuk/vm/issues/69
// language=CSS
GM_addStyle([
	'#Topper'
	// 2024-11-30
	// 1) «Ürüne puan ver» / «Rate the product»
	// 2) «Hatalı içerik mi buldunuz?Bizimle paylaşın.» / «Did you find incorrect content? Share it with us.»
	,'.rw_v8:has(> #RTG)'
	,'.topBanner'
	,'section:has(a[href="/son-baktiklarim/"])' // 2024-11-30 «Son Baktıklarım» / «My Recent Views»
	//,'[class^="pl_v"]' // 2024-11-30 «Bu Ürüne Bakanlar Bunlara Da Baktı» / «People who viewed this product also viewed these»
	,'footer'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'#LM_s'
	,'[id^="H_bg_v"]'
	,'[id^="H_v"]'
	,'[id^="H_v"]::before'
	,'header'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// language=CSS
GM_addStyle([
	'nav'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;