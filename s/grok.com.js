// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/grokcom.js
// @icon https://registry.npmmirror.com/@lobehub/icons-static-png/1.24.0/files/light/grok.png
// @match *://grok.com/*
// @name grok.com
// ==/UserScript==
// 2025-02-11 "Improve `grok.com`": https://github.com/dmitrii-fediuk/vm/issues/92
// language=CSS
GM_addStyle([
	'.\\@container\\/nav'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-02-11
// language=CSS
GM_addStyle([
	//'.top-0'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-02-11
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: absolute !important;}')
;
// 2025-02-11
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-02-11
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-02-11
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-02-11
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['width', 'max-width',' min-width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
	'}'
);