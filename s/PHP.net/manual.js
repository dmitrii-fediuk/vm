// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/PHP.net/manual.js
// @icon https://www.php.net/favicon.svg?v=2
// @match https://www.php.net/manual/*
// @name PHP.net / Manual
// ==/UserScript==
// 2025-04-25 "Improve `php.net`": https://github.com/dmitrii-fediuk/vm/issues/107
// 2025-04-25
// language=CSS
GM_addStyle([
	'h1', 'h2', 'h3', 'h4', 'h5', 'h6'
	,'var'
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
	'#breadcrumbs-inner > :not(ul)'
	,'#toTop'
	,'#usernotes .note > .date > strong'
	,'#usernotes .note > .name'
	,'#usernotes .note > .votes > :not(.tally)'
	,'#usernotes > .foot'
	,'#usernotes > .head > .action'
	,'#usernotes h3 > .count'
	,'.change-language'
	,'.contribute'
	,'.genanchor'
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
// 2025-04-26
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
	,'.doctable thead th' // 2025-04-27
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
	'#breadcrumbs-inner'
	,'#layout'
	,'#usernotes'
	,'.dc-description'
	,'.example'
	,'.refsect1'
	,'blockquote.note'
	,'div:is(.caution, .tip, .warning)'
	,'table:is(.doctable, .table)'
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
	,'#usernotes .note .text'
	,'#usernotes .note .votes .tally'
	,'dd'
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
	'#usernotes .note .text'
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
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
	,'#usernotes .note .date'
	,'#usernotes .note .votes .tally'
	,':root'
	,'a'
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-04-26
// language=CSS
GM_addStyle([
	'#usernotes .note > .text' // 2025-04-26 https://g.co/gemini/share/67bc09143588
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
	'#layout-content'
	,'#usernotes .note *'
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
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
// 2025-04-26
// language=CSS
GM_addStyle([
	'#breadcrumbs'
	,'.verinfo'
]
	 // language=Javascript
	.join(',') + '{font-size: 80% !important;}')
;
// 2025-04-26
// language=CSS
GM_addStyle([
	'#usernotes .note .date strong'
	,'strong' // 2025-04-27
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: initial !important;}')
;
// 2025-04-26
// language=CSS
GM_addStyle([
	'code'
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2025-04-26
// language=CSS
GM_addStyle([
	'table.table'
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2025-04-26
// language=CSS
GM_addStyle([
	'#usernotes .note > *'
	,'table > caption'
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2025-04-27
// language=CSS
GM_addStyle([
	'.doctable thead th'
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
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
// 2025-04-26 https://g.co/gemini/share/67bc09143588
// language=CSS
GM_addStyle([
	'#usernotes .note'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=Javascript
			'column-gap': '2rem'
			// language=CSS
			,'display': 'flex'
			,'flex-direction': 'row'
			,'flex-wrap': 'wrap'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
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
			,'line-height': 1.15
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-26
// language=CSS
GM_addStyle([
	'#layout-content > :not(#usernotes) code' // 2025-04-27
	,'.dc-description'
	,'.function' // 2025-04-27
	//,'.refentry code'
	//,'code.parameter'
	,'var'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Consolas'
			// language=Javascript
			,'font-size': '1.5rem'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-26
// language=CSS
GM_addStyle([
	'#layout-content > :not(#usernotes) :not(.phpcode) > code' // 2025-04-27
	,'#usernotes .note > :is(.date, .votes)'
	,'.function' // 2025-04-27
	,'code.parameter'
	,'strong > code'
	,'var'
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2025-04-25
// language=CSS
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-04-26
// language=CSS
GM_addStyle('#usernotes .html br {content: ""; display: block !important;}');
// 2025-04-26
// language=CSS
GM_addStyle('#usernotes .html > br {height: 0.25rem;}');
// 2025-04-26
// language=CSS
GM_addStyle('#usernotes .html > span > br {height: 1px;}');
// 2025-04-26
// language=CSS
GM_addStyle('dt {margin: 0.5rem 0 0 0 !important;}');
// 2025-04-26
// language=CSS
GM_addStyle('dd {margin: 0 0 0.5rem 0 !important;}');
// 2025-04-25
// language=CSS
GM_addStyle('h1 {font-size: 2.5rem !important; margin: 0 0 0.3rem 0 !important;}');
// 2025-04-25
// language=CSS
GM_addStyle('h2 {font-size: 2.25rem !important; margin: 0.5rem 0 !important;}');
// 2025-04-25
// language=CSS
GM_addStyle('h3 {font-size: 2rem !important; margin: 0.25rem 0 !important;}');
// 2025-04-25
// language=CSS
GM_addStyle('h4 {font-size: 1.75rem !important; margin: 0.2rem 0 !important;}');
// 2025-04-25
// language=CSS
GM_addStyle([
	'dl'
	,'li'
	,'ol'
	,'p'
	,'ul'
]
	 // language=Javascript
	.join(',') + '{margin: 0.25rem 0 !important;}')
;
// 2025-04-26
// language=CSS
GM_addStyle('#usernotes .note {margin: 0.7rem 0;}');
// 2025-04-26
// language=CSS
GM_addStyle('#usernotes .note:first-child {margin-top: 0;}');
// 2025-04-26
// language=CSS
GM_addStyle([
	'blockquote.note'
	,'div:is(.caution, .tip, .warning)'
]
	 // language=Javascript
	.join(',') + '{padding: 0.25rem !important;}')
;
// 2025-04-26
// language=CSS
GM_addStyle(['#usernotes .note > .date::after']
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// 2025-04-26
			// 1) https://g.co/gemini/share/ff6066c51647
			// 2) https://chatgpt.com/share/680d3239-ed6c-8003-980d-2f3feb675f0a
			// 3) https://grok.com/share/bGVnYWN5_d2ab66f6-50f5-4245-a0de-8f33657c838c
			// language=Javascript
			'content': 'attr(title)'
			// 2025-04-27
			// 1) https://chatgpt.com/share/680d4de7-af4c-8003-8435-355cf811e6ab
			// 2) https://chatgpt.com/share/680d4dfe-c948-8003-aac9-9abd046334c2
			// 3) https://grok.com/share/bGVnYWN5_3a21777e-7289-4fc9-8336-c8a5b23e3718
			// language=CSS
			,'display': 'block'
			,'overflow': 'hidden'
			,'white-space': 'nowrap'
			,'width': '9.5ch'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);