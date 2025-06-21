// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/ChatGPT/share.js
// @icon https://cdn.oaistatic.com/assets/apple-touch-icon-mz9nytnj.webp
// @match *://chatgpt.com/s/*
// @name ChatGPT / Share
// ==/UserScript==
// 2025-06-21 "Improve the appearance of ChatGPT": https://github.com/dmitrii-fediuk/vm/issues/51
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
	'.border-b:empty' // 2025-06-21
	,':has(> a[href$="/report-content/"])' // 2025-06-21
	,':has(> button[aria-label="Try ChatGPT"])' // 2025-06-21
	,'a[href$="/?utm_src=deep-research-sharing"]' // 2025-06-21
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-06-21
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
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
	':has(> .print\\:hidden)' // 2025-06-21
	,':has(> a[href$="/?utm_src=deep-research-sharing"])' // 2025-06-21
	,'[class*=pb-]' // 2025-06-21
	,'[class*=pt-]' // 2025-06-21
	,'body' // 2025-06-21
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
	'a[class*=py-]' // 2025-06-21
]
	 // language=Javascript
	.join(',') + '{padding-block: 0 !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
	//'[class*=px-]' // 2025-06-21
]
	 // language=Javascript
	.join(',') + '{padding-inline: 0 !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{align-items: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
	'[class*=bg-]' // 2025-06-21
]
	 // language=Javascript
	.join(',') + '{background-color: white !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
	'[class*=border]' // 2025-06-21
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
	'[class*=border]' // 2025-06-21
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
	'.shadow-md' // 2025-06-21
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
	'body'
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: 80% !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
	'[class*=gap-]' // 2025-06-21
]
	 // language=Javascript
	.join(',') + '{gap: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
	'.prose' // 2025-06-21
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{min-height: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{width: unset !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
	'.max-w-3xl' // 2025-06-21
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
// 2025-06-21
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
// 2025-06-21
// language=CSS
GM_addStyle([
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
// 2025-06-21
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2025-06-21
// language=CSS
GM_addStyle([
	'html'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Segoie UI'
			// language=Javascript
			,'font-size': '170%'
			// language=CSS
			,'line-height': 1.3
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-06-21
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
// 2025-06-21
// language=CSS
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-06-21
// language=CSS
GM_addStyle('h1 {font-size: 1.75rem !important; margin: 0 0 .35rem 0 !important;}');
// 2025-06-21
// language=CSS
GM_addStyle('h2 {font-size: 1.5rem !important; margin: .3rem 0 !important;}');
// 2025-06-21
// language=CSS
GM_addStyle('h3 {font-size: 1.25rem !important; margin: .25rem 0 !important;}');
// 2025-06-21
// language=CSS
GM_addStyle('h4 {font-size: 1rem !important; margin: .2rem 0 !important;}');
// 2025-06-21
// language=CSS
GM_addStyle([
	'dl'
	,'li'
	,'ol'
	,'p'
	,'ul'
]
	 // language=Javascript
	.join(',') + '{margin: .2rem 0 !important;}')
;