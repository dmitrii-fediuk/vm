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
	,'.topBanner'
	,'[class^="pp_h_v"]' // 2024-11-30 «Piyasa fiyatları» / «Market prices»
	// 2024-11-30
	// 1) «Ürüne puan ver» / «Rate the product»
	// 2) «Hatalı içerik mi buldunuz? Bizimle paylaşın.» / «Did you find incorrect content? Share it with us.»
	,'[class^="rw_v"]:has(> #RTG)'
	,'[class^="rw_v"]:has(a[title^="En Popüler"])'
	,'[class^="w_v"]:has(> [class^="stock_v"])' // 2024-11-30 «Stokta 10+ adet»
	// 2024-11-30
	// «11 satıcı içinde kargo dahil en ucuz fiyat seçeneği» / «The cheapest price option including shipping among 11 sellers»
	,'[class^="spt_v"]'
	,'[class^="spt_v"] ~ [class^="bd_v"]' // 2024-11-30 «Son güncelleme: Bugün 16:08»
	,'[id^="H_bg_v"]'
	// 2024-11-30 «Daha düşük bir fiyat mı buldunuz? Bizimle paylaşın.» / «Did you find a lower price? Share it with us.
	,'[id^="pd_v"] ~ section > h2' // 2024-11-30 «En Ucuz <…> Fiyatları»
	,'[id^="RCP_v"]'
	,'[title="Takip Listem"]'
	,'footer'
	,'header > div:has(> a[id^="H_l_v"])' // 2024-11-30 Logo
	,'nav[id^="BC_v"]'
	,'section:has(a[href="/son-baktiklarim/"])' // 2024-11-30 «Son Baktıklarım» / «My Recent Views»
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'#LM_s'
	,'[id^="H_v"]'
	,'[id^="H_v"]::before'
	//,'header'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// language=CSS
GM_addStyle('[id^="H_v"] {min-height: 0 !important;}');
// language=CSS
GM_addStyle('nav[id^="BC_v"] {margin: 0 !important;}');
// language=CSS
GM_addStyle('[class^="rw_v"] {max-width: none !important;}');
// language=CSS
GM_addStyle([
	'header#Marvin'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'position': 'absolute'
			,'top': 0
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);