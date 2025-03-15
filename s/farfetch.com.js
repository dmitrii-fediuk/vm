// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/farfetch.com.js
// @icon https://cdn-static.farfetch-contents.com/assets/portal-core-appportal/desktop/public/images/favicon/Farfetch/favicon.svg
// @match *://www.farfetch.com/*
// @name Farfetch
// ==/UserScript==
// 2025-03-15 "Improve `farfetch.com`": https://github.com/dmitrii-fediuk/vm/issues/98
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-15
// language=CSS
GM_addStyle([
	'#catalog-actions'
	,'header'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-15
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
// 2025-02-22 https://chatgpt.com/c/67b8f0dc-df0c-800c-84ed-6b8a8d71d710
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['bottom', 'left',' right', 'top']
			// language=Javascript
			.map(k => `${k}: auto !important;`).join(' ') +
	'}'
);