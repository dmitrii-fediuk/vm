// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Antigravity.js
// @icon https://antigravity.google/apple-touch-icon.png
// @match https://antigravity.google/docs/*
// @name Google / Antigravity
// ==/UserScript==
// 2026-10-04 "Improve `antigravity.google`": https://github.com/dmitrii-fediuk/vm/issues/139
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		[
		]
			// language=Javascript
			.map(k => `${k}: revert !important;`).join(' ') +
	'}'
);
// 2026-10-04
// language=CSS
GM_addStyle([
	`aside.right-sidebar-container` // 2026-10-04
	,`.download-button` // 2026-10-04
	,`footer` // 2026-10-04
	,`hr` // 2026-10-04
	,`mobile-starlight-toc` // 2026-10-04
	,`.search-wrapper` // 2026-10-04
	,`.social-icons` // 2026-10-04
	,`starlight-theme-select` // 2026-10-04
	,`starlight-toc` // 2026-10-04
	,`.title-wrapper` // 2026-10-04
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2026-10-04
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
// 2026-10-04
// language=CSS
GM_addStyle([
	`header` // 2026-10-04
	,`.sidebar-pane` // 2026-10-04
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
	`.header-cta-group` // 2026-10-04
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
	`:is(h3, ol, p, pre, table, ul, .starlight-aside, starlight-tabs):not(#a)` // 2026-10-04
]
	 // language=Javascript
	.join(',') + '{margin: 0.25rem 0 !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
	`.content-panel` // 2026-10-04
	,`.main-frame` // 2026-10-04
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding-top: 0 !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{align-items: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
	//`pre code:not(#a)` // 2026-10-04
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background-image: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
	`header` // 2026-10-04
	,`.header-main` // 2026-10-04
	,`.sidebar-pane` // 2026-10-04
	,`.subnav-bar` // 2026-10-04
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-direction: column-reverse !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2026-10-04
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
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: revert !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: .9 !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
	`.sl-container` // 2026-10-04
]
	 // language=Javascript
	.join(',') + '{max-width: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
	`.header-main` // 2026-10-04
]
	 // language=Javascript
	.join(',') + '{min-height: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
	`body` // 2026-10-04
	,`.sidebar-pane` // 2026-10-04
]
	 // language=Javascript
	.join(',') + '{overflow: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
	`body` // 2026-10-04
]
	 // language=Javascript
	.join(',') + '{width: unset !important;}')
;
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{z-index: unset !important;}')
;
// 2026-10-04
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
// 2026-10-04
// language=CSS
GM_addStyle([
	`.sidebar-pane` // 2026-10-04
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
// 2026-10-04
// language=CSS
GM_addStyle([
	`:is(code, kbd, pre, samp):not(#a)` // 2026-10-04
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
// 2026-10-04
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'color': '#067D17' // 2026-10-04
			,'font-weight': 'bold' // 2026-10-04
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-10-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2026-10-04
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
// 2026-10-04
// language=CSS
GM_addStyle([
	`nav.sidebar :not(#a)` // 2026-10-04
	,`.starlight-aside :not(#a)` // 2026-10-04
	,`.subnav-bar :not(#a)` // 2026-10-04
	,`:is(table, th, td):not(#a)` // 2026-10-04
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2026-10-04
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
// 2026-10-04
// language=CSS
GM_addStyle([
	`body` // 2026-10-04
// language=Javascript
].join(',') + `{${Object.entries({
	'font-family': 'Segoe UI' // 2026-10-04
	,'font-size': '150%' // 2026-10-04
	,'letter-spacing': '.03em' // 2026-10-04 
	,'line-height': 1.2 // 2026-10-04 
}).map(v => `${v[0]}: ${v[1]} !important;`).join(' ')}}`);
// 2026-10-04
// language=CSS
GM_addStyle(`.main-frame {order: 1 !important;}`);
// 2026-10-04
// language=CSS
GM_addStyle([
	`header` // 2026-10-04
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'height': 'auto'
			,'order': 2
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-10-04
// language=CSS
GM_addStyle(`nav.sidebar {order: 3 !important;}`);
// 2026-10-04
// language=CSS
GM_addStyle([
	`.header-stack` // 2026-10-04
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'align-items': 'center'
			,'border-bottom': '1px solid var(--theme-outline-variant, #dadce0)'
			,'border-top': '1px solid var(--theme-outline-variant, #dadce0)'
			,'display': 'flex'
			,'flex-direction': 'row-reverse'
			,'height': 'auto'
			,'justify-content': 'space-between'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-10-04
// language=CSS
GM_addStyle(`.subnav-bar {flex: 1 1 auto !important;}`);
// 2026-10-04
// language=CSS
GM_addStyle([
	`.header-main` // 2026-10-04
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'flex': '0 0 auto'
			,'height': 'auto'
			,'padding': '0 1rem'
			,'width': 'auto'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-10-04
// language=CSS
GM_addStyle(`.main-pane {width: 100% !important;}`);
// 2026-10-04
// language=CSS
GM_addStyle(`main {display: flex !important; flex-direction: column !important;}`);
// 2026-10-04
// language=CSS
GM_addStyle(`main > .content-panel:nth-of-type(2) {order: 1 !important;}`);
// 2026-10-04
// language=CSS
GM_addStyle(`main > .content-panel:nth-of-type(1) {order: 2 !important;}`);
// 2026-08-25, 2026-10-04
// language=CSS
GM_addStyle(`body {margin: .5rem !important;}`);
// 2026-08-25, 2026-10-04
// language=CSS
GM_addStyle(`h1:not(#a):not(#a) {font-size: 2rem !important;}`);
// 2026-08-25, 2026-10-04
// language=CSS
GM_addStyle(`:is(h2, .sl-heading-wrapper):not(#a):not(#a) {line-height: 1 !important; margin: .25rem 0 0 0 !important;}`);
// 2026-08-25, 2026-10-04
// language=CSS
GM_addStyle(`h4 {margin: .15rem 0 !important;}`);
// 2026-10-04
// language=CSS
GM_addStyle(`.starlight-aside {padding: .25rem .5rem !important;}`);
