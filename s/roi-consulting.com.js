// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/roi-consulting.com.js
// @icon https://roi-consulting.com/content/uploads/2020/07/cropped-Favicon512-180x180.png
// @match roi-consulting.com/*
// @name roi-consulting.com
// ==/UserScript==
// 2026-03-30 "Improve `roi-consulting.com`": https://github.com/dmitrii-fediuk/vm/issues/123
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
	':is(.h2, .h3, .h4, h1, h2, h3, h4, h5)' // 2026-03-30
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
// 2026-03-30
// language=CSS
GM_addStyle([
	'#about-assetnote' // 2026-03-30
	,'#about-assetnote + p' // 2026-03-30
	,'#masthead' // 2026-03-30
	,'.research-single__content--copy ~ *' // 2026-03-30
	,'.research-single__content--copy--content ~ *' // 2026-03-30
	,'li:before' // 2026-03-30
	,'main > :not(div.section)' // 2026-03-30
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2026-03-30
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
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
	'li'
	,'p'
]
	 // language=Javascript
	.join(',') + '{margin: 0.25rem 0 !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
	'main > div.section' // 2026-03-30
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{align-items: unset !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
	'body:not(#A)' // 2026-03-30
	,'code.custom-inline-code' // 2026-03-30
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
	'.single-research:not(#A) :not(code, [class^="hljs"])' // 2026-03-30
	,'body:not(#A)' // 2026-03-30
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: revert !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: .9 !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{min-height: unset !important;}')
;

// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{width: unset !important;}')
;
// 2026-03-30
// language=CSS
GM_addStyle([
	'.research-single__content--copy' // 2026-03-30
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
// 2026-03-30
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
// 2026-03-30
// language=CSS
GM_addStyle([
	'code' // 2026-03-30
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
// 2026-03-30
// language=CSS
GM_addStyle([
	'code.custom-inline-code'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'color': '#067D17' // 2026-03-30
			,'font-weight': 'bold' // 2026-03-30
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2026-03-30
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
// 2026-03-30
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2026-03-30
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
// 2026-03-30
// language=CSS
//GM_addStyle('body {margin: 1rem .5rem !important;}');
// 2026-03-30
// language=CSS
GM_addStyle('h1:not(#A) {font-size: 2rem !important; margin: .5rem 0 !important;}');
// 2026-03-30
// language=CSS
GM_addStyle(':is(h2, h3, h4) {margin: .5rem 0 !important;}');
