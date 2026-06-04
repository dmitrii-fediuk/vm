// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/project/list/best-matches/.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/nx/s/find-work/best-matches*
// @name Upwork / Project / List / Best Matches
// ==/UserScript==
// 2024-10-13, 2024-12-24 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
// language=CSS
const dfJobTile = `[data-test='job-tile']`; // 2026-06-04
const dfJobsFeed = `[data-test='jobs-feed']`; // 2026-06-04
const dfTabContent = `[data-test='tab-content']`; // 2026-06-04
const dfTabs = `[data-test='tabs']`; // 2026-06-04
// 2025-06-06
// 1) «Failed to execute 'appendChild' on 'Node': This node type does not support this method».
// 2) https://g.co/gemini/share/647370d4f366
setTimeout(() => {
	// language=CSS
	GM_addStyle([
		`${dfJobsFeed} > :not(${dfTabs})` // 2026-06-04
		,`${dfTabs} > :not(${dfTabContent})` // 2026-06-04
		,`:has(> ${dfJobsFeed}) > :not(${dfJobsFeed}):not(#a):not(#aa):not(#aaa):not(#aaaa)` // 2026-06-04
		,`[data-test='feed-best-match'] > :not([data-ev-label='best_match'])` // 2026-06-04
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
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2024-12-25
// language=CSS
GM_addStyle([
	`${dfJobTile}:not(#a)` // 2026-06-04
	,`${dfTabContent}` // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-05-04
// language=CSS
GM_addStyle([
]
	 // language=Javascript
	.join(',') + '{background-color: unset !important;}')
;
// 2025-03-18
// language=CSS
GM_addStyle([
	`${dfJobTile}` // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{border: 0 !important;}')
;
// 2026-06-04
// language=CSS
GM_addStyle([
	`${dfJobTile}` // 2026-06-04
]
	 // language=Javascript
	.join(',') + '{border-radius: 0 !important;}')
;
// 2024-12-25, 2025-03-18
// language=CSS
GM_addStyle('body {padding: 0.5rem !important;}');
// 2025-03-18
// language=CSS
GM_addStyle('#main article {padding: 0.25rem 0 !important;}');
// 2025-03-18
// language=CSS
GM_addStyle('[data-test="location"] {padding: 0 1rem 0 0 !important;}');
// 2024-12-25
// language=CSS
GM_addStyle('[data-test="proposals-tier"] {padding: 0.5rem 0 0 0 !important;}');
// 2025-03-18
// language=CSS
GM_addStyle('[data-test="JobTileDetails"] {display: flex; flex-direction: row; flex-wrap: wrap;}');
// 2025-03-19
// language=CSS
GM_addStyle([
	`#main p.text-body-sm` // 2025-03-19
// language=Javascript
].join(',') + `{${Object.entries({
	'font-family': 'Segoie UI'
	,'font-size': '120%'
	,'line-height': 1.2
	,'letter-spacing': '.03em' // 2026-05-04
}).map(v => `${v[0]}: ${v[1]} !important;`).join(' ')}}`);
// 2025-03-19
// language=CSS
GM_addStyle('p.text-body-sm br {display: block !important; content: ""; height: 1px !important;}');
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
			// language=CSS
			,'opacity': 0.5 // 2025-03-18
			,'position': 'absolute'
			,'z-index': 1
		}).map(([k, v]) => `${k}: ${v} !important;`).join(' ') +
	'}'
);