// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/share.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/share/*
// @name Google / Gemini / Share
// ==/UserScript==
// 2025-04-20 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// 2025-04-20
// language=CSS
GM_addStyle([
	'.share-viewer_chat-container ~ *'
	,'share-viewer ~ *'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;