// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/common.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/*
// @name Google / Gemini / Common
// ==/UserScript==
// 2024-10-23 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// 2025-03-28
console.log('Common');
// language=CSS
GM_addStyle([
	'.bard-logo-container'
	,'.trailing-actions-wrapper:has(speech-dictation-mic-button)'
	//,'[data-placeholder="Ask Gemini"]'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;