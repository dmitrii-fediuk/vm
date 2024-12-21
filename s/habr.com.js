// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/habr.com.js
// @icon https://assets.habr.com/habr-web/img/favicons/apple-touch-icon-256.png
// @match *://habr.com/*
// @name habr.com
// ==/UserScript==
// 2024-12-21 "Improve `habr.com`": https://github.com/dmitrii-fediuk/vm/issues/78
// language=CSS
GM_addStyle([
	'.banner'
	,'.tm-article-sticky-panel'
	,'.tm-feature'
	,'.tm-header__logo-wrap'
	,'[data-test-id="search-button"]'
	,'[data-test-id="tracker-link"]'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;