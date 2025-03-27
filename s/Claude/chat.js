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
	,':has(> .bottom-0.sticky) > :first-child > :not([data-test-render-count])'
	,':has(> a[href^="https://support.anthropic.com/en/articles/8525154"])'
	,'button:has(svg[data-testid="action-bar-copy"]) ~ *'
	,'header.sticky'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-27
// language=CSS
GM_addStyle([
	//'.bottom-0.sticky'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;