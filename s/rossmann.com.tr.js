// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/rossmann.com.tr.js
// @icon https://cdn.rossmann.com.tr/media/favicon/stores/1/favicon.png
// @match *://www.rossmann.com.tr/*
// @name rossmann.com.tr
// ==/UserScript==
// 2024-12-01 "Improve `rossmann.com.tr`": https://github.com/dmitrii-fediuk/vm/issues/70
// language=CSS
GM_addStyle([
	'[class*="preview-wrapper"]:has([class*="notification-content"])'
	,'[class*="preview-wrapper-notification-center"]'
	,'[id$="back-to-top"]'
	,'.category-view'
	,'.cms-home #maincontent'
	,'.column.main > .block-static-block'
	,'.mnm-header-catalogue'
	,'.mnm-header-stores'
	,'.mnm-main-message'
	,'.nav-sections'
	,'.page-products .product-item-actions'
	,'footer'
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
	,'[class*="preview-wrapper"]'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// language=CSS
GM_addStyle('body {padding-bottom: 1rem;}');
// language=CSS
GM_addStyle('.catalog-product-view main#maincontent {order: initial !important;}');
// language=CSS
GM_addStyle('.column.main {min-height: initial !important; padding: 0 !important;}');
// language=CSS
GM_addStyle('.page-wrapper .breadcrumbs {margin: 0.5rem 0 !important;}');
// language=CSS
GM_addStyle('.page-wrapper, body.has-mnm-top-banner .page-wrapper {padding-top: 0 !important;}');
// language=CSS
GM_addStyle([
	'.product-info-main-area'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'margin': 0, 'order': 'initial', 'padding': 0
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);