// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Grok/common.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.24.0/files/light/grok.png
// @match *://grok.com/*
// @name Grok / Common
// ==/UserScript==
// 2025-02-21 "Improve `grok.com`": https://github.com/dmitrii-fediuk/vm/issues/92
// language=CSS
GM_addStyle([
	'.\\@container\\/main div[style^="padding-bottom"]'
	,'.\\@container\\/nav .start-1'
	,':has( > h1.text-primary)'
	,'button:has(> svg.lucide-chevron-down)'
	,'form.bottom-0 ~ *' // 2025-03-20
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-02-21
// language=CSS
GM_addStyle([
	'.bottom-0'
	,'.top-0'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-02-21
// language=CSS
GM_addStyle([
	'.message-row'
	,'.pt-20'
	,'form.bottom-0 textarea'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-19
// 1) `inherit` and `revert` work too.
// 2.1) https://developer.mozilla.org/en-US/docs/Web/CSS/unset
// 2.2) https://developer.mozilla.org/en-US/docs/Web/CSS/inherit
// 2.3) https://developer.mozilla.org/en-US/docs/Web/CSS/revert
// language=CSS
GM_addStyle([
	'.\\!font-mono'
	,'.prose'
	,':has(> code)'
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2025-04-19
// 1) `inherit` and `revert` work too.
// 2.1) https://developer.mozilla.org/en-US/docs/Web/CSS/unset
// 2.2) https://developer.mozilla.org/en-US/docs/Web/CSS/inherit
// 2.3) https://developer.mozilla.org/en-US/docs/Web/CSS/revert
// language=CSS
GM_addStyle([
	'.prose'
	,':has(> code)'
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2025-02-21
// language=CSS
GM_addStyle([
	'.max-w-3xl'
	,'.sm\\:max-w-\\[90\\%\\]'
	,'[class*="max-w-"]' // 2025-04-19
	,'main > *'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'min-width', 'width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
// 2025-02-22 https://chatgpt.com/c/67b8f0dc-df0c-800c-84ed-6b8a8d71d710
// language=CSS
GM_addStyle([
	'.bottom-0'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['bottom', 'left',' right', 'top']
			// language=Javascript
			.map(k => `${k}: auto !important;`).join(' ') +
	'}'
);
// 2025-02-22
// language=CSS
GM_addStyle('.\\@container\\/main > div {padding: 0.25rem !important;}');
// 2025-02-22
// language=CSS
GM_addStyle('.message-bubble {padding: 0.5rem !important;}');
// 2025-02-22
// language=CSS
GM_addStyle('.message-row {padding: 0 0.5rem !important;}');
// 2025-02-22
// language=CSS
GM_addStyle('.max-w-\\[50rem\\] {max-width: initial !important;}');
// 2025-02-22
// language=CSS
GM_addStyle(':has(> form.bottom-0) {padding-bottom: 0.25rem !important;}');
// 2025-02-22 https://chatgpt.com/c/67b8fea1-5c7c-800c-acb7-7be0480d93dd
// language=CSS
GM_addStyle('.h-full {height: auto !important; overflow: visible !important;}');
// language=CSS
GM_addStyle('.\\@container\\/main > .bottom-0 {width: 100% !important;}');
// 2025-02-22
// language=CSS
GM_addStyle('.\\@container\\/input {padding-bottom: 0 !important;}');
// 2025-04-19
// language=CSS
GM_addStyle([
	'body'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Segoie UI'
			// language=Javascript
			,'font-size': '155%'
			// language=CSS
			,'line-height': 1.25
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-19
// language=CSS
GM_addStyle([
	'.\\!font-mono'
	,':has(> code)'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Consolas'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);