// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Search.js
// @icon https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_"G"_logo.svg
// @match https://www.google.com/search?q=*
// @name Google / Search
// ==/UserScript==
// 2025-04-28 "Improve Google Search": https://github.com/dmitrii-fediuk/vm/issues/108
// 2025-04-28
// language=CSS
GM_addStyle([
	'.sfbg'
	,'body'
	,'html'
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
	'#appbar'
	,'#bres'
	,'#cnt > :not(#rcnt)'
	,'#sfcnt'
	,'#sfooter'
	,'#tsf ~ *'
	,'[aria-label="Search by voice"]'
	,'[role="navigation"] > table td span'
	,'body > :not(#main)'
	,'span[jscontroller]:has(> a[target="_blank"]) ~ *'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
	'#rcnt'
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
	'#rso'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
	'#cnt'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border-radius: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
	'#cnt'
	,'#rso > div > div'
	,'div[style^="-webkit-line-clamp"]'
	,'h3'
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
	'#res'
	,'#rso > div > div'
	,'div[style^="-webkit-line-clamp"]'
	,'div:has(> div > span[jscontroller] > a[target="_blank"])'
	,'div:has(> div > cite[role="text"]) > :first-child > span'
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: 80% !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
	':root *'
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: .9 !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
	':root *'
]
	 // language=Javascript
	.join(',') + '{overflow: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
	'textarea[name=q]'
]
	 // language=Javascript
	.join(',') + '{white-space: unset !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
// 2025-04-28
// language=CSS
GM_addStyle([
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
// 2025-04-28
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
			,'line-height': 1
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-28
// language=CSS
GM_addStyle([
	'cite[role="text"]'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Consolas'
			// language=Javascript
			,'font-size': '1.4rem'
			// language=CSS
			,'font-weight': 'bold'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-28
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2025-04-28
// language=CSS
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-04-28
// language=CSS
GM_addStyle('h3 {font-size: 2rem !important;}');
// 2025-04-28
// language=CSS
GM_addStyle('h3 + br {content: ""; display: block !important; height: 1px;}');
// 2025-04-28
// language=CSS
GM_addStyle('[role="navigation"] > table {margin: 0 auto !important;}');
// 2025-04-28
// language=CSS
GM_addStyle('[role="navigation"] > table td {padding: 0 .5rem !important;}');
// 2025-04-28
// language=CSS
GM_addStyle('#rso > div > div[jscontroller] {margin: .5rem 0 !important;}');