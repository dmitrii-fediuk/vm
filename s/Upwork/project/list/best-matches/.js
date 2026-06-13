// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/project/list/best-matches/.js
// @icon https://www.upwork.com/favicon.ico
// 2026-06-12
// @match *://www.upwork.com/nx/find-work/best-matches*
// 2026-06-04
// @match *://www.upwork.com/nx/s/find-work/best-matches*
// @name Upwork / Project / List / Best Matches
// ==/UserScript==
// 2024-10-13, 2024-12-24 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
// language=CSS
const df_C_FeedsCard = `.feeds-card`; // 2026-06-12
// language=CSS
const df_C_JobTileActions = `.job-tile-actions`; // 2026-06-13
// language=CSS
const df_C_JobTileBadges = `.job-tile-badges`; // 2026-06-12
// language=CSS
const df_DT_Country = `[data-test='client-country']`; // 2026-06-12
// language=CSS
const df_DT_FeedBestMatch = `[data-test='feed-best-match']`; // 2026-06-12
// language=CSS
const df_DT_JobFeedback = `[data-test='job-feedback']`; // 2026-06-13
// language=CSS
const df_DT_JobTileBadges = `[data-test='job-tile-badges']`; // 2026-06-12
// language=CSS
const df_DT_JobTileList = `[data-test='job-tile-list']`; // 2026-06-12
// language=CSS
const df_DT_JobType = `[data-test='job-type']`; // 2026-06-12
// language=CSS
const df_DT_PostedOn = `[data-test='posted-on']`; // 2026-06-12
// language=CSS
const dfButton = `${df_C_JobTileActions} > ${df_DT_JobFeedback} button`; // 2026-06-12
// language=CSS
const dfJobsFeed = `[data-test='jobs-feed']`; // 2026-06-04
const dfNL = `df-nl`; // 2026-06-13
// language=CSS
const dfProject = `section[data-ev-sublocation='job_feed_tile']`; // 2026-06-12
// language=CSS
const dfProject__Body = `${dfProject} > div:nth-of-type(2)`; // 2026-06-12
// language=CSS
const dfProject__Body__Row_Country = `.badge-line`; // 2026-06-12
// language=CSS
const dfProject__Header = `${dfProject} > div:nth-of-type(1)`; // 2026-06-12
// language=CSS
const dfProject__Header__Row_PostedOn = `${dfProject__Header} > div:first-of-type`; // 2026-06-12
// language=CSS
const dfPostedOnContainer = `span:has(> ${df_DT_PostedOn})`; // 2026-06-12
// language=CSS
const dfPostedOnContainer_Parent = `:has(> span > ${df_DT_PostedOn})`; // 2026-06-12
// language=CSS
const dfTabContent = `[data-test='tab-content']`; // 2026-06-04
// language=CSS
const dfTabs = `[data-test='tabs']`; // 2026-06-04
// language=CSS
const dfText = `[data-test='job-description-text']`; // 2026-06-12
// language=CSS
const dfTitle = `h3.job-tile-title`; // 2026-06-12
// language=CSS
const df_Ev_BestMatch = `[data-ev-label='best_match']`; // 2026-06-04
// 2025-06-06
// 1) «Failed to execute 'appendChild' on 'Node': This node type does not support this method».
// 2) https://g.co/gemini/share/647370d4f366
setTimeout(() => {
	// language=CSS
	GM_addStyle([
		`${dfJobsFeed} > :not(${dfTabs})` // 2026-06-04
		,`${dfPostedOnContainer_Parent} > :not(${dfPostedOnContainer})` // 2026-06-12
		,`${dfProject__Body__Row_Country} .air3-icon` // 2026-06-12
		,`${dfProject__Body__Row_Country} > :not(${df_DT_Country})` // 2026-06-12
		,`${dfProject__Body__Row_Country} ~ *` // 2026-06-12
		,`${dfProject__Body}:not(:has(${dfText}))` // 2026-06-13 I have already skipped this project
		,`${dfProject__Header__Row_PostedOn} > .text-caption > span:not(${dfPostedOnContainer})` // 2026-06-12
		,`${dfTabs} > :not(${dfTabContent}):not(#a)` // 2026-06-04
		,`${df_C_FeedsCard} > :not(:has(> ${df_DT_FeedBestMatch}))` // 2026-06-12
		,`${df_C_JobTileActions} > :not(${df_DT_JobFeedback})` // 2026-06-04
		,`${df_C_JobTileBadges} > :not([data-test='applied-badge'])` // 2026-06-12
		,`${df_DT_FeedBestMatch} > :not(:has(> ${df_DT_JobTileList}))` // 2026-06-12
		,`.air3-popper-container` // 2026-06-13
		,`.featured-tag:not(#a)` // 2026-06-04
		,`.impression-tracker` // 2026-06-04
		,`.job-tile-bonus-connects-tag-wrap:not(#a)` // 2026-06-04
		,`:has(> ${dfJobsFeed}) > :not(${dfJobsFeed}):not(#a1):not(#a2)` // 2026-06-04
		,`:has(> ${df_DT_JobTileList}) > :not(${df_DT_JobTileList})` // 2026-06-12
		,`:has(> ${df_DT_JobType}) > :not(${df_DT_JobType})` // 2026-06-12
		,`:has(> [data-test='menu-container'])` // 2026-06-04
		,`:has(> [data-test='token-container'])` // 2026-06-12
		,`:has(> div > [data-test='proposals-tier']) > :not(span:first-of-type)` // 2026-06-04
		,`[data-test='page-content-section'] > :not(:has(${df_C_FeedsCard}))` // 2026-06-12
		,`button[data-ev-label='job_feed_feedback_expand']` // 2026-06-13
		,df_Ev_BestMatch // 2026-06-12
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}, 400);
// 2026-06-12
// language=CSS
GM_addStyle([
	dfProject__Header // 2026-06-13
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: initial !important;}')
;
// 2024-12-25
// language=CSS
GM_addStyle([
	`${df_DT_JobTileBadges}:not(#a)` // 2026-06-04
	,`${df_Ev_BestMatch}:not(#a)` // 2026-06-04
	,`.air3-badge` // 2026-06-13
	,`.app-frame` // 2026-06-12
	,`.text-caption` // 2026-06-13
	,`:has(> .job-description)` // 2026-06-13
	,dfProject__Body__Row_Country // 2026-06-12
	,dfProject__Header // 2026-06-12
	,dfProject__Header__Row_PostedOn // 2026-06-12
	,dfText // 2026-06-04
	,df_C_FeedsCard // 2026-06-12
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2024-12-25
// language=CSS
GM_addStyle([
	`${dfProject}:not(#a)` // 2026-06-04
	,`${df_DT_JobTileBadges}` // 2026-06-04
	,dfPostedOnContainer_Parent // 2026-06-12
	,dfTabContent // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-06-12
// language=CSS
GM_addStyle([
	`.air3-card-hover` // 2026-06-13
	,`.air3-card-visited` // 2026-06-13
	//,`:hover:not(.air3-menu-item)` // 2026-05-04
	,dfPostedOnContainer_Parent // 2026-06-12
]
	 // language=Javascript
	.join(',') + '{background-color: initial !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
	dfProject // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	dfProject // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	`.label-small` // 2026-06-04
	,`.text-caption` // 2026-06-13
]
	 // language=Javascript
	.join(',') + '{color: rgba(36, 46, 66, 0.8) !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	// language=Javascript
	dfTitle // 2026-06-04
].join(',') + `{${Object.entries({
	'font-family': 'Segoie UI'
}).map(v => `${v[0]}: ${v[1]} !important;`).join(' ')}}`);
// 2026-06-13
// language=CSS
GM_addStyle([
	`.air3-badge` // 2026-06-13
	,`.text-caption` // 2026-06-13
]
	 // language=Javascript
	.join(',') + '{font-size: unset !important;}')
;
// 2026-06-13
// language=CSS
GM_addStyle([
	dfPostedOnContainer_Parent // 2026-06-13
]
	 // language=Javascript
	.join(',') + '{font-size: 90% !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	`.label-small` // 2026-06-04
	,dfPostedOnContainer_Parent // 2026-06-12
]
	 // language=Javascript
	.join(',') + '{font-weight: unset !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	`${dfProject}:not(#a)` // 2026-06-04
	,`${dfProject__Header} > div` // 2026-06-04
	,`:has(> ${df_DT_JobTileBadges}):not(#a)` // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{gap: 0 !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	`${df_Ev_BestMatch}:not(#a)` // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{gap: .5rem !important;}')
;
// 2026-06-12
// language=CSS
GM_addStyle([
	`.air3-line-clamp` // 2026-06-12
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-height', 'height', 'min-height']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2026-06-13
// language=CSS
GM_addStyle([
	`.air3-badge:not(#a)` // 2026-06-13
]
	 // language=Javascript
	.join(',') + '{line-height: unset !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	`.job-tile-actions button` // 2026-06-13
	,df_DT_JobTileBadges // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{opacity: .5 !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	`.air3-line-clamp` // 2026-06-12
]
	 // language=Javascript
	.join(',') + '{-webkit-line-clamp: none !important;}')
;
// 2026-06-12
// language=CSS
GM_addStyle([
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['max-width', 'width', 'min-width']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2024-12-25, 2025-03-18
// language=CSS
GM_addStyle('body {padding: .5rem !important;}');
// 2026-06-13
// language=CSS
GM_addStyle(`.${dfNL} {margin: .5rem 0 !important;}`);
// 2026-06-13
// language=CSS
GM_addStyle(`${df_DT_JobTileList} {display: flex; flex-direction: column; gap: 1rem;}`);
// 2026-06-13
// language=CSS
GM_addStyle(`${dfProject__Header__Row_PostedOn} {column-gap: .5rem;}`);
// 2026-06-12 https://gemini.google.com/share/63decfb2de6f
// language=CSS
GM_addStyle(`${dfProject__Body} {
	column-gap: .5rem; display: flex; flex-direction: row; flex-wrap: wrap;
}`);
// 2026-06-12
// language=CSS
GM_addStyle(`${dfProject__Body} > :not(${dfProject__Body__Row_Country}) {order: 1 !important;}`);
// 2026-06-12 https://gemini.google.com/share/63decfb2de6f
// language=CSS
GM_addStyle(`${dfProject__Body} > :not(${dfProject__Body__Row_Country}, :has(${df_DT_JobType})) {
	flex-basis: 100% !important;
}`);
// 2026-06-12
// language=CSS
//GM_addStyle(`${dfProject__Body__Row_Country}:not(#a) {order: 1 !important;}`);
// 2026-06-04
// language=CSS
GM_addStyle(`${dfTitle} {font-size: 1.25rem !important;}`);
// 2026-06-04
// language=CSS
GM_addStyle([
	dfText // 2026-06-04
// language=Javascript
].join(',') + `{${Object.entries({
	'font-family': 'Segoie UI'
	,'font-size': '120%'
	,'line-height': 1.2
	,'letter-spacing': '.03em' // 2026-05-04
}).map(v => `${v[0]}: ${v[1]} !important;`).join(' ')}}`);
// 2024-12-28
// language=CSS
GM_addStyle([
	`:has(> .job-tile-actions)` // 2026-06-13
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		Object.entries({
			'display': 'block'
			// language=Javascript
			,'left': '60%'
			,'margin-top': '0.5rem'
			,'position': 'absolute'
			,'z-index': 1
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);
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
// 2026-06-04
// language=CSS
modify(dfText, i => {// language=Javascript
	i.innerHTML = i.textContent
		// 2025-03-19 https://stackoverflow.com/a/784547
		// 2026-06-13 https://gemini.google.com/share/8660a99264ca
		.replace(/\r?\n|\r|<br>/g, '<br/>')
		// 2026-06-13 https://gemini.google.com/share/bceb5af402b2
		.replace(/(?:<br\/>){2,}/g, `<div class='${dfNL}'></div>`)
	;
});
// 2026-06-12
// language=CSS
modify(df_DT_Country, i => {// language=Javascript
	i.innerHTML = i.textContent.trim().replace('&nbsp;', '');
});
(() => {
	const stopEvent = e => {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
	};
	// 2025-06-06
	const hideProject = a => {
		const e = a.querySelector(`${dfButton} svg`);
		if (e) {
			// 2025-06-06
			// 1) https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
			// 2) https://g.co/gemini/share/689b763bc005
			e.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true}));
		}
	};
	const openProject = b => {
		const l = b.closest(dfProject)?.querySelector('h3.job-tile-title > a');
		if (l) {
			// 2025-01-04
			// «https://www.upwork.com/jobs/Assisted-Enhancements-for-Lightweight-App_~021875527601805661470/?referrer_url_path=%2Fnx%2Fsearch%2Fjobs» → «https://www.upwork.com/jobs/~021875527601805661470»
			const u = new URL(l.href);
			const m = u.pathname.match(/_~(\d+)(?=\/|$)/);
			window.open(`${u.origin}/jobs/~${m[1]}`, '_blank');
		}
	};
	(() => {
		let x = 0, y = 0, p;
		const updateProject = () => {p = document.elementFromPoint(x, y)?.closest(dfProject);};
		document.addEventListener('mousemove', e => {
			x = e.clientX; y = e.clientY;
			updateProject();
		}, true);
		document.addEventListener('scroll', updateProject, true);
		document.addEventListener('keydown', e => {
			const i = e.target;
			if ('Enter' === e.key) {
				stopEvent(e);
				openProject(p);
			}
			// 2025-06-06
			else if ('Escape' === e.key) {
				stopEvent(e);
				hideProject(p);
			}
		}, true);
	})();
	document.addEventListener('click', e => {
		const i = e.target;
		const p = i.closest(dfProject);
		if (p) {
			if (!i.classList.contains('air3-menu-item')) {
				if (!i.closest(df_DT_JobFeedback)) {
					stopEvent(e);
					openProject(p);
				}
				else {
					setTimeout(() => {
						// 2026-06-13 https://gemini.google.com/share/a01aa50e5f98
						const ii = p.querySelector(`.job-feedback ul.air3-menu-list`).children;
						const i = [...ii].find(i => 'Just not interested' === i.textContent.trim());
						if (i) {
							i.click();
						}
						else {
							//debugger;
						}
					// 2025-06-06
					// Previously, I had `50` here.
					// Now I need `500` for `hideProject()` to work.
					}, 500);
				}
			}
		}
	}, true);
})();