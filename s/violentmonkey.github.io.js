// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/violentmonkey.github.io.js
// @icon https://violentmonkey.github.io/_astro/vm.C4h557K-.png
// @match *://violentmonkey.github.io/*
// @name violentmonkey.github.io
// ==/UserScript==
// 2025-04-10 "Improve `violentmonkey.github.io`": https://github.com/dmitrii-fediuk/vm/issues/102
// language=CSS
GM_addStyle([
	'.toc'
	,'[data-discord]'
	,'footer'
	,'section:has(> hr:only-child)'
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
	'aside'
	,'header'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
	'aside > ul'
	,'h1'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
	'aside > ul'
	,'h1'
	,'header > nav'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
	'aside'
	,'header'
]
	 // language=Javascript
	.join(',') + '{order: 99 !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
	'header > nav'
]
	 // language=Javascript
	.join(',') + '{box-shadow: none !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
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
// 2025-04-10
// language=CSS
GM_addStyle([
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
	'main'
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
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-04-10
// language=CSS
GM_addStyle('h2 {margin: 0.3rem 0 !important;}');
// 2025-04-10
// language=CSS
GM_addStyle('h3 {margin: 0.25rem 0 !important;}');
// 2025-04-10
// language=CSS
GM_addStyle('h4 {margin: 0.2rem 0 !important;}');
// 2025-04-10
// language=CSS
GM_addStyle('p {margin: 0.25rem 0 !important;}');
// 2025-04-10
// language=CSS
GM_addStyle([
	'body'
	,'main'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'display': 'flex'
			,'flex-direction': 'column'
			,'gap': 0
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-10
// language=CSS
GM_addStyle([
	':root'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Segoie UI'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-10
// language=CSS
GM_addStyle([
	'code', 'pre'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Consolas'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);