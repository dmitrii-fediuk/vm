// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/PayPal/developer.js
// @icon https://www.paypalobjects.com/webstatic/developer/favicons/pp32.png
// @match https://developer.paypal.com/*
// @name PayPal / Developer
// ==/UserScript==
// 2025-05-04 "developer.paypal.com`": https://github.com/dmitrii-fediuk/vm/issues/109
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{all: unset !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
	'#ul-app'
	,'[class*="feedbackButton"]'
	,'[class*="footerContainer"]'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
	'div[class*="css-"]'
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: unset !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
	'[class*="-layout_container"]'
	,'[class*="css-"]'
	,'[class*="heroBackground-"]'
	,'[style*="margin"]'
	,'.archetypeHeader'
	,'.breadcrumb'
	,'.numberedHeaderRow'
	,'.richText'
	,'body > *'
	// 2025-05-04
	// 1.1) https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity#the_is_not_has_and_css_nesting_exceptions
	// 1.2) https://archive.is/5HYgv#selection-10675.63-10675.172
	,'main:not(#A)'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
	'.innerBeforeRow'
	,'[class*="-col_"]'
	,'[class*="-layout_container"]'
	,'[class*="css-"]'
	,'[class*="heroBackground-"]'
	,'[style*="padding"]'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{box-shadow: unset !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background: unset !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{flex-basis: 100%; !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{float: unset !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
	'.numberedHeaders'
	,'body *'
]
	 // language=Javascript
	.join(',') + '{font-family: unset !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
	'.dx-docs'
	,'[style*="font"]'
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: 80% !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: revert !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
	'[class*="heroBackground-"]'
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
	'body *'
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: .9 !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
	'.breadcrumb'
]
	 // language=Javascript
	.join(',') + '{min-height: unset !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{overflow-x: unset !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{table-layout: unset !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: unset !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{top: unset !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle([
	'[class*="-col_"]'
	// 2025-05-04
	// 1.1) https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity#the_is_not_has_and_css_nesting_exceptions
	// 1.2) https://archive.is/5HYgv#selection-10675.63-10675.172
	,'main:not(#A)'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['width', 'min-width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
		// language=CSS
		Object.entries({
			// language=Javascript
			'max-width': '100%'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-05-04
// language=CSS
GM_addStyle([
	'img'
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
// 2025-05-04 https://g.co/gemini/share/67bc09143588
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
// 2025-05-04
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
			,'font-size': '185%'
			// language=CSS
			,'line-height': 1
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-05-04
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
// 2025-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-weight: 600 !important;}')
;
// 2025-05-04
// language=CSS
GM_addStyle('body {margin: 0 1rem !important;}');
// 2025-05-04
// language=CSS
GM_addStyle('br {content: ""; display: block !important; height: 1px;}');
// 2025-05-04
// language=CSS
GM_addStyle('h1 {font-size: 2.5rem !important; margin: 0 0 .3rem 0 !important;}');
// 2025-05-04
// language=CSS
GM_addStyle('h2 {font-size: 2.25rem !important; margin: .5rem 0 !important;}');
// 2025-05-04
// language=CSS
GM_addStyle('h3 {font-size: 2rem !important; margin: .25rem 0 !important;}');
// 2025-05-04
// language=CSS
GM_addStyle('h4 {font-size: 1.75rem !important; margin: .2rem 0 !important;}');
// 2025-05-04
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