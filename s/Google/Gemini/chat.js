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
console.log('Chat');
// language=CSS
GM_addStyle([
	'.boqOnegoogleliteOgbOneGoogleBar'
	,'.query-content > :has(> button[aria-label="Edit"])'
	,'.response-container-header'
	,'hallucination-disclaimer'
	,'top-bar-actions'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;