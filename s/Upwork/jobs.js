// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/jobs.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/nx/search/jobs/*
// @name Upwork / Jobs
// ==/UserScript==
// 2024-11-11 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
// language=CSS
GM_addStyle([
	'.nav-container > .nav-header[data-cy="header"][data-test="up-s-nav-header"]'
	,'[data-test$="JobsButtons"]'
	,'[data-test="Header"]'
	,'[data-test="JobsPage"] > [data-test="FiltersActive"]'
	,'[data-test="JobsPage"] > [data-test="FiltersList"]'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'[data-test="JobsPage"]'
	,'[data-test="JobsPage"] > div:last-of-type'
]
	 // language=Javascript
	.join(',') + '{display: initial !important;}')
;
// language=CSS
GM_addStyle([
	'#main > .container'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;