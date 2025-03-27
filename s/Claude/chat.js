// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Claude/chat.js
// @icon https://claude.ai/images/claude_app_icon.png
// @match *://claude.ai/chat/*
// @name Claude / Chat
// ==/UserScript==
// 2024-11-30 "Improve `claude.ai`": https://github.com/dmitrii-fediuk/vm/issues/68
// 2025-03-27
// language=CSS
GM_addStyle([
	'.z-sidebar' // 2025-03-27 The left sidebar
	,'header.sticky > .blur.sm'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;