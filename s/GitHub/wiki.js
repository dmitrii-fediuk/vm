// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/GitHub/wiki.js
// @icon https://github.com/fluidicon.png
// @match *://github.com/*/*/wiki/*
// 2025-04-11 https://chatgpt.com/c/67f90ba8-a62c-8003-a059-cf3b84e22792
// @exclude-match *://github.com/*/*/wiki/
// @name GitHub / Wiki
// ==/UserScript==
// 2024-09-20, 2025-04-18 "Improve the GitHub appearance": https://github.com/dmitrii-fediuk/vm/issues/47
// 2025-04-18
// language=CSS
GM_addStyle([
	'.Layout-sidebar'
	,'header.AppHeader'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-04-18
// language=CSS
GM_addStyle([
	'.Layout'
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-04-18
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-04-18
// language=CSS
GM_addStyle([
	'#wiki-content'
	,'#wiki-wrapper'
	,'.gh-header-meta'
	,'pre'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-18
// language=CSS
GM_addStyle([
	'#wiki-wrapper'
	,'.gh-header-meta'
	,'code'
	,'h2'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-18
// language=CSS
GM_addStyle([
	'.markdown-body code'
	,'.markdown-body pre'
]
	 // language=Javascript
	.join(',') + '{background-color: initial !important;}')
;
// 2025-04-18
// language=CSS
GM_addStyle([
	'.markdown-body code'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Consolas'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-18
// language=CSS
GM_addStyle([
	'.markdown-body :not(pre) > code'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'color': '#067D17'
			// language=Javascript
			,'font-size': '1rem'
			// language=CSS
			,'font-weight': 'bold'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-18
// language=CSS
GM_addStyle([
	'.markdown-body pre > code'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=Javascript
			'font-size': '.9rem'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-18
// language=CSS
GM_addStyle([
	'.gh-header-meta'
	,'h2'
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-18
// language=CSS
GM_addStyle([
	'body'
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-04-18
// language=CSS
GM_addStyle([
	'.markdown-body'
	,'body'
]
	 // language=Javascript
	.join(',') + '{font-family: Segoie UI !important;}')
;
// 2025-04-18
// language=CSS
GM_addStyle([
	':root'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			//'font-family': 'Segoie UI'
			// language=Javascript
			//'font-size': '150%'
			// language=CSS
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-18
// language=CSS
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-04-18
// language=CSS
GM_addStyle('h1 {margin: 0.5rem 0 !important;}');
// 2025-04-18
// language=CSS
GM_addStyle('h2 {margin: 0.3rem 0 !important;}');
// 2025-04-18
// language=CSS
GM_addStyle('h3 {margin: 0.2rem 0 !important;}');
// 2025-04-18
// language=CSS
GM_addStyle('h4 {margin: 0.1rem 0 !important;}');
// 2025-04-18
// language=CSS
GM_addStyle([
	'li'
	,'ol'
	,'p'
	,'ul'
]
	 // language=Javascript
	.join(',') + '{margin: 0.1rem 0 !important;}')
;