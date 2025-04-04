// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Claude/common-prev.js
// @icon https://claude.ai/images/claude_app_icon.png
// @match *://claude.ai/*
// @name Claude / Common / Prev
// ==/UserScript==
// 2024-11-30 "Improve `claude.ai`": https://github.com/dmitrii-fediuk/vm/issues/68
// 2025-03-20
// language=CSS
GM_addStyle([
	':has(> a > svg[aria-label="Claude"])'
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
	,'main > .mx-auto'
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
	,'.gap-8'
	,':has(> .bottom-0) > :first-child' // 2025-03-20 The content
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
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
// 2025-03-27
// language=CSS
GM_addStyle([
	'header.sticky' // 2025-03-27 https://chatgpt.com/c/67e5a168-bde0-8003-997e-4f01ee718e0a
]
	 // language=Javascript
	.join(',') + '{z-index: 0 !important;}')
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