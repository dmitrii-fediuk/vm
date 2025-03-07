// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/irs.gov.js
// @icon https://www.irs.gov/themes/custom/pup_base/favicon.ico
// @match *://www.irs.gov/*
// @name irs.gov
// ==/UserScript==
// 2025-03-07 "Improve `irs.gov`": https://github.com/dmitrii-fediuk/vm/issues/94
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-07
// language=CSS
GM_addStyle([
	'.pup-header-main'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-07
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-07
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-07
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['width', 'max-width',' min-width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
	'}'
);