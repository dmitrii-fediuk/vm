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
	'.article-content ~ *'
	,'.comments ~ *'
	,'.page__footer'
	,'.page__header'
	,'.post-footer'
	,'.subscribe-wrapper'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([
	'.article-content p'
	,'.margin-bottom-vertical-unit'
	,'.margin-bottom-vertical-unit-half'
	,'.post-header'
	,'.vote'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([
	'.g-container'
	,'.page__content'
	,'.section-content'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle([
	'.margin-bottom-vertical-unit-half'
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-03-25
// language=CSS
GM_addStyle('body {padding: 0 1rem !important;}');