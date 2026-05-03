// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/mariadb.com.js
// @icon https://360929122-files.gitbook.io/~/files/v0/b/gitbook-x-prod.appspot.com/o/organizations%2FdiTpXxF5WsbHqTReoBsS%2Fsites%2Fsite_0SXwk%2Ficon%2FQ3m9jytowcs8OgGJCEew%2Fmariadb-logo-docs-bitmap.png?alt=media&token=721f3364-39ef-41a2-bf1b-e683a838d2ba
// @match https://mariadb.com/*
// @name mariadb.com
// ==/UserScript==
// 2026-05-03 "Improve `mariadb.com`": https://github.com/dmitrii-fediuk/vm/issues/127
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: revert !important;}')
;
// 2026-05-03
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
// 2026-05-03
// language=CSS
GM_addStyle([
	'#see-also' // 2026-05-03
	,'#see-also ~ *' // 2026-05-03
	,`.contents > .contents > :not(main)` // 2026-05-03
	,`[data-gb-announcement-banner]` // 2026-05-03
	,`footer[data-gb-site-footer]` // 2026-05-03
	,`header[data-gb-site-header]` // 2026-05-03
	,`main > :not(div:first-of-type)` // 2026-05-03
	,`main > header` // 2026-05-03
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
	`.contents` // 2026-05-03
	//,`.flex` // 2026-05-03
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2026-05-03
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
// 2026-05-03
// language=CSS
GM_addStyle([
	`[class*=\\:sticky]` // 2026-05-03
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0.25rem 0 !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
	`div:has(> .contents)` // 2026-05-03
	,`h2`, `h3`, `h4`, `h5`, `h6`  // 2026-05-03
	,`main` // 2026-05-03
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{align-items: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
	`.highlight-line-content` // 2026-05-03
	,`.text-sm` // 2026-05-03
	,`[class*=\\:text-]` // 2026-05-03
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: revert !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: .9 !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
	`[class*=max-w-]` // 2026-05-03
]
	 // language=Javascript
	.join(',') + '{max-width: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{min-height: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{width: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
	`aside` // 2026-05-03
]
	 // language=Javascript
	.join(',') + '{z-index: unset !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
	`.contents` // 2026-05-03
	,`main` // 2026-05-03
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: 100% !important;`).join(' ') +
	'}'
);
// 2026-05-03
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
// 2026-05-03
// language=CSS
GM_addStyle([
	`code` // 2026-05-03
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
// 2026-05-03
// language=CSS
GM_addStyle([
	`code:not(.table)` // 2026-05-03
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=CSS
			'color': '#067D17' // 2026-05-03
			,'font-weight': 'bold' // 2026-05-03
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2026-05-03
// language=CSS
GM_addStyle([
	`body` // 2026-05-03
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
// 2026-05-03
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2026-05-03
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
// 2026-05-03
// language=CSS
GM_addStyle(`body {margin: .5rem !important;}`);
// 2026-05-03
// language=CSS
GM_addStyle(`h2 {margin: .5rem 0 !important;}`);
// 2026-05-03
// language=CSS
GM_addStyle(`h3 {margin: .25rem 0 !important;}`);
// 2026-05-03
// language=CSS
GM_addStyle(`p {margin: .25rem 0 !important;}`);
// 2025-09-05
// 1) https://g.co/gemini/share/9776258b5353
// 2) https://g.co/gemini/share/fdb2b22cbe50
const modify = (s, action) => {
	const p = i => {
		i.matches?.(s) && action(i);
		i.querySelectorAll?.(s).forEach(action);
	};
	(new MutationObserver(mm => {
		mm.forEach(m => m.addedNodes.forEach(p));
	})).observe(document.documentElement, {childList: true, subtree: true});
	p(document.documentElement);
};
// 2026-05-03
// language=CSS
modify(`aside`, i => i.remove());