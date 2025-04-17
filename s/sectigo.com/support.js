// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/sectigo.com/support.js
// @icon https://www.sectigo.com/_ui/favicons/sectigo/apple-touch-icon.552357069.png
// 2025-04-17 https://chatgpt.com/c/67f90c02-eb2c-8003-912b-607eae8ec098
// @match https://support.sectigo.com/*
// @name sectigo.com / Support
// ==/UserScript==
// 2025-04-17 "Improve `sectigo.com`": https://github.com/dmitrii-fediuk/vm/issues/105
// language=CSS
GM_addStyle([
	'#maincorecontent > :not(.pkbResultPanel)'
	,'#maincoreleft'
	,'.pkbResultSelectedCategories'
	,'.pkbResultTop'
	,'th.labelCol'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([

]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
	'.detailList'
	,'.htmlDetailElementTable'
	,'.pkbResultPanel'
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
	'#maincore > .innerwrapper'
	,'#maincore'
	,'#maincorecontent'
	,'.data2Col'
	,'.htmlDetailElementTable > tbody > tr > td'
	,'.pkbResultInner'
	,'.pkbResultPanel'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
	'.pkbResultPanel'
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background: none !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background-color: initial !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
	'*'
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{text-align: initial !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{clear: both !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{line-height: initial !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
	'#maincore > .innerwrapper'
	,'#maincorecontent'
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
// 2025-04-17
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{font-size: revert !important;}')
;
// 2025-04-17
// language=CSS
GM_addStyle([
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
// 2025-04-17
// language=CSS
//GM_addStyle('body {margin: 0 1rem !important;}');