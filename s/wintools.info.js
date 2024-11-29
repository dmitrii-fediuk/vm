// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/jobs.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.wintools.info/*
// @name wintools.info
// ==/UserScript==
// 2024-11-29 "Improve `wintools.info`": https://github.com/dmitrii-fediuk/vm/issues/67
// language=CSS
GM_addStyle([
	'[data-cky-tag="revisit-consent"]'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;