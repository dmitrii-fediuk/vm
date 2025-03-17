// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/default.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/*
// @name Upwork / Common
// ==/UserScript==
// 2024-10-13 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
// language=CSS
GM_addStyle([
	'#user-top-navigation-container .nav-container > [data-cy="header"]'
	,'.air3-search'
	,'.microapp-slot-innova'
	,'.nav-notifications .nav-dot'
	,'.nav-uma'
	,'.up-skip-nav'
	,'[data-cy="help-menu"]'
	,'[data-test="SaveJob"]'
	// 2025-03-04
	//  1) «Our records indicate that one or more of your payment methods on file
	//  is associated with Russia or Belarus».
	// 2) https://support.upwork.com/hc/en-us/requests/51272840
	,'div:has(> .up-smf [role="alert"] a[href="https://www.upwork.com/nx/payments/deposit-methods"])'
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

}
// 2024-12-25
// 2024-12-30 It is applied to both `/nx/proposals/` and `/nx/proposals/job/`
else if (location.pathname.startsWith('/nx/proposals/')) {
	// language=CSS
	GM_addStyle([
		'.d-none-mobile-app:has(> h1)'
		,'.invitations-card-view .header-aux'
		,'.profile-highlights .multimedia-portfolio-hero'
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
	// 2024-12-28
	(() => {
		document.addEventListener('click', e => {
			const l = e.target.closest('a[data-ev-label="jpn_list_details_link"]');
			if (l) {
				e.preventDefault();
				e.stopPropagation();
				e.stopImmediatePropagation();
				window.open(l.href, '_blank');
			}
		}, true);
	})();
}