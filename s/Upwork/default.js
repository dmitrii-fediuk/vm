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
	// language=CSS
	GM_addStyle([
		'.client-activity-items .help-icon'
		,'.extra-jobs-cards > [class*="card"]:has([data-test="SimilarJobs"])'
		,'.nav-parent-wrapper'
		,'[data-test="AboutClientUser"] div:has([data-testid="head-title"])'
		// 2024-12-25 The title: «Attachment»
		,'[data-test="Attachments"] h5'
		// 2024-12-25 The title: «Activity on this job»
		,'[data-test="ClientActivity"] h5'
		,'[data-test="ContractToHireBanner"] .illustration'
		// 2024-12-25 The title: «Skills and Expertise»
		,'[data-test="Expertise"] h5'
		// 2024-12-25 Titles like: «Full Stack Development Deliverables»
		,'[data-test="Expertise"] > [class*="grid-container"] > div:has(> .skills-list) > strong'
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
		,'[data-test="Expertise"] > [class*="grid-container"]'
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
else if (location.pathname.startsWith('/nx/search/jobs')) {
	// language=CSS
	GM_addStyle([
		'.nav-parent-wrapper'
		,'[data-test$="JobsButtons"]'
		,'[data-test="Header"]'
		,'[data-test="JobActionSave"]'
		,'[data-test="JobsPage"] > [data-test="FiltersActive"]'
		,'[data-test="JobsPage"] > [data-test="FiltersList"]'
		// 2024-12-27
		// I hide it because my JavaScript below automatically clicks the «Just not interested» option from this menu
		// when the `JobActionFeedback` button is clicked, so there's no need for the menu to appear.
		,'[data-test="JobActionFeedback"] [data-test="UpCPopover"]'
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
	// 2024-12-28
	// language=CSS
	GM_addStyle([
		'.job-tile-actions'
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			Object.entries({
				'display': 'block'
				// language=Javascript
				,'left': '50%'
				,'margin-top': '0.5rem'
				// language=CSS
				,'position': 'absolute'
				,'z-index': 1
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
	(() => {
		const stopEvent = e => {
			e.preventDefault();
			e.stopPropagation();
			e.stopImmediatePropagation();
		};
		const openArticle = b => {
			const article = b.closest('article[data-test="JobTile"]');
			if (article) {
				const l = article.querySelector('a[data-test="job-tile-title-link UpLink"]');
				if (l) {
					// 2025-01-04
					// «https://www.upwork.com/jobs/Assisted-Enhancements-for-Lightweight-App_~021875527601805661470/?referrer_url_path=%2Fnx%2Fsearch%2Fjobs» → «https://www.upwork.com/jobs/~021875527601805661470»
					const u = new URL(l.href);
					const m = u.pathname.match(/_~(\d+)(?=\/|$)/);
					window.open(`${u.origin}/jobs/~${m[1]}`, '_blank');
				}
			}
		};
		(() => {
			let x = 0, y = 0, article;
			const updateArticle = () => {
				article = document.elementFromPoint(x, y)?.closest('article[data-test="JobTile"]');
			};
			document.addEventListener('mousemove', e => {
				x = e.clientX; y = e.clientY;
				updateArticle();
			}, true);
			document.addEventListener('scroll', updateArticle, true);
			document.addEventListener('keydown', e => {
				if ('Enter' === e.key) {
					stopEvent(e);
					openArticle(article);
				}
			}, true);
		})();
		document.addEventListener('click', e => {
			const i = e.target;
			const menuItemClass = 'air3-menu-item';
			if (!i.classList.contains(menuItemClass) && e.target.closest('article')) {
				const downBtn = i.closest('button[data-ev-label="dropdown_secondary_toggle"]');
				if (!downBtn) {
					stopEvent(e);
					openArticle(e.target);
				}
				else {
					setTimeout(() => {
						const allItems = document.querySelectorAll('.' + menuItemClass);
						const i = [...allItems].find(i => 'Just not interested' === i.textContent.trim());
						i ? i.click() : null;
					}, 50);
				}
			}
		}, true);
	})();
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