// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/ikea.com.tr.js
// @icon https://cdn.oaistatic.com/assets/apple-touch-icon-mz9nytnj.webp
// @match *://www.ikea.com.tr/*
// @name Ikea Turkey
// ==/UserScript==
// 2024-12-08 "Improve `ikea.com.tr`": https://github.com/dmitrii-fediuk/vm/issues/74
// language=CSS
GM_addStyle([
	'#composer-background .min-w-8:has([data-testid="composer-speech-button"])'
	,'.composer-parent ~ .absolute' // The «?» sticky button
	,'.composer-parent div:has(> div > ul > li > button > svg)'
	// 2024-12-03
	// 1) «What can I help with?»
	// 2) «<…> workspace chats aren't used to train our models. ChatGPT can make mistakes.»
	,'.text-base:has(form #composer-background) > .text-center'
	// 2024-12-03 «<…> workspace chats aren't used to train our models. ChatGPT can make mistakes.»
	,'.text-base:has(form #composer-background) + .text-center'
	,'article + .cursor-pointer'
	,'div:has(> h1.result-streaming) > h1' // 2024-12-06 «What can I help with?»
	// 2024-10-08
	// "Hide follow-up question bubbles after ChatGPT responses": https://github.com/dmitrii-fediuk/vm/issues/50
	,'form[type="button"] div.absolute'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2024-12-03
// language=CSS
GM_addStyle('.md\\:max-w-3xl {max-width: initial !important;}');
// language=CSS
GM_addStyle('.md\\:pb-9 {padding: 0 !important;}');