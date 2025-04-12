// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/ChatGPT/common.js
// @icon https://cdn.oaistatic.com/assets/apple-touch-icon-mz9nytnj.webp
// @match *://chatgpt.com/*
// @name ChatGPT / Common
// ==/UserScript==
// 2024-10-08 "Improve the appearance of ChatGPT": https://github.com/dmitrii-fediuk/vm/issues/51
// language=CSS
GM_addStyle([
	'[data-placeholder="Ask anything"]' // 2025-03-29
	,'[data-testid="composer-speech-button"]'
	,'.composer-parent > :last-child > .text-xs' // 2025-03-27 «ChatGPT can make mistakes.»
	,'.composer-parent div:has(> div > ul > li > button > svg)'
	,'.composer-parent ~ .absolute' // The «?» sticky button
	// 2024-12-03
	// 1) «What can I help with?»
	// 2) «<…> workspace chats aren't used to train our models. ChatGPT can make mistakes.»
	,'.text-base:has(form #composer-background) > .text-center'
	// 2024-12-03 «<…> workspace chats aren't used to train our models. ChatGPT can make mistakes.»
	,'.text-base:has(form #composer-background) + .text-center'
	,'article + .cursor-pointer'
	// 2024-10-08
	// "Hide follow-up question bubbles after ChatGPT responses": https://github.com/dmitrii-fediuk/vm/issues/50
	,'form[type="button"] div.absolute'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-01-04
// language=CSS
GM_addStyle([
	'.sticky' // 2025-03-05
	,'.sticky:has(~ article)'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-01-04
// language=CSS
GM_addStyle([
	'.composer-parent > *' // 2025-03-29
	,'.md\\:pb-9'
	,'article > .lg\\:px-4'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle('body {padding: 0 0 0 1rem !important;}');
// 2025-03-29
// language=CSS
GM_addStyle([
	'body'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'color': 'black'
			,'font-family': 'Segoie UI'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2024-12-03
// language=CSS
GM_addStyle('.md\\:max-w-3xl {gap: 0 !important; max-width: initial !important;}');
// 2025-01-04
// https://chatgpt.com/c/67793f60-6464-800c-8dcb-67a8a5b1735c
// https://claude.ai/chat/6779f512-5884-48a4-8b9f-1341cc64a03e
(() => {
    window.addEventListener('load', () => {
        const m = document.querySelector('main');
        m
			&& new MutationObserver(() => m.scrollHeight && (m.scrollTop = m.scrollHeight)).observe(m, {
				childList: true, subtree: true
			})
			&& (m.scrollTop = m.scrollHeight)
		;
    });
})();