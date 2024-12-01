// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Anthropic/rossmann.com.tr.js
// @icon https://cdn.rossmann.com.tr/media/favicon/stores/1/favicon.png
// @match *://www.rossmann.com.tr/*
// @name rossmann.com.tr
// ==/UserScript==
// 2024-12-01 "Improve `rossmann.com.tr`": https://github.com/dmitrii-fediuk/vm/issues/70
// language=CSS
GM_addStyle([
	//'[class*="custom-countdown-wrapper"]'
	'[class*="preview-wrapper-notification-center"]'
	,'[id$="back-to-top"]'
	,'.category-view'
	,'.mnm-header-catalogue'
	,'.mnm-header-stores'
	,'.mnm-main-message'
	,'.nav-sections'
	,'.page-products .product-item-actions'
	,'header.short-header'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'header.page-header'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// language=CSS
GM_addStyle([
	'.nav-sections'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// language=CSS
GM_addStyle('.breadcrumbs {margin-bottom: 0.5rem !important; margin-top: 0.5rem !important;}');
// language=CSS
GM_addStyle('.page-wrapper, body.has-mnm-top-banner .page-wrapper {padding-top: 0 !important;}');
