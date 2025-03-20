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
// 2024-11-30
// language=CSS
GM_addStyle('.max-w-3xl {max-width: 60rem !important;}');