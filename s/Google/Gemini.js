// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini.js
// @icon https://www.gstatic.com/lamda/images/gemini_favicon_f069958c85030456e93de685481c559f160ea06b.png
// @match *://gemini.google.com/*
// @name Google / Gemini
// ==/UserScript==
// 2024-10-23 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// language=CSS
GM_addStyle([
	// 2024-11-03 https://chatgpt.com/c/6715bd95-bee4-8006-bf0f-5174d0c9dfba
	'bot-list-item:has(mat-icon[data-mat-icon-name="emoji_objects"])' // 2024-10-23 "Brainstormer"
	,'bot-list-item:has(mat-icon[data-mat-icon-name="work"])' // 2024-10-23 "Career guide"
	,'.capabilities-disclaimer'
	,'location-footer'
	,'zero-state-v2'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;

