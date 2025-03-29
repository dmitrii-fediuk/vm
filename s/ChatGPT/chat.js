// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/ChatGPT/chat.js
// @icon https://cdn.oaistatic.com/assets/apple-touch-icon-mz9nytnj.webp
// @match *://chatgpt.com/c/*
// @name ChatGPT / Chat
// ==/UserScript==
// 2024-10-08 "Improve the appearance of ChatGPT": https://github.com/dmitrii-fediuk/vm/issues/51
// 2025-03-29
// language=CSS
GM_addStyle([
	':has(> [data-testid="copy-turn-action-button"]) ~ *'
	,':has(> button#radix-\\:rp\\:)'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'.absolute:has(> [class*="mask-"] [data-testid="copy-turn-action-button"])'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'.prose li > p'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'.group\\/conversation-turn'
	,'.text-base'
	,'[data-message-author-role="user"] :has(> .whitespace-pre-wrap)'
	,'code.\\!whitespace-pre'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'pre:has(code.\\!whitespace-pre) > div > div'
]
	 // language=Javascript
	.join(',') + '{height: auto !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'[data-message-author-role="user"] :has(> .whitespace-pre-wrap)'
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'[class*="--user-chat-width"]'
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
// 2025-03-29
// language=CSS
GM_addStyle([
	'.composer-parent:has(article)'
	,'.\\[scrollbar-gutter\\:stable\\]'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'display': 'block'
			,'height': 'auto'
			,'overflow-y': 'visible'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-29
// language=CSS
GM_addStyle([
	'.prose'
]
	 // language=Javascript
	.join(',') + '{font-size: 125% !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'.prose'
]
	 // language=Javascript
	.join(',') + '{line-height: 1.3 !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'.prose p'
]
	 // language=Javascript
	.join(',') + '{margin: 0.25rem 0 !important;}')
;
// 2025-01-04
// language=CSS
GM_addStyle('.prose h2 {margin: 0.4rem 0 !important;}');
// 2025-01-04
// language=CSS
GM_addStyle('.prose h3 {margin: 0.25rem 0 !important;}');
// 2025-01-04
// language=CSS
GM_addStyle('.prose :where(hr):not(:where([class~=not-prose] *)) {margin: 0.5rem 0 !important;}');
// 2025-01-04
// language=CSS
GM_addStyle('.prose :where(ol):not(:where([class~=not-prose] *)) {margin: 0 0 0.5rem 0 !important;}');
// 2025-01-04
// language=CSS
GM_addStyle('.prose :where(ul):not(:where([class~=not-prose] *)) {margin: 0 0 0.5rem 0 !important;}');
// 2025-03-29
// language=CSS
GM_addStyle('.prose :where(li):not(:where([class~=not-prose] *)) {margin: 0.25rem 0 !important;}');
// 2025-03-29
// language=CSS
GM_addStyle(':has(> code.\\!whitespace-pre) {padding-bottom: 0 !important; padding-top: 0 !important;}');
// 2025-03-29
// language=CSS
GM_addStyle('pre:has(code.\\!whitespace-pre) > div > div {' +
	'padding-bottom: 0 !important; padding-top: 0 !important;}'
);
// 2025-03-29
// language=CSS
GM_addStyle([
	'code:not(.\\!whitespace-pre)'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'background': 'none'
			,'color': '#067D17'
			,'font-weight': 'bold'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-29
// language=CSS
GM_addStyle([
	'code.\\!whitespace-pre'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=Javascript
			'font-size': '90%'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-03-29
// language=CSS
GM_addStyle('[class*="mask-"]:has([data-testid="copy-turn-action-button"]) {mask: none !important;}');