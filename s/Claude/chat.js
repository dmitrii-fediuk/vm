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
	,':has(> [data-testid="user-message"]) > .shrink-0'
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
	'.mx-auto:has(> div > [data-test-render-count])'
	,'[data-test-render-count] > div > div'
	,'[data-test-render-count] > div'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-27
// language=CSS
GM_addStyle([
	//'.bottom-0.sticky'
	'.bottom-0.absolute:has(svg[data-testid="action-bar-copy"]) > div'
	,'.mx-auto:has(> div > [data-test-render-count])'
	,':has(> [data-test-render-count])'
	,'[data-test-render-count] > div > div'
	,'header.sticky ~ div'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-27
// language=CSS
GM_addStyle([
	'[class*=max-w-]'
]
	 // language=Javascript
	.join(',') + '{max-width: 100% !important;}')
;
// 2025-03-27
// language=CSS
GM_addStyle([
	'.mx-auto:has(> div > [data-test-render-count])'
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
// 2025-03-27
// language=CSS
GM_addStyle([
	'.bottom-0.absolute:has(svg[data-testid="action-bar-copy"])'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'position': 'initial'
			//,'overflow': 'visible'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-27
// language=CSS
GM_addStyle('body {padding: 0 1rem !important;}');