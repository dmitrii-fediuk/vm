// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/sikayetvar.com.js
// @icon https://cdn.sikayetvar.com/public/images/favicon/apple-touch-icon.png
// @match *://www.sikayetvar.com/*
// @name sikayetvar.com
// ==/UserScript==
// 2024-12-09 "Improve `sikayetvar.com`": https://github.com/dmitrii-fediuk/vm/issues/75
// language=CSS
GM_addStyle([
	'#announcement'
	,'.advertisement'
	,'.complaint-detail-actions-write-complaint'
	,'.header-related-searches'
	,'.keyword-container'
	,'.model-comparison'
	,'.model-specs'
	,'.promo-banner'
	,'.related-searches'
	,'.section-company-collection-list'
	,'.show-rating'
	,'.similar-complaint'
	,'.sv-logo'
	,'[data-ga-element="Header_Logo"]'
	,'[data-ga-element="Model_Name_Button"]'
	,'footer ~ .brand-summary-box'
	,'footer'
	,'form:has(> [data-ga-element="Complaint_Search"])'
	,'body:has(main[data-page-type="Complaint Page"]) #main-header'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'.brand-summary-box'
	,'#main-header'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// language=CSS
GM_addStyle('.brand-detail-complaint-list {padding-top: 0.5rem !important;}');
// language=CSS
GM_addStyle('.brand-detail-grid__main {padding: 0 !important;}');
// language=CSS
GM_addStyle('.container-md {padding: 0 !important;}');
// language=CSS
GM_addStyle('.box-brand-profile {margin: 0 !important;}');
// language=CSS
GM_addStyle('.model-analysis {margin-bottom: 0.5rem !important;}');