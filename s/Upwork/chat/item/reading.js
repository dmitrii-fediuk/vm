// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/chat/reading.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/ab/messages/rooms/room_*
// @name Upwork / Chat / Item / Reading
// ==/UserScript==
// 2024-10-13
// "Remove all visual garbage from the Upwork chat screen": https://github.com/dmitrii-fediuk/vm/issues/53
// 2025-06-10
// 1) «Failed to execute 'appendChild' on 'Node': This node type does not support this method».
// 2) https://g.co/gemini/share/647370d4f366
setTimeout(() => {
	// language=CSS
	GM_addStyle([
		`.composer-container`
		,`.desktop-layout-index`
		,`.sidebar-layout`
		,`.story-menu-section`
		,`.top-room-content`
		,`#user-top-navigation-container`
	]
		 // language=Javascript
		.join(`,`) + `{display: none !important;}`)
	;
}, 200);
// 2026-10-09
GM_addStyle([
	`.separator` // 2026-10-09
]
	.join(`,`) + `{margin: 0 !important;}`)
;
// 2026-10-09
GM_addStyle([
	`.header-timestamp` // 2026-10-09
	,`.story-inner` // 2026-10-09
]
	.join(`,`) + `{padding: 0 !important;}`)
;
// 2024-10-13
// language=CSS
GM_addStyle(`#story-viewport {height: initial !important;}`);