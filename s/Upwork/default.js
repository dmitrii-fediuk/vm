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
	'#user-top-navigation-container .nav-container > [data-cy="header"]'
	,'.air3-search'
	,'.fe-proposal-boost-proposal'
	,'.microapp-slot-innova'
	,'.nav-notifications .nav-dot'
	,'.nav-uma'
	,'.profile-highlights'
	,'.up-skip-nav'
	,'[data-cy="help-menu"]'
	,'[data-test="SaveJob"]'
	,'footer.up-footer'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
GM_addStyle([
	'[role="alert"]'
	,'main > .container'
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2024-12-25
// language=CSS
GM_addStyle([
	'header .nav-container'
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'align-items': 'center'
			,'display': 'flex'
			,'flex-wrap': 'wrap'
			// language=Javascript
			,'height': '100%'
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
// 2024-12-25
// language=CSS
GM_addStyle([
	'#user-top-navigation-container header > [class^="nav-v"]'
]
	 // language=Javascript
	.join(',') + '{height: 1.5rem !important;}')
;
// 2024-12-25
// language=CSS
GM_addStyle('#user-top-navigation-container .nav-item-label {padding-bottom: 0 !important; padding-top: 0 !important;}');
// 2024-12-24 A job post, e.g.:
// «https://www.upwork.com/jobs/Developer-for-Backend-Development-with-high-Stripe-API-Experience_~021871538070777433492»
if (location.pathname.startsWith('/jobs/')) {
	// language=CSS
	GM_addStyle([
		'.nav-parent-wrapper'
		,'[data-test="AboutClientUser"] div:has([data-testid="head-title"])'
		,'[data-test="SpecializedProfilePrompt"]'
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
		,'[data-test="AboutClientUser"] div:has(> [data-test="UpCPopover"])'
	]
		 // language=Javascript
		.join(',') + '{margin: 0 !important;}')
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
if (location.pathname.startsWith('/nx/search/jobs')) {
	// language=CSS
	GM_addStyle([
		'.nav-parent-wrapper'
		,'[data-test$="JobsButtons"]'
		,'[data-test="Header"]'
		,'[data-test="JobActionSave"]'
		,'[data-test="JobsPage"] > [data-test="FiltersActive"]'
		,'[data-test="JobsPage"] > [data-test="FiltersList"]'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
	// language=CSS
	GM_addStyle([
		'[data-test="JobsPage"]'
		,'[data-test="JobsPage"] > div:last-of-type'
	]
		 // language=Javascript
		.join(',') + '{display: initial !important;}')
	;
	// language=CSS
	GM_addStyle([
		'#main > .container'
	]
		 // language=Javascript
		.join(',') + '{padding: 0 !important;}')
	;
	// 2024-12-25
	// language=CSS
	GM_addStyle('[data-test="JobsList"] > article {padding: 0.5rem !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle([
		'article [data-test="JobInfo"]'
		,'article [data-test="JobInfoClient"]'
		,'article [data-test="JobInfoClientMore"]'
		,'article [data-test="JobTileHeader"]'
	]
		 // language=Javascript
		.join(',') + '{margin: 0 !important;}')
	;
	// 2024-12-25
	// language=CSS
	GM_addStyle([
		'[data-test="LazyHydrate"]'
	]
		 // language=Javascript
		.join(',') + '{padding: 0 !important;}')
	;
	// 2024-12-25
	// language=CSS
	GM_addStyle('[data-test="proposals-tier"] {padding: 0.5rem 0 0 0 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('article [data-test$="JobDescription"] {margin: 0.5rem 0 !important;}');
	// 2024-12-25
	// language=CSS
	//GM_addStyle('[data-test="JobTileDetails"] > [data-test="JobInfoClient"] {padding: 0.5rem !important;}');
}
// 2024-12-25
if (location.pathname.startsWith('/nx/proposals')) {
	// language=CSS
	GM_addStyle([
		'.d-none-mobile-app:has(> h1)'
		,'[class*="scam-education-promo"]'
		,'button[title="Referrals"]'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
	// 2024-12-25
	// language=CSS
	GM_addStyle('.air3-tabs {margin-bottom: 0 !important; margin-top: 0 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('.air3-tabs [role="tab"] {padding-top: 0 !important;}');
}