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
	'.filters-list[data-test="FiltersList"]'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;