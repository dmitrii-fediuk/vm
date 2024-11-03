// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/trendyol.com.js
// @icon https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cd/72/0e/cd720ecb-ce51-0af0-85dc-0365e75bb9ad/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp
// @match *://www.trendyol.com/*
// @name Trendyol
// ==/UserScript==
// 2024-11-03 "Improve `trendyol.com`": https://github.com/dmitrii-fediuk/vm/issues/63
// language=CSS
GM_addStyle([
	'#collection-recommendation'
	,'#headerMain > .wrapper'
	,'.related-categories'
	,'.search-landings-container'
	,'[data-fragment-name="TopBanner"]'
	,'footer'
	// 2024-11-03 https://chatgpt.com/c/6715bd95-bee4-8006-bf0f-5174d0c9dfba
	,'ul.navigation-all-categories-enabled > li:has(> a[href*="/cok-satanlar?"])'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'.sticky-header'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;