// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/JetBrains/YouTrack.js
// @icon https://www.jetbrains.com/apple-touch-icon.png
// @match *://youtrack.jetbrains.com/*
// @name JetBrains / YouTrack
// ==/UserScript==
// 2025-03-25 "Improve `jetbrains.com`": https://github.com/dmitrii-fediuk/vm/issues/84
// language=CSS
GM_addStyle([
	'.manager__menu'
	,'[class*="toTopButtonScroll"]'
	,'[class^="secondColumn"]:has([data-test="current-visibility"])'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([
	'[class*="ticketHeaderSticky"]'
	,'[class^="ticketNavigation"]'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([
	'[class*="ticketHeaderSticky"]'
	,'article'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([
	'[class*="ticketHeaderSticky"]'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle('body {padding: 0 1rem !important;}');