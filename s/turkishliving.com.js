// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/turkishliving.com.js
// @icon https://turkishliving.com/forums/data/assets/logo/xTurkishLiving_PWA192.png.pagespeed.ic.AxBROYz33R.png
// @match *://turkishliving.com/*
// @name turkishliving.com
// ==/UserScript==
// 2024-10-16 "Improve `turkishliving.com`": https://github.com/dmitrii-fediuk/vm/issues/55
// language=CSS
// language=CSS
GM_addStyle([
	'.p-body-sidebar'
	,'.p-body-sidebarCol'
	,'.u-scrollButtons'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'.is-sticky'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;