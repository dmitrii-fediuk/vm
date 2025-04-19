// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/farfetch.com.js
// @icon https://cdn-static.farfetch-contents.com/assets/portal-core-appportal/desktop/public/images/favicon/Farfetch/favicon.svg
// @match *://www.farfetch.com/*
// @name Farfetch
// ==/UserScript==
// 2025-03-15 "Improve `farfetch.com`": https://github.com/dmitrii-fediuk/vm/issues/98
// 2025-03-15
// language=CSS
GM_addStyle([
	'#catalog-actions'
	,'header'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;