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
	'#page-bottom', '#prevnext', 'aside', 'footer', 'header'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-03-01
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-03-01
// language=CSS
GM_addStyle([
	'#breadcrumb'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-03-01
// language=CSS
GM_addStyle([
	'.breadcrumb', '.section'
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
		['width', 'max-width',' min-width']
			// language=Javascript
			.map(k => `${k}: initial !important;`).join(' ') +
	'}'
);
// 2025-02-22 https://chatgpt.com/c/67b8f0dc-df0c-800c-84ed-6b8a8d71d710
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['bottom', 'left',' right', 'top']
			// language=Javascript
			.map(k => `${k}: auto !important;`).join(' ') +
	'}'
);
