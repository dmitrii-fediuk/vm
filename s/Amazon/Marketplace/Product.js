// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/GoHighLevel/help.js
// @icon https://t1.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=http://amazon.com&size=128
// @match https://help.gohighlevel.com/*
// @name Amazon / Marketplace / Product
// ==/UserScript==
// 2026-08-09 "Improve Improve Amazon Marketplace": https://github.com/dmitrii-fediuk/vm/issues/135
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	`:is(h1, h2, h3, h4, h5, h6, li, ol, p, pre, ul):not(#a)` // 2026-08-09
	,`[class*=fw-]` // 2026-08-09
	,`[style*=font-]` // 2026-08-09
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		[
			'font-family'
			,'font-size'
			,'font-weight'
			,'letter-spacing'
			,'line-height'
			,'text-transform'
		]
			// language=Javascript
			.map(k => `${k}: revert !important;`).join(' ') +
	'}'
);
// 2026-08-09
// language=CSS
GM_addStyle([
	`:is(h2, h3, h4, h5, h6) br` // 2026-08-09
	,`[class*=feedback]` // 2026-08-09
	,`[class*=icon]` // 2026-08-09
	,`[class*=sidebar]` // 2026-08-09
	,`[class*=sticky]` // 2026-08-09
	,`[class*=video]` // 2026-08-09
	,`footer` // 2026-08-09
	,`header` // 2026-08-09
	,`iframe` // 2026-08-09
	,`p:has(> [class*=video])` // 2026-08-09
	,`p:has(> br:only-child)` // 2026-08-09
	,`p:has(> br + br:last-child)` // 2026-08-09
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	`.row:has(> .fw-content-wrapper)` // 2026-08-09
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2026-08-09
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
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	`.container` // 2026-08-09
	,`.fw-content` // 2026-08-09
	,`[class*=mb-]` // 2026-08-09
	,`[class*=mt-]` // 2026-08-09
	,`[class*=mx-]` // 2026-08-09
	,`[class*=my-]` // 2026-08-09
	,`[class*=wrapper]` // 2026-08-09
	,`[style*=margin]` // 2026-08-09
	,`h1` // 2026-08-09
	,`main` // 2026-08-09
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	`:is(h3, ol, p, ul):not(#a)` // 2026-08-09
]
	 // language=Javascript
	.join(',') + '{margin: .25rem 0 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	`.container` // 2026-08-09
	,`[class*=pb-]` // 2026-08-09
	,`[class*=pt-]` // 2026-08-09
	,`[class*=px-]` // 2026-08-09
	,`[class*=py-]` // 2026-08-09
	,`[class*=wrapper]` // 2026-08-09
	,`[style*=padding]` // 2026-08-09
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{align-items: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	`*` // 2026-08-09
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	`.fw-content-wrapper` // 2026-08-09
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	`*` // 2026-08-09
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	`*` // 2026-08-09
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	`*` // 2026-08-09
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-direction: column-reverse !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-height', 'height', 'min-height']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: revert !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: .9 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{max-width: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{min-height: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	//`.overflow-y-scroll` // 2026-08-09
]
	 // language=Javascript
	.join(',') + '{overflow-y: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	`*` // 2026-08-09
]
	 // language=Javascript
	.join(',') + '{scrollbar-width: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{width: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{z-index: unset !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	`.container` // 2026-08-09
	,`.fw-content-wrapper` // 2026-08-09
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2026-08-09
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
// 2026-08-09
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
// 2026-08-09
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'color': '#067D17' // 2026-08-09
			,'font-weight': 'bold' // 2026-08-09
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2026-08-09
// language=CSS
GM_addStyle([
	`body` // 2026-08-09
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
// 2026-08-09
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2026-08-09
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
// 2026-08-09
// language=CSS
GM_addStyle(`body {margin: .5rem !important;}`);
// 2026-08-09
// language=CSS
GM_addStyle(`br {content: ''; display: block !important; height: 1px;}`);
// 2026-08-09
// language=CSS
GM_addStyle(`h2 {margin: .5rem 0 !important;}`);
// 2026-08-09
// language=CSS
GM_addStyle(`h4 {margin: .15rem 0 !important;}`);
// 2026-08-09
// language=CSS
GM_addStyle(`.note {padding: .25rem !important;}`);