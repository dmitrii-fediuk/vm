// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Trendyol/account/orders.js
// @icon https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/cd/72/0e/cd720ecb-ce51-0af0-85dc-0365e75bb9ad/AppIcon-0-0-1x_U007emarketing-0-10-0-85-220.png/246x0w.webp
// @match *://www.trendyol.com/hesabim/siparislerim*
// @name Trendyol / Account / Orders
// ==/UserScript==
// 2024-11-03 "Improve `trendyol.com`": https://github.com/dmitrii-fediuk/vm/issues/63
// language=CSS
// 2024-12-31
// language=CSS
GM_addStyle([
	'.account-layout-container > .left'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2024-12-31
// language=CSS
GM_addStyle('.account-layout-container > .right {float: none !important;}');