// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/law.cornell.edu.js
// @icon https://www.law.cornell.edu/sites/www.law.cornell.edu/files/favicon_0.ico
// @match *://www.law.cornell.edu/*
// @name law.cornell.edu
// ==/UserScript==
// 2025-03-01 "Improve `law.cornell.edu`": https://github.com/dmitrii-fediuk/vm/issues/93
// language=CSS
GM_addStyle([
	'#page-bottom'
	,'#prevnext'
	,'.nav-tabs'
	,'aside'
	,'body > br'
	,'footer'
	,'header'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-01
// language=CSS
GM_addStyle([
	'#breadcrumb', 'h1'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-01
// language=CSS
GM_addStyle([
	'#breadcrumb'
	,'.breadcrumb'
	,'.section'
	,'.tab-content'
	,'.tabbable-panel'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-03-01
// language=CSS
GM_addStyle([
	'#main'
	,'.row'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'min-width', 'width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
	'}'
);
// 2025-03-01
// language=CSS
GM_addStyle('body {padding: 0 1rem !important;}');