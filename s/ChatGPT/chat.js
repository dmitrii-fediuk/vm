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
	':has(> button#radix-\\:rp\\:)'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'.group\\/conversation-turn'
	,'.text-base'
	,'[data-message-author-role="user"] :has(> .whitespace-pre-wrap)'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
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
	.join(',') + '{font-size: 120% !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'.prose'
]
	 // language=Javascript
	.join(',') + '{line-height: 1.4 !important;}')
;