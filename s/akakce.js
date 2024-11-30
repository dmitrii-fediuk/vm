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
	// 2024-11-30
	// «Takip et, tüm satıcılardaki indirimlerden haberdar ol.» / «Follow to stay informed about discounts from all sellers.»
	'#ntf_w'
	// 2024-11-30
	// «Kasım İndirimlerini Akakçe'den Takip Eden Kazanıyor» / «Those who follow November discounts on Akakçe win»
	,'#ntf_w ~ [class$="_dis"]'
	,'#Topper'
	// 2024-11-30
	// 1) «Ürüne puan ver» / «Rate the product»
	// 2) «Hatalı içerik mi buldunuz? Bizimle paylaşın.» / «Did you find incorrect content? Share it with us.»
	,'.rw_v8:has(> #RTG)'
	,'.topBanner'
	// 2024-11-30
	// «11 satıcı içinde kargo dahil en ucuz fiyat seçeneği» / «The cheapest price option including shipping among 11 sellers»
	,'[class^="spt_v"]'
	// 2024-11-30 «Daha düşük bir fiyat mı buldunuz? Bizimle paylaşın.» / «Did you find a lower price? Share it with us.
	,'[id^="RCP_v"]'
	,'[title="Takip Listem"]'
	,'footer'
	,'header > div:has(> a[id^="H_l_v"])' // 2024-11-30 Logo
	,'nav[id^="BC_v"]'
	,'section:has(a[href="/son-baktiklarim/"])' // 2024-11-30 «Son Baktıklarım» / «My Recent Views»
	,'.rw_v8:has(a[title^="En Popüler"])'
	//,'[class^="pl_v"]' // 2024-11-30 «Bu Ürüne Bakanlar Bunlara Da Baktı» / «People who viewed this product also viewed these»
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
	'nav[id^="BC_v"]'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;