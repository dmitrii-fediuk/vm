// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/project/item.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/jobs/*
// @name Upwork / Project / Item
// ==/UserScript==
// 2024-10-13 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
// 2024-12-24 A job post, e.g.:
// «https://www.upwork.com/jobs/Developer-for-Backend-Development-with-high-Stripe-API-Experience_~021871538070777433492»
// 2025-09-04 The previous value: «AboutClientUser»
const aboutClient = 'about-client-container';
// 2025-06-10
// 1) «Failed to execute 'appendChild' on 'Node': This node type does not support this method».
// 2) https://g.co/gemini/share/647370d4f366
setTimeout(() => {
	// language=CSS
	GM_addStyle([
		`.client-activity-items .help-icon`
		,`.extra-jobs-cards > [class*='card']:has([data-test='SimilarJobs'])`
		,`.job-details-content > :has(> button polygon)` // 2025-09-04
		,`.nav-parent-wrapper`
		,`.popover` // 2025-09-04
		// 2025-05-04
		// 1.1) https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity#the_is_not_has_and_css_nesting_exceptions
		// 1.2) https://archive.is/5HYgv#selection-10675.63-10675.172
		// 2025-09-04
		,'.posted-on-line ~ :not(#A)'
		,`[data-test='${aboutClient}'] div:has([data-testid='head-title'])` // 2025-09-04
		// 2024-12-25 The title: «Attachment»
		,`[data-test='Attachments'] h5`
		,`[data-testid='buyer-rating']` // 2025-09-04
		,`[data-test='ContractToHireBanner'] .illustration`
		,`[data-test='Description'] > strong:first-child` // 2025-09-04
		// 2024-12-25 The title: «Skills and Expertise»
		,`[data-test='Expertise'] h5`
		// 2024-12-25 Titles like: «Full Stack Development Deliverables»
		,`[data-test='Expertise'] > [class*='grid-container'] > div:has(> .skills-list) > strong`
		,`[data-test='Features'] .description`
		,`[data-test='Features'] > ul.features > li::after`
		,`[data-test='Features'] [data-test='UpCIcon']`
		,`[data-test='FlagButton']`
		,`[data-test='Qualifications'] [data-cy='english']`
		// 2024-12-25 The title: «Preferred qualifications»
		,`[data-test='Qualifications'] h5`
		// 2024-12-25 The title: «You will be asked to answer the following questions when submitting a proposal:»
		,`[data-test='Questions'] > p`
		// 2024-12-25 The title: «Project Type:»
		,`[data-test='Segmentations'] li > :first-child`
		,`[data-test='SpecializedProfilePrompt']`
		,`div[job-uid] > button` // 2025-09-04
		,`section.air3-card-section > section > h5` // 2025-09-04
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}, 200);
// language=CSS
GM_addStyle([
	`[data-test='Features'] > ul.features > li`
]
	 // language=Javascript
	.join(`,`) + `{display: initial !important;}`)
;
// language=CSS
GM_addStyle([
	`.job-details-content footer`
]
	 // language=Javascript
	.join(`,`) + `{position: initial !important;}`)
;
// language=CSS
GM_addStyle([
	`.air3-card-section h4`
	,`.job-details-content footer`
	,`[data-test='${aboutClient}'] div:has(> [data-test='UpCPopover'])`
	,`[data-test='${aboutClient}'] ul.features`
	,`[data-test='ConnectsAuction']`
	,`[data-test='Expertise'] .skills-list`
	,`[data-test='Questions'] li`
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
// 2025-09-04
// language=CSS
GM_addStyle(`[data-test='${aboutClient}'] {order: 1 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.air3-card-section:has(> h4) {order: 2 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.air3-card-section:has(> [data-test='Description']) {order: 3 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`[data-test='Questions'] {order: 4 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.air3-card-section:has(> [data-test='Qualifications']) {order: 5 !important;}`);
// language=CSS
GM_addStyle(`.air3-card-section {border: 0 !important; padding: 0 0.5rem !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.air3-card-section:first-of-type > div {margin-top: 0 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.air3-card-section:has(> [data-test='Description']) {margin-bottom: 0.66rem !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.air3-card-section:has(> [data-test='Segmentations']) {margin: 0.5rem 0 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`[data-test='ConnectsAuction'] {display: flex !important; gap: 1rem !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`[data-test='ConnectsAuction'] > div {margin-top: 0 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`[data-test='Description'] br {display: block !important; content: ''; height: 1px !important;}`);
// language=CSS
GM_addStyle([
	`[data-test='Description'] p`
	,`[data-test='Questions'] ol`
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
	`.air3-card-section:has(> [data-test='ConnectsAuction'])`
	,`.air3-card-section:has(> [data-test='Qualifications'])`
	,`[data-test='${aboutClient}'] ul.features`
	,`[data-test='${aboutClient}']`
	,`[data-test='Expertise'] > [class*='grid-container']`
	,`[data-test='Features'] .features`
]
	 // language=Javascript
	.join(',') + '{display: flex !important; gap: 0.5rem !important;}')
;
// 2024-12-25
// language=CSS
GM_addStyle(`[data-test='${aboutClient}'] ul.features {flex-direction: row !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`[data-test='Questions'] {font-weight: bold; margin-bottom: 0.5rem !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.qualification-items .icons {vertical-align: middle !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.qualification-items > li:has(.text-danger) {background: #ffebe6 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`:has(> [data-test='BudgetAmount']) {background: #ffebe6 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`[data-test='Features'] {margin: 0.5rem 0 0 0 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`[data-test='Bids'] h5 {font-size: 100% !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.extra-jobs-cards[class*='px-'] {padding: 0 0.5rem !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`[data-test='WorkHistory'][class*='mt-'] {border: 0 !important; margin-top: 0.5rem !important;}`);
// 2025-09-04
(() => {
	[...document.querySelectorAll(`[data-test='${aboutClient}'] .text-caption`)].forEach(i => {
		const c = i.textContent;
		const p = i.parentElement;
		const t1 = ' verified';
		const t2 = `not${t1}`;
		const hide = () => {
			// 2025-09-04
			// 1) https://g.co/gemini/share/3962b2485479
			// 2) `.remove()` does not work here: https://g.co/gemini/share/47d68d7cabd2
			p.style.setProperty('display', 'none', 'important');
		};
		if (c.endsWith(t1)) {
			hide();
			if (c.endsWith(t2)) {
				// 2025-09-04 https://g.co/gemini/share/391b5f47d03d
				const _class = 'df-not-verified';
				p.parentElement.classList.add(_class);
				const props = Object.entries({
					// language=CSS
					'color': 'red', 'content': `'${t2}'`, 'font-weight': 'bold'
				}).map(([k, v]) => `${k}: ${v} !important;`).join(' ');
				// language=CSS
				GM_addStyle(`.${_class}::before {${props}}`);
			}
		}
	});
})();