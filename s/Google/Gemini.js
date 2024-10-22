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
	//'.bot-list-item:has(.bot-name:contains("Brainstormer"))'
	'.capabilities-disclaimer'
	,'zero-state-v2'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;

