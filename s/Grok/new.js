// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Grok/new.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.24.0/files/light/grok.png
// 2025-04-11 https://chatgpt.com/c/67f90733-5ca8-8003-aa11-1ed2a0e22ea1
// @match *://grok.com/
// @name Grok / New
// ==/UserScript==
// 2025-02-21, 2025-04-19 "Improve `grok.com`": https://github.com/dmitrii-fediuk/vm/issues/92
// 2025-04-20
// language=CSS
GM_addStyle([
	'form.bottom-0 textarea'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;