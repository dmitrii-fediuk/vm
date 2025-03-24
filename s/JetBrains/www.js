// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/JetBrains/www.js
// @icon https://www.jetbrains.com/apple-touch-icon.png
// @match *://www.jetbrains.com/*
// @name JetBrains / www
// ==/UserScript==
// 2025-01-12 "Improve `jetbrains.com`": https://github.com/dmitrii-fediuk/vm/issues/84
// language=CSS
GM_addStyle([
	'app__footer'
	,'.app__header'
	,'div:has(> .app__sub-header)'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;