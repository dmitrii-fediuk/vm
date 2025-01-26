// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Trendyol/product/list/top.js
// @icon https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cd/72/0e/cd720ecb-ce51-0af0-85dc-0365e75bb9ad/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp
// @match *://www.trendyol.com/sirali-urunler?*
// @name Trendyol / Product / List / Top
// ==/UserScript==
// 2024-11-03 "Improve `trendyol.com`": https://github.com/dmitrii-fediuk/vm/issues/63
// 2025-01-26
// language=CSS
GM_addStyle([
	'#header'
	,'.category-top-ranking-image'
	,'[data-fragment-name="Navigation"]'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;