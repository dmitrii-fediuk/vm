// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Upwork/chat-reading.js
// @icon https://www.upwork.com/favicon.ico
// @match *://www.upwork.com/*
// @name Upwork / Chat reading
// ==/UserScript==
// 2024-10-13 "Remove all visual garbage from the Upwork chat screen": https://github.com/dmitrii-fediuk/vm/issues/53
// language=CSS
GM_addStyle('#story-viewport {height: initial !important;}');
// language=CSS
GM_addStyle('.desktop-room-layout {margin: 0 !important;}');
// language=CSS
GM_addStyle([
	'.composer-container'
	,'.desktop-layout-header'
	,'.desktop-layout-index'
	,'.sidebar-layout'
	,'.story-menu-section'
	,'.top-room-content'
	,'#user-top-navigation-container'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;