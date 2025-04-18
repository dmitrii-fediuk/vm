// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/GitHub/wiki.js
// @icon https://github.com/fluidicon.png
// @match *://github.com/*/*/wiki/*
// 2025-04-11 https://chatgpt.com/c/67f90ba8-a62c-8003-a059-cf3b84e22792
// @exclude-match *://github.com/*/*/wiki/
// @name GitHub / Wiki
// ==/UserScript==
// 2024-09-20, 2025-04-18 "Improve the GitHub appearance": https://github.com/dmitrii-fediuk/vm/issues/47
console.log('Wiki');
// language=CSS
GM_addStyle([
	'.Layout-sidebar'
	,'header.AppHeader'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;