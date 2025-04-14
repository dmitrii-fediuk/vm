// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/archive.is/new.js
// @icon https://archive.is/apple-touch-icon-144x144.png
// 2025-04-11 https://chatgpt.com/c/67f90ba8-a62c-8003-a059-cf3b84e22792
// @match https://archive.is/*
// @exclude-match https://archive.is/
// @name archive.is / Result
// ==/UserScript==
// 2025-04-10 "Improve `archive.is`": https://github.com/dmitrii-fediuk/vm/issues/101
// 2025-04-14
// language=CSS
GM_addStyle([
	'#DIVSHARE + div[style*="padding"]'
	,'#HEADER' // 2025-04-14
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-04-14
// language=CSS
GM_addStyle([
	'.body' // 2025-04-14
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-14
// language=CSS
GM_addStyle([
	'.body' // 2025-04-14
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-14
// language=CSS
GM_addStyle([
	'.body' // 2025-04-14
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background: none !important;}')
;
// 2025-04-14
// language=CSS
GM_addStyle([
	'.html1' // 2025-04-14
]
	 // language=Javascript
	.join(',') + '{background-color: initial !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: initial !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: initial !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
	'#CONTENT'
	,'#HEADER'
	,'.body' // 2025-04-14
	,'table'
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
// 2025-04-10
// language=CSS
//GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-04-14
// language=CSS
GM_addStyle('h1 {font-size: 1.5rem !important; margin: 0.3rem 0 !important;}');
// 2025-04-14
// language=CSS
GM_addStyle('h2 {font-size: 1.2rem !important; margin: 0.3rem 0 !important;}');
// 2025-04-14
// language=CSS
GM_addStyle('h3 {margin: 0.25rem 0 !important;}');
// 2025-04-14
// language=CSS
GM_addStyle('h4 {margin: 0.2rem 0 !important;}');
// 2025-04-14
// language=CSS
GM_addStyle('li, p, ul {margin: 0.25rem 0 !important;}');