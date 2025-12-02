// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/sansec.io.js
// @icon https://sansec.io/assets/images/sansec-social.svg
// @match https://sansec.io/*
// @name sansec.io
// ==/UserScript==
// 2025-12-02 "Improve `sansec.io`": https://github.com/dmitrii-fediuk/vm/issues/120
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
	'#acknowledgements' // 2025-12-02
	,'#acknowledgements + p' // 2025-12-02
	,':has(> .markdown) > :not(.markdown)' // 2025-12-02
	,':has(> .markdown) ~ *' // 2025-12-02
	,'aside' // 2025-12-02
	,'body > :not(main)' // 2025-12-02
	,'li:before' // 2025-12-02
	,'main > :not(section)' // 2025-12-02
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
	'main > section > .container' // 2025-12-02
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'display': 'flex'
			,'flex-direction': 'row'
			,'flex-wrap': 'wrap'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
	'.container' // 2025-12-02
	,'code' // 2025-12-02
	,'main' // 2025-12-02
	,'section' // 2025-12-02
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
	'li' // 2025-12-02
	,'p' // 2025-12-02
	,'ul' // 2025-12-02
]
	 // language=Javascript
	.join(',') + '{margin: 0.25rem 0 !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
	'.markdown' // 2025-12-02
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{align-items: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
	'code' // 2025-12-02
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
	'code' // 2025-12-02
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
	'code' // 2025-12-02
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
	'.markdown' // 2025-12-02
	,'p' // 2025-12-02
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
	'ul' // 2025-12-02
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
	'.text-sm' // 2025-12-02
	,'h2' // 2025-12-02
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
	'.markdown' // 2025-12-02
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
	'h2' // 2025-12-02
]
	 // language=Javascript
	.join(',') + '{line-height: revert !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: .9 !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{min-height: unset !important;}')
;

// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{width: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
	'.max-w-2xl' // 2025-12-02
	,'main > section > .container' // 2025-12-02
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
// 2025-12-02
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'height': 'auto'
			// language=Javascript
			,'width': '100%'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-12-02
// language=CSS
GM_addStyle([
	'code' // 2025-12-02
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
// 2025-12-02
// language=CSS
GM_addStyle([
	'code:not(.hljs)'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'color': '#067D17' // 2025-12-02
			,'cursor': 'revert' // 2025-12-02
			,'font-weight': 'bold' // 2025-12-02
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2025-12-02
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
			,'font-size': '175%'
			// language=CSS
			,'line-height': 1.25
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-12-02
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2025-12-02
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['font-size', 'font-weight', 'line-height']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2025-12-02
// language=CSS
GM_addStyle('body {margin: 1rem .5rem !important;}');
// 2025-12-02
// language=CSS
GM_addStyle('h2 {margin: .5rem 0 !important;}');
