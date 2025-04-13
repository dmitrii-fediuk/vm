// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/ChatGPT/new.js
// @icon https://cdn.oaistatic.com/assets/apple-touch-icon-mz9nytnj.webp
// @match *://chatgpt.com/?model=*
// @name ChatGPT / New
// ==/UserScript==
// 2024-10-08, 2025-03-29 "Improve the appearance of ChatGPT": https://github.com/dmitrii-fediuk/vm/issues/51
// language=CSS
GM_addStyle([
	// 2025-04-13 «What's on the agenda today?»
	'.composer-parent > :has([style*="--vt-splash-screen-headline"])'
	// 2025-03-29 «What can I help with?»
	,':has(> .text-center > .text-2xl > [style*="--vt-splash-screen-headline"])'
	,'div.text-2xl.text-center:has(> h1)' // 2024-12-09 «What can I help with?»
	,'div:has(> h1.result-streaming) > h1' // 2024-12-06 «What can I help with?»
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;