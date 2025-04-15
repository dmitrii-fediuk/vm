// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/turkiye.gov.tr/internal.js
// @icon https://cdn.e-devlet.gov.tr/themes/izmir/images/favicons/favicon-196x196.1.8.0.png
// @match https://www.turkiye.gov.tr/*
// 2025-04-11 https://chatgpt.com/c/67f90ba8-a62c-8003-a059-cf3b84e22792
// @exclude-match https://www.turkiye.gov.tr/
// @name turkiye.gov.tr / Internal
// ==/UserScript==
// 2025-04-15 "Improve `turkiye.gov.tr`": https://github.com/dmitrii-fediuk/vm/issues/104
// language=CSS
GM_addStyle([
	'#brandingBlock' // 2025-04-15
	,'.serviceTitleBlock .serviceActions' // 2025-04-15
	,'footer' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'#pageContentBlock' // 2025-04-15
	,'.breadcrumbNavigation' // 2025-04-15
	,'.disclaimerContainer' // 2025-04-15
	,'.pageUpdateTime' // 2025-04-15
	,'header .mainActionsList' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'.disclaimerContainer' // 2025-04-15
	,'.pageUpdateTime' // 2025-04-15
	,'.serviceIntroductionBlock li' // 2025-04-15
	,'aside#serviceHelperBlock' // 2025-04-15
	,'header .mainActionsList' // 2025-04-15
	,'section#contentStart' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background: none !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'aside#serviceHelperBlock' // 2025-04-15
	,'header#top' // 2025-04-15
	,'main#serviceBlock' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{background-color: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'.disclaimerContainer' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{background-image: none !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'.disclaimerContainer' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'.breadcrumbNavigation' // 2025-04-15
	,'.disclaimerContainer' // 2025-04-15
	,'aside#serviceHelperBlock' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'*'
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'#mainActionsBlock' // 2025-04-15
]
	 // language=Javascript
	.join(',') + '{justify-content: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: initial !important;}')
;
// 2025-04-15
// language=CSS
GM_addStyle([
	'#pageContentBlock' // 2025-04-15
	,'.breadcrumbNavigation' // 2025-04-15
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
// 2025-04-15
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2025-04-15
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
			,'font-size': '150%'
			// language=CSS
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2025-04-15
// language=CSS
GM_addStyle('body {margin: 0 1rem !important;}');