// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/chat/item/writing.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/ab/messages/rooms/room_*
// @name Upwork / Chat / Item / Writing
// ==/UserScript==
// 2026-01-14
// language=CSS
GM_addStyle([
	`.room-typing` // 2026-01-14
	, `[data-ev-label='wm_view_contract_action']` // 2026-01-14
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// 2026-01-14
// language=CSS
GM_addStyle([
	`#story-viewport` // 2026-01-14
	,`.room-section` // 2026-01-14
	,'.up-d-composer' // 2026-01-14
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;
// 2026-01-14
// language=CSS
GM_addStyle([
	`.input-area` // 2026-01-14
	,`.room-header` // 2026-01-14
	,`.story-inner` // 2026-01-14
	,`.up-d-composer-actions` // 2026-01-14
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;
// 2026-01-14
// language=CSS
GM_addStyle([
	//`#story-viewport` // 2026-01-14
	`.room-header` // 2026-01-14
	,`.up-d-composer-actions` // 2026-01-14
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;
// 2026-01-14
// language=CSS
GM_addStyle([
	'.up-d-composer' // 2026-01-14
]
	// language=Javascript
	.join(',') + '{' +
		// language=CSS
		['height', 'max-height', 'min-height']
			// language=Javascript
			.map(k => `${k}: unset !important;`).join(' ') +
	'}'
);
// 2026-01-14
// 2025-03-28
// Similar to:
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/grok.com.js#L89-L91
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-20/s/ChatGPT.js#L52-L54
// https://github.com/dmitrii-fediuk/vm/blob/2025-03-27/s/Claude.js#L96-L102
// language=CSS
GM_addStyle([
	`#story-viewport` // 2026-01-14
	,`.room-section` // 2026-01-14
	,'.up-d-composer' // 2026-01-14
// language=Javascript
].join(',') + `{${Object.entries({
	'display': 'block'
	,'height': 'auto'
	,'overflow': 'unset'
}).map(v => `${v[0]}: ${v[1]} !important;`).join(' ')}}`);