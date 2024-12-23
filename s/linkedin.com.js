// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/linkedin.com.js
// @icon https://static.licdn.com/aero-v1/sc/h/akt4ae504epesldzj74dzred8
// @match *://*.linkedin.com/*
// @name linkedin.com
// ==/UserScript==
// 2024-12-23 "Improve `linkedin.com`": https://github.com/dmitrii-fediuk/vm/issues/80
// language=CSS
GM_addStyle([
	'.application-outlet__overlay-container'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'#global-nav'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
if (location.href.includes('/posts/')) {
	// language=CSS
	GM_addStyle([
		'aside'
		,'#global-nav'
		,'.scaffold-layout__sidebar'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
	// language=CSS
	GM_addStyle([
		'main'
	]
		 // language=Javascript
		.join(',') + '{max-width: initial !important;}')
	;
	// language=CSS
	GM_addStyle([
		'.scaffold-layout__content'
	]
		 // language=Javascript
		.join(',') + '{display: initial !important;}')
	;
	// language=CSS
	GM_addStyle([
		'.scaffold-layout'
		,'.scaffold-layout__content'
	]
		 // language=Javascript
		.join(',') + '{margin: 0 !important;}')
	;
	// language=CSS
	GM_addStyle([
		'.scaffold-layout-container'
	]
		 // language=Javascript
		.join(',') + '{width: initial !important;}')
	;
	// language=CSS
	GM_addStyle('.scaffold-layout-container {margin: 0 0.5rem !important;}');
}