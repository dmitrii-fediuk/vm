// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/chat.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/u/1/app/*
// @name Google / Gemini / Chat
// ==/UserScript==
// 2024-10-23 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// 2025-03-28
// language=CSS
GM_addStyle([
	'.boqOnegoogleliteOgbOneGoogleBar'
	,'.query-content > :has(> button[aria-label="Edit"])'
	,'.response-container-header'
	,'.side-nav-menu-button > button[data-test-id="side-nav-menu-button"]'
	,'hallucination-disclaimer'
	,'top-bar-actions'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle([
	'main'
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-03-28
// 1) https://chatgpt.com/c/67e4b4cc-4a38-8003-9d53-d5eac3ac47b8
// 2) Similar to:
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/grok.com.js#L89-L91
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/ChatGPT.js#L52-L54
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-27/s/Claude.js#L96-L102
// language=CSS
GM_addStyle([
	'main'
]
	 // language=Javascript
	.join(',') + '{display: block !important; height: auto !important; overflow-y: visible !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle([
	//'.side-nav-menu-button'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle([
	//'.side-nav-menu-button'
]
	 // language=Javascript
	.join(',') + '{position: absolute !important;}')
;