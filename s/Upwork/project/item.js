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
// 2025-09-06 The previous value: «about-client-container»
const aboutClient = 'AboutClientUser';
const dfNotVerified = 'df-not-verified'; // 2025-09-05
const dfQuestions = 'df-questions'; // 2025-09-05
const dfWarning = 'df-warning'; // 2025-09-06
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
		,`.posted-on-line ~ :not(#A)` // 2025-09-04
		,`.segmentations > li > :first-child` // 2024-12-25, 2025-09-04 The title: «Project Type:»
		,`:has(> .skills-list) > strong` // 2025-09-04
		,`[data-test='${aboutClient}'] div:has([data-testid='head-title'])` // 2025-09-04
		,`[data-test='ClientActivity'] ~ section:not([data-test='Bids'])` // 2025-09-05
		,`[data-test='Description'] > strong:first-child` // 2025-09-04
		// 2024-12-25 Titles like: «Full Stack Development Deliverables»
		,`[data-test='Expertise'] > [class*='grid-container'] > div:has(> .skills-list) > strong`
		// 2025-09-06
		,`[data-test='Features'] .air3-icon:not([data-cy='clock-hourly'], [data-cy='fixed-price'])`
		,`[data-test='Features'] .description` // 2025-09-04
		,`[data-test='Features'] li::after` // 2025-09-04
		,`[data-test='Features'] li:has(#featured-job)` // 2025-09-04
		,`[data-test='FlagButton']`
		,`[data-test='Qualifications'] :has(> .qualification-items:empty)` // 2025-09-05
		,`[data-test='Qualifications'] [data-cy='english']`
		,`[data-test='SpecializedProfilePrompt']`
		,`[data-testid='buyer-rating']` // 2025-09-04
		,`div[job-uid] > button` // 2025-09-04
		,`li:has(> a[href*='/att/download/openings/']) > .air3-icon` // 2025-09-05
		,`section :has(> .illustration)` // 2025-09-05
		,`section.air3-card-section > h5` // 2025-09-04
		,`section.air3-card-section > section:not([data-test='Bids']) > h5` // 2025-09-04
		// 2024-12-25
		// The title: «You will be asked to answer the following questions when submitting a proposal:»
		// 2025-09-05
		,`.${dfQuestions} > p`
	// language=Javascript
	].join(',') + '{display: none !important;}');
}, 200);
// language=CSS
GM_addStyle([
	'.job-details-content > footer .d-flex.gap' // 2025-09-05
	,`[data-test='Features'] li` // 2025-09-04
// language=Javascript
].join(`,`) + `{display: block !important;}`);
// language=CSS
GM_addStyle([
	`.job-details-content footer`
// language=Javascript
].join(`,`) + `{position: initial !important;}`);
// language=CSS
GM_addStyle([
	// 2025-05-04
	// 1.1) https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_cascade/Specificity#the_is_not_has_and_css_nesting_exceptions
	// 1.2) https://archive.is/5HYgv#selection-10675.63-10675.172
	// 2025-09-04
	`.${dfNotVerified}:not(#A)` // 2025-09-04
	,`.${dfQuestions} li`
	,`.air3-card-section h4`
	,`.extra-jobs-cards > :not(#A)` // 2025-09-05
	,`.skills-list:not(#A)` // 2025-09-05
	,`[data-test='${aboutClient}'] div:has(> [data-test='UpCPopover'])`
	,`[data-test='${aboutClient}'] ul.features`
	,`[data-test='ConnectsAuction']`
	,`button[data-cy='jobs-in-progress-button']` // 2025-09-05
// language=Javascript
].join(',') + '{margin: 0 !important;}');
// 2025-09-05
// language=CSS
GM_addStyle([
	`.air3-card-section:not(#A)` // 2025-09-05
	,`.extra-jobs-cards` // 2025-09-05
	,`.job-details-content > footer` // 2025-09-05
// language=Javascript
].join(',') + '{padding: 0 !important;}');
// 2025-09-05
// language=CSS
GM_addStyle([
	`.air3-card-outline` // 2025-09-05
	,`.air3-card-section`
// language=Javascript
].join(',') + '{border: 0 !important;}');
// 2025-09-05
// language=CSS
GM_addStyle([
	`.${dfWarning}` // 2025-09-05
// language=Javascript
].join(`,`) + `{color: red !important;}`);
// 2025-09-05
// language=CSS
GM_addStyle([
	`.${dfWarning}` // 2025-09-05
	,`.posted-on-line` // 2025-09-05
// language=Javascript
].join(`,`) + `{font-weight: bold !important;}`);
// 2025-09-05
// language=CSS
GM_addStyle('body {margin: 0.5rem 0.5rem 0 0.5rem !important;}');
// 2024-12-24 https://chatgpt.com/c/676b1c1b-79a0-800c-a2ca-88de2346828f
// language=CSS
GM_addStyle([
	'.air3-card-sections'
// language=Javascript
].join(',') + `{${Object.entries({
	'display': 'flex'
	,'flex-direction': 'column'
}).map(v => `${v[0]}: ${v[1]} !important;`).join(' ')}}`);
// 2024-12-25
// language=CSS
GM_addStyle([
	`.air3-card-section:has(> [data-test='ClientActivity'])` // 2025-09-06
	,`.air3-card-section:has(> [data-test='ConnectsAuction'])`
	,`[data-test='${aboutClient}'] ul.features`
	,`[data-test='${aboutClient}']`
	,`[data-test='Expertise'] > [class*='grid-container']`
	,`[data-test='Features'] li:has(> [data-cy='clock-hourly'], > [data-cy='fixed-price'])` // 2025-09-06
	,`[data-test='Features'] > .features`
	,`section:has(.posted-on-line)` // 2025-09-05
// language=Javascript
].join(',') + '{display: flex !important; gap: 0.5rem !important;}');
// 2024-12-25
// language=CSS
GM_addStyle(`[data-test='ConnectsAuction'] {display: flex !important; gap: 1rem !important;}`);
// 2025-09-05
// language=CSS
GM_addStyle([
	`[data-test='${aboutClient}'] .features` // 2024-12-25
	,`section:has(.posted-on-line)` // 2025-09-05
// language=Javascript
].join(',') + '{flex-direction: row !important;}');
// 2025-09-06
// language=CSS
GM_addStyle([
	// 2025-09-06 https://g.co/gemini/share/b3ab20147335
	`.air3-card-section:has(> [data-test='ClientActivity'])`
// language=Javascript
].join(',') + '{flex-wrap: wrap !important;}');
// 2024-12-25
// language=CSS
GM_addStyle([
	'.client-activity-items'
	,'.qualification-items'
 // language=Javascript
].join(',') + '{gap: 0 !important;}');
// language=CSS
GM_addStyle([
	`.${dfQuestions} ol`
	,`[data-test='Description'] p`
// language=Javascript
].join(',') + `{${Object.entries({
	'font-family': 'Segoie UI'
	,'font-size': '140%'
	,'line-height': 1.2
}).map(v => `${v[0]}: ${v[1]} !important;`).join(' ')}}`);
// 2024-12-25
// language=CSS
GM_addStyle('.air3-card-sections > * {order: 6;}');
// 2024-12-24 https://chatgpt.com/c/676b1c1b-79a0-800c-a2ca-88de2346828f
// 2025-09-04
// language=CSS
GM_addStyle(`[data-test='${aboutClient}'] {order: 1 !important;}`);
// 2025-09-05
// language=CSS
GM_addStyle(`[data-test='Features'] {order: 2 !important;}`);
// 2024-12-25
// 2025-09-04 Title
// language=CSS
GM_addStyle(`.air3-card-section:has(> h4) {order: 3 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.air3-card-section:has(> [data-test='Description']) {order: 4 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.${dfQuestions} {order: 5 !important;}`);
// 2025-09-04
// language=CSS
GM_addStyle(`section.air3-card-section:has(.client-activity-items) {order: 6 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.air3-card-section:has(> [data-test='Qualifications']) {order: 7 !important;}`);
// 2025-09-05
// language=CSS
GM_addStyle(`li:has(> [data-cy='clock-timelog']) {order: -1 !important;}`);
// language=CSS
GM_addStyle(`.air3-card-section {padding: 0 0.5rem !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.air3-card-section:first-of-type > div {margin-top: 0 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.air3-card-section:has(> [data-test='Description']) {margin-bottom: 0.66rem !important;}`);
// 2024-12-25, 2025-09-04
// language=CSS
GM_addStyle(`.air3-card-section:has(> section > .segmentations) {margin: 0.5rem 0 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`[data-test='ConnectsAuction'] > div {margin-top: 0 !important;}`);
// 2025-09-06 It still does not work for an unknown reason.
// language=CSS
GM_addStyle(`[data-test='Description'] br {
	content: '' !important;
	display: block !important;
	height: 1px !important;
}`);
// 2025-09-06
// language=CSS
GM_addStyle(`[data-test='Expertise'] {margin-bottom: 0.5rem !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.${dfQuestions} {font-weight: bold; margin-bottom: 0.5rem !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.qualification-items .icons {vertical-align: middle !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.qualification-items > li:has(.text-danger) {background: #ffebe6 !important;}`);
// 2024-12-25, 2025-09-04
// language=CSS
GM_addStyle(`li:has(> [data-cy='clock-timelog']) {background: #ffebe6 !important;}`);
// 2025-09-05
// language=CSS
GM_addStyle(`li:has(> [data-cy='fixed-price']) {background: #ecffb3 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`[data-test='Bids'] h5 {font-size: 100% !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`.extra-jobs-cards[class*='px-'] {padding: 0 0.5rem !important;}`);
// 2025-09-05
// language=CSS
GM_addStyle(`.job-details-content > footer {margin: 0.5rem 0 !important;}`);
// 2024-12-25
// language=CSS
GM_addStyle(`[data-test='WorkHistory'][class*='mt-'] {border: 0 !important; margin-top: 0.5rem !important;}`);
// 2025-09-05
// language=CSS
GM_addStyle(`.job-details-content > footer {margin: 0.5rem 0 !important;}`);
// 2025-09-05
// 1) https://g.co/gemini/share/9776258b5353
// 2) https://g.co/gemini/share/fdb2b22cbe50
const modify = (s, action) => {
	const p = i => {
		i.matches?.(s) && action(i);
		i.querySelectorAll?.(s).forEach(action);
	};
	(new MutationObserver(mm => {
		mm.forEach(m => m.addedNodes.forEach(p));
	})).observe(document.documentElement, {childList: true, subtree: true});
	p(document.documentElement);
};
// 2025-09-05
// language=CSS
modify(`[data-test='${aboutClient}'] .text-caption`, i => {// language=Javascript
	const c = i.textContent.trim();
	const p = i.parentElement;
	const t1 = ' verified';
	const t2 = `not${t1}`;
	if (c.endsWith(t1)) {
		if (!c.endsWith(t2)) {
			p.remove();
		}
		else {
			const pp = p.parentElement;
			pp.innerHTML = t2;
			pp.classList.add(dfNotVerified, dfWarning);
		}
	}
});
// 2025-09-05
// language=CSS
modify(`.posted-on-line span`, i => {// language=Javascript
	const c = i.textContent.trim();
	const p = i.closest(`.posted-on-line`);
	p.innerHTML = c;
	// 2025-09-06 https://g.co/gemini/share/0e23a0a889b2
	p.classList.toggle(dfWarning,
		/^last (week|month|year)/.test(c)
		|| /(week|month|year)s? ago$/.test(c)
		|| (c.match(/^(\d+) days? ago$/)?.[1] > 2)
	);
});
// 2025-09-06
// language=CSS
modify(`[data-qa='client-company-profile-size']`, i => i.classList.toggle(dfWarning, // language=Javascript
	'Individual client' === i.textContent.trim()
));
// 2025-09-06
// language=CSS
modify(`[data-cy='expertise'] + strong`, i => i.classList.toggle(dfWarning, // language=Javascript
	'Expert' !== i.textContent.trim()
));
// 2025-09-05
(() => {
	[...document.querySelectorAll(
		`.job-details-card > .air3-card-sections > section > p > strong`
	)].forEach(i => {
		if (i.textContent.startsWith('You will be asked to answer')) {
			i.closest('section').classList.add(dfQuestions);
		}
	});
})();