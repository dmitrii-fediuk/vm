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
GM_addStyle('#user-top-navigation-container header > [class^="nav-v"] {height: auto !important;}');
// 2024-12-25
// language=CSS
GM_addStyle('#user-top-navigation-container .nav-item-label {padding-bottom: 0 !important; padding-top: 0 !important;}');
// 2024-12-24 A job post, e.g.:
// «https://www.upwork.com/jobs/Developer-for-Backend-Development-with-high-Stripe-API-Experience_~021871538070777433492»
if (location.pathname.startsWith('/jobs/')) {
	// language=CSS
	GM_addStyle([
		'.client-activity-items .help-icon'
		,'.nav-parent-wrapper'
		,'[data-test="AboutClientUser"] div:has([data-testid="head-title"])'
		// 2024-12-25 The title: «Attachment»
		,'[data-test="Attachments"] h5'
		// 2024-12-25 The title: «Activity on this job»
		,'[data-test="ClientActivity"] h5'
		// 2024-12-25 The title: «Skills and Expertise»
		,'[data-test="Expertise"] h5'
		,'[data-test="Features"] .description'
		,'[data-test="Features"] > ul.features > li::after'
		,'[data-test="Features"] [data-test="UpCIcon"]'
		,'[data-test="FlagButton"]'
		,'[data-test="Qualifications"] [data-cy="english"]'
		// 2024-12-25 The title: «Preferred qualifications»
		,'[data-test="Qualifications"] h5'
		// 2024-12-25 The title: «You will be asked to answer the following questions when submitting a proposal:»
		,'[data-test="Questions"] > p'
		// 2024-12-25 The title: «Project Type:»
		,'[data-test="Segmentations"] li > :first-child'
		,'[data-test="SpecializedProfilePrompt"]'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
	// language=CSS
	GM_addStyle([
		'[data-test="Features"] > ul.features > li'
	]
		 // language=Javascript
		.join(',') + '{display: initial !important;}')
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
		'.air3-card-section h4'
		,'.job-details-content footer'
		,'[data-test="AboutClientUser"] div:has(> [data-test="UpCPopover"])'
		,'[data-test="AboutClientUser"] ul.features'
		,'[data-test="ConnectsAuction"]'
		,'[data-test="Expertise"] .skills-list'
		,'[data-test="Questions"] li'
	]
		 // language=Javascript
		.join(',') + '{margin: 0 !important;}')
	;
	// 2024-12-25
	// language=CSS
	GM_addStyle('#main {margin-top: 0.5rem !important;}');
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
	// 2024-12-25
	// language=CSS
	GM_addStyle('.air3-card-sections > * {order: 6;}');
	// 2024-12-24 https://chatgpt.com/c/676b1c1b-79a0-800c-a2ca-88de2346828f
	// language=CSS
	GM_addStyle('[data-test="AboutClientUser"] {order: 1 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('.air3-card-section:has(> h4) {order: 2 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('.air3-card-section:has(> [data-test="Description"]) {order: 3 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('[data-test="Questions"] {order: 4 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('.air3-card-section:has(> [data-test="Qualifications"]) {order: 5 !important;}');
	// language=CSS
	GM_addStyle('.air3-card-section {border: 0 !important; padding: 0 0.5rem !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('.air3-card-section:first-of-type > div {margin-top: 0 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('.air3-card-section:has(> [data-test="Description"]) {margin-bottom: 0.66rem !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('.air3-card-section:has(> [data-test="Segmentations"]) {margin: 0.5rem 0 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('[data-test="ConnectsAuction"] {display: flex !important; gap: 1rem !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('[data-test="ConnectsAuction"] > div {margin-top: 0 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('[data-test="Description"] br {display: block !important; content: ""; height: 1px !important;}');
	// language=CSS
	GM_addStyle([
		'[data-test="Description"] p'
		,'[data-test="Questions"] ol'
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			Object.entries({
				'font-family': 'Segoie UI'
				// language=Javascript
				,'font-size': '140%'
				,'line-height': 1.2
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
	// 2024-12-25
	// language=CSS
	GM_addStyle([
		'.client-activity-items'
		,'.qualification-items'
	]
		 // language=Javascript
		.join(',') + '{gap: 0 !important;}')
	;
	// 2024-12-25
	// language=CSS
	GM_addStyle([
		'.air3-card-section:has(> [data-test="ConnectsAuction"])'
		,'.air3-card-section:has(> [data-test="Qualifications"])'
		,'[data-test="AboutClientUser"]'
		,'[data-test="AboutClientUser"] ul.features'
		,'[data-test="Features"] .features'
	]
		 // language=Javascript
		.join(',') + '{display: flex !important; gap: 0.5rem !important;}')
	;
	// 2024-12-25
	// language=CSS
	GM_addStyle('[data-test="AboutClientUser"] ul.features {flex-direction: row !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('[data-test="Questions"] {font-weight: bold; margin-bottom: 0.5rem !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('.qualification-items .icons {vertical-align: middle !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('.qualification-items > li:has(.text-danger) {background: #ffebe6 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle(':has(> [data-test="BudgetAmount"]) {background: #ffebe6 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('[data-test="Features"] {margin: 0.5rem 0 0 0 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('[data-test="Bids"] h5 {font-size: 100% !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('.extra-jobs-cards[class*="px-"] {padding: 0 0.5rem !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('[data-test="WorkHistory"][class*="mt-"] {border: 0 !important; margin-top: 0.5rem !important;}');
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
}
// 2024-12-25
if (location.pathname.startsWith('/nx/proposals')) {
	// language=CSS
	GM_addStyle([
		'.d-none-mobile-app:has(> h1)'
		,'.invitations-card-view .header-aux'
		,'[class*="scam-education-promo"]'
		,'button[title="Referrals"]'
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
	// 2024-12-25
	// language=CSS
	GM_addStyle([
		'.air3-card'
	]
		 // language=Javascript
		.join(',') + '{margin: 0 !important;}')
	;
	// 2024-12-25
	// language=CSS
	GM_addStyle([
		'.air3-card'
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			Object.entries({
				'border': 0
				// language=Javascript
				,'padding': '0 0.5rem'
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
	// 2024-12-25
	// language=CSS
	GM_addStyle('.air3-card header {padding: 0.5rem 0 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('.air3-card header h2 {font-size: 1.2rem; !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('.air3-tabs {margin-bottom: 0 !important; margin-top: 0 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('.air3-tabs [role="tab"] {padding-top: 0 !important;}');
	// 2024-12-25
	// language=CSS
	GM_addStyle('div:has(> .active-offers-card-view) {margin-top: 0.5rem !important;}');
}