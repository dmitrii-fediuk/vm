// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Grok/share.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.24.0/files/light/grok.png
// @match *://grok.com/share/*
// @name Grok / Share
// ==/UserScript==
// 2025-02-21, 2025-04-20 "Improve `grok.com`": https://github.com/dmitrii-fediuk/vm/issues/92
// language=CSS
GM_addStyle([
	'div[style^="padding-"]:empty' // 2025-04-20
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;