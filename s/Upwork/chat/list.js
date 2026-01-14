// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/chat/list.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/ab/messages/rooms
// @name Upwork / Chat / List
// ==/UserScript==
// 2026-01-14
setTimeout(() => {
	// language=CSS
	GM_addStyle([
		`.rooms-panel__list-wrapper` // 2026-01-14
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}, 200);
// 2026-01-14
// language=CSS
GM_addStyle([
	`.rooms-panel` // 2026-01-14
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2026-01-14
// language=CSS
GM_addStyle([
	`.rooms-panel-room-list` // 2026-01-14
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;