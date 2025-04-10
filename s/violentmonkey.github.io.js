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
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
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
//GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-04-10
// language=CSS
GM_addStyle([
	'main'
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