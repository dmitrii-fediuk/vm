// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/JetBrains/intellij-support.js
// @icon https://www.jetbrains.com/apple-touch-icon.png
// @match *://intellij-support.jetbrains.com/*
// @name JetBrains / intellij-support
// ==/UserScript==
// 2025-03-25 "Improve `jetbrains.com`": https://github.com/dmitrii-fediuk/vm/issues/84
// language=CSS
GM_addStyle([
	'.page__header'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;