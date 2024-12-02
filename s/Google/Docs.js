// ==UserScript==
// @author Dmitrii Fediuk (https://upwork.com/fl/mage2pro)
// @grant GM_addStyle
// @homepageURL https://github.com/dmitrii-fediuk/vm/blob/main/s/Google/Docs.js
// @icon https://ssl.gstatic.com/docs/documents/images/kix-favicon-2023q4.ico
// @match *://docs.google.com/*
// @name Google / Docs
// ==/UserScript==
// 2024-12-02 "Improve Google Docs": https://github.com/dmitrii-fediuk/vm/issues/72
// language=CSS
GM_addStyle([
	'.docs-titlebar-buttons'
	,'.left-sidebar-container'
]
	 // language=Javascript
	.join(',') + '{display: none !important;}')
;
// language=CSS
//GM_addStyle('.kix-rotatingtilemanager {left: 0 !important;}');
// language=CSS
GM_addStyle('.left-sidebar-container {width: 0 !important;}');

