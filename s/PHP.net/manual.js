// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/PHP.net/manual.js
// @icon https://www.php.net/favicon.svg?v=2
// @match https://www.php.net/manual/*
// @name PHP.net / Manual
// ==/UserScript==
// 2025-04-25 "Improve `php.net`": https://github.com/dmitrii-fediuk/vm/issues/107
// language=CSS
GM_addStyle([
	'#breadcrumbs-inner > :not(ul)'
	,'#toTop'
	,'#usernotes > .foot'
	,'.change-language'
	,'.contribute'
	,'.tip > .tip'
	,'.warning > .warning'
	,':is(h1, h3, h3):after'
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
	'#breadcrumbs-inner'
	,'#layout'
	,'.refsect1'
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
	'#layout-content'
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
	'#breadcrumbs'
	,'#layout-content'
	,':root'
]
	 // language=Javascript
	.join(',') + '{background: unset !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
	'#breadcrumbs'
	,'#layout-content'
	,':root'
	,'a'
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
	'#breadcrumbs-inner'
	,'#layout > #layout-content'
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
	'#usernotes code'
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
	'#breadcrumbs'
	,'.dc-description'
	,'code'
	,'code.parameter'
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
	'#usernotes .note .name'
	,'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
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
			,'font-size': '165%'
			// language=CSS
			,'line-height': 1.25
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-26
// language=CSS
GM_addStyle([
	'.dc-description'
	,'.refentry code'
	,'code.parameter'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Consolas'
			// language=Javascript
			,'font-size': '95%'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-26
// language=CSS
GM_addStyle([
	'code.parameter'
	,'strong > code'
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
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
GM_addStyle('h3 {font-size: 1.5rem !important; margin: 0.25rem 0 !important;}');
// 2025-04-25
// language=CSS
GM_addStyle('h4 {font-size: 1.4rem !important; margin: 0.2rem 0 !important;}');
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
// 2025-04-26
// language=CSS
GM_addStyle('#usernotes .note {margin: 0.5rem 0 !important;}');