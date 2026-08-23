// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/common/main-menu/0.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/*
// @name Upwork / Common / Main Menu / 0
// ==/UserScript==
// 2026-08-23 "Improve the Upwork appearance": https://github.com/dmitrii-fediuk/vm/issues/52
if (['/freelancers/mage2pro'].includes(location.pathname)) {
	return;
}
// 2026-08-23
// 1) «Failed to execute 'appendChild' on 'Node': This node type does not support this method».
// 2) https://g.co/gemini/share/647370d4f366
setTimeout(() => {
	// language=CSS
	GM_addStyle([
		`#user-footer-microapp-app-container` // 2026-08-23
		,`.ng-sidebar-layout-wrapper` // 2026-08-23
	]
		 // language=Javascript
		.join(',') + '{display: none !important;}')
	;
}, 200);
// 2026-08-23
// language=CSS
GM_addStyle([
	`.layout:has(> .main-content-container)` // 2026-08-23
]
	 // language=Javascript
	.join(',') + '{display: block !important;}')
;