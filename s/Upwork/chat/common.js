// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/chat/common.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/ab/messages/rooms
// @match *://www.upwork.com/ab/messages/rooms/room_*
// @name Upwork / Chat / Common
// ==/UserScript==
// 2026-01-14
setTimeout(() => {
	// language=CSS
	GM_addStyle([
		`.desktop-layout-header` // 2026-01-14
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}, 200);
// 2026-01-14
// language=CSS
GM_addStyle([
	`.desktop-room-layout` // 2026-01-14
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;