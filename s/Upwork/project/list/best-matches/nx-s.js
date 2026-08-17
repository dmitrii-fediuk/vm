// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/project/list/best-matches/.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/nx/s/find-work/best-matches*
// @name Upwork / Project / List / Best Matches / nx-s
// ==/UserScript==
// 2024-10-13, 2024-12-24 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
// language=CSS
const df_C_JobTileActions = `.job-tile-actions`; // 2026-06-17
// language=CSS
const df_DT_Badges = `[data-test='job-tile-badges']`; // 2026-06-04
// language=CSS
const df_DT_Badge = `[data-test^='badge-']`; // 2026-08-17
// language=CSS
const df_DT_JobTile = `[data-test='job-tile']`; // 2026-06-04
// language=CSS
const df_DT_JobsFeed = `[data-test='jobs-feed']`; // 2026-06-04
// language=CSS
const df_DT_ProposalsTier = `[data-test='proposals-tier']`; // 2026-08-17
// language=CSS
const df_DT_TabContent = `[data-test='tab-content']`; // 2026-06-04
// language=CSS
const df_DT_Tabs = `[data-test='tabs']`; // 2026-06-04
// language=CSS
const df_Ev_BestMatch = `[data-ev-label='best_match']`; // 2026-06-04
// 2026-06-04
// language=CSS
const df_Row_Country = `${df_DT_JobTile} > :has(
	> div > [data-test='icon'] > svg > path[d^='M20 10c0 4.99']
)`;
// language=CSS
const df_Row_Header = `${df_DT_JobTile} > :has(> div > div > h3[data-test='job-title'])`; // 2026-06-04
// language=CSS
const df_Row_Header_3 = `${df_Row_Header} > div:nth-of-type(2) > div:last-of-type`; // 2026-06-04
// language=CSS
const df_Stats = `div:has(> :is(div, span) > ${df_DT_ProposalsTier})`; // 2026-08-17
// language=CSS
const df_Stats_Proposals = df_DT_ProposalsTier; // 2026-08-17
// language=CSS
const df_Stats_Delimiter = `${df_Stats} > span:nth-child(2)`; // 2026-08-17
// language=CSS
const df_Stats_Time = `${df_Stats} > span:first-of-type`; // 2026-08-17
// 2026-06-04
const dfButton = `button[data-ev-label='job_feedback_button']`; // 2026-06-04
// language=CSS
const dfText = `p.line-clamp`; // 2026-06-04
// language=CSS
const dfTitle = `[data-test='job-title']`; // 2026-06-04
// 2025-06-06
// 1) «Failed to execute 'appendChild' on 'Node': This node type does not support this method».
// 2) https://g.co/gemini/share/647370d4f366
setTimeout(() => {
	// language=CSS
	GM_addStyle([
		`#user-footer-microapp-app-container` // 2026-08-17
		,`${df_DT_JobsFeed} > :not(${df_DT_Tabs})` // 2026-06-04
		,`${df_DT_Tabs} > :not(${df_DT_TabContent}):not(#a)` // 2026-06-04
		,`${df_C_JobTileActions} > :not([data-test='job-feedback'])` // 2026-06-04
		,`${df_Row_Country} > :not(:last-child):not(#a)` // 2026-06-04
		,`${df_Row_Country} [data-test='icon']` // 2026-06-04
		,`${df_Row_Header_3} > :not(:first-child)` // 2026-06-04
		,`.featured-tag:not(#a)` // 2026-06-04
		,`.fluid-chip-group-scroll` // 2026-08-17
		,`.impression-tracker` // 2026-06-04
		,`.job-tile-bonus-connects-tag-wrap:not(#a)` // 2026-06-04
		,`.job-tile-toggle` // 2026-06-16
		,`:has(> ${df_DT_JobsFeed}) > :not(${df_DT_JobsFeed}):not(#a1):not(#a2)` // 2026-06-04
		,`:has(> ${df_DT_ProposalsTier}) > :not(${df_DT_ProposalsTier})` // 2026-08-17 «Proposals:»
		,`:has(> [data-test='menu-container'])` // 2026-06-04
		,`[data-test='feed-best-match'] > :not(${df_Ev_BestMatch})` // 2026-06-04
		,`[data-test='feedback-label']` // 2026-06-16
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}, 400);
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: initial !important;}')
;
// 2024-12-25
// language=CSS
GM_addStyle([
	`${df_DT_Badges}:not(#a)` // 2026-06-04
	,`${df_Ev_BestMatch}:not(#a)` // 2026-06-04
	,`[class*=mb-]:not(#a)` // 2026-08-17
	,`[class*=mt-]:not(#a)` // 2026-08-17
	,`[class*=mx-]:not(#a)` // 2026-08-17
	,`[class*=my-]:not(#a)` // 2026-08-17
	,dfText // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2024-12-25
// language=CSS
GM_addStyle([
	`${df_DT_Badges}` // 2026-06-04
	,`${df_DT_JobTile}:not(#a)` // 2026-06-04
	,`[class*=pb-]:not(#a)` // 2026-08-17
	,`[class*=pt-]:not(#a)` // 2026-08-17
	,`[class*=px-]:not(#a)` // 2026-08-17
	,`[class*=py-]:not(#a)` // 2026-08-17
	,df_DT_TabContent // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-05-04
// language=CSS
GM_addStyle([
	df_DT_Badge // 2026-08-17
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
	df_DT_JobTile // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	df_DT_JobTile // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2026-08-17
// language=CSS
GM_addStyle([
	df_DT_Badge // 2026-08-17
]
	 // language=Javascript
	.join(',') + '{color: initial !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	//`.label-small` // 2026-06-04
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
// 2026-06-04
// language=CSS
GM_addStyle([
	`.label-small` // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{font-weight: unset !important;}')
;
// 2026-08-17
// language=CSS
GM_addStyle([
	df_Stats // 2026-08-17
	//`${df_DT_Badge}:not(#a)` // 2026-08-17
]
	 // language=Javascript
	.join(',') + '{font-weight: bold !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	`${df_DT_JobTile}:not(#a)` // 2026-06-04
	,`${df_Row_Header} > div` // 2026-06-04
	,`:has(> ${df_DT_Badges}):not(#a)` // 2026-06-04
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
// 2026-06-04
// language=CSS
GM_addStyle([
	//df_DT_Badges // 2026-06-04
	//,df_C_JobTileActions // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{opacity: .5 !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	dfText // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{-webkit-line-clamp: none !important;}')
;
// 2024-12-25, 2025-03-18
// language=CSS
GM_addStyle('body {padding: 0.5rem !important;}');
// 2026-06-04
// language=CSS
GM_addStyle(`${df_DT_JobTile} > * {order: 3 !important;}`);
// 2026-06-04
// language=CSS
GM_addStyle(`${df_Row_Header} {order: 1 !important;}`);
// 2026-06-04
// language=CSS
GM_addStyle(`${df_Row_Country} {order: 2 !important;}`);
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
// 2025-09-06 It still does not work for an unknown reason.
// 2026-06-04
// language=CSS
GM_addStyle(`${dfText} br {
	content: '' !important;
	display: block !important;
	height: 1px !important;
}`);
// 2026-06-17
if (true) {
	// language=CSS
	GM_addStyle(`${df_C_JobTileActions}:not(#a) {display: none !important;}`);
}
// 2026-06-17 For testing
else {
	// 2024-12-28
	// language=CSS
	GM_addStyle([
		df_C_JobTileActions
	]
		// language=Javascript
		.join(',') + '{' +
			// language=CSS
			Object.entries({
				'display': 'block'
				// language=Javascript
				,'left': '60%'
				,'margin-top': '.5rem'
				,'position': 'absolute'
				,'z-index': 1
			}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
		'}'
	);
}
// 2025-09-05
// 1) https://g.co/gemini/share/9776258b5353
// 2) https://g.co/gemini/share/fdb2b22cbe50
const modify = (s, action) => {
	s = !Array.isArray(s) ? s : s.join(','); // 2026-08-09 https://share.gemini.google/tOXOcu2TdlcM
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
	// 2025-03-19
	// 1) https://stackoverflow.com/a/784547
	// 2.1) https://claude.ai/chat/5d359891-1f1d-400f-bc3b-e8b30fa92867
	// 2.2) https://chatgpt.com/c/67d9e839-2800-8003-9a50-5a9edd88c3a2
	i.innerHTML = i.textContent.replace(/(?:\r\n|\r|\n)/g, '<br/>');
});
// 2026-08-18
modify(df_Stats_Delimiter, i => {i.innerHTML = '      ';});
// 2026-08-18
modify(df_Stats_Proposals, i => {
	i.innerHTML = i.textContent.trim()
		.replace(' to ', '-')
		.replace('5-10', '5')
		.replace('10-15', '10')
		.replace('20-50', '20')
		.replace('+', '')
		.replace('Fewer than', '<')
	;
});
// 2026-08-18
modify(df_Stats_Time, i => {
	i.innerHTML = i.textContent.trim()
		.replace('Posted ', '')
		.replace(' ago', '')
		.replace('days', 'd')
		.replace('hours', 'h')
		.replace('minutes', 'm')
		.replace('weeks', 'w')
		.replace('yesterday', '1 d')
	;
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
		const p = b.closest(df_DT_JobTile);
		if (p) {
			const i = p.querySelector('.impression-tracker');
			if (i) {
				const v = i.getAttribute('data-ev-opening_uid');
				window.open(`https://www.upwork.com/jobs/~02${v}`, '_blank');
			}
		}
	};
	(() => {
		let x = 0, y = 0, p;
		const updateProject = () => {
			p = document.elementFromPoint(x, y)?.closest(df_DT_JobTile);
		};
		// 2026-06-16 https://gemini.google.com/share/720476d8112b
		['mousemove', 'mouseenter'].forEach(i => {
			document.addEventListener(i, e => {
				x = e.clientX; y = e.clientY;
				updateProject();
			}, true);
		});
		document.addEventListener('scroll', updateProject, true);
		document.addEventListener('keydown', e => {
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
		const menuItemClass = 'ngm-menu-item';
		if (!i.classList.contains(menuItemClass) && e.target.closest(df_DT_JobTile)) {
			const downBtn = i.closest(dfButton);
			if (!downBtn) {
				stopEvent(e);
				openProject(e.target);
			}
			else {
				setTimeout(() => {
					const allItems = document.querySelectorAll('.' + menuItemClass);
					const i = [...allItems].find(i => 'Just not interested' === i.textContent.trim());
					if (i) {
						i.click();
					}
					else {
						//debugger;
					}
				}, 100);
			}
		}
	}, true);
})();