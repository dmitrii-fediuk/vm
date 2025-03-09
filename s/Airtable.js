// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Airtable.js
// @icon https://airtable.com/images/favicon/baymax/apple-touch-icon.png
// @match *://airtable.com/*
// @name Airtable
// ==/UserScript==
// 2025-03-09 "Improve `airtable.com`": https://github.com/dmitrii-fediuk/vm/issues/95
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-09
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
	//'header ~ .flex'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['bottom', 'left',' right', 'top']
			// language=Javascript
			.map(k => `${k}: auto !important;`).join(' ') +
	'}'
);
// 2025-02-22 https://chatgpt.com/c/67b8fea1-5c7c-800c-acb7-7be0480d93dd
// language=CSS
GM_addStyle('.height-full {height: auto !important; overflow: visible !important;}');