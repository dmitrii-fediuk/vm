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
	`.room-header` // 2026-01-14
	,`.up-d-composer-actions` // 2026-01-14
]
	 // language=Javascript
	.join(',') + '{height: unset !important;}')
;