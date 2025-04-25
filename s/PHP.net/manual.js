// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/PHP.net/manual.js
// @icon https://www.php.net/favicon.svg?v=2
// @match https://www.php.net/manual/*
// @name PHP.net / Manual
// ==/UserScript==
// 2025-04-25 "Improve ``php.net`": https://github.com/dmitrii-fediuk/vm/issues/107
// language=CSS
GM_addStyle([
	'#breadcrumbs-inner > :not(ul)'
	,'#toTop'
	,'#usernotes > .foot'
	,'.change-language'
	,'aside.layout-menu'
	,'footer'
	,'nav.navbar-fixed-top'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
	'#breadcrumbs'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
	'#layout'
	,'h1'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
	'#breadcrumbs'
	,'#breadcrumbs-inner > ul'
	,'#layout-content'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
	'#breadcrumbs'
	,':root'
]
	 // language=Javascript
	.join(',') + '{background: none !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
	'#layout-content'
]
	 // language=Javascript
	.join(',') + '{float: none !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: initial !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: initial !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
	'#layout > #layout-content'
	,'#layout'
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
// 2025-04-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2025-04-25
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
			,'font-size': '150%'
			// language=CSS
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-25
// language=CSS
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-04-25
// language=CSS
GM_addStyle('h1 {font-size: 2rem !important; margin: 0.3rem 0 !important;}');
// 2025-04-25
// language=CSS
GM_addStyle('h2 {font-size: 1.6rem !important; margin: 0.5rem 0 !important;}');
// 2025-04-25
// language=CSS
GM_addStyle('h3 {margin: 0.25rem 0 !important;}');
// 2025-04-25
// language=CSS
GM_addStyle('h4 {margin: 0.2rem 0 !important;}');
// 2025-04-25
// language=CSS
GM_addStyle([
	'li'
	,'ol'
	,'p'
	,'ul'
]
	 // language=Javascript
	.join(',') + '{margin: 0.25rem 0 !important;}')
;