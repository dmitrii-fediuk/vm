// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/grokcom.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.24.0/files/light/grok.png
// @match *://grok.com/*
// @name grok.com
// ==/UserScript==
// 2025-02-21 "Improve `grok.com`": https://github.com/dmitrii-fediuk/vm/issues/92
// language=CSS
GM_addStyle([
	'.\\@container\\/nav'
	,'button:has(> svg.lucide-chevron-down)'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-02-21
// language=CSS
GM_addStyle([
	'form.bottom-0'
	,'.top-0'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-02-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: absolute !important;}')
;
// 2025-02-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
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
// 2025-02-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-02-21
// language=CSS
GM_addStyle([
	'.max-w-3xl'
	,'.sm\\:max-w-\\[90\\%\\]'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['width', 'max-width',' min-width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
	'}'
);
// 2025-02-22 https://chatgpt.com/c/67b8f0dc-df0c-800c-84ed-6b8a8d71d710
// language=CSS
GM_addStyle([
	'.absolute.bottom-0'
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
GM_addStyle('.\\@container\\/main > div {padding: 0 0.25rem !important;}');
// 2025-02-22
// language=CSS
GM_addStyle('.max-w-\\[50rem\\] {max-width: initial !important;}');
// 2025-02-22
// language=CSS
GM_addStyle(':has(> form.bottom-0) {padding-bottom: 0.25rem !important;}');
// 2025-02-22 https://grok.com/chat/16a85b97-a902-4aba-a531-fdb131572c0c
// language=CSS
GM_addStyle('.absolute.bottom-0 {margin: 0 auto; !important;}');
// 2025-02-22 https://grok.com/chat/16a85b97-a902-4aba-a531-fdb131572c0c
// language=CSS
//GM_addStyle('.\\@container\\/main > .h-full {height: calc(100% - 96px);}');