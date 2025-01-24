// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/support.js
// @icon https://www.upwork.com/favicon.ico
// @match *://support.upwork.com/*
// @name Upwork / Support
// ==/UserScript==
// 2025-01-24 "Improve `support.upwork.com`": https://github.com/dmitrii-fediuk/vm/issues/86
// language=CSS
GM_addStyle([
	'#article-vote-container'
	,'#navbar'
	,'#section-banner-contact'
	,'.navbar-container:has(> footer)'
	,'div:has(> #article-sidebar)'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'div:has(> #article-body)'
]
	 // language=Javascript
	.join(',') + '{width: auto !important;}')
;
// language=CSS
GM_addStyle([
	'.article-page > .container'
]
	 // language=Javascript
	.join(',') + '{max-width: none !important;}')
;
// language=CSS
GM_addStyle([
	'#article-body'
	,'#article-body > h3'
	,'#page-header'
	,'.accordion'
	,'.accordion-item-content img'
	,'.accordion-item-content li'
	,'.accordion-item-content ol'
	,'.accordion-item-content ul'
	,'.accordion-item-title > h3'
	,'.article-page'
	,'h1'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// language=CSS
GM_addStyle([
	'.accordion-item-content'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// language=CSS
GM_addStyle([
	'.accordion-item'
	,'.accordion-item-content'
]
	 // language=Javascript
	.join(',') + '{border: none !important;}')
;
// language=CSS
GM_addStyle([
	'#article-body > h3'
	,'.accordion-item-title h3'
]
	 // language=Javascript
	.join(',') + '{font-size: 1.25rem !important;}')
;
// language=CSS
GM_addStyle('.accordion-item-content h4 {margin: 0.5rem 0 !important;}');
// language=CSS
GM_addStyle('.accordion-item-title {padding: 0.5rem 0 0 0 !important;}');
// language=CSS
GM_addStyle('.article-body p {margin: 0.5rem 0 !important;}');
// language=CSS
GM_addStyle([
	'.article-page > .container'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			// language=Javascript
			'padding': '0 0.5rem 0.5rem 0.5rem'
			,'width': 'calc(100% - 1rem)'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);