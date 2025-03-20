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
	':has(> [data-testid="user-message"]) > .shrink-0'
	,':has(> a > svg[aria-label="Claude"])'
	,':has(> a[href^="https://support.anthropic.com/en/articles/8525154"])'
	,'button:has(svg[data-testid="action-bar-copy"]) ~ *'
	,'button[data-testid="conversation-star-button"]'
	// 2025-03-20 Claude does not allow sharing chats with everyone, so the «Share» button is useless for me.
	,'button[data-testid="conversation-star-button"] ~ :has(button[data-testid="share-button"])'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-20
// language=CSS
GM_addStyle([
	':has(> .group > .-bottom-0)'
	,'header.sticky'
	,'.max-w-2xl'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-20
// language=CSS
GM_addStyle([
	'.bottom-0'
	,':has(> .bottom-0)'
	,':has(> .bottom-0) > :first-child' // 2025-03-20 The content
	,':has(> .bottom-0) > :first-child .group'
	,'header.sticky + div'
	,'header.sticky > div'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-20
// language=CSS
GM_addStyle([
	'.gap-7'
	,':has(> .bottom-0) > :first-child' // 2025-03-20 The content
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
;
// 2025-03-20
// language=CSS
GM_addStyle([
	'.sticky'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-20
// language=CSS
GM_addStyle([
	'.max-w-2xl'
	,'.max-w-3xl'
	,':has(> .-bottom-0)' // 2025-03-20 The last prompt
	,':has(> .bottom-0) > :first-child' // 2025-03-20 The content
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['width', 'min-width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
		// language=CSS
		Object.entries({
			// language=Javascript
			'max-width': '100%'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-20
// language=CSS
GM_addStyle([
	'header.sticky'
]
	 // language=Javascript
	.join(',') + '{height: auto !important;}')
;
// 2025-01-04 https://chatgpt.com/c/67792143-94dc-800c-a793-809f8e8488e6
// 2025-03-20
// Similar to:
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/grok.com.js#L89-L91
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/ChatGPT.js#L52-L54
// language=CSS
GM_addStyle('.h-screen {height: auto !important; overflow: visible !important;}');
// 2025-03-20
// language=CSS
GM_addStyle('nav[data-testid="menu-sidebar"] {width: 2rem !important;}');

