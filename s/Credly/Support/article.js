// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Credly/support.js
// @icon https://support.credly.com/hc/theming_assets/01HZPGW0A79WZGVJBB93FH85RB
// @match https://support.credly.com/hc/en-us/articles/*
// @name Credly / Support / Article
// ==/UserScript==
// 2025-06-04 "Improve `support.credly.com`": https://github.com/dmitrii-fediuk/vm/issues/112
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
	'.article-more-questions' // 2025-06-04
	,'.topbar'
	,':has(> #main-content) > :not(#main-content)' // 2025-06-04
	,'footer' // 2025-06-04
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
	'.layout' // 2025-06-04
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-06-04
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
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
	'#main-content' // 2025-06-04
	,'.article-page' // 2025-06-04
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
	'.article-container__column' // 2025-06-04
	,'.container' // 2025-06-04
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{align-items: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
	'body'
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: 80% !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
	'.layout' // 2025-06-04
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: .9 !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{min-height: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{width: unset !important;}')
;
// 2025-06-04
// language=CSS
GM_addStyle([
	'.article-container__article' // 2025-06-04
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
// 2025-06-04
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
// 2025-06-04
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
// 2025-06-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2025-06-04
// language=CSS
//GM_addStyle('body {font-size: 1rem !important;}');
// 2025-06-04
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
			,'font-size': '150%'
			// language=CSS
			,'line-height': 1.1
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-06-04
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
// 2025-06-04
// language=CSS
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-06-04
// language=CSS
GM_addStyle('br {content: ""; display: block !important; height: 1px;}');
// 2025-06-04
// language=CSS
GM_addStyle('h1 {font-size: 2.5rem !important; margin: 0 0 .3rem 0 !important;}');
// 2025-06-04
// language=CSS
GM_addStyle('h2 {font-size: 2.25rem !important; margin: .5rem 0 !important;}');
// 2025-06-04
// language=CSS
GM_addStyle('h3 {font-size: 2rem !important; margin: .25rem 0 !important;}');
// 2025-06-04
// language=CSS
GM_addStyle('h4 {font-size: 1.75rem !important; margin: .2rem 0 !important;}');
// 2025-06-04
// language=CSS
GM_addStyle([
	'dl'
	,'li'
	,'ol'
	,'p'
	,'ul'
]
	 // language=Javascript
	.join(',') + '{margin: .25rem 0 !important;}')
;
// 2025-06-04 https://g.co/gemini/share/e18f977272d7
(() => {
	document.querySelectorAll('*').forEach(v => {
		if (v.innerHTML.trim() === '&nbsp;') {
			v.remove();
		}
	});
})();