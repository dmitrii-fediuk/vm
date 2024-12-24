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
	,'[data-test="SaveJob"]'
	,'footer.up-footer'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2024-12-24 A job post, e.g.:
// «https://www.upwork.com/jobs/Developer-for-Backend-Development-with-high-Stripe-API-Experience_~021871538070777433492»
if (location.pathname.startsWith('/jobs/')) {
	// language=CSS
	GM_addStyle([
		'.nav-parent-wrapper'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
	// language=CSS
	GM_addStyle([
		'.job-details-content footer'
	]
		 // language=Javascript
		.join(',') + '{position: initial !important;}')
	;
	// language=CSS
	GM_addStyle([
		'.job-details-content footer'
	]
		 // language=Javascript
		.join(',') + '{margin: 0 !important;}')
	;
	// language=CSS
	GM_addStyle([
		'main > .container'
	]
		 // language=Javascript
		.join(',') + '{padding: 0 !important;}')
	;
	// 2024-12-24 https://chatgpt.com/c/676b1c1b-79a0-800c-a2ca-88de2346828f
	// language=CSS
	GM_addStyle([
		'.air3-card-sections'
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			Object.entries({
				'display': 'flex'
				,'flex-direction': 'column'
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
	// 2024-12-24 https://chatgpt.com/c/676b1c1b-79a0-800c-a2ca-88de2346828f
	// language=CSS
	GM_addStyle('[data-test="AboutClientUser"] {order: -1 !important;}');
	// 2024-12-24 https://chatgpt.com/c/676b1c1b-79a0-800c-a2ca-88de2346828f
	// language=CSS
	GM_addStyle('[data-test="AboutClientUser"] ul.features {flex-direction: row !important; gap: 1.5rem !important;}');
	// language=CSS
	GM_addStyle('.air3-card-section {padding: 0.5rem !important;}');
}