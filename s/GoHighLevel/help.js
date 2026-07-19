// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/GoHighLevel/help.js
// @icon https://s3.amazonaws.com/cdn.freshdesk.com/data/helpdesk/attachments/production/48024308691/fav_icon/rPaMzT7JRUoQCAa706jOEyfYw7eSe5m9gg.png
// @match https://help.gohighlevel.com/*
// @name GoHighLevel / Help
// ==/UserScript==
// 2026-07-19 "Improve `gohighlevel.com`": https://github.com/dmitrii-fediuk/vm/issues/133
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
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
// 2026-07-19
// language=CSS
GM_addStyle([
	`.sticky` // 2026-07-19
	,`:has(> button > svg[data-testid='edit-post-icon'])` // 2026-07-19
	,`a svg.aspect-square` // 2026-07-19
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
	`#custom-scroll-frame` // 2026-07-19
	,`[class*=h-]` // 2026-07-19
	,`[class*=height]` // 2026-07-19
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2026-07-19
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
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
	`.note` // 2026-07-19
	,`[class*=mb-]` // 2026-07-19
	,`[class*=mt-]` // 2026-07-19
	,`[class*=mx-]` // 2026-07-19
	,`[class*=my-]` // 2026-07-19
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
	`h1`, `h3`, `ol`, `p`, `ul`
]
	 // language=Javascript
	.join(',') + '{margin: .25rem 0 !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
	`[class*=pb-]` // 2026-07-19
	,`[class*=pt-]` // 2026-07-19
	,`[class*=px-]` // 2026-07-19
	,`[class*=py-]` // 2026-07-19
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{align-items: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-direction: column-reverse !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
	`[class*=h-]` // 2026-07-19
	,`[class*=height]` // 2026-07-19
	,`[class*=size-]` // 2026-07-19
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-height', 'height', 'min-height']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: revert !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: .9 !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{max-width: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{min-height: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
	`[class*=overflow]` // 2026-07-19
]
	 // language=Javascript
	.join(',') + '{overflow: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
	//`.overflow-y-scroll` // 2026-07-19
]
	 // language=Javascript
	.join(',') + '{overflow-y: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
	`*` // 2026-07-19
]
	 // language=Javascript
	.join(',') + '{scrollbar-width: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{width: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{z-index: unset !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
	`[class*=w-]` // 2026-07-19
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2026-07-19
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
// 2026-07-19
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
// 2026-07-19
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'color': '#067D17' // 2026-07-19
			,'font-weight': 'bold' // 2026-07-19
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2026-07-19
// language=CSS
GM_addStyle([
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
// 2026-07-19
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2026-07-19
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
// 2026-07-19
// language=CSS
GM_addStyle(`body {margin: .5rem !important;}`);
// 2026-07-19
// language=CSS
GM_addStyle(`h2 {margin: .5rem 0 !important;}`);
// 2026-07-19
// language=CSS
GM_addStyle(`h4 {margin: .15rem 0 !important;}`);
// 2026-07-19
// language=CSS
GM_addStyle(`.note {padding: .25rem !important;}`);