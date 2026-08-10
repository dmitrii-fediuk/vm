// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Meta/Business/Help.js
// @icon https://business.facebook.com/images/bizkit/mbs_favicon.png
// @match https://www.facebook.com/business/help/*
// @name Meta / Business / Help
// ==/UserScript==
// 2026-08-10 "Improve `business.facebook.com`": https://github.com/dmitrii-fediuk/vm/issues/131
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
	`body :not(#a)` // 2026-08-10
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		[
			'color'
			,'font-family'
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
// 2026-08-10
// language=CSS
GM_addStyle([
	`#FB4BResponsiveMainContent ~ *` // 2026-08-10
	,`#FB4BResponsiveMainWrapper ~ *` // 2026-08-10
	,`#GBMBizEdArticleRoot > :has(#GBMRelatedLinkContent)` // 2026-08-10
	,`#faq-page ~ *` // 2026-08-10
	,`:has(> div > button[title='Feedback'])` // 2026-08-10
	,`[data-surface='/bhc_top_root'] 
		> :not(:has([data-surface='/bhc_top_root/bhc_content']))` // 2026-08-10
	,`div:has(> [data-surface='/bhc_top_root/bhc_content']) 
		> :not([data-surface='/bhc_top_root/bhc_content'])` // 2026-08-10
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2026-08-10
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
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
	`div` // 2026-08-10
	,`h1` // 2026-08-10
	,`li` // 2026-08-10
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
	`:is(h3, ol, p, ul):not(#a)`// 2026-08-10
]
	 // language=Javascript
	.join(',') + '{margin: 0.25rem 0 !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
	`:is(p):not(#a)` // 2026-08-10
]
	 // language=Javascript
	.join(',') + '{margin: .4rem 0 !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
	//`#FB4BResponsiveMainContent > *` // 2026-08-10
	//,`#GBMBizEdArticleRoot` // 2026-08-10
	//,`#faq-page div` // 2026-08-10
	//,`#redesign-headers div` // 2026-08-10
	`div` // 2026-08-10
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{align-items: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-direction: column-reverse !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2026-08-10
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
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: revert !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
	//`p:not(#a)` // 2026-08-10
]
	 // language=Javascript
	.join(',') + '{line-height: 1.25 !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{max-width: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{min-height: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{width: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{z-index: unset !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
	`div` // 2026-08-10
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2026-08-10
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
// 2026-08-10
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
// 2026-08-10
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'color': '#067D17' // 2026-08-10
			,'font-weight': 'bold' // 2026-08-10
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2026-08-10
// language=CSS
GM_addStyle([
	'body' // 2026-08-10
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'font-family': 'Segoie UI'
			// language=Javascript
			,'font-size': '175%'
			// language=CSS
			,'line-height': 1.15
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-08-10
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2026-08-10
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
// 2026-08-10
// language=CSS
GM_addStyle(`body {margin: .5rem !important;}`);
// 2026-08-10
// language=CSS
GM_addStyle(`h2 {margin: .5rem 0 !important;}`);
// 2026-08-10
// language=CSS
GM_addStyle(`h4 {margin: .15rem 0 !important;}`);