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
	,'[class^="description__"]'
	,'[class^="ticketNavigation"]'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([
	'[class*="ticketHeaderSticky"]'
	,'[data-test="issue-container"]'
	,'article'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([
	'.global-top-bar'
	,'[class*="ticketHeaderSticky"]'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([
	'.global-top-bar'
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle('body {padding: 0 1rem !important;}');
// 2025-03-25
// language=CSS
GM_addStyle('[class^="contentWrapper"] {flex-direction: column !important;}');
// 2025-03-25
// language=CSS
GM_addStyle('[class*="linkedTickets"] {margin: 0.25rem 0 0 0 !important;}');
// 2025-03-25
// language=CSS
GM_addStyle('.text {line-height: 1.4 !important;}');
// 2025-03-25
// language=CSS
GM_addStyle('.text br {display: block !important; content: ""; height: 1px !important;}');