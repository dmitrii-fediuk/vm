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
	//'.top-0'
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
	//'.message-bubble'
	'.message-row'
	,'.pt-20'
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
	'.sm\\:max-w-\\[90\\%\\]'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['width', 'max-width',' min-width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
	'}'
);