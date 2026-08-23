// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/notifications.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/ab/notifications/
// @name Upwork / Notifications
// ==/UserScript==
// 2026-08-23 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
// 2025-06-10
// 1) «Failed to execute 'appendChild' on 'Node': This node type does not support this method».
// 2) https://g.co/gemini/share/647370d4f366
setTimeout(() => {
	// language=CSS
	GM_addStyle([
		`.air3-tabs-header` // 2026-08-23
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}, 200);
// 2026-08-23
// language=CSS
GM_addStyle([
	`.notification-row` // 2026-08-23
	,`[class*=mb-]` // 2026-08-23
	,`[class*=mt-]` // 2026-08-23
	,`[class*=mx-]` // 2026-08-23
	,`[class*=my-]` // 2026-08-23
	,`hr` // 2026-08-23
]
	 // language=Javascript
	.join(',') + '{margin: 0 !important;}')
;
// 2026-08-23
// language=CSS
GM_addStyle([
	`ul.notifications-list > li` // 2026-08-23
]
	 // language=Javascript
	.join(',') + '{margin: .5rem 0 !important;}')
;
// 2026-08-23
// language=CSS
GM_addStyle([
	`.air3-tab-content` // 2026-08-23
	,`.notification-row` // 2026-08-23
	,`[class*=pb-]` // 2026-08-23
	,`[class*=pt-]` // 2026-08-23
	,`[class*=px-]` // 2026-08-23
	,`[class*=py-]` // 2026-08-23
]
	 // language=Javascript
	.join(',') + '{padding: 0 !important;}')
;