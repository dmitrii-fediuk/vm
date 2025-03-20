// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Claude.js
// @icon https://claude.ai/images/claude_app_icon.png
// @match *://claude.ai/*
// @name Claude
// ==/UserScript==
// 2024-11-30 "Improve `claude.ai`": https://github.com/dmitrii-fediuk/vm/issues/68
// 2025-03-20
// language=CSS
GM_addStyle([
	':has(> a[href^="https://support.anthropic.com/en/articles/8525154"])'
	,'button:has(svg[data-testid="action-bar-copy"]) ~ *'
	,'button[data-testid="conversation-star-button"]'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-20
// language=CSS
GM_addStyle([
	'.sticky'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-01-04 https://chatgpt.com/c/67792143-94dc-800c-a793-809f8e8488e6
// 2025-03-20
// Similar to:
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/grok.com.js#L89-L91
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/ChatGPT.js#L52-L54
// language=CSS
GM_addStyle('.h-screen {height: auto !important; overflow: visible !important;}');
// 2024-11-30
// language=CSS
GM_addStyle('.max-w-3xl {max-width: 60rem !important;}');