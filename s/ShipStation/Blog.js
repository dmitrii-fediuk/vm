// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/ShipStation/Blog.js
// @icon https://www.shipstation.com/wp-content/uploads/2024/08/cropped-favicon-192x192.png
// @match https://www.shipstation.com/blog/*
// @name ShipStation / Blog
// ==/UserScript==
// 2026-08-25 "Improve `shipstation.com`": https://github.com/dmitrii-fediuk/vm/issues/137
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
	`*` // 2026-08-25
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		[
			'color'
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
// 2026-08-25
// language=CSS
GM_addStyle([
	`#main-content > :not(:has(.post-container))` // 2026-08-25
	,`.author-box` // 2026-08-25
	,`.entry-content > :not(.entry-meta)` // 2026-08-25
	,`.entry-meta > .lead` // 2026-08-25
	,`.post-content ~ *` // 2026-08-25
	,`[class*=sticky]` // 2026-08-25
	,`body > :not(#main-content)` // 2026-08-25
	,`figure:has(iframe)` // 2026-08-25
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
	`.post-container` // 2026-08-25
	,`.post-header` // 2026-08-25
	,`.prose` // 2026-08-25
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2026-08-25
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
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
	`div:not(#a)` // 2026-08-25
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
	`:is(h3, ol, p, ul):not(#a)`// 2026-08-25
]
	 // language=Javascript
	.join(',') + '{margin: 0.25rem 0 !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
	`div:not(#a)` // 2026-08-25
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{align-items: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
	`div:not(#a)` // 2026-08-25
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-direction: column-reverse !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2026-08-25
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
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: revert !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: .9 !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{max-width: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{min-height: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
	`nav.rm-Sidebar` // 2026-08-25
]
	 // language=Javascript
	.join(',') + '{overflow: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{width: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{z-index: unset !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2026-08-25
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
// 2026-08-25
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
// 2026-08-25
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'color': '#067D17' // 2026-08-25
			,'font-weight': 'bold' // 2026-08-25
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2026-08-25
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Segoe UI'
			// language=Javascript
			,'font-size': '175%'
			// language=CSS
			,'line-height': 1.25
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-08-25
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2026-08-25
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
// 2026-08-25
// language=CSS
GM_addStyle([
	`body` // 2026-08-23
// language=Javascript
].join(',') + `{${Object.entries({
	'font-family': 'Segoe UI' // 2026-08-25
	,'font-size': '150%' // 2026-08-25
	,'letter-spacing': '.03em' // 2026-08-25 
	,'line-height': 1.2 // 2026-08-25 
}).map(v => `${v[0]}: ${v[1]} !important;`).join(' ')}}`);
// 2026-08-25
// language=CSS
GM_addStyle(`body {margin: .5rem !important;}`);
// 2026-08-25
// language=CSS
GM_addStyle(`body {margin: .5rem !important;}`);
// 2026-08-25
// language=CSS
GM_addStyle(`h1 {font-size: 2rem !important;}`);
// 2026-08-25
// language=CSS
GM_addStyle(`h2 {margin: .5rem 0 !important;}`);
// 2026-08-25
// language=CSS
GM_addStyle(`h4 {margin: .15rem 0 !important;}`);