// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Claude/common.js
// @icon https://claude.ai/images/claude_app_icon.png
// @match *://claude.ai/*
// @name Claude / Common
// ==/UserScript==
// 2024-11-30 "Improve `claude.ai`": https://github.com/dmitrii-fediuk/vm/issues/68
// 2025-03-27
// language=CSS
GM_addStyle([
	// 2027-03-20 «How can I help you today?»
	'[contenteditable="true"] > p[data-placeholder].is-empty'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-20
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-20
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-20
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
;
// 2025-03-20
// language=CSS
GM_addStyle([
	'.lg\\:sticky' // 2025-03-27
	,'.sticky'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-20
// language=CSS
GM_addStyle([
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
]
	 // language=Javascript
	.join(',') + '{height: auto !important;}')
;
// 2025-03-27
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{z-index: 0 !important;}')
;