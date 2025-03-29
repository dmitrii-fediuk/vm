// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/ChatGPT/common.js
// @icon https://cdn.oaistatic.com/assets/apple-touch-icon-mz9nytnj.webp
// @match *://chatgpt.com/*
// @name ChatGPT / Common
// ==/UserScript==
// 2024-10-08 "Improve the appearance of ChatGPT": https://github.com/dmitrii-fediuk/vm/issues/51
console.log('Common');
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
	,':has(> .text-center > .text-2xl > [style*="--vt-splash-screen-headline"])' // 2025-03-29 «What can I help with?»
	,'article + .cursor-pointer'
	,'div:has(> h1.result-streaming) > h1' // 2024-12-06 «What can I help with?»
	,'div.text-2xl.text-center:has(> h1)' // 2024-12-09 «What can I help with?»
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
	'.md\\:pb-9'
	,'article > .lg\\:px-4'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2024-12-03
// language=CSS
GM_addStyle('.md\\:max-w-3xl {gap: 0 !important; max-width: initial !important;}');
// 2025-01-04 https://chatgpt.com/c/67792143-94dc-800c-a793-809f8e8488e6
// language=CSS
GM_addStyle('.composer-parent:has(article) {height: auto !important;}');
// 2025-01-04
// language=CSS
GM_addStyle('.markdown h2 {margin: 1rem 0 0.5rem 0 !important;}');
// 2025-01-04
// language=CSS
GM_addStyle('.markdown h3 {margin: 0.5rem 0 0.25rem 0 !important;}');
// 2025-01-04
// language=CSS
GM_addStyle('.prose :where(hr):not(:where([class~=not-prose] *)) {margin: 0.5rem 0 !important;}');
// 2025-01-04
// language=CSS
GM_addStyle('.prose :where(ol):not(:where([class~=not-prose] *)) {margin: 0 0 0.5rem 0 !important;}');
// 2025-01-04
// language=CSS
GM_addStyle('.prose :where(ul):not(:where([class~=not-prose] *)) {margin: 0 0 0.5rem 0 !important;}');
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