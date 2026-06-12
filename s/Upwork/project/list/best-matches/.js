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
const df_C_JobTileBadges = `.job-tile-badges`; // 2026-06-12
// language=CSS
const df_DT_Country = `[data-test='client-country']`; // 2026-06-12
// language=CSS
const df_DT_FeedBestMatch = `[data-test='feed-best-match']`; // 2026-06-12
// language=CSS
const df_DT_JobTileBadges = `[data-test='job-tile-badges']`; // 2026-06-12
// language=CSS
const df_DT_JobTileList = `[data-test='job-tile-list']`; // 2026-06-12
// language=CSS
const df_DT_JobType = `[data-test='job-type']`; // 2026-06-12
// language=CSS
const df_DT_PostedOn = `[data-test='posted-on']`; // 2026-06-12
// language=CSS
const dfJobsFeed = `[data-test='jobs-feed']`; // 2026-06-04
// language=CSS
const dfPost = `section[data-ev-sublocation='job_feed_tile']`; // 2026-06-12
// language=CSS
const dfPost_Header = `${dfPost} > div:nth-of-type(1)`; // 2026-06-12
// language=CSS
const dfPost_Body = `${dfPost} > div:nth-of-type(2)`; // 2026-06-12
// language=CSS
const dfPostedOnContainer = `span:has(> ${df_DT_PostedOn})`; // 2026-06-12
// language=CSS
const dfPostedOnContainer_Parent = `:has(> span > ${df_DT_PostedOn})`; // 2026-06-12
// language=CSS
const dfTabContent = `[data-test='tab-content']`; // 2026-06-04
// language=CSS
const dfTabs = `[data-test='tabs']`; // 2026-06-04
// language=CSS
// const dfTitle = `[data-test='job-title']`; // 2026-06-04
// language=CSS
const dfTitle = `h3.job-tile-title`; // 2026-06-12
// language=CSS
const df_Ev_BestMatch = `[data-ev-label='best_match']`; // 2026-06-04
// language=CSS
const df_Row_Country = `.badge-line`; // 2026-06-12
// language=CSS
const df_Row_Header = `${dfPost} > :has(${dfTitle})`; // 2026-06-04
// language=CSS
const df_Row_Header_1 = `${df_Row_Header} > div:first-of-type`; // 2026-06-12
// language=CSS
//const df_Row_Header_3 = `${df_Row_Header} > div > div:last-of-type`; // 2026-06-04
// language=CSS
const df_Row_Header_3 = `${df_Row_Header} > div > div:nth-of-type(3)`; // 2026-06-12
// 2026-06-04
const dfButton = `button[data-ev-label='job_feedback_button']`; // 2026-06-04
// language=CSS
const dfText = `[data-test='job-description-text']`; // 2026-06-12
// 2025-06-06
// 1) «Failed to execute 'appendChild' on 'Node': This node type does not support this method».
// 2) https://g.co/gemini/share/647370d4f366
setTimeout(() => {
	// language=CSS
	GM_addStyle([
		`${dfJobsFeed} > :not(${dfTabs})` // 2026-06-04
		,`${dfPostedOnContainer_Parent} > :not(${dfPostedOnContainer})` // 2026-06-12
		,`${dfTabs} > :not(${dfTabContent}):not(#a)` // 2026-06-04
		,`${df_C_FeedsCard} > :not(:has(> ${df_DT_FeedBestMatch}))` // 2026-06-12
		,`${df_C_JobTileBadges} > :not([data-test='applied-badge'])` // 2026-06-12
		,`${df_DT_FeedBestMatch} > :not(:has(> ${df_DT_JobTileList}))` // 2026-06-12
		,`${df_Row_Country} > :not(${df_DT_Country})` // 2026-06-12
		,`${df_Row_Country} [data-test='icon']` // 2026-06-04
		,`${df_Row_Country} ~ *` // 2026-06-12
		,`${df_Row_Header_1} > .text-caption > span:not(${dfPostedOnContainer})` // 2026-06-12
		,`.featured-tag:not(#a)` // 2026-06-04
		,`.impression-tracker` // 2026-06-04
		,`.job-tile-actions > :not([data-test='job-feedback'])` // 2026-06-04
		,`.job-tile-bonus-connects-tag-wrap:not(#a)` // 2026-06-04
		,`:has(> ${dfJobsFeed}) > :not(${dfJobsFeed}):not(#a1):not(#a2)` // 2026-06-04
		,`:has(> ${df_DT_JobTileList}) > :not(${df_DT_JobTileList})` // 2026-06-12
		,`:has(> ${df_DT_JobType}) > :not(${df_DT_JobType})` // 2026-06-12
		,`:has(> [data-test='menu-container'])` // 2026-06-04
		,`:has(> [data-test='token-container'])` // 2026-06-12
		,`:has(> div > [data-test='proposals-tier']) > :not(span:first-of-type)` // 2026-06-04
		,`[data-test='page-content-section'] > :not(:has(${df_C_FeedsCard}))` // 2026-06-12
		,df_Ev_BestMatch // 2026-06-12
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}, 400);
// 2026-06-12
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2026-06-12
// language=CSS
GM_addStyle([
	dfPost_Body // 2026-06-12
// language=Javascript
].join(',') + `{${Object.entries({
	'display': 'flex'
	,'flex-direction': 'column'
}).map(v => `${v[0]}: ${v[1]} !important;`).join(' ')}}`);
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
	,`.app-frame` // 2026-06-12
	,df_C_FeedsCard // 2026-06-12
	,df_Row_Country // 2026-06-12
	,dfText // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2024-12-25
// language=CSS
GM_addStyle([
	`${df_DT_JobTileBadges}` // 2026-06-04
	,`${dfPost}:not(#a)` // 2026-06-04
	,dfTabContent // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-06-12
// language=CSS
GM_addStyle([
	dfPostedOnContainer_Parent // 2026-06-12
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
	dfPost // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	dfPost // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	`.label-small` // 2026-06-04
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
	,dfPostedOnContainer_Parent // 2026-06-12
]
	 // language=Javascript
	.join(',') + '{font-weight: unset !important;}')
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
// 2026-06-04
// language=CSS
GM_addStyle([
	`${dfPost}:not(#a)` // 2026-06-04
	,`${df_Row_Header} > div` // 2026-06-04
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
// 2026-06-04
// language=CSS
GM_addStyle([
	`.job-tile-actions` // 2026-06-04
	,`.job-tile-toggle` // 2026-06-04
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
GM_addStyle('body {padding: 0.5rem !important;}');
// 2026-06-12
// language=CSS
GM_addStyle(`${dfPost_Body} > * {order: 2 !important;}`);
// 2026-06-12
// language=CSS
GM_addStyle(`${df_Row_Country}:not(#a) {order: 1 !important;}`);
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
	// 2025-03-19
	// 1) https://stackoverflow.com/a/784547
	// 2.1) https://claude.ai/chat/5d359891-1f1d-400f-bc3b-e8b30fa92867
	// 2.2) https://chatgpt.com/c/67d9e839-2800-8003-9a50-5a9edd88c3a2
	i.innerHTML = i.textContent.replace(/(?:\r\n|\r|\n)/g, '<br/>');
});
(() => {
	const stopEvent = e => {
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();
	};
	// 2025-06-06
	const hideArticle = a => {
		const e = a.querySelector(`${dfButton} svg`);
		if (e) {
			// 2025-06-06
			// 1) https://developer.mozilla.org/en-US/docs/Web/API/MouseEvent
			// 2) https://g.co/gemini/share/689b763bc005
			e.dispatchEvent(new MouseEvent('click', {bubbles: true, cancelable: true}));
		}
	};
	const openArticle = b => {
		const article = b.closest(dfPost);
		if (article) {
			const i = article.querySelector('.impression-tracker');
			if (i) {
				const v = i.getAttribute('data-ev-opening_uid');
				window.open(`https://www.upwork.com/jobs/~02${v}`, '_blank');
			}
		}
	};
	(() => {
		let x = 0, y = 0, article;
		const updateArticle = () => {
			article = document.elementFromPoint(x, y)?.closest(dfPost);
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
			// 2025-06-06
			else if ('Escape' === e.key) {
				stopEvent(e);
				hideArticle(article);
			}
		}, true);
	})();
	document.addEventListener('click', e => {
		const i = e.target;
		const menuItemClass = 'ngm-menu-item';
		if (!i.classList.contains(menuItemClass) && e.target.closest(dfPost)) {
			const downBtn = i.closest(dfButton);
			if (!downBtn) {
				stopEvent(e);
				openArticle(e.target);
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