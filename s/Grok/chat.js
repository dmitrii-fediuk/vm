// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Grok/chat.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.24.0/files/light/grok.png
// @match *://grok.com/chat/*
// @name Grok / Chat
// ==/UserScript==
// 2025-02-21, 2025-04-19 "Improve `grok.com`": https://github.com/dmitrii-fediuk/vm/issues/92
// language=CSS
GM_addStyle([
	'.message-bubble ~ :has(.lucide-pencil-line)' // 2025-02-21
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;