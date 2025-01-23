// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/aromelkimya.com.js
// @icon https://ideacdn.net/idea/ec/24/themes/selftpl_6249783aec61a/assets/uploads/logo.jpeg
// @match *://www.aromelkimya.com/*
// @name aromelkimya.com
// ==/UserScript==
// 2025-01-23 "Improve `aromelkimya.com`": https://github.com/dmitrii-fediuk/vm/issues/85
// language=CSS
GM_addStyle([
	'#scroll-top'
	,'.banner'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'header > *'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// language=CSS
GM_addStyle([
	'main'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
if (/^\/(kategori|urun)\//.test(location.pathname)) {
	// language=CSS
	GM_addStyle([
		'#ideasoft'
		,'footer'
		,'header'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}
if (location.pathname.startsWith('/urun/')) {
	// language=CSS
	GM_addStyle([
		'.product-comments-container'
		,'.product-detail-tab-header'
		,'.product-lowest-price'
		,'.similar-products'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
	// language=CSS
	GM_addStyle([
		'.product-detail-tab'
	]
		 // language=Javascript
		.join(',') + '{margin: 0 !important;}')
	;
}