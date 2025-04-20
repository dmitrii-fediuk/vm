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
	'.markdown-body :is(code, pre)'
]
	 // language=Javascript
	.join(',') + '{background-color: initial !important;}')
;
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
	'body', 'pre'
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-04-20
// language=CSS
GM_addStyle([
	//'h1' // 2025-04-20
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2025-04-20
// language=CSS
GM_addStyle([
	'.gh-header-title' // 2025-04-20
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
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
			//,'font-size': '1rem'
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
			//'font-size': '.9rem'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-18
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
// 2025-04-20
// language=CSS
GM_addStyle([
	'.markdown-body' // 2025-04-20
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
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
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-04-18
// language=CSS
GM_addStyle('h1 {font-size: 2.3rem !important; margin: 0.5rem 0 !important;}');
// 2025-04-18
// language=CSS
GM_addStyle('.markdown-body h2 {font-size: 1.9rem !important; margin: 0.3rem 0 !important;}');
// 2025-04-18
// language=CSS
GM_addStyle('h3 {font-size: 1.6rem !important; margin: 0.2rem 0 !important;}');
// 2025-04-18
// language=CSS
GM_addStyle('h4 {font-size: 1.4rem !important; margin: 0.1rem 0 !important;}');
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