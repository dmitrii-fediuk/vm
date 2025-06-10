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
// 2025-06-10
// 1) «Failed to execute 'appendChild' on 'Node': This node type does not support this method».
// 2) https://g.co/gemini/share/647370d4f366
setTimeout(() => {
	GM_addStyle([
		'#article-body > hr'
		,'#article-vote-container'
		,'#navbar'
		,'#section-banner-contact'
		,'.navbar-container:has(> footer)'
		,'.row:has(.breadcrumb)'
		,':has(> #article-sidebar)'
		,':has(> .articles-page-content) > :not(.articles-page-content)' // 2025-06-10
		,':has(> .contact-support-banner)' // 2025-06-10
		,'[data-test-id="footer"]' // 2025-06-10
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}, 200);
// 2025-06-10
// language=CSS
GM_addStyle([
	':has(> .articles-page-content)' // 2025-06-10
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
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
GM_addStyle('h1 {font-size: 1.5rem !important;}');
// language=CSS
GM_addStyle('.accordion-item-content h4 {margin: 0.5rem 0 !important;}');
// language=CSS
GM_addStyle('.accordion-item-title {padding: 0.5rem 0 0 0 !important;}');
// language=CSS
GM_addStyle('.article-body p {margin: 0.5rem 0 !important;}');
// language=CSS
GM_addStyle('.article-body p:first-of-type {margin-top: 0 !important;}');
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
// language=CSS
GM_addStyle('#page-header > .container {padding-bottom: 0 !important;}');