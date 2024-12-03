// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/ChatGPT.js
// @icon https://cdn.oaistatic.com/assets/apple-touch-icon-mz9nytnj.webp
// @match *://chatgpt.com/*
// @name ChatGPT
// ==/UserScript==
// 2024-10-08 "Improve the appearance of ChatGPT": https://github.com/dmitrii-fediuk/vm/issues/51
// language=CSS
GM_addStyle([
	//'.text-base:has(form #composer-background) > .text-center' // 2024-12-03 «What can I help with?»
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2024-10-08
// "Hide follow-up question bubbles after ChatGPT responses": https://github.com/dmitrii-fediuk/vm/issues/50
// language=CSS
GM_addStyle('form[type="button"] div.absolute {display: none !important;}');
// language=CSS
GM_addStyle([
	'.text-base:has(form #composer-background) > .text-center' // 2024-12-03 «What can I help with?»
]
	 // language=Javascript
	.join(',') + '{background: yellow !important;}')
;
