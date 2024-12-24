// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/default.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/*
// @name Upwork
// ==/UserScript==
// 2024-10-13 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
// language=CSS
GM_addStyle([
	'.air3-search'
	,'.fe-proposal-boost-proposal'
	,'.microapp-slot-innova'
	,'.nav-uma'
	,'.profile-highlights'
	,'footer.up-footer'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	//'footer'
]
	 // language=Javascript
	.join(',') + '{position: initial !important;}')
;
if (location.pathname.startsWith('/jobs/')) {
	// language=CSS
	GM_addStyle([
		'.nav-parent-wrapper'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}