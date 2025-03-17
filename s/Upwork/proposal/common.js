// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/proposal/common.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/nx/proposals/*
// @name Upwork / Proposal / Common
// ==/UserScript==
// 2024-10-13 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
// 2024-12-25
// 2024-12-30 It is applied to both `/nx/proposals/` and `/nx/proposals/job/`
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