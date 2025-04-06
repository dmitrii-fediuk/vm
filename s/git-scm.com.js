// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/git-scm.com.js
// @icon https://git-scm.com/favicon.ico
// @match *://git-scm.com/*
// @name git-scm.com
// ==/UserScript==
// 2025-04-06 "Improve `git-scm.com`": https://github.com/dmitrii-fediuk/vm/issues/100
// language=CSS
GM_addStyle([
	'#reference-languages-trigger'
	,'#scrollToTop'
	,'#sidebar'
	,'.inner:has(> header)'
	,'.sidebar-btn'
	,'footer'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-04-06
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-04-06
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-04-06
// language=CSS
GM_addStyle([

]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-06
// language=CSS
GM_addStyle([
	'#main'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-06
// language=CSS
GM_addStyle([
	'#main'
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-06
// language=CSS
GM_addStyle([
	'body'
]
	 // language=Javascript
	.join(',') + '{background: none !important;}')
;
// 2025-04-06
// language=CSS
GM_addStyle([
	'#main'
]
	 // language=Javascript
	.join(',') + '{background-color: initial !important;}')
;
// 2025-04-06
// language=CSS
GM_addStyle([
	'#content'
	,'.inner'
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
// 2025-04-06
// language=CSS
GM_addStyle('body {margin: 0 1rem !important;}');