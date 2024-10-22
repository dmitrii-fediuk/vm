// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/AI_Studio.js
// @icon https://www.gstatic.com/aistudio/ai_studio_favicon_64x64.svg
// @match *://aistudio.google.com/*
// @name Google / AI Studio
// ==/UserScript==
// 2024-10-23 "Improve `aistudio.google.com`": https://github.com/dmitrii-fediuk/vm/issues/59
// language=CSS
GM_addStyle([
	'.card-container'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;

