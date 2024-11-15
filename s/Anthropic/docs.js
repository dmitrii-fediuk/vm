// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Anthropic/docs.js
// @icon https://mintlify.s3-us-west-1.amazonaws.com/anthropic/_generated/favicon/apple-touch-icon.png?v=3
// @match *://docs.anthropic.com/*
// @name Anthropic / Docs
// ==/UserScript==
// 2024-11-15 "Improve `docs.anthropic.com`": https://github.com/dmitrii-fediuk/vm/issues/64
// language=CSS
GM_addStyle([
	'#ikp-chat-button'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'#navbar'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// language=CSS
GM_addStyle([
	'#content-container > .flex'
]
	 // language=Javascript
	.join(',') + '{padding-top: 0 !important;}')
;