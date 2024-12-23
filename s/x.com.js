// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/x.com.js
// @icon https://abs.twimg.com/responsive-web/client-web/icon-ios.77d25eba.png
// @match *://x.com/*
// @name x.com
// ==/UserScript==
// 2024-12-23 "Improve `x.com`": https://github.com/dmitrii-fediuk/vm/issues/79
// language=CSS
GM_addStyle([
	'[data-testid="DMDrawer"]'
	,'[data-testid="sidebarColumn"]'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'[aria-label="Home timeline"] > div'
	,'header[role="banner"] > div:first-of-type > div:first-of-type'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// language=CSS
GM_addStyle([
	'[data-testid="primaryColumn"]'
	,'div:has(> nav[aria-label="Profile timelines"])'
]
	 // language=Javascript
	.join(',') + '{max-width: initial !important;}')
;
// language=CSS
GM_addStyle('main[role="main"] > div {width: 100% !important;}');