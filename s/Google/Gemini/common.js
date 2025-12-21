// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Gemini/common.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.42.0/files/dark/gemini-color.png
// @match *://gemini.google.com/*
// @name Google / Gemini / Common
// ==/UserScript==
// 2024-10-23 "Improve `gemini.google.com`": https://github.com/dmitrii-fediuk/vm/issues/60
// 2025-03-28
// language=CSS
GM_addStyle([
	'.bard-logo-container'
	,'.buttons-container.referral' // 2025-05-17
	,'[data-placeholder="Ask Gemini"]::after'
	,'[data-placeholder="Ask Gemini"]::before'
	,'speech-dictation-mic-button'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-29
// language=CSS
GM_addStyle([
	'input-container'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-28
// language=CSS
GM_addStyle([
	'.input-area-container'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'min-width', 'width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
// 2025-12-21
// language=CSS
GM_addStyle(`.ql-editor.ql-blank:before {content: '' !important;}`);